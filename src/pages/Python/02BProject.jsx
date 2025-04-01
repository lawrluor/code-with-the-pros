import CodeBlock from "../../components/CodeBlock";
import Collapsible from "../../components/Collapsible";

const Project02B = () => {
	return (
		<div className="lesson-container">
			<section>
				<h1>Project: Checkout Form</h1>
				<p>
					Imagine you're designing an online outdoor equipment store and you need a program to process customer purchases.
					In this project, you'll create a checkout form where the user enters their details, and the program will generate an <em>invoice</em>. An invoice, sort of like a receipt, is a document that lists the items purchased by the customer, along with the total cost. However, the customer has the option to review the invoice before paying it.
				</p>

				<p>
					You'll practice using <code className="inline">input()</code> to collect user data,
					and you'll format the information to display an invoice at the end.
				</p>
			</section>

			<section>
				<h2 id="step-0-name-your-store"><a href="#step-0-name-your-store" className="section-link">Step 0: Name Your Store</a></h2>
				<p>Pick a name for your store, and assign that hard-coded string to a variable called <code className="inline">store_name</code>. Then, print a message welcoming the customer to your store.</p>

				<Collapsible title="Hint">
					<CodeBlock language="python" codeString={"store_name = 'The Great Outdoors'"} />
				</Collapsible>
			</section>

			<section>
				<h2 id="step-1-setting-up-project"><a href="#step-1-setting-up-project" className="section-link">Step 1: Setting Up the Project</a></h2>
				<p>Start by asking the customer for their name and payment method.</p>
				<ol>
					<li>Prompt the customer to enter their name and store the result in a variable called <code className="inline">name</code>.</li>
					<li>Prompt the customer to enter their preferred payment method (e.g., credit card, PayPal, cash) and store the result in a variable called <code className="inline">payment_method</code>.</li>
				</ol>

				<Collapsible title="Hint">
					<p>This should like something like <code className="inline">name = input("Enter your name: ")</code>.</p>
				</Collapsible>
			</section>

			<section>
				<h2 id="step-2-storing-purchase-details"><a href="#step-2-storing-purchase-details" className="section-link">Step 2: Storing Purchase Details</a></h2>
				<p>Next, collect details about the item the customer is purchasing.</p>
				<ol>
					<li>Prompt the customer to enter the name of the product they are buying and store the result in a variable called <code className="inline">item</code>.</li>
					<li>Prompt the customer to enter the <code className="inline">price</code> of their item and store the result in a variable called <code className="inline">price</code>. This variable should be a <code className="inline">float</code>.</li>
					<li>Prompt the customer to enter the quantity of the item they are buying and store that result in a variable called <code className="inline">quantity</code>. This variable should be an <code className="inline">int</code>.</li>
				</ol>

				<Collapsible title="Hint">
					<p>
						Use <code className="inline">float()</code> for price, since it should be a decimal value, and <code className="inline">int()</code> for quantity,
						since it should be a whole number.
					</p>
				</Collapsible>
			</section>

			<section>
				<h2 id="step-3-calculating-total-cost"><a href="#step-3-calculating-total-cost" className="section-link">Step 3: Calculating Total Cost</a></h2>
				<p>Now that we have the item's price and quantity, we can calculate the total cost.</p>
				<ol>
					<li>Create a variable <code className="inline">total_cost</code></li>
					<li>Assign to <code className="inline">total_cost</code> the result of multiplying <code className="inline">price</code> by <code className="inline">quantity</code>.</li>
				</ol>

				<Collapsible title="Hint">
					<p>Use the multiplication operator <code className="inline">*</code> to perform this calculation.</p>
				</Collapsible>
			</section>

			<section>
				<h2 id="step-4-formatting-the-invoice"><a href="#step-4-formatting-the-invoice" className="section-link">Step 4: Formatting the Invoice</a></h2>
				<p>Let's now format and display a digital invoice. Use string formatting to display the store name,customer's name, item purchased, quantity, price, total cost, and payment method. For example, if the user enters:</p>
				<ul>
					<li><code className="inline">name</code>: Alex</li>
					<li><code className="inline">item</code>: Backpack</li>
					<li><code className="inline">price</code>: 30</li>
					<li><code className="inline">quantity</code>: 2</li>
					<li><code className="inline">payment_method</code>: Credit Card</li>
				</ul>

				<p>The program should output:</p>

				<CodeBlock language={"txt"} codeString={`Invoice from The Great Outdoors
------------------------------
Customer: Alex
Item Purchased: Backpack
Quantity: 2
Price per item: $30.00
Total Cost: $60.00
Payment Method: Credit Card
------------------------------`} />

			<p>Use the format specifier <code className="inline">:2f</code> to round the total cost to two decimal places.</p>
			<Collapsible title="Hint">
					<p>Here's how to use the format specifier to round a float to two decimal places before displaying it in a string:</p>
					<CodeBlock language={"python"} codeString={`x = 1.2345
print("x is {:.2f}".format(x))  # Output: x is 1.23`} />
			</Collapsible>
			</section>

			<section>
				<h3>Check Your Work</h3>
				<Collapsible title="Answer">
					<CodeBlock language={"python"} codeString={`# Example Project

store_name = "Outdoors Online"
print("Welcome to " + store_name + "!")

# Step 1: Collect customer details
name = input("Enter your name: ")
payment_method = input("Enter your payment method: ")

# Step 2: Collect purchase details
item = input("Enter the item you are purchasing: ")
price = float(input("Enter the price of the item: "))
quantity = int(input("Enter the quantity: "))

# Step 3: Calculate total cost
total_cost = price * quantity

# Step 4: Display invoice
invoice = """
Invoice from {store_name}
------------------------------
Customer: {name}
Item Purchased: {item}
Quantity: {quantity}
Price per item: {price:.2f}
Total Cost: {total_cost:.2f}
Payment Method: {payment_method}
------------------------------
""".format(store_name, name, item, quantity, price, total_cost, payment_method)

print(invoice)`} />
				</Collapsible>
			</section>

			{/* <section>
				<h2>Further Projects</h2>
				<p>Expand your checkout system by adding more features:</p>
				<ul>
					<li>Offer a **discount** if the total cost is above a certain amount.</li>
					<li>Allow the customer to purchase **multiple different items** in one transaction.</li>
					<li>Include **sales tax** in the final total.</li>
				</ul>
			</section> */}
		</div>
	)
}

export default Project02B;