import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const FunctionsLesson = () => {
    return (
        <div className="lesson-container">
            <h1>Functions</h1>
            <p>Functions are essential tools in programming that help you organize and reuse code. In this lesson, you'll learn about the structure of functions, how to use them, and how to write them.</p>

						<h2>Common Python Functions</h2>
            <p>You've already encountered and used many functions, such as:</p>
            <ul>
                <li><code className='inline'>print()</code> - Displays information to the screen.</li>
                <li><code className='inline'>len()</code> - Determines the number of items in a container (like a list or string).</li>
            </ul>

            <p>These common functions simplify coding by providing built-in functionality that you can reuse without needing to implement from scratch every time you need it. For example, imagine needing to dedicate several lines of code to whenever you needed to display a message to the screen!</p>

            <CodeBlock language={"python"} codeString={`# Example of using print() and len()
message = "Hello, world!"
print(message)  # Outputs: Hello, world!
print("The length of the message is:", len(message))  # Outputs: The length of the message is: 13`} />

            <h2>Methods are Special Functions</h2>
            <p>Methods are a subset of functions that are associated with specific data types. For example, strings and lists each have methods that are specifically designed to operate on each data type respectively.</p>
            <ul>
                <li><code className='inline'>.append()</code> - Adds an item to the end of a list. <code className='inline'>.append()</code> does not work on other data types that are not lists.</li>
                <li><code className='inline'>.lower()</code> - Converts all characters in a string to lowercase. <code className='inline'>.lower()</code> does not work on other data types that are not strings.</li>
            </ul>
            <CodeBlock language={"python"} codeString={`fruits = ["Apple", "Banana"]
fruits.append("Cherry")
print(fruits)  # Outputs: ['Apple', 'Banana', 'Cherry']

greeting = "Hello World"
print(greeting.lower())  # Outputs: hello world`} />

						<p>Methods are uniquely identified by the fact that they are prefixed with a dot (<code className="inline">.</code>) character. We will explore the use of the dot prefix further in future lessons.</p>


						<h2>Why Use Functions?</h2>
            <p>Using functions makes your code more concise and helps avoid repetition. It allows you to write a set of statements once and run them whenever you need to, without rewriting them each time.</p>

            <h3>Without Functions</h3>
            <p>Imagine you have to send the same greeting to five people. (Perhaps you don't need to imagine this!) You can do this easily, but you end up repeating a lot of work and taking a lot of time.</p>
            <CodeBlock language={"python"} codeString={`print("Hello, welcome to our store!")
print("We hope you find everything you need.")
print("Have a great day!")

print("Hello, welcome to our store!")
print("We hope you find everything you need.")
print("Have a great day!")

print("Hello, welcome to our store!")
print("We hope you find everything you need.")
print("Have a great day!")

print("Hello, welcome to our store!")
print("We hope you find everything you need.")
print("Have a great day!")

print("Hello, welcome to our store!")
print("We hope you find everything you need.")
print("Have a great day!")`} />

            <h3>Using Functions</h3>
            <p>Now, let's simplify the process by defining a function to handle these greetings:</p>
            <CodeBlock language={"python"} codeString={`# Define the function greet() which bundles the print statements together as one group
def greet():
		print("Hello, welcome to our store!")
		print("We hope you find everything you need.")
		print("Have a great day!")

# Use the function to repeat the same greeting five times in a row:
greet()
greet()
greet()
greet()
greet()`} />
            <p>The <code className="inline">greet()</code> function acts as a "bundler" or "container" that allows us to execute all three print statements at once as a group. Not only is this approach is much cleaner already, but if we need to issue this greeting even more times in the future (say 100 more times), the efficiency in time and code becomes even more apparent. In short, the benefits of using functions are:</p>

            <ul>
                <li><strong>Reduces Redundancy:</strong> You avoid writing the same statements multiple times throughout your code.</li>
                <li><strong>Enhances Clarity:</strong> Encapsulating the greeting in a function makes the main part of your code less cluttered and more focused on its primary tasks.</li>
                <li><strong>Simplifies Maintenance:</strong> If the greeting needs to be changed, you only need to update it in one place instead of repeating the change throughout the entirety of your code.</li>
            </ul>


            <h2>Defining a Function</h2>
						<p>So far, we have only used pre-defined, built-in functions that Python has provided us. However, we can define our own functions as well. This is useful for repeating tasks.</p>
            <p>A function in Python is defined using the <code className="inline">def</code> keyword, followed by a name, parentheses (which may include parameters), and a colon. The code block within the function is indented.</p>
            <CodeBlock language={"python"} codeString={`def greet(name):
    return "Hello " + name + "!"`} />
            <p>This function, <code className="inline">greet</code>, takes one parameter and returns a string that includes the name provided.</p>

            <h2>Understanding the Return Statement</h2>
            <p>The <code className="inline">return</code> statement in a function is used to exit the function and go back to where it was called, optionally passing back an expression to the caller. A function without a <code className="inline">return</code> statement implicitly returns <code className="inline">None</code>.</p>

            <h3>Example: Return Statement</h3>
            <CodeBlock language={"python"} codeString={`def sum_numbers(a, b):
    return a + b  # Returns the sum of a and b

result = sum_numbers(5, 3)
print(result)  # Outputs: 8`} />
            <p>In this example, <code className="inline">sum_numbers</code> function calculates the sum of two numbers and uses <code className="inline">return</code> to give that result back to where it was called. The variable <code className="inline">result</code> will receive the value <code className="inline">8</code> and then print it.</p>

            <h3>Example: Functions Without Return</h3>
            <CodeBlock language={"python"} codeString={`def print_message(message):
    print("Message: " + message)
    # No return statement

print_message("Hello, Python!")  # Prints: Message: Hello, Python!
print(print_message("Hello, Python!"))  # Prints: Message: Hello, Python! followed by None`} />
            <p>This function prints a message but does not return anything. Notice that when we print the function call itself, it outputs <code className="inline">None</code>, which is the default return value for functions that do not explicitly return anything.</p>

            <h2>Methods vs. Functions</h2>
            <p>Methods are like functions, but they are associated with objects and can modify the object's state or perform operations related to it.</p>
            <CodeBlock language={"python"} codeString={`fruits = ["apple", "banana", "cherry"]
fruits.append("orange")  # append() is a method related to list objects`} />
            <p>The <code className="inline">append()</code> method adds an element to the list, altering the list's state.</p>

            <h2>Practice Challenges</h2>
						<ul>
            	<li>Write a function that converts temperatures from Fahrenheit to Celsius and uses a return statement to give the result.</li>
							<li>Write a function that does the opposite conversion.</li>
						</ul>
        </div>
    );
}

export default FunctionsLesson;
