// Generated from: tests\features\login.feature
import { test } from "playwright-bdd";

test.describe('Login Functionality', () => {

  test('Login with valid credentials', { tag: ['@loginfeature', '@regression', '@sanity', '@validUser'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('user is on login page', null, { page }); 
    await When('user enters username', null, { page }); 
    await And('user enters password', null, { page }); 
    await And('user clicks on login button', null, { page }); 
    await Then('the user is logged in successfully', null, { page }); 
    await And('User is able to navigate to product page', null, { page }); 
  });

  test('Login with invalid credentials', { tag: ['@loginfeature', '@regression', '@invaliduser'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('User is on login page', null, { page }); 
    await When('User enters invalid username', null, { page }); 
    await And('user enters password', null, { page }); 
    await And('user clicks on login button', null, { page }); 
    await Then('the user gets an error message as invalid user', null, { page }); 
    await And('User is back on login page', null, { page }); 
  });

  test('Login with locked user credentials', { tag: ['@loginfeature', '@regression', '@lockedUser'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('User is on login page', null, { page }); 
    await When('User enters locked username', null, { page }); 
    await And('user enters password', null, { page }); 
    await And('user clicks on login button', null, { page }); 
    await Then('User gets an error message', null, { page }); 
    await And('User is back on login page', null, { page }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":["@loginfeature","@regression","@sanity","@validUser"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given user is on login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When user enters username","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And user enters password","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And user clicks on login button","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then the user is logged in successfully","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"And User is able to navigate to product page","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":14,"tags":["@loginfeature","@regression","@invaliduser"],"steps":[{"pwStepLine":16,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"Given User is on login page","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When User enters invalid username","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"And user enters password","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"And user clicks on login button","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then the user gets an error message as invalid user","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"And User is back on login page","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":23,"tags":["@loginfeature","@regression","@lockedUser"],"steps":[{"pwStepLine":25,"gherkinStepLine":24,"keywordType":"Context","textWithKeyword":"Given User is on login page","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"When User enters locked username","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"And user enters password","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":27,"keywordType":"Action","textWithKeyword":"And user clicks on login button","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then User gets an error message","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"And User is back on login page","stepMatchArguments":[]}]},
]; // bdd-data-end