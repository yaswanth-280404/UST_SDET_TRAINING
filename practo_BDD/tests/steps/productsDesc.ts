import { test, expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { ProductPOM } from '../pages/productPOM';

const { Given, When, Then } = createBdd();
let product: ProductPOM;


/* 

                            Created By: Yaswanth S
                            Description: To check the add to cart, checkout and details filling form.

*/


Given('user is on the product page', async ({ page }) => {
    product = new ProductPOM(page);
    await product.navigate();
});

When('user click on the required product as {string}', async ({}, testName) => {
    await product.openProduct(testName);
});

Then('user is directed to the product page', async () => {
    await product.verifyProductPage("lipid-profile");
});

When('user click on the add to cart button on required product with name as {string}', async ({}, testName) => {
    await product.addToCart(testName);
});

When('user clicks the checkout button', async () => {
    await product.proceedToCheckout();
});

Then('user is directed to the details filling page', async () => {
    await product.verifyDetailsPage();
});

Then('User is able to fill the details', async () => {
    await product.fillUserDetails(
        "Yaswanth S",
        "21",
        "MALE",
        "8304825201",
        "aakash@gmail.com"
    );

    await product.verifyOTPVisible();

    console.log("Test Case 2 -  COMPLETE");
});


/* 


                                Created By: Yaswanth S
                                Description: To view the products description
                                Reviewer   : Test Manager


*/


When('user click on the required lab test', async ({page}) => {
    await await page.locator("//a[contains(@class,'u-pad--std u-border--std')]/child::div/child::div[text()='Complete Blood Count']").click();
});

Then('user is directed to the product description page', async ({page}) => {
    await expect(page.url()).toBe("https://www.practo.com/tests/complete-blood-count-automated-blood/p?city=bangalore");
    console.log("Test Case 3 -  COMPLETE");
});



/* 


                                    Created By  : Yaswanth S
                                    Reviewed By : Test Manager
                                    Description : Checkout button directs to the details page.


*/

Given('User is on the product page', async ({page}) => {
    product = new ProductPOM(page);
    await product.navigate();
});

When('User click on the add to cart button on required product with name as {string}', async ({page}, testName: string) => {
    await product.addToCart(testName);
});

When('User clicks the checkout button', async ({page}) => {
    await product.proceedToCheckout();
});

Then('User will be directed to the details page', async ({page}) => {
    await product.verifyDetailsPage();
    console.log("Test Case 4 -  COMPLETE");
});


