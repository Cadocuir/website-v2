import { Cluster } from "puppeteer-cluster";
import vanillaPuppeteer, { Page } from "puppeteer";
import { addExtra } from "puppeteer-extra";
import Stealth from "puppeteer-extra-plugin-stealth";
const puppeteer = addExtra(vanillaPuppeteer);
puppeteer.use(Stealth());

export class PuppeteerCluster {
    constructor() { }

    async init() {
        if (this.initialized) return this;

        this.cluster = await Cluster.launch({
            puppeteer,
            concurrency: Cluster.CONCURRENCY_CONTEXT,
            maxConcurrency: 3,
            monitor: true,
            puppeteerOptions: {
                userDataDir: "./tmp",
                headless: false,
                executablePath: process.env.CHROME_BIN || undefined,
                args: ["--no-sandbox"],
            },
        });

        this.cluster.on("taskerror", this._taskerror);
        this.initialized = true;

        return this;
    }

    async _task(
        data,
        page,
        worker,
        callback,
    ) {
        console.log(`Worker ${worker.id} is crawling ${data}`);
        await page.goto(data, { waitUntil: "networkidle0" });
        await new Promise((resolve) => setTimeout(resolve, 10000));
        let result = null;
        try {
            await page.waitForSelector("body");
            result = await page.evaluate(() => document.documentElement.outerHTML);

        } catch (e) {
            console.log(`Error crawling ${data}: ${e.message}`);
        }

        await callback(data, result)

    }

    queue(url, callback) {
        this.cluster.queue(url, async (page) => {
            await this._task(
                page.data,
                page.page,
                page.worker,
                callback,
            );
        });
    }

    _taskerror(err, data) {
        console.log(`Error crawling ${data}: ${err.message}`);
    }

    async close() {
        if (!this.initialized) return;

        await this.cluster.close();
        this.initialized = false;
    }
}

export default new PuppeteerCluster();
