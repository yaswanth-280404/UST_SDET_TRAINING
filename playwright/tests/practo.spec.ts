import {test, expect} from "@playwright/test";



// To validate location selection functionality with valid data.
// To validate test search functionality with valid search data.
// To validate book via call functionality.
// To validate book via WhatsApp functionality.
// To validate add to cart functionality.
// To validate removing from cart functionality.
// To validate checkout functionality.
// To validate checkout and details page.
// To validate view description functionality.
// To validate book now functionality in description page.
// To verify whether the search bar is visible.




test("To test whether it's possible to fill in the details", async ({page}) =>{

    // USER DETAILS FILLING TEST
    await page.goto("https://www.practo.com/tests?city=bangalore");

    await page.waitForTimeout(2000);
    await page.locator("//div[contains(text(),'Lipid Profile')]/parent::div/parent::a/parent::div/child::div/child::div").click()
    await page.waitForTimeout(2000);

    await page.locator("//div[text()='Proceed to Checkout']").click();

    await page.waitForTimeout(2000);



    await page.getByPlaceholder("John Doe").fill("Yaswanth S");
    await page.locator("input[type = 'number']").fill("21");

    await page.locator("select").selectOption("Years");

    await page.locator("input[name='gender'][value='MALE']").check();

    await page.getByPlaceholder("ex. 91234567890").fill("8304825201");

    await page.getByPlaceholder("you@practo.com").fill("aakash@gmail.com");

    await page.waitForTimeout(5000);
})

test("To test whether the location can be chosen", async({page }) => {

    await page.goto("https://www.practo.com/tests?city=bangalore");

    await page.waitForTimeout(1000);

    await page.locator("//i[contains(@class,'icon-ic_dropdown c-search__dropdown-icon')]").click();

    await page.waitForTimeout(1000);

    await page.locator("//div[text()='Chennai']/parent::li").click();
    await expect.soft(page.url()).toBe("https://www.practo.com/tests?city=chennai");

    await page.waitForTimeout(1000);
})


test("To validate view description functionality", async ({page}) => {

    await page.goto("https://www.practo.com/tests?city=bangalore");

    await page.waitForTimeout(1000);

    await page.locator("//a[contains(@class,'u-pad--std u-border--std')]/child::div/child::div[text()='Complete Blood Count']").click();

    await page.waitForTimeout(1000);
    
    await expect.soft(page.url()).toBe("https://www.practo.com/tests/complete-blood-count-automated-blood/p?city=bangalore");

    await page.waitForTimeout(1000);

})

// test("To validate whatsapp booking functionality", async ({page}) => {

//     await page.goto("https://www.practo.com/tests?city=bangalore");

//     await page.locator("//img[contains(@class,'c-booking-buttons__whatsapp-icon')]").click();

//     await expect(page.url()).toBe("https://api.whatsapp.com/send?phone=919916728755&text=Hi%2C%20I%20would%20like%20to%20book%20diagnostic%20tests.&app_absent=1");
// })


test("To validate location selection functionality with valid data.", async ({page}) => {

    await page.goto("https://www.practo.com/tests?city=bangalore");

    await page.getByPlaceholder('Search for tests, packages & profiles').fill("Thyroid");

    await expect(page.locator("//div[contains(@class,'c-search__suggestion-container')]")).toBeVisible();

    await page.locator("//span[contains(@class,'c-suggestion__alias-text') and text() ='Thyroid AutoAntibodies Panel Blood']").click();

    await expect(page.url()).toBe("https://www.practo.com/tests/thyroid-autoantibodies-blood/p?city=bangalore");
})