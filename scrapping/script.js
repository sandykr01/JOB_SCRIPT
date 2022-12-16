export default main = async (skill) => {

    const puppeteer = require('puppeteer');
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(`https://www.indeed.com/jobs?q=${skill}&l=New+York%2C+NY`,{
        timeout:0,
        waitUntil: 'networkidle0'
    });

    const jobData = await page.evaluate(() => {
        const items = document.querySelectorAll('.td.resultContent');
        items.forEach((item,index) => {
            const title = item.querySelector('h2.jobTitle>a')?.innerText;
            const link  = item.querySelector('h2.jobTitle>a')?.href;
            const salary = item.querySelector('div.metadata.salary-snippet-container > div')?.innerText;
            const companyName = item.querySelector('span.companyName')?.innerText;

            if(salary===null){
                salary = "not defined";
                console.log('salary is null');
            }

            database.list.push({title, link, salary, companyName});
        });
    });
    
    await browser.close();
    return {list: jobs};
}