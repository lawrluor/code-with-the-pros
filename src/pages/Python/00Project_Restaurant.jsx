// 00Project

// Imagine you are in charge of the payments system of a new restaurant. The owner has asked you to write a program to calculate the total cost of a meal ordered by a customer.

// 1. Create a variable `restaurant_name` that stores the name of your restaurant
// 2. Create a variable `customer_name` that stores the name of the customer
// 3. Create a variable `dish_one_name` that stores the name of the first dish ordered
// 4. Create a variable `dish_two_name` that stores the name of the second dish ordered
// 5. Create a variable `dish_three_name` that stores the name of the third dish ordered
// 6. Create a variable `dish_one_price` that stores the price of the first dish ordered
// 7. Create a variable `dish_two_price` that stores the price of the second dish ordered
// 8. Create a variable `dish_three_price` that stores the price of the third dish ordered
// 3. Create a variable `total` and assign it the value 0.00

// Increment the `total` variable by the sum of the three dish prices


// 4. Create a variable `tax_rate` and assign it the value 0.09
// calculate the tax amount by multiplying the tax rate by the total

// 5. Create a variable `tip` and assign it the value 0.15
// calculate the tip amount by multiplying the tip rate by the total

// Increment the `total` variable by the tax amount
// Increment the `total` variable by the tip amount
// Calculate the amount that should be added for the tip and increment the `total` variable


// If you did this correctly, you should see the following result in the console:
```
"Your order at [YOUR_RESTAURANT_NAME] was placed for [YOUR_NAME]."
"[DISH_ONE_NAME] --- [DISH_ONE_PRICE]"
"[DISH_TWO_NAME] --- [DISH_TWO_PRICE]"
"[DISH_THREE_NAME] --- [DISH_THREE_PRICE]"
"Your meal total is [TOTAL]."
"Your tax total is [TAX_AMOUNT]."
"Your tip total is [TIP_AMOUNT]."
"Your grand total is [YOUR_GRAND_TOTAL]."
```


# The name of the restaurant
restaurant_name = "The Cozy Kitchen"

# The customer's name
customer_name = "Alice"

# Dishes ordered
dish_one_name = "Grilled Chicken"
dish_two_name = "Caesar Salad"
dish_three_name = "Chocolate Cake"

# Prices of the dishes
dish_one_price = 12.99
dish_two_price = 8.49
dish_three_price = 6.99

# Total starts at zero
total = 0.00

# Calculate total meal cost
total = dish_one_price + dish_two_price + dish_three_price

# Tax rate and calculation
tax_rate = 0.09
tax_amount = total * tax_rate

# Tip percentage and calculation
tip_rate = 0.15
tip_amount = total * tip_rate

# Calculate the final total by adding tax and tip
grand_total = total + tax_amount + tip_amount

# Displaying the receipt
print(f"Your order at {restaurant_name} was placed for {customer_name}.")
print(f"{dish_one_name} --- ${dish_one_price}")
print(f"{dish_two_name} --- ${dish_two_price}")
print(f"{dish_three_name} --- ${dish_three_price}")
print(f"Your meal total is ${total}.")
print(f"Your tax total is ${tax_amount}.")
print(f"Your tip total is ${tip_amount}.")
print(f"Your grand total is ${grand_total}.")