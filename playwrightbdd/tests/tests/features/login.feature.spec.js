// Generated from: tests\features\login.feature
import { test } from "playwright-bdd";

test.describe('Login Functionality', () => {

  test('Login with credentials', async ({ Given, When, Then, And, page }) => { 
    await Given('User is on login page', null, { page }); 
    await When('User enters <username> and enter <password>', {"dataTable":{"rows":[{"cells":[{"value":"username"},{"value":"password"}]},{"cells":[{"value":"standard_user"},{"value":"secret_sauce"}]},{"cells":[{"value":"performance_glitch_user"},{"value":"secret_sauce"}]},{"cells":[{"value":"problem_user"},{"value":"secret_sauce"}]},{"cells":[{"value":"error_user"},{"value":"secret_sauce"}]},{"cells":[{"value":"visual_user"},{"value":"secret_sauce"}]}]}}, { page }); 
    await And('user clicks on login button', null, { page }); 
    await Then('User is logged in successfully', null, { page }); 
    await And('User is able to navigate to product page', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":58,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":59,"keywordType":"Context","textWithKeyword":"Given User is on login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":60,"keywordType":"Action","textWithKeyword":"When User enters <username> and enter <password>","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":67,"keywordType":"Action","textWithKeyword":"And user clicks on login button","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":68,"keywordType":"Outcome","textWithKeyword":"Then User is logged in successfully","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":69,"keywordType":"Outcome","textWithKeyword":"And User is able to navigate to product page","stepMatchArguments":[]}]},
]; // bdd-data-end