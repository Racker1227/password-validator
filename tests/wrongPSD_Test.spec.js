import {test, expect} from '@playwright/test';

//check Wrong password type and Range 8 to 15 words and less than 8 words

test("test1 - Check Empty password is invalid", async ({page}) => {

    //link
    await page.goto("http:localhost:6888/");
     //locate enter password field
    await page.locator("//input[@id='password']").fill("");
    //locate check button
    await page.locator("//button[text()='Check']").click();
    //locate Wrong password message
    const wrongPSDMessage = page.locator("//div[starts-with(text(),'Wrong Password')]");
    await expect (wrongPSDMessage).toBeVisible();
    await expect (wrongPSDMessage).toHaveText("Wrong Password ! Password must be between 8 and 15 characters.");



});

test("test2 - Check All Number password is invalid", async ({page}) => {

    //link 
    await page.goto("http://localhost:6888/");
    //locate enter password field
    await page.locator("//input[@id='password']").fill("12345678");
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



test("test3 - check only ALPHABETS with ALL UPPERCASE password is invalid", async ({page}) => {

    //link 
    await page.goto("http://localhost:6888/");
    //locate enter password field
    await page.locator("//input[@id='password']").fill("RUSHIKESH");
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


test("test4 - check only ALPHABETS with ALL LOWERCASE password is invalid", async ({page}) => {

    //link 
    await page.goto("http://localhost:6888/");
    //locate enter password field
    await page.locator("//input[@id='password']").fill("rushikesh");
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


test("test5 - check ALPHABETS with 1ST letter is UPPERCASE password is invalid", async ({page}) => {

    //link 
    await page.goto("http://localhost:6888/");
    //locate enter password field
    await page.locator("//input[@id='password']").fill("Rushikeshwadme");
    //locate check button
    await page.locator("//button[text()='Check']").click();
    //locate Wrong password message
        const messageLocator = page.locator("//div[contains(text(),'Password')]");
        const messageText = await messageLocator.textContent();

        // Define all expected messages
        const expectedMessages = [
                "Wrong Password ! Password must be between 8 and 15 characters.",
                "Wrong Password ! Password must contain uppercase, lowercase, number and special character (!@#$%_).",
                "Wrong Password ! Password cannot have consecutive letters or numbers like 'abc' or '123'.",
                
        ];

        // Assert that the message is one of the expected ones
        expect(expectedMessages).toContain(messageText);

        // Extra validation: ensure visibility and exact text
        await expect(messageLocator).toBeVisible();
        await expect(messageLocator).toHaveText(messageText);
   
});



test("test6 - check ALPHABETS with 1ST letter is LOWERCASE password is invalid", async ({page}) => {

    //link 
    await page.goto("http://localhost:6888/");
    //locate enter password field
    await page.locator("//input[@id='password']").fill("rUSHIKESHWADME");
    //locate check button
    await page.locator("//button[text()='Check']").click();
    //locate Wrong password message
    const messageLocator = page.locator("//div[contains(text(),'Password')]");
    const messageText = await messageLocator.textContent();

        // Define all expected messages
        const expectedMessages = [
                "Wrong Password ! Password must be between 8 and 15 characters.",
                "Wrong Password ! Password must contain uppercase, lowercase, number and special character (!@#$%_).",
                "Wrong Password ! Password cannot have consecutive letters or numbers like 'abc' or '123'.",
                
        ];

        // Assert that the message is one of the expected ones
        expect(expectedMessages).toContain(messageText);

        // Extra validation: ensure visibility and exact text
        await expect(messageLocator).toBeVisible();
        await expect(messageLocator).toHaveText(messageText);
   

});


test("test7 - check SPECIAL characters password is invalid", async ({page}) => {

    //link 
    await page.goto("http://localhost:6888/");
    //locate enter password field
    await page.locator("//input[@id='password']").fill("`!@#$%^&*");
    //locate check button
    await page.locator("//button[text()='Check']").click();
    //locate Wrong password message
    const messageLocator = page.locator("//div[contains(text(),'Password')]");
    const messageText = await messageLocator.textContent();

        // Define all expected messages
        const expectedMessages = [
                "Wrong Password ! Password must be between 8 and 15 characters.",
                "Wrong Password ! Password must contain uppercase, lowercase, number and special character (!@#$%_).",
                "Wrong Password ! Password cannot have consecutive letters or numbers like 'abc' or '123'.",
                
        ];

        // Assert that the message is one of the expected ones
        expect(expectedMessages).toContain(messageText);

        // Extra validation: ensure visibility and exact text
        await expect(messageLocator).toBeVisible();
        await expect(messageLocator).toHaveText(messageText);
   
});



