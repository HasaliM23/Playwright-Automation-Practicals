import{test,expect} from '@playwright/test';

test ("Verify that the user can login successfully" , async({page})=>{

    await page.goto("https://practice.expandtesting.com/login");

    await page.fill("(//input[@id='username'])[1]","practice");

    await page.fill("(//input[@id='password'])[1]" , "SuperSecretPassword!");

    await page.locator("(//button[normalize-space()='Login'])[1]").click();

    await page.waitForTimeout(3000);

    //npx playwright test LoginPage.spec.js --project chromium --headed 


});