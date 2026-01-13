import {test, expect} from '@playwright/test';
import passwordData from '../test-data/passwordData.json';

test.describe("DataDrivenTest for Password Validator", () => {

for (const pass of passwordData){

    test("Check password " +pass.password, async ({page}) => {

        //link 
        await page.goto("http://localhost:6888/");
        //locate enter password field
        await page.locator("//input[@id='password']").fill(pass.password);     

        //locate check button
        await page.locator("//button[text()='Check']").click();

        // Unified locator for any message (success or failure)
        const messageLocator = page.locator("//div[contains(text(),'Password') or contains(text(),'Congratulations')]");
        const messageText = await messageLocator.textContent();

        // Define all expected messages
        const expectedMessages = [
                "Wrong Password ! Password must be between 8 and 15 characters.",
                "Wrong Password ! Password must contain uppercase, lowercase, number and special character (!@#$%_).",
                "Wrong Password ! Password cannot have consecutive letters or numbers like 'abc' or '123'.",
                "Congratulations ! Password is valid!"
        ];

        // Assert that the message is one of the expected ones
        expect(expectedMessages).toContain(messageText);

        // Extra validation: ensure visibility and exact text
        await expect(messageLocator).toBeVisible();
        await expect(messageLocator).toHaveText(messageText);
    });
}

});