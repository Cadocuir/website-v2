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
            args: ['--no-sandbox']
        });
        const page = await browser.newPage();


        await page.goto('https://www.instagram.com/accounts/login/?next=%2Fcadocuir%2F&source=desktop_nav', { waitUntil: "networkidle0", timeout: 0 });
        await page.click("._a9--._ap36._a9_0")
        await page.type("input[name='username']", "vibertvg")
        await page.type("input[name='password']", "h$!XTZEz-m#A72J")
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
    await fetchInstagramLatestData()
})();