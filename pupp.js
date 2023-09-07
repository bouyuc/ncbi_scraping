import puppeteer from 'puppeteer';



(async () => {
  const genes = ['5337', '5338', '5339', '5340', '5341']
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  for(let gene of genes){
    // Navigate the page to a URL
    await page.goto(`https://www.ncbi.nlm.nih.gov/gene/${gene}`);

    // Set screen size
    await page.setViewport({width: 1080, height: 1024});

    // Click buttons and download
    await page.waitForSelector('#button-1084-btnInnerEl')
    await page.click('#button-1084-btnInnerEl');
    await page.waitForSelector('#menuitem-1055')
    await page.click('#menuitem-1055');
    await page.waitForSelector('#menuitem-1051')
    await page.click('#menuitem-1051');
    console.log(`last downloaded gene was ${gene}`)

    await page.waitForTimeout(4000);
  }


  await browser.close();
})();