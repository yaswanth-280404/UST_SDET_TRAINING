@loginfeature
Feature: Login Functionality
 
@regression @sanity @validUser
Scenario: Login with valid credentials
Given user is on login page
When user enters username
And user enters password
And user clicks on login button
Then the user is logged in successfully
And User is able to navigate to product page
 
@regression @invaliduser
Scenario: Login with invalid credentials
Given User is on login page
When User enters invalid username
And user enters password
And user clicks on login button
Then the user gets an error message as invalid user
And User is back on login page
 
@regression @lockedUser
Scenario: Login with locked user credentials
Given User is on login page
When User enters locked username
And user enters password
And user clicks on login button
Then User gets an error message
And User is back on login page