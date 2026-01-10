import { test, expect } from '@playwright/test';

test("Password Validator - URL validation", async({page}) => {
    
    //link
    await page.goto("http://localhost:6888/");

    //locate dashboard 
    const dashboardTitle = page.locator("//h2[text()='Welcome to Password Validator']");
    await expect(dashboardTitle).toBeVisible();
    await expect(dashboardTitle).toHaveText('Welcome to Password Validator');

    
});