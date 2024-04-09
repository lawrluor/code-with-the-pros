import React from 'react';
import CodeBlock from '../components/CodeBlock';

const IfElse = () => {
    return (
        <div className="lesson-container">
            <h1>If-Else Statements in Python</h1>

            <section>
                <h2>Making Decisions</h2>
                <p>Up to this point, your Python code has followed one path from start to finish. But what if you want your program to make decisions based on user input or other conditions? That's where <code class="inline">if-else</code> statements come in.</p>
                <p>Consider writing a program that acts as a virtual assistant for planning your day. Without <code class="inline">if-else</code> statements, it might always suggest reading a book, regardless of the weather outside. By using <code class="inline">if-else</code> logic, the program can make a more suitable suggestion: if it's raining, it suggests staying in to read a book; else, if it's sunny, it suggests going for a walk. This way, <code class="inline">if-else</code> statements empower your program to offer choices that adapt to changing conditions, making it smarter and more responsive to your needs.</p>
            </section>

            <section>
                <h2>The <code class="inline">if</code> Statement</h2>
                <p>The <code class="inline">if</code> statement in Python is essential for decision-making in code. Unlike some other computer languages that use brackets to define blocks of code, Python uses indentation.</p>
                <CodeBlock codeString={`age = 19
if age >= 18:
    print("You are eligible to vote")`}></CodeBlock>
                <ul>
                    <li><strong>Syntax of the if Statement:</strong> The syntax begins with the <code class="inline">if</code> keyword, followed by a condition, and a colon. The condition is evaluated, and if it results in <code class="inline">True</code>, the indented block of code underneath will execute.</li>
                    <li><strong>Condition:</strong> The condition after the <code class="inline">if</code> statement can be any expression that evaluates to <code class="inline">True</code> or <code class="inline">False</code>. This flexibility allows for complex expressions and comparisons directly in the <code class="inline">if</code> statement.</li>
                    <li><strong>Indentation Matters!</strong> Python relies on indentation to define the scope of conditional blocks. While some computer languages use curly braces to define the scope, Python's use of indentation makes the code visually cleaner and emphasizes the importance of code formatting.</li>
                </ul>
            </section>

            <section>
                <h2>The Other Path: <code class="inline">else</code></h2>
                <p>Use the <code class="inline">else</code> clause to specify what happens if the <code class="inline">if</code> condition was <code class="inline">False</code>.</p>
                <CodeBlock codeString={`number = 5
if number % 2 == 0:
    print("The number is even")
else:
    print("The number is odd")`}></CodeBlock>
            </section>

            <section>
                <h2>Multiple Choices with <code class="inline">elif</code></h2>
                <p>What if you need more than two options? <code class="inline">elif</code> (short for "else if") lets you chain multiple checks.</p>
                <CodeBlock codeString={`grade = 85
if grade >= 90:
    print("Excellent! You got an A")
elif grade >= 80:
    print("Good job! You got a B")
else:
    print("Keep studying, you can improve!")`}></CodeBlock>
            </section>

            <section>
                <h2>Two <code class="inline">if</code> Statements vs. <code class="inline">if-else</code></h2>
                <p>
                    You might wonder, couldn't I always just use two separate <code class="inline">if</code> statements instead of an <code class="inline">if-else</code> structure?
                    While sometimes that might seem to work, there's a key difference in how they are handled by Python. Let's see an example:
                </p>
                <CodeBlock codeString={`# Two separate 'if' statements:
temperature = 65
if temperature > 80:
    print("It's hot!")
if temperature < 60:
    print("It's chilly!")

# 'if-else' structure:
temperature = 65
if temperature > 80:
    print("It's hot!")
else:
    print("It's not hot")
                `}></CodeBlock>
                <ul>
                    <li>With two separate <code class="inline">if</code> statements, both conditions are checked independently.  In the example above, if the temperature is 65, neither message would be printed.</li>
                    <li>With <code class="inline">if-else</code>, once the <code class="inline">if</code> condition is <code class="inline">True</code>, the code in the <code class="inline">else</code> block is skipped. This guarantees only one of the messages will be displayed. This reinforces the idea of <code class="inline">if-else</code> as a branching statement - you can only go down one path at a time.</li>
                </ul>
            </section>

            <section>
                <h2>Understanding Indentation in Python</h2>
                <p>Indentation is not just a part of Python's syntax; it's a core feature. Every block of code within a control structure, like an <code class="inline">if</code> statement, must be consistently indented to indicate the block's boundaries. Incorrect indentation can lead to <code class="inline">IndentationError</code>, which is a common mistake for beginners.</p>
                <p>Here's an example of an indentation error:</p>
                <CodeBlock codeString={`age = 19
if age >= 18:
print("You are eligible to vote")  # This will cause an IndentationError`}></CodeBlock>
                <p>The above code will raise an <code class="inline">IndentationError</code> because the <code class="inline">print</code> statement is not indented, and Python cannot determine if it's part of the <code class="inline">if</code> condition's block.</p>
                <h3>Fixing Indentation Errors</h3>
                <p>To correct an indentation error, ensure that all code intended to be executed within a block (like an <code class="inline">if</code> statement) is indented to the same level:</p>
                <CodeBlock codeString={`age = 19
if age >= 18:
    print("You are eligible to vote")  # Correct indentation`}></CodeBlock>
                <ul>
                    <li><strong>Indentation Level:</strong> The standard indentation level is four spaces per level of indentation, though tabs can also be used. Consistency is key, as mixing spaces and tabs can lead to errors in Python.</li>
                    <li><strong>Consistent Indentation:</strong> Always use the same number of spaces (or tabs) for each level of indentation in your block. The Python style guide (PEP 8) recommends using four spaces per indentation level.</li>
                    <li><strong>Readability:</strong> Beyond preventing errors, consistent indentation improves the readability of your code, making it easier to understand the program's flow and logic at a glance.</li>
                </ul>
            </section>

            <section>
                <h2>Nested <code class="inline">if</code> Statements in Python</h2>
                <p>Nested <code class="inline">if</code> statements are <code class="inline">if</code> statements within <code class="inline">if</code> statements.</p>
                <p>Think of nested <code class="inline">if</code> statements in Python like a map or a flowchart. Imagine you're at an intersection in a maze, and each decision you make takes you down a different path. That's what these statements do in your code. Each <code class="inline">if</code> statement is like coming to a new intersection and having to decide which way to go based on specific conditions. When you add more <code class="inline">if</code> statements inside each other, it's like adding more turns to the map, making the journey through your code more interesting and complex.</p>
                <p>Here's an example of a nested <code class="inline">if</code> statement in action:</p>
                <CodeBlock codeString={`age = 19
registered_voter = True

if age >= 18:
    if registered_voter:
        print("You are eligible to vote and are registered.")
    else:
        print("You are eligible to vote but not registered.")
else:
    print("You are not eligible to vote.")`}></CodeBlock>
                <p>In this example, Python first checks if the person is at least 18 years old. If this condition is true, it proceeds to the next <code class="inline">if</code> statement nested inside, which checks if the person is a registered voter.</p>
            </section>

            <section>
                <h2>Projects</h2>
                <p>Let's apply what we've learned about if-else statements. Which of these projects sounds most exciting to try?</p>
                <ul>
                    <li><strong>Number Guessing Game</strong>: The computer picks a secret number, and the user tries to guess it.</li>
                    <li><strong>Rock, Paper, Scissors</strong>: Create a game where you can play against the computer.</li>
                    <li><strong>Interactive Quiz</strong>: Write a program that asks trivia questions and uses 'if-else'

 to check the answers.</li>
                </ul>
            </section>
        </div>
    );
};

export default IfElse;