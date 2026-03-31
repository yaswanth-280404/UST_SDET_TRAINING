Feature: Practo Location Change

@locationChange
Scenario: Change location from Bangalore to Chennai
Given user is on main page
When user clicks location dropdown
Then Chennai option should be visible
When user selects location as "Chennai"
Then user is directed to "chennai" page