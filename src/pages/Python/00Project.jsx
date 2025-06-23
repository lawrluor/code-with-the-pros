import CodeBlock from "../../components/CodeBlock"
import Collapsible from "../../components/Collapsible"
import ProgressBar from "../../components/ProgressBar";
import useSequentialCounter from "../../hooks/useSequentialCounter"

const Project00 = () => {
  const { getCurrentNumber, getCurrentNumberAndIncrement } = useSequentialCounter(0);

  return (
    <div className="lesson-container">
      <ProgressBar />

      <section>
        <h1>Restaurant Payment System</h1>
        <p>Imagine that you are in charge of the payments system of a new restaurant. The owner has hired you to write a program to calculate the total cost of a meal ordered by a customer, then give them a receipt.</p>
      </section>

      <section>
        <h2 id={`step-${getCurrentNumber()}-creating-variables`}><a href={`#step-${getCurrentNumber()}-creating-variables`} className="section-link">Step {getCurrentNumberAndIncrement()}: Creating Variables</a></h2>
        <p>Let's start by defining variables to store key details about the order.</p>

        <ul>
          <li>Create a variable <code className="inline">restaurant_name</code> to store the name of your restaurant.</li>
          <li>Create a variable <code className="inline">customer_name</code> to store the name of the customer.</li>
          <li>Create variables <code className="inline">dish_one_name</code>, <code className="inline">dish_two_name</code>, and <code className="inline">dish_three_name</code> to store the names of three dishes ordered.</li>
          <li>Create variables <code className="inline">dish_one_price</code>, <code className="inline">dish_two_price</code>, and <code className="inline">dish_three_price</code> to store the prices of each dish as a float.</li>
          <li>Create a variable <code className="inline">total</code> and assign it an initial float value of <code className="inline">0.00</code>.</li>
        </ul>

        <Collapsible title="Hint">
          <CodeBlock
            language={"python"}
            codeString={`restaurant_name = "Your Restaurant"
customer_name = "Customer Name"
dish_one_name = "Dish 1"
dish_two_name = "Dish 2"
dish_three_name = "Dish 3"
dish_one_price = 10.99
dish_two_price = 8.49
dish_three_price = 12.99
total = 0.00`} />
        </Collapsible>
      </section>

      <section>
        <h2 id={`step-${getCurrentNumber()}-calculating-the-total`}><a href={`#step-${getCurrentNumber()}-calculating-the-total`} className="section-link">Step {getCurrentNumberAndIncrement()}: Calculating the Total</a></h2>
        <p>Now, let's calculate the total cost of the meal by adding the prices of the three dishes to the <code className="inline">total</code> variable.</p>

        <p>Print out the value of <code className="inline">total</code> to check your work.</p>

        <Collapsible title="Hint">
          <CodeBlock language={"python"} codeString={`total = dish_one_price + dish_two_price + dish_three_price`} />
        </Collapsible>
      </section>

      <section>
        <h2 id={`step-${getCurrentNumber()}-adding-tax-and-tip`}><a href={`#step-${getCurrentNumber()}-adding-tax-and-tip`} className="section-link">Step {getCurrentNumberAndIncrement()}: Adding Tax and Tip</a></h2>
        <p>Most restaurants in the United States include an additional tax and tip when computing the final bill. Let's add these calculations to our program:</p>

        <ul>
          <li>Create a variable <code className="inline">tax_rate</code> and assign it a value of <code className="inline">0.09</code> (9% tax).</li>
          <li>Calculate the tax amount by multiplying <code className="inline">tax_rate</code> by <code className="inline">total</code>. Store this value in a variable named <code className="inline">tax_amount</code>.</li>
          <li>Create a variable <code className="inline">tip_rate</code> and assign it a value of <code className="inline">0.15</code> (15% tip).</li>
          <li>Calculate the tip amount by multiplying <code className="inline">tip_rate</code> by <code className="inline">total</code>. Store this value in a variable named <code className="inline">tip_amount</code>.</li>
          <li>Create a new variable <code className="inline">grand_total</code> and assign it the value of adding <code className="inline">total</code>, <code className="inline">tax_amount</code>, and <code className="inline">tip_amount</code> together.</li>
          <li>Print <code className="inline">grand_total</code> to the console.</li>
        </ul>

        <Collapsible title="Hint">
          <CodeBlock
            language={"python"}
            codeString={`tax_rate = 0.09
tax_amount = total * tax_rate
tip_rate = 0.15
tip_amount = total * tip_rate
grand_total = total + tax_amount + tip_amount`} />
        </Collapsible>
      </section>

      <section>
        <h2 id={`step-${getCurrentNumber()}-displaying-the-receipt`}><a href={`#step-${getCurrentNumber()}-displaying-the-receipt`} className="section-link">Step {getCurrentNumberAndIncrement()}: Displaying the Receipt</a></h2>
        <p>Finally, let's display the receipt with the order details and final total.</p>

        <ul>
          <li>Print a message confirming the order was placed at your restaurant.</li>
          <li>Print each dish's name followed by its price.</li>
          <li>Print the subtotal, tax amount, tip amount, and the final grand total.</li>

          <p>Your final printed output should look something like this:</p>

          <CodeBlock
            language={"txt"}
            codeString={`Your order at The Cozy Kitchen was placed for Robert.
Grilled Chicken --- $12.99
Caesar Salad --- $8.49
Chocolate Cake --- $6.99
Your meal total is $28.47
Your tax total is $2.5623
Your tip total is $4.2705
Your grand total is $35.3028.`} />

          <p>Don't worry about the extra decimal places in your receipt for now! You'll learn how to fix this in the next lesson.</p>
        </ul>

        <Collapsible title="Hint">
          <CodeBlock
            language={"txt"}
            codeString={`"Your order at [YOUR_RESTAURANT_NAME] was placed for [YOUR_NAME]."
"[DISH_ONE_NAME] --- [DISH_ONE_PRICE]"
"[DISH_TWO_NAME] --- [DISH_TWO_PRICE]"
"[DISH_THREE_NAME] --- [DISH_THREE_PRICE]"
"Your meal total is [TOTAL]."
"Your tax total is [TAX_AMOUNT]."
"Your tip total is [TIP_AMOUNT]."
"Your grand total is [GRAND_TOTAL]."`} />
        </Collapsible>
      </section>

      <section>
        <h2 id={`wrapping-up`}><a href={`#wrapping-up`} className="section-link">Wrapping Up</a></h2>
        <p>Congratulations on finishing your first Python project! This project introduced you to variables, arithmetic operations, string concatenation, and printing — all essential building blocks for Python programming. Feel free to experiment and see how you can extend this program further!</p>
      </section>
    </div>
  )
}

export default Project00;