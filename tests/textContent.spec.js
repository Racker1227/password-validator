import {test, expect} from '@playwright/test';

test("test1 - Get all visible text from page", async ({page}) => {

    //link
    await page.goto("http://localhost:6888/");
    //get visible text
    const visibleText = await page.innerText('body');
    console.log(visibleText);

});

test("test2 - Get raw text content including hidden text", async({page}) => {
    //link
    await page.goto("http://localhost:6888/");

    //get raw text content
    const rawText = await page.textContent('body');
    console.log(rawText);
});