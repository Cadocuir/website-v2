import { loadFile, saveFile } from "./file.js";
import vanillaPuppeteer from 'puppeteer';
import { addExtra } from "puppeteer-extra";
import Stealth from "puppeteer-extra-plugin-stealth";
import dotenv from "dotenv"
import fs from 'fs'
import { parseInstagramData } from "./parser.js";
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
        data.last_update = Date.now()
        saveFile("fulldata.json", data)
        console.log("full data : ", data)
        await browser.close();
    } catch (e) {
        console.log(e)
    }

}


const login = async () => {
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
        await new Promise((res, err) => { setTimeout(_ => { res() }, 1000) })
        await page.waitForSelector('button[type="submit"]:not([disabled])', { visible: true })

        // Submit log in credentials and wait for navigation
        await page.click('button[type="submit"]')
        await page.waitForNavigation({
            waitUntil: 'networkidle0',
        })

        const cookies = JSON.stringify(await page.cookies());
        await fs.writeFileSync('./cookies.json', cookies);

        await browser.close();

    } catch (e) {
        console.log(e)
    }
}

// Load the cookies into the page passed in
const loadCookie = async (page) => {
    // Load the cookie JSON file
    const cookieJson = await fs.readFileSync('./cookies.json');

    // Parse the text file as JSON
    const cookies = JSON.parse(cookieJson);

    // Set the cookies on the page
    await page.setCookie(...cookies);
}

// Our main function
export const run = async () => {
    // Create a new puppeteer browser
    const browser = await puppeteer.launch({
        headless: true,
        executablePath: process.env.CHROME_BIN || undefined,
        args: ['--no-sandbox', '--disable-gpu']
    });

    // Create a new page in the browser
    const page = await browser.newPage();

    // Load the cookies
    await loadCookie(page);

    let data = {}
    page.on('response', async (response) => {
        if (response.url().includes("https://www.instagram.com/graphql/query")) {
            const json = await response.json()
            data = { ...data, ...json.data }
        }
    });

    await page.goto("https://www.instagram.com/cadocuir", { waitUntil: "networkidle0" })
   
    const dataInstagramParsed = await parseInstagramData(data)
    for (const publish of dataInstagramParsed.publish) {
        if (publish.cover != null) {
            const viewSource = await page.goto(publish.cover.url, { waitUntil: "networkidle0" })
            fs.writeFile(`uploads/${publish.id}.jpg`, await viewSource.buffer(), function (err) {
                if (err) {
                    return console.log(err);
                }
            })

            publish.cover.url = `uploads/${publish.id}.jpg`
        }

    }

    saveFile("data.json",dataInstagramParsed)
    browser.close();
}


