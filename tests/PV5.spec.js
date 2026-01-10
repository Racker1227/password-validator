import {test, expect} from '@playwright/test';

//Check RIGHT password type
test("test1 - Check Empty password is invalid", async ({page}) => {

    //link
    await page.goto("http:localhost:6888/");
     //locate enter password field
    await page.locator("//input[@id='password']").fill("Rushi@8793");
    //locate check button
    await page.locator("//button[text()='Check']").click();
    //locate Wrong password message
    const rightPSDMessage = page.locator("//div[contains(text(),'Password is valid')]");
    await expect (rightPSDMessage).toBeVisible();
    await expect (rightPSDMessage).toHaveText("Congratulations ! Password is valid!");


});