import {test, expect} from "@playwright/test";
test("Testing Alert Box",async({page})=>{
    await page.goto("https://demo.automationtesting.in/Alerts.html");
 
    await page.locator("//button[@class='btn btn-danger']").click();
    await page.waitForTimeout(3000);
    page.on('dialog',async dialog =>{
        console.log(`Alert Box Message : ${dialog.message}`);
        await dialog.accept();
    })
    await page.waitForTimeout(3000);
});
 
test("Testing Confirm Box with OK button",async({page})=>{
    await page.goto("https://demo.automationtesting.in/Alerts.html");
 
    await page.locator("//a[@href='#CancelTab']").click();
    await page.locator("//button[@class='btn btn-primary']").click();
    await page.waitForTimeout(3000);
    page.on('dialog',async dialog =>{
        console.log(`Alert Box Message : ${dialog.message}`);
        await dialog.accept();
        console.log(page.locator("//p[@id='demo']").textContent());
    })
    await page.waitForTimeout(3000);
});
 
test("Testing Prompt Box with OK button",async({page})=>{
    await page.goto("https://demo.automationtesting.in/Alerts.html");
 
    await page.locator("//a[@href='#Textbox']").click();
    await page.locator("//button[@class='btn btn-info']").click();
    await page.waitForTimeout(3000);
    page.on('dialog',async dialog =>{
        console.log(`Alert Box Message : ${dialog.message}`);
        await dialog.accept("Ayush");
        console.log(page.locator("//p[@id='demo']").textContent());
    })
    await page.waitForTimeout(3000);
});
 
test("Testing Prompt Box with Cancel button",async({page})=>{
    await page.goto("https://demo.automationtesting.in/Alerts.html");
 
    await page.locator("//a[@href='#Textbox']").click();
    await page.locator("//button[@class='btn btn-info']").click();
    await page.waitForTimeout(3000);
    page.on('dialog',async dialog =>{
        console.log(`Alert Box Message : ${dialog.message}`);
        await dialog.dismiss();
        console.log(page.locator("//p[@id='demo']").textContent());
    })
    await page.waitForTimeout(3000);
});