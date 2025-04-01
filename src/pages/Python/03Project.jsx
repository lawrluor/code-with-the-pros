import CodeBlock from "../../components/CodeBlock";
import Collapsible from "../../components/Collapsible";

const Project03 = () => {
	return (
		<div className="lesson-container">
			<section>
				<h1>Project: Discount Calculator</h1>
				<p>
					Many online stores offer discounts based on how much a customer spends. You've been tasked to
					create a program that calculates the total cost of an order and applies different discounts depending
					on the order total. Later, you'll be able to use this code to improve your previous projects.
				</p>

				<p>
					You'll practice using <code className="inline">if</code>, <code className="inline">elif</code>, and <code className="inline">else</code> statements
					to determine which discounts should be applied.
				</p>
			</section>

			<section>
				<h2 id="step-0-define-discount-tiers"><a href="#step-0-define-discount-tiers" className="section-link">Step 0: Define Discount Tiers</a></h2>
				<p>Set up the discount rules based on the total order amount:</p>
				<ul>
					<li>Orders between $50.00 and $99.99 get a <strong>5%</strong>  discount.</li>
					<li>Orders between $100.00 and $199.99 get a <strong>10%</strong> discount.</li>
					<li>Orders of $200.00 or more get a <strong>15%</strong> discount.</li>
				</ul>

				<p>For each discount level, create a variable on a separate line to store the discount percentage as a float.</p>

				<Collapsible title="Hint">
					<CodeBlock language="python" codeString={`# Discount tiers
discount_5 = 0.05   # 5% discount
discount_10 = 0.10  # 10% discount
discount_15 = 0.15  # 15% discount`} />
				</Collapsible>
			</section>

			<section>
				<h2 id="step-1-collect-order-details"><a href="#step-1-collect-order-details" className="section-link">Step 1: Collect Order Details</a></h2>
				<p>Ask the customer for the total cost of their order.</p>
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
				<h2 id="step-2-apply-the-discount"><a href="#step-2-apply-the-discount" className="section-link">Step 2: Apply the Discount</a></h2>
				<p>Use an <code className="inline">if-elif-else</code> structure to apply the correct discount. Include the following conditions:</p>
				<ol>
					<li>If <code className="inline">order_total</code> is at least $200, calculate 15% of the order total and store it in a variable called <code className="inline">discount</code>.</li>
					<li>Else, if <code className="inline">order_total</code> is at least $100, calculate the 10% discount and store it in a variable called <code className="inline">discount</code>.</li>
					<li>Else, if <code className="inline">order_total</code> is at least $50, calculate the 5% discount store it in a variable called <code className="inline">discount</code>.</li>
					<li>Otherwise, no discount is applied. Initialize the <code className="inline">discount</code> variable to <code className="inline">0</code>.</li>
				</ol>

				<p>Remember, only one of these conditions will be met. You can use <code className="inline">elif</code> to add additional conditions.</p>

				<Collapsible title="Hint">
					<p>The discount calculation should look like this:</p>
					<CodeBlock language="python" codeString={`if order_total >= 200:
    discount = order_total * discount_15
elif order_total >= 100:
    discount = order_total * discount_10
elif order_total >= 50:
    discount = order_total * discount_5
else:
    discount = 0`} />
				</Collapsible>
			</section>

			<section>
				<h2 id="step-3-calculate-final-price"><a href="#step-3-calculate-final-price" className="section-link">Step 3: Calculate Final Price</a></h2>
				<p>Now that you have the discount amount, subtract it from the original order total to get the final price.</p>
				<p>Create a new variable called <code className="inline">final_total</code> that stores the result of this calculation.</p>

				<Collapsible title="Hint">
					<p>Perform the subtraction and store the result in the variable <code className="inline">final_total</code>.</p>
					<CodeBlock language="python" codeString={`final_total = order_total - discount`} />
				</Collapsible>
			</section>

			<section>
				<h2 id="step-4-display-result"><a href="#step-4-display-result" className="section-link">Step 4: Display Result</a></h2>
				<p>Your program should output one of two types of messages, depending on the order total.</p>

				<ol>
					<li>If there <strong>was</strong> a discount applied, display the discount amount and the final total.</li>
					<li>If <strong>no</strong> discount was applied, display the original order total.</li>
				</ol>

				<p>Your final output, depending on what you input as your order total, should look something like this:</p>

				<CodeBlock language="txt" codeString={`15% discount applied! Your new total is: $170.00`} />

				<p>or</p>

				<CodeBlock language="txt" codeString={`No discount applied. Your total remains: $40.00`} />

				<Collapsible title="Hint">
					<p>Use an <code className="inline">if</code> statement to check if <code className="inline">discount</code> is greater than <code className="inline">0</code> in order to generate the correct output.</p>
				</Collapsible>
			</section>

			<section>
				<h2 id="step-5-test-and-refine"><a href="#step-5-test-and-refine" className="section-link">Step 5: Test and Refine</a></h2>
				<h3>Check Your Work</h3>
				<Collapsible title="Answer">
					<CodeBlock language="python" codeString={`# Step 0: Define discount tiers
discount_5 = 0.05  # 5% discount
discount_10 = 0.10 # 10% discount
discount_15 = 0.15 # 15% discount

# Step 1: Collect order details
order_total = float(input("Enter your total order cost: "))

# Step 2: Apply the discount using if-elif-else
if order_total >= 200:
    discount = order_total * discount_15
elif order_total >= 100:
    discount = order_total * discount_10
elif order_total >= 50:
    discount = order_total * discount_5
else:
    discount = 0

# Step 3: Calculate final price
final_total = order_total - discount

# Step 4: Display result
if discount > 0:
    print(f"{(discount/order_total)*100:.0f}% discount applied! Your new total is: {final_total:.2f}")
else:
    print(f"No discount applied. Your total remains: {final_total:.2f}")`} />
				</Collapsible>
			</section>

			<section>
				<h2 id="additional-challenges"><a href="#additional-challenges" className="section-link">Additional Challenges</a></h2>
				<p>Try adding and integrating this code to the end of one of your previous projects that dealt with generating a receipt or an invoice. Reflect on how this makes your projects more interactive and engaging!</p>
			</section>
		</div>
	)
}

export default Project03;