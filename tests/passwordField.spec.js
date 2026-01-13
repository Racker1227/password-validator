import {test, expect} from '@playwright/test';

test("test1 - Check ENTER PASSWORD FIELD is working", async ({page}) =>{

    //link
    await page.goto("http://localhost:6888/");
    //locate enter password field
    const enterPasswordField = page.getByPlaceholder('Enter password');
    //check enter password field is visible
    await expect(enterPasswordField).toBeVisible();
    //check enter password field is enabled
    await expect(enterPasswordField).toBeEnabled();

});

test("test2 - Type in ENTER PASSWORD field", async ({page}) => {

    //link
    await page.goto("http://localhost:6888/");
    //locate enter password filed
    await page.locator("//input[@id='password']").fill("Abc@1234");

});

test("test3 - Check PASSWORD filed type is password", async ({page}) => {

    //link
    await page.goto("http://localhost:6888/");
    //locate password filed
    const passFiled = page.locator("//input[@id='password']");
    await passFiled.fill("Abc@1234");
    //get type attribute of password filed
    const typeAttr = await passFiled.getAttribute("type");
    expect(typeAttr).toBe("password");


});

test("test4 - Check CHECK BUTTON is clickable", async ({page}) => {

    //link
    await page.goto("http://localhost:6888/");
    //locate check button
    const checkButton = page.locator("//button[text()='Check']");
    await expect(checkButton).toBeVisible();
    await expect(checkButton).toBeEnabled();
    //click check button
    await checkButton.click();

});