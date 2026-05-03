import{test,expect} from '@playwright/test';

test("verify leave mandotory feild", async({page})=>{

    await page.goto("https://www.qa-practice.com/forms/practice-form");

    await page.locator("//input[@id='submit-id-submit']").click();


    await page.waitForTimeout(3000);

    
});

    test("verify that invalid email format is not accepted", async({page})=>{

        await page.goto("https://www.qa-practice.com/forms/practice-form");

        await page.locator("//input[@id='firstName']").fill("Harry");

        await page.locator("//input[@id='lastName']").fill("Potter");

        await page.locator("//input[@id='gender_0']").check();

    await page.locator("//input[@id='userNumber']").fill("1234567890");

        await page.locator("//input[@id='userEmail']").fill("harrypotterexample.com");
        await page.locator("//input[@id='submit-id-submit']").click();
        await page.waitForTimeout(3000);

    });

    test.only("verify that invalid phone number format is not accepted", async({page})=>{

        await page.goto("https://www.qa-practice.com/forms/practice-form");

        await page.locator("//input[@id='firstName']").fill("Harry");
        await page.locator("//input[@id='lastName']").fill("Potter");
        await page.locator("//input[@id='userEmail']").fill("harry.potter@example.com");
        await page.locator("//input[@id='gender_0']").check();

        await page.locator("//input[@id='userNumber']").fill("12345678");

        await page.locator("//input[@id='submit-id-submit']").click();
        await page.waitForTimeout(3000);

      
        


    });





    //npx playwright test PracticeFormOtherTestcases.spec.js --project chromium --headed


