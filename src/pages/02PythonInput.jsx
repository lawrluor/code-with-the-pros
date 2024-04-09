import React from 'react';
import CodeBlock from '../components/CodeBlock';

const PythonInput = () => {
    return (
        <div className="lesson-container">
            <h1>Understanding the <code className="inline">input()</code> Function in Python</h1>

            <section>
                <h2>Why User Input Matters</h2>
                <p>
                    Up to this point, we’ve mainly been using values that have been fixed or “hard-coded”.
                    For example, a simple calculator that only knows how to add <code className="inline">10 + 5</code> doesn't offer much flexibility.
                    With user input, you can ask the user exactly which numbers they'd like to calculate. Similarly, a program that always
                    says "Hello, world!" is not very useful. By accepting user input with the <code className="inline">input()</code> method, our program could ask for a name and say "Hello, [name]!".
                </p>

                <h2>What Is <code className="inline">input()</code>?</h2>
                <p>
                Believe it or not, you've already worked with various different types of input methods! Using websites or software regularly involves providing input to your computer or device, often through writing and submitting text.
                </p>

                <li>Search Engines: When you type queries into a search engine like Google, you provide search terms and expect relevant search results.</li>
                <li>Online Shopping: Entering shipping information and payment details when purchasing products online.</li>
                <li>Social Media: Writing comments and messaging all require typing into a textbox.</li>
            </section>

            <section>
                <h2>How To Use The <code className="inline">input()</code> Method</h2>
                <p>Basic Syntax:</p>
                <CodeBlock codeString={`name = input("What's your name? ")
print(name)`}></CodeBlock>
                <p>Breakdown:</p>
                <ul>
                    <li><strong>name:</strong> A variable to store the user's input.</li>
                    <li><strong><code className="inline">input()</code>:</strong> The function that pauses the program and waits for the user to type something.</li>
                    <li><strong>"What's your name? ":</strong> The prompt displayed to the user.</li>
                </ul>
            </section>

            <section>
                <h2>Storing Input In Variables</h2>
                <p>In this example, the result of <code className="inline">input()</code> is assigned to the variable (name in the example).</p>
                <p>Practice with different examples:</p>
                <CodeBlock codeString={`# Task 1: Prompt the user to type their name and store their input into a variable.
# Task 2: Prompt the user to type a city that they've visited and store their input into a variable.`}></CodeBlock>
            </section>

            <section>
                <h2><code className="inline">input()</code> Always Gives You Strings</h2>
                <p>Even if the user types a number, <code className="inline">input()</code> will always return a string.</p>
                <CodeBlock codeString={`num1 = input("Enter a number: ")
num2 = input("Enter another number: ")
print(num1 + num2)  # Will this add the numbers, or something else?`}></CodeBlock>

                <p>Type conversion/casting may be needed if you intend to perform calculations.</p>
                <CodeBlock codeString={`num1 = input("Enter a number: ")
num2 = input("Enter another number: ")

# Convert the string inputs to integers
int_num1 = int(num1)
int_num2 = int(num2)

# Now you can add them to yield a mathematical sum
total = int_num1 + int_num2

print(total)`}></CodeBlock>
            </section>

            <section>
                <h2>Projects</h2>
                <p>We've learned about the following topic areas so far: <code className="inline">input()</code>, variables, arithmetic, data casting, string operations. Let's use our knowledge to work on some of the following projects.</p>
                <li><strong>"Mad Libs" Game</strong>: Create a simple "Mad Libs" style game where the user is asked for different inputs (noun, adjective, verb, etc.) and a silly story is generated.</li>
                <li><strong>Checkout Form</strong>: Create a simple program that allows a user to enter their cart and shipping details as if they were about to make a purchase on an e-commerce platform.</li>
            </section>
        </div>
    );
};

export default PythonInput;
