import { Page, test, expect } from '@playwright/test';
import { PractoMainPage } from '../pages/PractoMainPage';
import { DetailsCheckout } from '../pages/DetailsCheckout';

let practo: PractoMainPage;
let details: DetailsCheckout;


test.beforeEach(async ({page}) => {
    await page.goto("https://www.practo.com/tests?city=bangalore");

    practo = new PractoMainPage(page);
    details = new DetailsCheckout(page);
});

test("Change location", async ({ page }) => {
  await practo.changeLocation("Chennai");

  await expect(page.url()).toBe("https://www.practo.com/tests?city=chennai");
});

test("View test description", async ({ page }) => {

    await practo.clickTest("Complete Blood Count");
    await page.waitForTimeout(2000);

    await expect(page.url()).toBe('https://www.practo.com/tests/complete-blood-count-automated-blood/p?city=bangalore');
});

test("Add to cart and fill details", async ({ page }) => {

    await practo.addToCart("Lipid Profile");

    await page.waitForTimeout(2000);
    await practo.proceedToCheckout();
    await page.waitForTimeout(2000);
    await details.fillDetails(
        "Yaswanth S",
        "21",
        "MALE",
        "8304825201",
        "aakash@gmail.com"
    );
});


