import React from 'react';
import Collapsible from '../../components/Collapsible';
import CodeBlock from '../../components/CodeBlock';

const FunctionsLesson = () => {
    return ( <div className="lesson-container">
        <section>
            <h1>Functions</h1>
            <p>A function is a piece of code that performs a specific <em>repeatable</em> task or action. In this lesson, you'll learn about the structure of functions, how to use them, and how to create your own functions.</p>
        </section>

        <section>
			<h2 id="common-python-functions"><a href="#common-python-functions" className="section-link">Common Python Functions</a></h2>
            <p>You've already encountered and used many functions, such as:</p>
            <ul>
                <li><code className='inline'>print()</code> - Displays information to the screen.</li>
                <li><code className='inline'>type()</code> - Checks the data type of a value in Python.</li>
            </ul>

            <CodeBlock language={"python"} codeString={`# Usage
print('Hello, World!')
type('Hello, World!')`} />

            <p>These functions are <strong>built-in</strong> functions, which means that they are included with the Python standard library and can immediately be used in your code without first creating them or <em>importing</em> them from other files.</p>

            <Collapsible title="Challenge">
                <p>Name one other function that you used in previous chapters or projects.</p>
            </Collapsible>
        </section>

        <section>
            <h2 id="functions-vs-methods"><a href="#functions-vs-methods" className="section-link">Functions vs. Methods</a></h2>
            <p>We've come across several string methods in Python already:</p>
            <ul>
                <li><code className='inline'>.lower()</code>: Converts all characters in a string to lowercase.</li>
                <li><code className='inline'>.isupper()</code>: Returns <code className='inline'>True</code> if all characters in a string are uppercase.</li>
            </ul>

            <p>Like a function, a method also performs a specific repeatable task. Some programmers will use the terms <em>function</em> and <em>method</em> interchangeably, but there is a technical difference between them in Python. Methods are special functions that are associated with specific data types. For example, the above string methods would NOT work on integers or floats.</p>

            <CodeBlock language={"python"} codeString={`# Using methods on incorrect data types
0.lower()       # TypeError
None.isupper()  # AttributeError`} />

            <p>Methods are uniquely identified by the fact that they are prefixed with a dot (<code className="inline">.</code>) character. We will explore the use of the dot prefix further in future lessons.</p>

            <Collapsible title="Challenge">
                <p>What is incorrect about the following lines of code?</p>
                <CodeBlock language={"python"} codeString={`# 1.
"What is your name?".input()

# 2.
.islower("Test")`} />
            </Collapsible>
        </section>

        <section>
            <h2 id="why-use-functions"><a href="#why-use-functions" className="section-link">Why Use Functions?</a></h2>
            <p>Imagine you have to send the same greeting to five people. You can do this easily by writing <code className="inline">print()</code> statements multiple times, but you end up repeating a lot of work.</p>
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

            <p>As you can see, this is a lot of code for even just five people. Imagine if you had to send a hundred greetings! Surely, there is a better way to do this.</p>

            <h3>Coding With Functions</h3>
            <p>Now, let's simplify the process by defining a function that has the specific repeatable task of sending the three print statements together as one group. Don't worry about the syntax for now - we'll cover that shortly.</p>
            <CodeBlock language={"python"} codeString={`def greet():
    print("Hello, welcome to our store!")
    print("We hope you find everything you need.")
    print("Have a great day!")

# Use the function to repeat the same greeting five times in a row:
greet()
greet()
greet()
greet()
greet()`} />
            <p>The <code className="inline">greet()</code> function acts as a "bundler" or "container" that allows us to execute all three print statements at once as a group. Not only is this approach is much more efficient already, but saves us additional effort if we need to send this greeting even more times in the future.</p>

            <h3>Functions as Abstractions</h3>
            <p>Functions help us <em>abstract</em> our code. For example, imagine your friend asks you to take a picture of them. They would say "Please take a picture of me" rather than saying "Take out your phone, go to the camera app, center me in the frame, and press the red button."</p>

            <p>In the same way, we can think of functions as abstractions of tasks that we want the computer to perform. We can then call the function as many times as we need to, and it will perform all the steps in the task for us in the correct order.</p>

            <CodeBlock language={"python"} codeString={`def take_picture():
    print("Take out your phone")
    print("Go to the camera app")
    print("Center them in the frame")
    print("Press the red button")

# Take three pictures
take_picture()
take_picture()
take_picture()`} />
        </section>

        <section>
            <h2 id="function-syntax"><a href="#function-syntax" className="section-link">Function Syntax</a></h2>
            <p>A function is created using the <code className="inline">def</code> keyword, followed by the function's name, a pair of parentheses <code className="inline">()</code>, and a colon <code className="inline">:</code>.</p>
            <CodeBlock language={"python"} codeString={`# A function that performs the simple task of displaying a greeting message
def greet():
    print("Hello there!")
    print("Have a nice day!")`} />

            <h3>Function Header</h3>
            <p>The first line of a function is known as the function <code className="inline">header</code> or function <code className="inline">signature</code>. It allows for, at a glance, an overview of what the function does and how it should be used.</p>
            <CodeBlock language={"python"} codeString={`def greet():`} />

            <h3>Function Body</h3>
            <p>Like an <code className="inline">if</code> statement, a function has a <strong>body</strong>, which is an indented block of code that is executed when the function is <strong>called</strong> or used.</p>
            <CodeBlock language={"python"} codeString={`def greet():
    # Begin function body
    print("Hello there!")
    print("Have a nice day!")`} />

            <Collapsible title="Challenge">
                <p>In your code editor, create a function called <code className="inline">happy_birthday</code>. Begin by creating the function header. Then, in the body of the function, add four print statements that display the lyrics to the "Happy Birthday" song to the screen: </p>
                <ul>
                    <li>"Happy birthday to you,"</li>
                    <li>"Happy birthday to you,"</li>
                    <li>"Happy birthday, dear person!"</li>
                    <li>"Happy birthday to you!"</li>
                </ul>
            </Collapsible>

            <h3>Calling a Function</h3>
            <p>Defining a function isn't enough for it to do actually anything. You need to <strong>call</strong> the function in order to execute the code contained inside it.</p>

            <CodeBlock language={"python"} codeString={`# Define the function
def greet():
    print("Hello there!")
    print("Have a nice day!")

# Call the function
greet()

# Output:
# "Hello There"
# "Have a nice day!"`} />

            <p>Calling a function is as simple as writing the function's name followed by parentheses <code className="inline">()</code>.</p>
            <Collapsible title="Challenge">
                <p>In your code editor, after the <code className="inline">happy_birthday</code> function definition, call the <code className="inline">happy_birthday</code> function.</p>
            </Collapsible>
        </section>

        <section>
            <h2 id="function-parameters"><a href="#function-parameters" className="section-link">Function Parameters</a></h2>
            <p>Functions can also be defined with <strong>parameters</strong>, which are values that a function expects to use when it is called. These parameters are listed inside the parentheses <code className="inline">()</code> after the function's name, and allow for more versatile behavior in functions.</p>
            <CodeBlock language={"python"} codeString={`def greet(name):
    print("Hello, " + name)
    print("Have a nice day!")`} />

            <p>In this example, the function <code className="inline">greet</code> expects to be passed a parameter when it is called, that it will use to create a customized greeting message.</p>

            <CodeBlock language={"python"} codeString={`greet("Danny")

# Output:
# "Hello, Danny"
# "Have a nice day!"`} />

            <Collapsible title="Challenge">
                <p>In your code editor, modify your <code className="inline">happy_birthday</code> function to accept a parameter called <code className="inline">name</code>.</p>
            </Collapsible>

            <h3>Function Arguments</h3>
            <p>When a function is called, the values passed to it are called <strong>arguments</strong>. When a function is defined, the values it expects to receive are called parameters. Some programmers use the terms "parameter" and "argument" interchangeably, however.</p>
            <Collapsible title="Challenge">
                <p>What are the arguments in the example below?</p>
                <CodeBlock language={"python"} codeString={`print("Hello")`} />
            </Collapsible>

            <h3>Multiple Parameters</h3>
            <p>Functions can also have multiple parameters, which are separated by commas. For example:</p>
            <CodeBlock language={"python"} codeString={`def greet(first_name, last_name):
    print("Hello, " + first_name + " " + last_name)
    print("Have a nice day!")

greet("Louis", "Armstrong")

# Output:
# "Hello, Louis Armstrong"
# "Have a nice day!"`} />

            <Collapsible title="Challenge">
                <p>Identify the parameters and arguments in this example:</p>
                <CodeBlock language={"python"} codeString={`def purchase_item(name, price):
    print("Purchased " + name + " for " + str(price))

purchase_item("Shoes", 49.99)`} />
            </Collapsible>

            <h3>Number of Parameters and Arguments Must Match</h3>
            <p>If you call a function with the wrong number of arguments, Python will throw an error.</p>

            <CodeBlock language={"python"} codeString={`# Function 1 has two parameters
def greet(first_name, last_name):
    print("Hello, " + first_name + " " + last_name)
    print("Have a nice day!")

greet("Louis Armstrong")  # TypeError: only one argument was provided when two were expected

# Function 2 has no parameters
def goodbye():
    print("Bye!")
    print("Have a good day!")

goodbye("Emily")  # TypeError: One argument was provided when no arguments were expected`}/>

            <h3>Order of Arguments Matters</h3>
            <p>Arguments also must be listed in the same order as the expected parameters when a function is called. If you call a function with arguments in the wrong order, you might have unexpected results or run into errors.</p>

            <CodeBlock language={"python"} codeString={`def greet(first_name, last_name):
    print("Hello, " + first_name + " " + last_name)
    print("Have a nice day!")

greet("Jackson", "Michael")  # Incorrect argument order

# Output:
# "Hello, Jackson Michael"
# "Have a nice day!"`} />

            <p>In the next example, we see an error actually occurring from calling the function with the wrong argument order. Because the function expects a string and an integer in that order, Python throws a <code className="inline">TypeError</code>.</p>
            <CodeBlock language={"python"} codeString={`def order_books(title, number):
    print("Ordered " + str(number) + " copies of " + title)

order_books(3, "The Lord of the Rings")  # Incorrect argument order`} />

            <Collapsible title="Challenge">
                <p>What are issues with the following code?</p>
                <CodeBlock language={"python"} codeString={`# Function 1`} />
            </Collapsible>

            <h3>Writing Functions With Parameters</h3>
            <p>When writing a function, one way to determine what the parameters should be is to imagine yourself telling the computer, or even another person, a task to complete. If I ask my friend to purchase an item for me, they don't have all the information needed to complete the task yet. I would expect them to ask me two questions before they can complete their task:</p>
            <ul>
                <li>"What do you want to buy?"</li>
                <li>"How much does it cost?"</li>
            </ul>

            <p>In the same way, the computer will not attempt to predict what the arguments will be when you call <code className="inline">purchase_item</code> - instead, it will require you to specify exactly what the arguments are.</p>

            <Collapsible>
                <p>Write a function that converts degrees in Fahrenheit degrees in Celsius. Before writing code, determine what the name, parameters, and return value of the function should be.</p>
            </Collapsible>
        </section>

        <section>
            <h2 id="naming-functions"><a href="#naming-functions" className="section-link">Naming Functions</a></h2>
            <p>Python follows the same naming conventions for variables and functions. Like variables, function names use <strong>snake case</strong>, which means that they are written in lowercase with underscores between words.</p>

            <h3>Functions as Verbs</h3>
            <p>As stated before, functions perform a specific task or action. Therefore, it is good practice to use verbs for function names. For example, consider the following function names:</p>
            <ol>
                <li><code className="inline">data()</code></li>
                <li><code className="inline">read_data()</code></li>
            </ol>

            <p>The first method is less descriptive, as it is not clear what the function does. Does it write data, analyze data, or create data? The second method is more descriptive, as it is more clear what action that the function takes.</p>

            <p>Below are some more good examples of function names. Note that they all use verbs in the present-tense.</p>
            <ul>
                <li><code className="inline">get_username()</code></li>
                <li><code className="inline">calculate_total()</code></li>
                <li><code className="inline">print_results()</code></li>
            </ul>

            <Collapsible title="Challenge">
                <p>In your code editor, rename your <code className="inline">happy_birthday</code> function to use a verb.</p>
            </Collapsible>
        </section>

        <section>
            <h2 id="obtaining-a-value-from-a-function"><a href="#obtaining-a-value-from-a-function" className="section-link">Obtaining a Value from a Function</a></h2>
            <p>So far, all our functions have immediately printed a result to the screen. However, what if we want a function to create a value that we can use later? We have seen behavior, for example, with the <code className="inline">input()</code> function.</p>
            <CodeBlock language={"python"} codeString={`name = input("Enter your name")  # The result of calling input() is stored in a variable
print(name)`} />

            <p>As shown above, the <code className="inline">input()</code> function stores the user's input in a variable called <code className="inline">name</code>. We can then use the variable <code className="inline">name</code> throughout our code, for instance, to print the user's name.</p>

            <h3>The <code className="inline">return</code> Keyword</h3>
            <p>The <code className="inline">return</code> keyword is used to determine what the formal output of a function is.</p>

            <CodeBlock language={"python"} codeString={`def sum_numbers(a, b):
    c = a + b
    return c  # Return the value of c

result = sum_numbers(5, 3)
print(result)  # Outputs: 8`} />
            <p>In this example, <code className="inline">sum_numbers</code> function calculates the sum of two numbers and uses <code className="inline">return</code> to give that result back to where it was called. The variable <code className="inline">result</code> will receive the value <code className="inline">8</code> and then print it.</p>

            <p>You can think of return as drawing a box around your "final answer" in a math problem. Though you may have shown your work throughout the math problem, and written many lines of calculations, only the final answer is returned.</p>

            <h3>Functions Without a Return Statement</h3>
            <p>What happens when we don't include a <code className="inline">return</code> statement in a function?</p>

            <CodeBlock language={"python"} codeString={`def sum_numbers(a, b):
    c = a + b
    print(c)

result = sum_numbers(5, 3)
print(result)`} />

            <p>Try running the above example in your code editor. You'll notice that the storing the result of calling <code className="inline">sum_numbers(5, 3)</code> in a variable results in <code className="inline">None</code>. If you remember from the intro chapter, <code className="inline">None</code> is a special data type that indicates the absence of a value. This is because <code className="inline">sum_numbers</code> does not explicitly create any value, it simply performs the task of adding the two numbers and printing the result. When we attempt to store the result of calling the function in a variable, the variable is assigned <em>no value</em> - in other words, <code className="inline">None</code>.</p>

            <p>Let's take a look at another example:</p>
            <CodeBlock language={"python"} codeString={`def print_message(message):
    print("Message: " + message)

print(print_message("Hello, Python!"))

# Output:
# Message: Hello, Python!
# None`} />
            <p>This function prints a message but does not return anything. Notice that when we use <code className="inline">print()</code> to display the value of <code className="inline">print_message("Hello, Python!")</code>, it outputs <code className="inline">None</code>, as <code className="inline">None</code> is the default return value for functions that do not explicitly have a <code className="inline">return</code> statement.</p>

            <p>In fact, you can even think of functions that lack a return statement as functions that return <code className="inline">None</code>. For the sake of brevity, it's standard to simply omit the <code className="inline">return</code> keyword in these cases.</p>

            <CodeBlock language={"python"} codeString={`def print_message(message):
    print("Message: " + message)
    return None  # it is preferred to omit this line`} />

            <Collapsible title="Challenge">
                <p>Write a function that takes two numbers as parameters and returns the remainder of the first number divided by the second number. Then, store the result of calling the function into a variable called <code className="inline">remainder</code> and print the value of <code className="inline">remainder</code>.</p>
            </Collapsible>
        </section>

        <section>
            <h2 id="other-implications-of-return"><a href="#other-implications-of-return" className="section-link">Other Implications of <code className="inline">return</code></a></h2>
            <p>Returning in a function immediately terminates the function. This means that any code after the <code className="inline">return</code> statement is never executed.</p>

            <CodeBlock language={"python"} codeString={`def subtract_numbers(a, b):
    result = a - b
    return result
    print("This line will never be executed")`} />

            <h3>Using <code className="inline">return</code> in <code className="inline">if</code> Statements</h3>
            <p>It is common to use <code className="inline">return</code> in functions with an <code className="inline">if</code> statement in order to yield a value if the condition is met, and a different value if the condition is not met.</p>

            <CodeBlock language={"python"} codeString={`def is_even(number):
    if number % 2 == 0:
        return True
    else:
        return False`} />
            <p>Here, it might seem that the <code className="inline">else</code> statement wouldn't be reached, as it appears after <code className="inline">return</code> (the <code className="inline">return</code> statement in the <code className="inline">if</code> block). However, this is not the case. The <code className="inline">if</code> statement is skipped entirely when its condition is not met, meaning <code className="inline">return</code> is not triggered.</p>
        </section>

        <section>
            <h2 id="optional-default-parameters"><a href="#optional-default-parameters" className="section-link">(Optional) Default Parameters</a></h2>
            <p>Functions can also have <strong>default parameters</strong>. This means that if not all arguments are provided when a function is called, a default value will be used instead.</p>

            <CodeBlock language={"python"} codeString={`def greet(name="World"):
    print("Hello, " + name)

greet()        # Output: "Hello, World
greet("John")  # Output: "Hello, John`} />

            <p>This is an exception to the rule that all parameters must be provided when the function is called. The default parameter is only used if the corresponding argument is <strong>not</strong> provided. Another name for a default parameter is a <em>keyword argument</em>.</p>
        </section>

        <section>
            <h2 id="optional-representing-types-in-functions"><a href="#optional-representing-types-in-functions" className="section-link">(Optional) Representing Types in Functions</a></h2>
            <p>Generally, Python will automatically infer the data type of parameters and the return value of a function. However, you can explicitly represent the data types of parameters and return values when you define your function.</p>

            <CodeBlock language={"python"} codeString={`def add_numbers(a: int, b: int) -> int:
    return a + b`} />

            <p>In the code above, <code className="inline">a</code>, <code className="inline">b</code>, and the return value are all labeled as type <code className="inline">int</code>. This will help you and other programmers who might use your code understand the intended behavior of the function. However, that this is simply a label and doesn't actually change the behavior of the function in any way.</p>

            <CodeBlock language={"python"} codeString={`print(add_numbers(1, 2))            # Output: 3
print(add_numbers("key", "board"))  # Output: "keyboard"`} />

            <p>However, equally important is to write code that is <strong>self-documenting</strong>, meaning that the code uses variable names that are clear and easy to understand. With the following self-documenting code, type annotations are not necessary.</p>

            <CodeBlock language={"python"} codeString={`def multiply(int1, int2):
product = int1 * int2
return product`} />
        </section>

        <section>
            <h2 id="wrapping-up"><a href="#wrapping-up" className="section-link">Wrapping Up</a></h2>
            <p>Hopefully, you can see that using functions makes your code more concise and helps avoid repetition. It allows you to write a set of statements once and run them whenever you need to, without rewriting them each time.</p>

            {/* <ul>
                <li><strong>Reduces Redundancy:</strong> You avoid writing the same statements multiple times throughout your code.</li>
                <li><strong>Enhances Clarity:</strong> Encapsulating code in a function reduces lines of code, making the main part of your code less cluttered.</li>
                <li><strong>Simplifies Maintenance:</strong> If the greeting needs to be changed, you only need to update it in one place instead of repeating the change throughout the entirety of your code.</li>
            </ul> */}
            <button className="next-button" onClick={() => window.location.href = "/quiz?name=05Functions.py"}>Start Quiz</button>
        </section>
    </div> );
}

export default FunctionsLesson;
