# Feature: Login Functionality
# Scenario: Login with valid credentials
# Given user is on login page
# When user enter username
# And user enter password
# And user clicks on login button
# Then User is logged in successfully
# And user is able to navigate to product page.



# Scenario: Login with locked user credentials
# Given user is on login page
# When user enters locked username
# And user enter password
# And user clicks on login button
# Then user gets an error message
# And user is back on Login Page

# Scenario: Login with valid credentials (arguement)
# Given user is on login page
# When user enter username as "standard_user"
# And user enter password as "secret_sauce"
# And user clicks on login button
# Then User is logged in successfully
# And user is able to navigate to product page.


# Scenario: Login with locked user credentials ((arguement))
# Given user is on login page
# When user enters locked username as "locked_out_user"
# And user enter password as "secret_sauce"
# And user clicks on login button
# Then user gets an error message
# And user is back on Login Page


# Feature: Login Functionality

# Scenario Outline: Login with valid credentials
# Given User is on login page
# When User enters "<username>"
# And user enter "<password>"
# And user clicks on login button
# Then User is logged in successfully
# And User is able to navigate to product page
# Examples:
# | username                  | password          |
# | standard_user             | secret_sauce      |
# | performance_glitch_user   | secret_sauce      |
# | problem_user              | secret_sauce      |
# | error_user                | secret_sauce      |
# | visual_user               | secret_sauce      |


Feature: Login Functionality

Scenario: Login with credentials
Given User is on login page
When User enters <username> and enter <password>
| username                  | password          |
| standard_user             | secret_sauce      |
| performance_glitch_user   | secret_sauce      |
| problem_user              | secret_sauce      |
| error_user                | secret_sauce      |
| visual_user               | secret_sauce      |
And user clicks on login button
Then User is logged in successfully
And User is able to navigate to product page
