import{test,expect} from '@playwright/test';

test("Verify that the user can register successfully" , async({page})=>{

    await page.goto("https://practice.expandtesting.com/register");

    await page.locator("(//input[@id='username'])[1]").fill("Harry");

    await page.locator("(//input[@id='password'])[1]").fill("Harry123");

    await page.locator("(//input[@id='confirmPassword'])[1]").fill("Harry123");

    await page.locator("(//button[normalize-space()='Register'])[1]").click();

    });
    //npx playwright test RegisterPage.spec.js --project chromium --headed 

test("Verify password Mismatch error" , async({page})=>{

    await page.goto("https://practice.expandtesting.com/register");

    await page.locator("(//input[@id='username'])[1]").fill("Harry");
    await page.locator("(//input[@id='password'])[1]").fill("Harry123");
    await page.locator("(//input[@id='confirmPassword'])[1]").fill("Harry1234");
    await page.locator("(//button[normalize-space()='Register'])[1]").click();

    await page.waitForTimeout(3000);


});

test("Verify that the Password character limit is enforced" , async({page})=>{

    await page.goto("https://practice.expandtesting.com/register");

    await page.locator("(//input[@id='username'])[1]").fill("Harry");

    await page.locator("(//input[@id='password'])[1]").fill("Harry123456789012345678900000000000000");

    await page.locator("(//input[@id='confirmPassword'])[1]").fill("Harry123456789012345678900000000000000");

    await page.locator("(//button[normalize-space()='Register'])[1]").click();

     await page.waitForTimeout(3000);

});

test.only("Veryfy that user fields are mandatory" , async({page})=>{

    await page.goto("https://practice.expandtesting.com/register");

    await page.locator("(//button[normalize-space()='Register'])[1]").click();

        await page.waitForTimeout(3000);





});

