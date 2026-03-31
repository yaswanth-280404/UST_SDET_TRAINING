import { test, expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { locationPOM } from '../pages/locationPOM';

const { Given, When, Then } = createBdd();
let location: locationPOM; 
/* 

                                Created By: Yaswanth S
                                Reviewed By: Test Manager
                                Description: To validate location change.

*/

Given('user is on main page', async ({ page }) => {
    location = new locationPOM(page);
    await location.navigate();
});

When('user clicks location dropdown', async () => {
    await location.openLocationDropdown();
    await location.waitForLocationPopup();
});

Then('Chennai option should be visible', async () => {
    await expect(location.getCityOption("Chennai")).toBeVisible();
});

When('user selects location as {string}', async ({}, city: string) => {
    await location.selectCity(city);
});

Then('user is directed to {string} page', async ({}, city: string) => {
    await location.verifyCityNavigation(city);
    console.log("Test Case 1 -  COMPLETE");
});