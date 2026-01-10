import {test, expect} from '@playwright/test';

test("test7 - check SPECIAL characters password is invalid", async ({page}) => {

    //link 
    await page.goto("http://localhost:6888/");
    //locate enter password field
    await page.locator("//input[@id='password']").fill("r u s h i @ 8 7 9 3");
    //locate check button
    await page.locator("//button[text()='Check']").click();
    //locate Wrong password message
    const wrongPSDMessage = page.locator("//div[starts-with(text(),'Wrong Password')]");

    const messageText = await wrongPSDMessage.textContent();
    if(messageText === "Wrong Password ! Password must be between 8 and 15 characters.") 
        {
        await expect (wrongPSDMessage).toBeVisible();
        await expect (wrongPSDMessage).toHaveText("Wrong Password ! Password must be between 8 and 15 characters.");
        }
    else if(messageText === "Wrong Password ! Password must contain uppercase, lowercase, number and special character (!@#$%_).")
    {
        await expect (wrongPSDMessage).toBeVisible();
        await expect (wrongPSDMessage).toHaveText("Wrong Password ! Password must contain uppercase, lowercase, number and special character (!@#$%_).");
        
    }
    else
    {
        await expect (wrongPSDMessage).toBeVisible();
        await expect (wrongPSDMessage).toHaveText("Wrong Password ! Password cannot have consecutive letters or numbers like 'abc' or '123'.");
    }

});


