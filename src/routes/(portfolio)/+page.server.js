import puppeteer from 'puppeteer';
import jsdom from 'jsdom';
import fs from 'fs';

const { JSDOM } = jsdom;


const waitTillHTMLRendered = async (page, timeout = 30000) => {
    const checkDurationMsecs = 1000;
    const maxChecks = timeout / checkDurationMsecs;
    let lastHTMLSize = 0;
    let checkCounts = 1;
    let countStableSizeIterations = 0;
    const minStableSizeIterations = 3;
  
    while(checkCounts++ <= maxChecks){
      let html = await page.content();
      let currentHTMLSize = html.length; 
  
      let bodyHTMLSize = await page.evaluate(() => document.body.innerHTML.length);
  
      console.log('last: ', lastHTMLSize, ' <> curr: ', currentHTMLSize, " body html size: ", bodyHTMLSize);
  
      if(lastHTMLSize != 0 && currentHTMLSize == lastHTMLSize) 
        countStableSizeIterations++;
      else 
        countStableSizeIterations = 0; //reset the counter
  
      if(countStableSizeIterations >= minStableSizeIterations) {
        console.log("Page rendered fully..");
        break;
      }
  
      lastHTMLSize = currentHTMLSize;
      await new Promise(r => setTimeout(r, 3000))
    }  
  };

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {

    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({
        headless: false,
    });
    const page = await browser.newPage();
  
    // Navigate the page to a URL
    await page.goto("https://www.instagram.com/cadocuir/", { waitUntil: 'networkidle0' });
   
    await waitTillHTMLRendered(page)

    // Wait and click on first result
    const searchResultSelector = '.x1lliihq';
    await page.waitForSelector(searchResultSelector, { visible: true });
  
    const data = []
    const html =  await page.evaluate(() => document.body.innerHTML);
    try {
        fs.writeFileSync('test.txt', html)
        //file written successfully
      } catch (err) {
        console.error(err)
      }
    const dom = new JSDOM(html)
    
    const posts = dom.window.document.querySelectorAll('.x1lliihq')
    console.log(posts)
    Array.from(posts).forEach(post => {
      
        // const a = post.querySelector('a');
        // const img = post.querySelector('img');

        const postdata = {
            // link: a.href,
            img: img.src,
            // description: img.alt
        }

        data.push(postdata);

    })


    await browser.close();

	return {
		data
	};
}

