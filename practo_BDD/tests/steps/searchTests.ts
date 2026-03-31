import { test, expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { searchPOM } from '../pages/searchPOM';

const { Given, When, Then } = createBdd();

let search: searchPOM;


/* 

                                Created By: Yaswanth S
                                Reviewed By: Test Manager
                                Description: To validate search function with valid testname.

*/


Given('user is on the Bangalore login page', async ({page}) => {
    search = new searchPOM(page);
    await search.navigateToPage();
});

When('user clicks the search bar', async ({page}) => {
    await search.clickSearch();

});

When('user types in the test name as {string}', async ({page}, testName: string) => {
    await search.fillSearch(testName);
});

Then('the test dropdown box is visible', async ({page}) => {
    await expect(page.locator(".c-suggestion__alias-text").first()).toBeVisible();
});

When('user clicks the testname', async ({}, testName) => {
    await search.clickSuggestion(testName);
});

Then('user will be directed to the product description', async ({page}) => {
    await search.verifyPage();
    console.log("Test Case 5 -  COMPLETE");
})

/* 

                            Created By: Yaswanth S
                            Description: To validate unavailable tests in certain cities.
                            Reviewed By: Test Manager

*/

When('user clicks the testname {string}', async ({}, testName: string) => {
    await search.suggestionDrop.waitFor({ state: 'visible' });
    await search.clickSuggestion(testName);
});

Then('user should see availability message {string}', async ({ page }, expectedMessage: string) => {
    await expect(page.getByText(expectedMessage)).toBeVisible();
    console.log("Test Case 6 -  COMPLETE");
});