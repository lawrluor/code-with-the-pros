import CodeBlock from "../../components/CodeBlock";
import Collapsible from "../../components/Collapsible";

const Project03B = () => {
	return (
		<div className="lesson-container">
			<section>
				<h1>Project: Order Discount Calculator</h1>
				<p>
					Many online stores offer discounts when a customer spends a certain amount. In this project, you'll
					create a program that calculates the total cost of an order and applies a discount if the order qualifies.
				</p>

				<p>
					You'll practice using <code className="inline">if</code> and <code className="inline">else</code> statements
					to determine whether a discount should be applied. If the order qualifies, the program will display the
					new total after applying the discount.
				</p>
			</section>

			<section>
				<h2>Step 0: Set the Discount Threshold and Rate</h2>
				<p>
					Start by defining the minimum order price required to receive a discount. Assign this value to
					a variable called <code className="inline">discount_threshold</code>. Then, define the discount rate as a percentage
					and store it in a variable called <code className="inline">discount_rate</code>.
				</p>

				<p>For this project:</p>
				<ul>
					<li>The discount applies to orders of <code className="inline">100</code> dollars or more.</li>
					<li>The discount rate is <code className="inline">10%</code> (or <code className="inline">0.10</code> as a decimal).</li>
				</ul>

				<Collapsible title="Hint">
					<CodeBlock language="python" codeString={"discount_threshold = 100\ndiscount_rate = 0.10"} />
				</Collapsible>
			</section>

			<section>
				<h2>Step 1: Collect Order Details</h2>
				<p>Next, ask the customer for the total cost of their order.</p>
				<ol>
					<li>Prompt the user to enter the total cost and store it in a variable called <code className="inline">order_total</code>.</li>
					<li>Convert the input into a <code className="inline">float</code> since prices can have decimals.</li>
				</ol>

				<Collapsible title="Hint">
					<p>Use <code className="inline">float()</code> to convert the input.</p>
					<CodeBlock language="python" codeString={'order_total = float(input("Enter your total order cost: "))'} />
				</Collapsible>
			</section>

			<section>
				<h2>Step 2: Apply the Discount (If Eligible)</h2>
				<p>Now, use an <code className="inline">if-else</code> statement to check if the order qualifies for a discount.</p>
				<ol>
					<li>If <code className="inline">order_total</code> is greater than or equal to <code className="inline">discount_threshold</code>, apply the discount.</li>
					<li>To calculate the discount, multiply <code className="inline">order_total</code> by <code className="inline">discount_rate</code>.</li>
					<li>Subtract the discount from <code className="inline">order_total</code> to get the new total.</li>
					<li>If the order does not qualify, keep the total the same.</li>
				</ol>

				<Collapsible title="Hint">
					<p>The discount is calculated as:</p>
					<CodeBlock language="python" codeString={"discount = order_total * discount_rate"} />
					<p>Then, subtract it from <code className="inline">order_total</code>:</p>
					<CodeBlock language="python" codeString={"order_total = order_total - discount"} />
				</Collapsible>
			</section>

			<section>
				<h2>Step 3: Display the Final Price</h2>
				<p>Your program should output one of the following messages:</p>

				<CodeBlock language="txt" codeString={`Discount applied! Your new total is: $90.00`} />

				<p>or</p>

				<CodeBlock language="txt" codeString={`No discount applied. Your total remains: $85.00`} />

				<Collapsible title="Hint">
					<p>Use an <code className="inline">else</code> statement for orders that do not qualify for a discount.</p>
				</Collapsible>
			</section>

			<section>
				<h3>Check Your Work</h3>
				<Collapsible title="Answer">
					<CodeBlock language="python" codeString={`# Step 0: Set the discount threshold and rate
discount_threshold = 100
discount_rate = 0.10

# Step 1: Collect order details
order_total = float(input("Enter your total order cost: "))

# Step 2: Apply the discount if the order qualifies
if order_total >= discount_threshold:
    discount = order_total * discount_rate
    order_total = order_total - discount
    print("Discount applied! Your new total is: {order_total:.2f}.format(order_total))")
else:
    print("No discount applied. Your total remains: {order_total:.2f}.format(order_total))")`} />
				</Collapsible>
			</section>
		</div>
	)
}

export default Project03B;

// import CodeBlock from "../../components/CodeBlock";
// import Collapsible from "../../components/Collapsible";

// const Project03 = () => {
// 	return (
// 		<div className="lesson-container">
// 			<section>
// 				<h1>Project: Order Eligibility Checker</h1>
// 				<p>
// 					Imagine you're creating a system for an online store that determines if a customer's order qualifies for free shipping.
// 					Some stores offer free shipping when the total order amount meets a certain threshold.
// 				</p>

// 				<p>
// 					In this project, you'll write a program that calculates the total cost of an order and determines whether the
// 					customer qualifies for free shipping. You'll practice using <code className="inline">if</code> and <code className="inline">else</code> statements
// 					to check conditions and provide different responses based on the customer's order.
// 				</p>
// 			</section>

// 			<section>
// 				<h2>Step 0: Set the Free Shipping Threshold</h2>
// 				<p>
// 					Start by setting a minimum order amount required for free shipping. Assign this value to a variable
// 					called <code className="inline">free_shipping_threshold</code>. For this project, set the threshold to <code className="inline">50</code> dollars.
// 				</p>

// 				<Collapsible title="Hint">
// 					<CodeBlock language="python" codeString={"free_shipping_threshold = 50"} />
// 				</Collapsible>
// 			</section>

// 			<section>
// 				<h2>Step 1: Collect Order Details</h2>
// 				<p>Next, ask the customer for details about their order.</p>
// 				<ol>
// 					<li>Prompt the user to enter the total cost of their order and store it in a variable called <code className="inline">order_total</code>. Convert this input to a <code className="inline">float</code>.</li>
// 				</ol>

// 				<Collapsible title="Hint">
// 					<p>Remember to use <code className="inline">float()</code> to convert the input.</p>
// 					<CodeBlock language="python" codeString={'order_total = float(input("Enter your total order cost: "))'} />
// 				</Collapsible>
// 			</section>

// 			<section>
// 				<h2>Step 2: Check for Free Shipping</h2>
// 				<p>Now, use an <code className="inline">if-else</code> statement to check whether the order qualifies for free shipping.</p>
// 				<ol>
// 					<li>If <code className="inline">order_total</code> is greater than or equal to <code className="inline">free_shipping_threshold</code>, print a message saying the order qualifies for free shipping.</li>
// 					<li>Otherwise, print a message stating that shipping fees apply.</li>
// 				</ol>

// 				<Collapsible title="Hint">
// 					<p>Use a comparison operator (<code className="inline">>=</code>) inside an <code className="inline">if</code> statement.</p>
// 				</Collapsible>
// 			</section>

// 			<section>
// 				<h2>Step 3: Display the Final Message</h2>
// 				<p>Your program should output one of the following messages based on the order amount:</p>

// 				<CodeBlock language="txt" codeString={`Congratulations! Your order qualifies for free shipping!`} />

// 				<p>or</p>

// 				<CodeBlock language="txt" codeString={`Your order does not qualify for free shipping. A shipping fee will be applied.`} />

// 				<Collapsible title="Hint">
// 					<p>Use an <code className="inline">else</code> statement to handle cases where the order does not qualify for free shipping.</p>
// 				</Collapsible>
// 			</section>

// 			<section>
// 				<h3>Check Your Work</h3>
// 				<Collapsible title="Answer">
// 					<CodeBlock language="python" codeString={`# Step 0: Set the free shipping threshold
// free_shipping_threshold = 50

// # Step 1: Collect order details
// order_total = float(input("Enter your total order cost: "))

// # Step 2: Check for free shipping
// if order_total >= free_shipping_threshold:
//     print("Congratulations! Your order qualifies for free shipping!")
// else:
//     print("Your order does not qualify for free shipping. A shipping fee will be applied.")`} />
// 				</Collapsible>
// 			</section>
// 		</div>
// 	)
// }

// export default Project03;