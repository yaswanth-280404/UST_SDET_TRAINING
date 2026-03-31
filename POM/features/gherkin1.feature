Feature: Cart Feature
--------------//Positive---------------

Scenario: Adding products to cart
Given User is on the product page
When user clicks the add to cart button on the required product
Then product is added successfully to the cart

Scenario: Removing from the cart
Given User is on the products page
When user clicks the cart button
And user clicks the remove button
Then product is removed from the cart successfully


Scenario: View description of a product
Given User is on the product page
When user clicks the required product
Then User is directed to the description page.


----------------//Negative--------------------

Scenario: Adding products to cart
Given User is on the product page
When user clicks the add to cart button on the required product
Then product is added successfully to the cart

Scenario: Removing from the cart
Given User is on the products page
When user clicks the cart button
And user clicks the remove button
Then product is removed from the cart successfully
