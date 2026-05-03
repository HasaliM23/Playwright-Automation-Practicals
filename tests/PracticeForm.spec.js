import{test,expect} from '@playwright/test';

test("verify that the user can submit the practice form succesfully" , async({page}) =>{

    await page.goto("https://www.qa-practice.com/forms/practice-form");

    await page.locator("//input[@id='firstName']").fill("Harry");

    await page.locator("//input[@id='lastName']").fill("Potter");

    await page.locator("//input[@id='userEmail']").fill("harry.potter@example.com");

    await page.locator("//input[@id='gender_0']").check();

    await page.locator("//input[@id='userNumber']").fill("1234567890");

    await page.locator("//input[@id='dateOfBirthInput']").click();

    await page.locator("//input[@id='subjectsAutocomplete']").fill("Maths");

    await page.locator("//input[@id='hobbies_0']").check();

    await page.locator("//input[@id='uploadPicture']").setInputFiles("C:\\Users\\INTEL\\Downloads\\User.png");

    await page.locator("//textarea[@id='currentAddress']").fill("Hogwarts School of Witchcraft and Wizardry, Scotland");

    await page.locator("//div[@id='div_id_state']//div[@class='custom-dropdown-control']")

   // await page.locator("//div[@class='custom-dropdown-control']").click();
    //await page.locator("//span[@class='selected-value']").fill("NCR");

    //await page.locator("//span[@class='selected-value placeholder']").selectOption({ label: "Delhi" });

    await page.locator("//input[@id='submit-id-submit']").click();


    await page.waitForTimeout(9000);








});



//npx playwright test PracticeForm.spec.js --project chromium --headed