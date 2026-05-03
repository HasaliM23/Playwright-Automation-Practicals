import{test,expect} from '@playwright/test';

test("verify leave mandotory feild", async({page})=>{

    await page.goto("https://www.qa-practice.com/forms/practice-form");

    await page.locator("//input[@id='submit-id-submit']").click();


    await page.waitForTimeout(9000);

    //npx playwright test PracticeFormOtherTestcases.spec.js --project chromium --headed



});