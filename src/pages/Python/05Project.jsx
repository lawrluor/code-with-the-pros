import CodeBlock from "../../components/CodeBlock";
import Collapsible from "../../components/Collapsible";

export default function Project05() {
	return <div className="lesson-container">
		<section>
			<h1>Project: Shipping Cost Calculator</h1>
			<p>Your online store is booming, and customers are placing orders from all over the world! You've decided to begin shipping orders to customers.</p>

			<p>During this project, you'll practice:</p>
			<ul>
				<li>How to define and call functions</li>
				<li>How to use parameters and return values</li>
				<li>How to use conditional statements inside a function</li>
			</ul>
		</section>

		{/* <section>
			<h2>Step 0: Define Your Inputs</h2>
			<p>Create variables <code className="inline">weight</code>, <code className="inline">destination</code>, and <code className="inline">speed</code> that will accept input from the user.</p>
			<ul>
				<li><code className="inline">weight</code> represents the weight of the package in pounds.</li>
				<li><code className="inline">destination</code> represents where the package is being shipped (<code className="inline">"domestic"</code> or <code className="inline">"international"</code>).</li>
				<li><code className="inline">speed</code> represents how fast the customer wants their order (<code className="inline">"standard"</code> or <code className="inline">"express"</code>).</li>
			</ul>
			<Collapsible title="Hint">
				Use <code className="inline">input()</code> to accept values from the user and store them in variables.
			</Collapsible>
		</section> */}

		<section>
			<h2>Step 0: Create the Function Header</h2>

			<p>
				Write the function header for a function called <code className="inline">calculate_shipping_cost</code>.
				This function should take three parameters: <code className="inline">weight</code>, <code className="inline">is_international</code>, and <code className="inline">speed</code>. Optionally, consider what data types the parameters should accept.
			</p>

			<Collapsible title="Hint">
				<p>Use the <code className="inline">def</code> keyword to define a function. The function's parameters should be in the parentheses <code className="inline">()</code> after the function's name.</p>

				<p>The parameters for the function should be:</p>
				<ul>
					<li><code className="inline">weight</code> (a float representing the package weight)</li>
					<li><code className="inline">is_international</code> (a boolean representing if the package is being shipped internationally or not)</li>
					<li><code className="inline">speed</code> (a string representing the shipping speed)</li>
				</ul>
			</Collapsible>
		</section>

		<section>
			<h2>Step 1: Create the Function Body</h2>
			<p>Inside the body of the function, create a variable called <code className="inline">cost</code> and set it to an initial value of <code className="inline">0.00</code>.</p>
		</section>

		<section>
			<h2>Step 2: Calculating the Base Cost</h2>
			<p>The shipping cost changes depending on whether the package is being shipped domestically or internationally, and the weight of the package. After some research, you've decided on the following rates: </p>
			<h3>International Shipping:</h3>
			<ul>
				<li><strong>5 pounds or less:</strong> $20.00</li>
				<li><strong>More than 5 pounds:</strong> $25.00</li>
			</ul>

			<h3>All Other Shipping:</h3>
			<ul>
				<li><strong>5 pounds or less:</strong> $10.00</li>
				<li><strong>More than 5 pounds:</strong> $15.00</li>
			</ul>

			<p>Write conditional statements that check the values of <code className="inline">weight</code> and <code className="inline">is_international</code>. Then, update the <code className="inline">cost</code> variable accordingly.</p>
			<Collapsible title="Hint">
				<p>Use an <code className="inline">if</code> statement to check if the <code className="inline">is_international</code> is <code className="inline">True</code>. If it is, check the value of <code className="inline">weight</code> and set the <code className="inline">cost</code> accordingly. If the <code className="inline">is_international</code> was <code className="inline">False</code>, repeat the same process.</p>
			</Collapsible>
		</section>

		<section>
			<h2>Step 3: Adjust Cost for Shipping Speed</h2>
			<p>You've decided to allow customers to upgrade to express shipping for faster deliveries! There are three possible shipping speeds:</p>
			<ul>
				<li><strong>Standard shipping</strong> does not change the price.</li>
				<li><strong>Express shipping</strong> costs an extra <strong>$10.00</strong> for domestic packages and <strong>$20.00</strong> for international packages.</li>
				<li><strong>Overnight shipping</strong> costs an extra <strong>$20.00</strong> for domestic packages and <strong>$40.00</strong> for international packages.</li>
			</ul>

			<Collapsible title="Hint">
				<p>Use another <code className="inline">if</code> statement inside the function to check the <code className="inline">speed</code> variable and add the correct extra charge.</p>
			</Collapsible>
		</section>

		<section>
			<h2>Step 4: Add a Handling Fee</h2>
			<p>To cover packaging and processing, every order has a <strong>$3.00 handling fee</strong>. Add this fee to <code className="inline">cost</code> inside the function.</p>
			<Collapsible title="Hint">
				<p>Use the <code className="inline">+=</code> operator to increase the <code className="inline">cost</code> variable.</p>
			</Collapsible>
		</section>

		<section>
			<h2>Step 5: Apply a Bulk Discount</h2>
			<p>Your store is now offering <strong>discounts for large orders</strong>!</p>
			<ul>
				<li>If the package weighs <strong>more than 25 pounds</strong>, apply a <strong>10% discount</strong> to the total cost.</li>
			</ul>

			<Collapsible title="Hint">
				<p>Multiply <code className="inline">cost</code> by <code className="inline">0.9</code> to apply a 10% discount.</p>
			</Collapsible>
		</section>

		<section>
			<h2>Step 6: Return the Calculated Cost</h2>
			<p>Finally, make sure that your code uses the <code className="inline">return</code> keyword on the calculated <code className="inline">cost</code> variable. Make sure that no matter what branch of the <code className="inline">if</code> statements you take, your function should return an float value.</p>

			<Collapsible title="Hint">
				<p>Use <code className="inline">return cost</code> to send the final result back when the function is called.</p>
			</Collapsible>
		</section>

		<section>
			<h2>Step 7: Call the Function and Display the Result</h2>
			<p>
				Now that you have the function, call it by passing it arguments <code className="inline">4.00</code>, <code className="inline">True</code>, and <code className="inline">"express"</code> for the <code className="inline">weight</code>, <code className="inline">is_international</code>, and <code className="inline">speed</code> parameters respectively.
				Store the returned value in a variable called <code className="inline">final_cost</code>.
			</p>
			<p>Then, using the <code className="inline">final_cost</code> variable, display the final shipping cost to the customer using string formatting. Your final output should look something like this: <code className="inline">"Your total shipping cost is $28.00"</code></p>

			<Collapsible title="Hint">
				<p>Call the function like this: <code className="inline">calculate_shipping_cost(4.00, True, "express")</code>.</p>
			</Collapsible>
		</section>

		<section>
			<h2>Step 8: Special Offer - Free Shipping for VIPs</h2>
			<p>Your company has launched a <strong>VIP membership program</strong> that offers free shipping! Modify your code so that if the customer enters <code className="inline">"VIP"</code> as their shipping speed, the shipping cost should be <strong>$0</strong>, regardless of any other factors.</p>

			<Collapsible title="Hint">
				<p>Add a condition in your <code className="inline">if</code> statement to check if <code className="inline">speed == "VIP"</code>. Is there a line where you can insert this code for maximum efficiency in your code?</p>
			</Collapsible>
		</section>

		<section>
			<h2>Step 9: Handling Orders</h2>
			<p>You've launched your store's shipping service, and several orders have come in already. Call your function with the correct arguments based on the orders below to calculate the correct shipping cost for each customer:</p>
			<ol>
				<li>An international package that weighs 12 pounds and is shipped overnight.</li>
				<li>A domestic package that weighs 6 pounds and is shipped via standard shipping.</li>
				<li>A VIP package that weighs 3 pounds and is shipped via standard shipping.</li>
				<li>An international package that weighs 22 pounds and is shipped via express shipping.</li>
				<li>A domestic package that weighs 3 pounds and is shipped via overnight shipping.</li>
			</ol>

			<Collapsible title="Hint">
				<p>Call the function like this: <code className="inline">calculate_shipping_cost(3.00, True, "standard")</code>.</p>
			</Collapsible>
		</section>

		<section>
			<h2>Wrapping Up</h2>
			<p>
				You've built an advanced shipping cost calculator that accounts for
				<strong>weight, destination type, shipping speed, handling fees, discounts, and VIP status</strong>. Try calling your function with different values to see how the shipping cost changes!
			</p>
		</section>

		<section>
			<h2>Bonus Challenges</h2>
			<p>How could you improve your function by using <strong>default parameters</strong>? What about using <code className="inline">input()</code>?</p>

			<Collapsible title="Solution">
				<h3>Sample Solution</h3>
				<p>Here's a complete implementation of the shipping cost calculator based on the steps we've covered:</p>
				<CodeBlock language="python" codeString={`def calculate_shipping_cost(weight, is_international, speed):
    cost = 0.00

    # Base cost based on weight and location
    if is_international:
        cost = 20.00 if weight <= 5 else 25.00
    else:
        cost = 10.00 if weight <= 5 else 15.00

    # Adjust cost for shipping speed
    if speed == "express":
        cost += 20.00 if is_international else 10.00
    elif speed == "overnight":
        cost += 40.00 if is_international else 20.00
    elif speed == "VIP":
        return 0.00  # Terminate function and return 0.00

    # Add handling fee
    cost += 3.00

    # Apply bulk discount if package is over 25 lbs
    if weight > 25:
        cost *= 0.9  # Apply 10% discount

    return cost

# Example function call:
final_cost = calculate_shipping_cost(4.00, True, "express")
print(f"Your total shipping cost is {final_cost:.2f}")`} />

				<h3>Using Nested <code className="inline">if</code> Statements</h3>
				<p>Here's another way to structure the function using nested <code className="inline">if</code> statements:</p>
				<CodeBlock language="python" codeString={`def calculate_shipping_cost(weight, is_international, speed):
    cost = 0.00

    # Determine base cost
    if is_international:
        if weight <= 5:
            cost = 20.00
        else:
            cost = 25.00
    else:
        if weight <= 5:
            cost = 10.00
        else:
            cost = 15.00

    # Adjust cost based on shipping speed
    if speed == "VIP":
        return 0.00  # Free shipping for VIP members
    else:
        if speed == "express":
            if is_international:
                cost += 20.00
            else:
                cost += 10.00
        elif speed == "overnight":
            if is_international:
                cost += 40.00
            else:
                cost += 20.00

    # Add handling fee
    cost += 3.00

    # Apply bulk discount for heavy packages
    if weight > 25:
        cost *= 0.9  # Apply 10% discount

    return cost

# Example function call
final_cost = calculate_shipping_cost(4.00, True, "express")
print(f"Your total shipping cost is {final_cost:.2f}")` } />

			<p>Which solution did you use? Which solution did you prefer? Did you end up using a combination of nested <code className="inline">if</code> statements with other conditional statements?</p>
			</Collapsible>
		</section>
	</div>
}