import {test, expect} from '@playwright/test';

test("Final Test - valid or invalid password", async ({page}) => {

    //link 
    await page.goto("http://localhost:6888/");
    //locate enter password field
    await page.locator("//input[@id='password']").fill("rushi@8793");
    //locate check button
    await page.locator("//button[text()='Check']").click();
    //locate Wrong password message
    const wrongPSDMessage = page.locator("//div[starts-with(text(),'Wrong Password')]");
    //locate Right password message
    const rightPSDMessage = page.locator("//div[contains(text(),'Password is valid')]");

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
    else if(messageText === "Wrong Password ! Password cannot have consecutive letters or numbers like 'abc' or '123'.")
    {
        await expect (wrongPSDMessage).toBeVisible();
        await expect (wrongPSDMessage).toHaveText("Wrong Password ! Password cannot have consecutive letters or numbers like 'abc' or '123'.");
    }
    else
    {
        
        await expect (rightPSDMessage).toBeVisible();
        await expect (rightPSDMessage).toHaveText("Congratulations ! Password is valid!");
        
    }

});


