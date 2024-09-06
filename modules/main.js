import { PuppeteerCluster } from "./cluster.js";
import { loadFile, saveFile } from "./file.js";
import * as cheerio from 'cheerio';

const cluster = new PuppeteerCluster()

const run = async () => {
    await cluster.init()
    await cluster.queue("https://www.instagram.com/cadocuir/", listing)
    // await cluster.cluster.idle().then(() => { cluster.close() })
}



const  listing = async (url, html) => {
    const $ = cheerio.load(html);
    const links = $('._ac7v .x1lliihq a')
    links.each(async index => {
        const link = links[index]
        const url = new URL(link.attribs.href, "https://www.instagram.com/")
        await cluster.queue(url, detail)

    })
}

const detail = (url, html) => {
    const $ = cheerio.load(html);
    const h1 = $("h1").text()
    console.log(h1)
}

await run()
