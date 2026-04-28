import { test, expect } from '@playwright/test';

test("Verify forgot password works successfully", async ({ page }) => {

    // 1. Go to page
    await page.goto("https://practice.expandtesting.com/forgot-password");

    // 2. Enter email
    await page.locator("//input[@id='email']")
        .fill("hasali2000pm@gmail.com");

    // 3. Click button
    await page.locator("//button[normalize-space()='Retrieve password']")
        .click();

});

//npx playwright test ForgotPassword.spec.js --project chromium --headed 