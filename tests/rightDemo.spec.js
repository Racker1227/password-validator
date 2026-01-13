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

      

        //locate Right password message
        const rightPSDMessage = page.locator("//div[contains(text(),'Password is valid')]");
      
        await expect (rightPSDMessage).toBeVisible();
        await expect (rightPSDMessage).toHaveText("Congratulations ! Password is valid!");


    });
}

});