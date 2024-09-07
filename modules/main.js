import { loadFile, saveFile } from "./file.js";
import vanillaPuppeteer from 'puppeteer';
import { addExtra } from "puppeteer-extra";
import Stealth from "puppeteer-extra-plugin-stealth";
import dotenv from "dotenv"
const puppeteer = addExtra(vanillaPuppeteer);
puppeteer.use(Stealth());
dotenv.config()

const { INSTAGRAM_USER, INSTAGRAM_PASSWORD } = process.env

export const fetchInstagramLatestData = async () => {

    try {
        if (INSTAGRAM_USER == null || INSTAGRAM_PASSWORD == null) {
            throw Error("Missing env Vars INSTAGRAM_USER INSTAGRAM_PASSWORD")
        }

        const browser = await puppeteer.launch({
            headless: true,
            executablePath: process.env.CHROME_BIN || undefined,
            args: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage', '--headless']
        });
        const page = await browser.newPage();


        await page.goto('https://www.instagram.com/accounts/login/?next=%2Fcadocuir%2F&source=desktop_nav', { waitUntil: "networkidle0", timeout: 0 });
        await page.click("._a9--._ap36._a9_0")
        await page.type("input[name='username']", INSTAGRAM_USER)
        await page.type("input[name='password']", INSTAGRAM_PASSWORD)
        await new Promise((res, err) => {
            setTimeout(() => {
                res()
            }, 2000);
        })
        await page.click("button[type='submit']", { waitUntil: "networkidle0" })
        await page.waitForNavigation({ waitUntil: "networkidle0" })
        await page.click("button[type='button']")
        let data = {
        }
        page.on('response', async (response) => {
            if (response.url().includes("https://www.instagram.com/graphql/query")) {
                const json = await response.json()
                data = { ...data, ...json.data }
            }
        });
        await page.waitForNavigation({ waitUntil: "networkidle0" })
        saveFile("fulldata.json", data)
        console.log("full data : ", data)
        await browser.close();
    } catch (e) {
        console.log(e)
    }

}

(async () => {
    // await fetchInstagramLatestData()
})();


(async () => {


    try {
        if (INSTAGRAM_USER == null || INSTAGRAM_PASSWORD == null) {
            throw Error("Missing env Vars INSTAGRAM_USER INSTAGRAM_PASSWORD")
        }

        const browser = await puppeteer.launch({
            headless: false,
            executablePath: process.env.CHROME_BIN || undefined,
            args: ['--no-sandbox', '--disable-gpu']
        });
        const page = await browser.newPage();

        // Wait until page has loaded

        await page.goto('https://www.instagram.com/accounts/login/', {
            waitUntil: 'networkidle0',
        });

        // Wait for log in form

        await Promise.all([
            page.waitForSelector('input[name="username"]'),
            page.waitForSelector('input[name="password"]'),
            page.waitForSelector('button[type="submit"]'),
        ]);

        // Enter username and password
        await page.click("._a9--._ap36._a9_0")
        await page.type('input[name="username"]', INSTAGRAM_USER);
        await page.type('input[name="password"]', INSTAGRAM_PASSWORD);
        await new Promise((res,err)=>{setTimeout(_=>{res()},1000)})
        await page.waitForSelector('button[type="submit"]:not([disabled])',{visible:true})
        
        // Submit log in credentials and wait for navigation
        await page.click('button[type="submit"]')
        await page.waitForNavigation({
            waitUntil: 'networkidle0',
        }),


            // Download PDF

            await page.pdf({
                path: 'uploads/page.pdf',
                format: 'A4',
            });

        await browser.close();

    } catch (e) {
        console.log(e)
    }
})();