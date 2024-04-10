import React from 'react';
import CodeBlock from '../components/CodeBlock';

const IfElse = () => {
    return (
        <div className="lesson-container">
            <h1>Conditional (If-Else) Statements</h1>

            <section>
                <h2>Making Decisions</h2>
                <p>Up to this point, your Python code has followed one path from start to finish. But what if you want your program to make decisions based on user input or specific conditions? That's where <code class="inline">if-else</code> statements come in.</p>
                <p>Consider writing a program that acts as a virtual assistant for planning your day. Without <code class="inline">if-else</code> statements, it might always suggest reading a book, regardless of the weather outside. By using <code class="inline">if-else</code> logic, the program can make a more suitable suggestion: if it's raining, it suggests staying in to read a book; else, if it's sunny, it suggests going for a walk. This way, <code class="inline">if-else</code> statements empower your program to offer choices that adapt to changing conditions.</p>
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
                <p>Use the <code class="inline">else</code> clause to specify what happens when the <code class="inline">if</code> condition was not met.</p>
                <CodeBlock codeString={`age = 19
if age >= 18:
    print("You are eligible to vote")
else:
    print("You are not eligible to vote")`}></CodeBlock>
            <p>You can interpret the statement in English as: "If the age is greater than or equal to 18, print the message "You are eligible to vote". Otherwise, print the message "You are not eligible to vote".</p>
            <p>Note that the <code className="inline">else</code> clause does <strong>not</strong> have a condition, because it is simply the default path the program takes when the preceding <code className="inline">if</code> condition is not met. It acts as a "catch-all" scenario, ensuring that the program can proceed with an alternative action.</p>
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
            <p>You can interpret the statement in English as: "If the grade is greater than or equal to 90, print the message "You got an A". <strong>Else, if</strong> the grade is greater than or equal to 80, print the message "You got a B". In all other cases, print the message "Keep studying, you can improve!"</p>
            <p>Note that unlike <code class="inline">else</code>, <code class="inline">elif</code> <strong>does</strong> require a specific condition. You can create any number of additional <code class="inline">elif</code> clauses:</p>
            <CodeBlock codeString={`grade = 85
if grade >= 90:
    print("Excellent! You got an A")
elif grade >= 80:
    print("Good job! You got a B")
elif grade >= 70:
    print("Keep working! You got a C")
else:
    print("Keep studying, you can improve!")`}></CodeBlock>
            <p>Python processes each <code className="inline">if</code> and <code className="inline">elif</code> clause in order from <strong>top to bottom</strong> until a condition is met, after which the corresponding code block is executed, and the rest of the <code className="inline">elif</code> statements and <code className="inline">else</code> statement is skipped. In the event that the <code className="inline">if</code> condition is not met, and none of the <code className="inline">elif</code> conditions are met, the code in the <code className="inline">else</code> statement will execute.</p>
            <p>Once again, the <code className="inline">else</code> clause covers every situation not addressed by the earlier conditions, eliminating the need for an explicit condition to be defined for it.</p>
            </section>

            <section>
                <h2>Order Matters in Elif Statements</h2>
                <p>When chaining conditions using <code className="inline">elif</code>, the order in which you place these statements is crucial. An improperly ordered <code className="inline">elif</code> sequence can lead to scenarios where some conditions may never be evaluated. For example, if a more general condition is placed before a more specific one, the specific condition may never be reached.</p>
                <CodeBlock codeString={`grade = 95
if grade > 60:
    print("Pass")
elif grade > 90:
    print("Excellent!")  # This line will never be reached regardless of the value of grade`} />
                <p>In this scenario, because <code className="inline">grade &gt; 60</code> is true, "Pass" will be printed, and the program will not evaluate <code className="inline">grade &gt; 90</code>, even though it is true, because it comes after an already satisfied condition. Therefore, "Excellent!" will never be printed, no matter the grade.</p>
                <p>To ensure that all relevant conditions are considered, <strong>start with the most specific conditions</strong> and proceed to the more general ones:</p>
                <CodeBlock codeString={`grade = 95
if grade > 90:
    print("Excellent!")
elif grade > 60:
    print("Pass")`} />
                <p>By ordering the conditions from most to least specific, we ensure that the program checks each scenario in a logical sequence, allowing for more precise control over which code blocks are executed.</p>
            </section>


            <section>
                <h2>Multiple <code class="inline">if</code> Statements vs. <code class="inline">if-else</code></h2>
                <p>
                    You might wonder, couldn't I always just use two separate <code class="inline">if</code> statements instead of a single <code class="inline">if-else</code> structure?
                    While sometimes that might seem to work, there's a key difference in how they are handled by Python. Let's see an example:
                </p>
                <CodeBlock codeString={`temperature = 75
if temperature > 80:
    print("It's hot!")
if temperature > 70:
    print("It's warm!")`} />
                <p>With two separate <code class="inline">if</code> statements, both conditions are checked independently. This is because after an <code class="inline">if</code> statement executes, the rest of the code continues to execute from top to bottom as usual. In the example above, if <code class="inline">temperature</code> is <code class="inline">75</code>, <strong>both</strong> messages would be printed!</p>
                <p>The following example uses the regular <code class="inline">if-else</code> structure:</p>
                <CodeBlock codeString={`temperature = 65
if temperature > 80:
    print("It's hot!")
else:
    print("It's not hot")`} />
                <p>Here, once the <code class="inline">if</code> condition is <code class="inline">True</code>, the code in the <code class="inline">else</code> block is skipped. This guarantees only one of the messages will be displayed. This reinforces the idea of <code class="inline">if-else</code> as a branching statement - you can only go down one path at a time.</p>
            </section>

            <section>
                <h2>"Implicit" Else</h2>
                <p>The implications of Python code running from top to bottom and the code continuing after if statements leads us to the underlying concept of the implicit else.</p>
                <p>When we use <code className="inline">if</code> and <code className="inline">elif</code> statements in Python, there's an underlying concept known as the implicit <code className="inline">else</code>. This refers to the default action or outcome that occurs when none of the specified conditions in the <code className="inline">if</code> and <code className="inline">elif</code> statements are met. Even if an explicit <code className="inline">else</code> clause is not written out, the logic of <code className="inline">if</code>-<code className="inline">elif</code> constructs implies an <code className="inline">else</code> scenario.</p>

                <p>Consider the following code. The absence of an explicit <code className="inline">else</code> doesn't halt the program; it simply means that if all conditions are false, the program continues line by line without executing any block of code associated with those conditions:</p>
                <CodeBlock codeString={`have_homework = False
if have_homework:
    print("Guess I'll be studying this weekend.")

# Implicit else scenario: If I don't have homework, I can enjoy the weekend!
print("This line of code will execute no matter the result of the if statement")`} />

                <p>In this example, there's no need for an extra line of code to say "if not have_homework, then enjoy the weekend" because the absence of homework (and thus the action of enjoying the weekend) is the automatic fallback if the <code className="inline">if</code> condition (having homework) turns out to be false.</p>

                <h3>Why use the <code className="inline">else</code> statement at all?</h3>
                <p>Given that Python implicitly handles scenarios not covered by <code className="inline">if</code> through an implicit <code className="inline">else</code>, you might wonder why we need the <code className="inline">else</code> statement at all. The <code className="inline">else</code> statement is crucial for clarity and explicitness in our code. While the implicit <code className="inline">else</code> assumes a default action (or inaction) for unmet <code className="inline">if</code> conditions, explicitly using an <code className="inline">else</code> clarifies your intent to anyone reading your code—including your future self.</p>

                <p>Using <code className="inline">else</code> serves several important purposes:</p>
                <ul>
                    <li><strong>Explicitness:</strong> It makes it crystal clear that a certain block of code should run only when all preceding conditions are false. This enhances readability and maintainability.</li>
                    <li><strong>Intent:</strong> It communicates your intent, ensuring that others understand that you have considered all possible scenarios and are deliberately choosing to execute specific code when conditions fail.</li>
                    <li><strong>Functionality:</strong> In some cases, you want to guarantee that a block of code runs if none of the conditions are met. An explicit <code className="inline">else</code> is necessary for these scenarios to handle exceptions, perform cleanup, or provide alternative outcomes.</li>
                </ul>

                <p>For example, in a game, if a player doesn't hit a target, you might want to explicitly reduce their score or give feedback, which is a perfect use for an <code className="inline">else</code> statement:</p>

                <CodeBlock codeString={`score = 100
target_hit = False
if target_hit:
    score += 10
    print("Great shot! Score increased.")
else:
    score -= 5
    print("Missed! Score decreased.")`} />

                <p>However, in the following example without an explicit <code className="inline">else</code>, it is incorrect to subtract from the score as the default behavior, as that should only happen when the player misses their target. In other words, subtracting from the score should only happen <strong>explicitly</strong> when the user misses, not implicitly after any shot the user takes.</p>
                <CodeBlock codeString={`score = 100
target_hit = False
if target_hit:
    score += 10
    print("Great shot! Score increased.")

# Implicit else scenario: This code will always execute and the score will always decrease - incorrect!
score -= 5
print("Missed! Score decreased.")`} />

            <p>This example shows that the <code className="inline">else</code> statement is not just a fallback mechanism but a vital part of controlling flow and providing specific feedback based on user actions. It's about making our code as clear and intentional as possible, which is why <code className="inline">else</code> remains a fundamental construct in Python programming.</p>

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
                <p>Think of nested <code class="inline">if</code> statements in Python like a map or a flowchart. Imagine you're at an intersection in a maze, and each decision you make takes you down a different path. That's what these statements do in your code. Each <code class="inline">if</code> statement is like coming to a new intersection and having to decide which way to go based on specific conditions, and the way you got there was dependent on decisions you made earlier in the maze. When you add more <code class="inline">if</code> statements inside each other, it's like adding more turns to the map, making the journey through your code more interesting and complex.</p>
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