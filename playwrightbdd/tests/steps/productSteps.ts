import{test,expect} from '@playwright/test'
import{createBdd} from 'playwright-bdd'
const {Given,When,Then}=createBdd();

const productName = 'Sauce Labs Backpack';

/* 

                        Created By: Yaswanth S
                        Description: Steps for adding a product to a cart

*/

Given('User is on the login page', async ({page}) => {
    await page.goto("https://saucedemo.com");
});

When('user enters username', async ({page}) => {
    await page.locator("#user-name").fill('standard_user');
});

When('user enters password', async ({page}) => {
    await page.locator("#password").fill('secret_sauce');
});

When('user clicks on the login button', async ({page}) => {
    await page.locator("#login-button").click();
});

Then('user is logged in successfully', async ({page}) => {
    let actualTitle = await page.getByText("Products").textContent();
    await expect(actualTitle).toBe("Products");
});


Given('User is logged in', async ({page}) => {
    const actualUrl=await page.url();
    await expect(actualUrl).toBe("https://www.saucedemo.com/inventory.html");
});

When('User clicks on a product', async ({page}) => {
    await page.getByText('Sauce Labs Backpack').click();
});

Then('the product description is available', async ({page}) => {
    const actualProductName = await page.getByText(productName).textContent();
    await expect(actualProductName).toBe(productName);

});

When('user clicks on add to cart button', async ({page}) => {
    await page.locator("#add-to-cart").click();
});

Then('the product is added to the cart', async ({page}) => {
    const actualCartValue = await page.locator("//span[text()='1']").textContent();
    await expect(actualCartValue).toBe('1');
});

When('User clicks on the cart menu', async ({page}) => {
    await page.locator("//a[@class='shopping_cart_link']").click();
});

Then('the cart is opened', async ({page}) => {
    const actualValue = await page.getByText("Your Cart").textContent();
    await expect(actualValue).toBe("Your Cart");
});

Then('user is able to view the added product', async ({page}) => {
    const actualProduct = await page.getByText(productName).textContent();
    await expect(actualProduct).toBe(productName);
});


/* 

                        Created By: Yaswanth S
                        Description: Steps for Viewing production description

*/


Then('user is able to see the entire product description', async ({page}) => {
    const description = await page.locator("//div[@data-test='inventory-item-desc']");
    await expect(description).toBeVisible();
});