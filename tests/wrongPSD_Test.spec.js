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
    await page.locator("//input[@id='password']").fill("RUSHI");
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
    await page.locator("//input[@id='password']").fill("RUSHI");
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
    await page.locator("//input[@id='password']").fill("Rushi");
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
    else(messageText === "Wrong Password ! Password cannot have consecutive letters or numbers like 'abc' or '123'.")
    {
        await expect (wrongPSDMessage).toBeVisible();
        await expect (wrongPSDMessage).toHaveText("Wrong Password ! Password cannot have consecutive letters or numbers like 'abc' or '123'.");
    }

});



test("test6 - check ALPHABETS with 1ST letter is LOWERCASE password is invalid", async ({page}) => {

    //link 
    await page.goto("http://localhost:6888/");
    //locate enter password field
    await page.locator("//input[@id='password']").fill("rUSHI");
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
    else(messageText === "Wrong Password ! Password cannot have consecutive letters or numbers like 'abc' or '123'.")
    {
        await expect (wrongPSDMessage).toBeVisible();
        await expect (wrongPSDMessage).toHaveText("Wrong Password ! Password cannot have consecutive letters or numbers like 'abc' or '123'.");
    }

});


test("test7 - check SPECIAL characters password is invalid", async ({page}) => {

    //link 
    await page.goto("http://localhost:6888/");
    //locate enter password field
    await page.locator("//input[@id='password']").fill("`!@#$%^&*");
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
    else(messageText === "Wrong Password ! Password cannot have consecutive letters or numbers like 'abc' or '123'.")
    {
        await expect (wrongPSDMessage).toBeVisible();
        await expect (wrongPSDMessage).toHaveText("Wrong Password ! Password cannot have consecutive letters or numbers like 'abc' or '123'.");
    }
});



