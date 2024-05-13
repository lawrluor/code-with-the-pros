import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const WhileLoops = () => {
    return (
        <div className="lesson-container">
            <h1>While Loops</h1>

            <section>
                <h2>What is a While Loop?</h2>
                <p>A <code className="inline">while</code> loop in Python repeatedly executes a block of code as long as a given condition evaluates as <code className="inline">True</code>. It's used to perform repeated actions when the number of iterations is not known before the loop starts, which differs from <code className="inline">for</code> loops that iterate over a fixed length or fixed sequence.</p>
            </section>

            <section>
                <h2>Basic Syntax of a While Loop</h2>
                <p>The basic structure of a <code className="inline">while</code> loop includes the loop condition and a block of code that executes repeatedly:</p>
                <CodeBlock language={"python"} codeString={`# Example: Basic while loop
counter = 0
while counter < 5:
    print("Counting:", counter)
    counter += 1
`} />
                <p>This loop starts with a <code className="inline">counter</code> set to 0. The condition <code className="inline">counter &lt; 5</code> is checked, and as long as it's true, the code inside the loop runs, printing the counter's current value and then incrementing the counter by 1. When <code className="inline">counter</code> reaches 5, the condition becomes false, and the loop stops.</p>
            </section>

            <section>
                <h2>Using While Loops</h2>
                <p>While loops can be used to process strings where you might need to examine each character until a certain condition is met, such as finding a specific character or processing until the end of the string.</p>
                <CodeBlock language={"python"} codeString={`# Example: Iterate through a string with a while loop
message = "hello"
index = 0
while index < len(message):
	print("Character at position", index, "is", message[index])
	index += 1
`} />
                <p>In this example, the loop iterates through each character in the string "hello" using an <code className="inline">index</code>. The condition checks if the <code className="inline">index</code> is less than the length of <code className="inline">message</code>, ensuring the loop runs for each character in the string.</p>

								<CodeBlock language={"python"} codeString={`# Example: Decrementing while loop
countdown = 10
while countdown > 0:
	print("Counting down:", countdown)
	countdown -= 1
print("Lift off!")
`} />
								<p>In this example, the <code className="inline">countdown</code> variable starts at 10 and is decremented by 1 in each iteration of the loop. The loop continues running as long as <code className="inline">countdown</code> is greater than 0. Once <code className="inline">countdown</code> reaches zero, the loop exits, and "Lift off!" is printed, signaling the end of the countdown.</p>
            </section>

						<section>
							<h2>While Loops as Repeated <code className="inline">if</code> Statements</h2>
							<p>While loops can be thought of as repeated <code className="inline">if</code> statements. However, unlike an <code className="inline">if</code> statement that checks a condition once, a while loop will continually re-evaluate its condition after each iteration, making it ideal for ensuring a user's input is valid.</p>
							<p>Let's look at an example comparing how an <code className="inline">if</code> statement and a while loop would handle user input:</p>

							<CodeBlock language={"python"} codeString={`# If statement example: Checking input once
user_input = input("Enter a number greater than 10: ")
if int(user_input) <= 10:
	print("That's not a valid number but I won't be able to check again.")

# While loop equivalent: Continuously prompting until valid input is received
user_input = input("Enter a number greater than 10: ")
while int(user_input) <= 10:
	print("That's not a valid number, please try again.")
	user_input = input("Enter a number greater than 10: ")
print("Thank you for entering a valid number!")
					`} />
							<p>In the <code className="inline">if</code> statement example, the program asks the user once for a number and checks if it is greater than 10. If the user fails to comply, the program notes the error but is not able to start over and prompt again, even though the input the user gave was invalid.</p>

							<p>In contrast, the <code className="inline">while</code> loop continues to prompt the user for input until a valid number is entered. This repeated checking is akin to a looped <code className="inline">if</code> statement that keeps ensuring the condition <code className="inline">number &gt; 10</code> is met before proceeding.</p>
					</section>

					<section>
						<h2>The <code className="inline">break</code> Keyword</h2>
						<p>In while loops, the ideal scenario is for the loop to terminate based on its condition. However, sometimes you may need to exit a loop prematurely based on a specific situation that cannot be predicted by the initial loop condition. This is where the <code className="inline">break</code> keyword comes into play.</p>

						<p>The <code className="inline">break</code> keyword immediately terminates the loop, regardless of the loop's original condition. It provides a way to exit the loop from inside the loop body, typically under a conditional statement.</p>

						<CodeBlock language={"python"} codeString={`# Example: Using break to exit a while loop early
count = 0
while count < 10:
	print("Count is:", count)
	if count == 5:
		print("Count reached 5, breaking out of the loop.")
		break
	count += 1
`} />
						<p>This loop is set to run until the count reaches 10. However, within the loop, there's a check to see if the count equals 5. When the count does reach 5, the <code className="inline">break</code> keyword is executed, which immediately stops the loop. This example demonstrates how <code className="inline">break</code> can be used to halt the execution of a loop based on a condition met inside the loop body, even if the primary loop condition would allow it to continue.</p>

						<h3>Using <code className="inline">break</code> for random numbers</h3>
						<p>The previous example is unlikely to be a way that you use the <code className="inline">break</code> keyword, as a better method would be simply to set the looping condition to while <code className="inline">count &lt;= 5</code>. Here's a more realistic example of when you would use <code className="inline">break</code>.</p>

						<CodeBlock language={"python"} codeString={`import random  # code for generating random numbers

while True:
	number = random.randint(1, 10)  # Generate a random number between 1 and 10
	print("Random number generated:", number)
	if number == 7:
		print("Lucky number 7! Breaking out of the loop.")
		break
`} />
						<p>In this example, a random number between 1 and 10 is generated in each iteration. The loop continues indefinitely because its condition is always <code className="inline">True</code>. However, if the number 7 is generated, a condition within the loop checks for this outcome and executes a <code className="inline">break</code> statement, which stops the loop. This demonstrates how <code className="inline">break</code> can be used to provide an exit path in scenarios where continuing the loop becomes undesirable or unnecessary based on runtime conditions.</p>

						<p>While the <code className="inline">break</code> keyword is powerful, it should be used judiciously. Relying heavily on <code className="inline">break</code> can make the loop logic hard to follow, especially in complex loops. Ideally, the loop's condition should be sufficient to control its termination, and <code className="inline">break</code> should be reserved for exceptional circumstances where an immediate exit is required.</p>
					</section>


					<section>
						<h2>Infinite While Loops</h2>
						<p>We've learned about different ways a while loop can terminate. What happens if we don't apply these techniques correctly? It is possible to run into situations where your while loop never terminates, resulting in your program freezing or becoming unresponsive. This is known as an infinite while loop - this ccurs when the loop condition never becomes <code className="inline">false</code>.</p>

						<p>Here's an example of a common mistake that leads to an infinite loop:</p>

						<CodeBlock language={"python"} codeString={`counter = 0
while counter < 5:
	print("Counting:", counter)
`} />
						<p>Here, the <code className="inline">counter</code> variable is never incremented inside the loop, so the condition <code className="inline">counter &lt; 5</code> will always be true. This results in an infinite loop that continuously prints "Counting: 0" without stopping.</p>

						<h3>While Loops with <code className="inline">input()</code></h3>

						<p>Sometimes we can write an "intentional" infinite loop that uses the <code className="inline">break</code> keyword instead of the initial looping condition to exit the loop safely. In this case, we write an infinite loops intentionally to keep a program running indefinitely until an external action occurs, such as user input or an error that breaks the loop.</p>

						<CodeBlock language={"python"} codeString={`# Example: Infinite while loop with a break condition
while True:
	response = input("Enter 'quit' to exit: ")
	if response == 'quit':
			break
	print("You entered:", response)
`} />
						<p>This loop will continually prompt the user to enter a response. If the user types 'quit', the <code className="inline">break</code> statement is executed, which immediately exits the loop. Otherwise, it will print the user's response and prompt again. This example demonstrates a practical use of an infinite loop where the loop's continuation is directly controlled by user interaction.</p>

						<p>While loops should include a clear and reachable exit condition to prevent them from running indefinitely in an uncontrollable manner. The use of the <code className="inline">break</code> statement here allows for a safe and intentional exit from the loop based on a specific user action.</p>
					</section>


					<section>
						<h2>When to Use a While Loop</h2>
						<p>While loops are particularly useful when:</p>
						<ul>
							<li>The number of iterations is not known beforehand.</li>
							<li>An operation needs to continue until a certain condition changes, such as reaching the end of a string or when a specific character is found.</li>
							<li>You need to perform a check before executing the loop body, such as validating input.</li>
						</ul>
					</section>

					<section>
						<h2>Challenges</h2>
						<p>Try these exercises to practice your new skills:</p>
						<ul>
							<li>Write a while loop that counts the number of vowels in a string.</li>
							<li>Create a while loop that stops reading a string once it hits a period ('.').</li>
						</ul>
					</section>
        </div>
    );
};

export default WhileLoops;
