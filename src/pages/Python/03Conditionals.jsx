import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import Collapsible from '../../components/Collapsible';
import useSequentialCounter from '../../hooks/useSequentialCounter';

const Conditionals = () => {
  const { getCurrentNumber, getCurrentNumberAndIncrement } = useSequentialCounter(0);

  return (
    <div className="lesson-container">
      <h1>Conditional Statements</h1>

      <section>
        <h2 id="making-decisions-in-code"><a href="#making-decisions-in-code" className="section-link">Making Decisions in Code</a></h2>
        <p>Up to this point, your Python code has followed one path from start to finish. But what if you want your program to make decisions based on user input or specific values in the code? That's where <strong>conditional</strong>, or <code class="inline">if-else</code> statements, come to the rescue.</p>
        <p>Consider a program that acts as a virtual assistant for planning your day. Without <code class="inline">if-else</code> statements, it might always suggest exercising outside, regardless of the weather forecast. By using <code class="inline">if-else</code> logic, the program can make a more suitable suggestion: <strong>if</strong> it's raining, it suggests staying in to read a book; <strong>else</strong>, it suggests going outside for a walk. This way, the program can adapt to changing conditions.</p>

        <Collapsible
          title={`Challenge ${getCurrentNumber()}`}
          section="Making Decisions in Code"
          number={getCurrentNumberAndIncrement()}
        >
          <p>Describe a situation where you have made a decision in your daily life using <code class="inline">if-else</code> logic.</p>
        </Collapsible>
      </section>

      <section>
        <h2 id="the-if-statement"><a href="#the-if-statement" className="section-link">The <code className="inline">if</code> Statement</a></h2>
        <p>The <code class="inline">if</code> statement in Python is essential for decision-making in code. Unlike some other computer languages that use brackets to define blocks of code, Python uses <strong>indentation</strong>.</p>
        <CodeBlock language={"python"} codeString={`number = -10.5
if number < 0:
    print("This number is negative.")`} />
        <p>An <code class="inline">if</code> statement begins with the <code class="inline">if</code> keyword, followed by a condition or comparison, followed by a colon <code class="inline">:</code>. The condition is evaluated and if it is met, the indented lines of code underneath will execute.</p>

        <Collapsible
          title={`Challenge ${getCurrentNumber()}`}
          section="The if Statement"
          number={getCurrentNumberAndIncrement()}
        >
          <p>What is wrong with the syntax of the following <code class="inline">if</code> statement?</p>
          <CodeBlock language={"python"} codeString={`number = 10
if number > 0
    print("This number is positive.")`} />
        </Collapsible>
      </section>

      <section>
        <h2 id="comparison-operators"><a href="#comparison-operators" className="section-link">Comparison Operators</a></h2>
        <p>Python has several <strong>comparison operators</strong> that allow you to compare values and make decisions. Though they have have a specific syntax in Python, we actually use comparisons like these in our daily lives.</p>
        <ul>
          <li><code class="inline">==</code> (equal to)</li>
          <li><code class="inline">!=</code> (not equal to)</li>
          <li><code class="inline">&gt;</code> (greater than)</li>
          <li><code class="inline">&lt;</code> (less than)</li>
          <li><code class="inline">&gt;=</code> (greater than or equal to)</li>
          <li><code class="inline">&lt;=</code> (less than or equal to)</li>
        </ul>

        <p>In this lesson, we will mainly use these comparison operators with integers and floats in our <code class="inline">if</code> statements. However, conditional statements can be used with any data types, as we'll learn and practice in the next lesson.</p>

        <CodeBlock language={"python"} codeString={`height = 50
if height == 50:
    print("You are tall enough to ride the roller coaster.")`} />

        <p>Note that <code class="inline">==</code> is used to check if two values are equal, while <code class="inline">=</code> is used to assign a value to a variable (it is known as the <strong>assignment operator</strong>). Attempting a comparison in an <code class="inline">if</code> statement with only one <code class="inline">=</code> sign will result in a <code class="inline">SyntaxError</code>.</p>
        <Collapsible
          title={`Challenge ${getCurrentNumber()}`}
          section="Comparison Operators"
          number={getCurrentNumberAndIncrement()}
        >
          <p>Try running the following code in your code editor. What happens?</p>
          <CodeBlock language={"python"} codeString={`if height = 50:
    print("You are tall enough to ride the roller coaster.")`} />
        </Collapsible>
      </section>

      <section>
        <h2 id="the-other-path-else"><a href="#the-other-path-else" className="section-link">The Other Path: <code className="inline">else</code></a></h2>
        <p>Use the <code class="inline">else</code> clause to specify what happens when the <code class="inline">if</code> condition was not met.</p>
        <CodeBlock language={"python"} codeString={`age = 19
if age >= 18:
    print("You are eligible to vote in the United States!")
else:
    print("You are not eligible to vote in the United States.")`}></CodeBlock>
        <p>You can interpret the statement in English as: "If the age is greater than or equal to 18, print the message <code className="inline">'You are eligible to vote'</code>. Otherwise, print the message <code className="inline">'You are not eligible to vote'</code>".</p>
        <p>Note that the <code className="inline">else</code> clause does <strong>not</strong> have a specific condition, because it is simply the default path the program takes when the preceding <code class="inline">if</code> condition is not met. It acts as a "catch-all" scenario, ensuring that the program can proceed with an alternative action when the <code class="inline">if</code> condition is not met.</p>

        <p>Let's consider another example:</p>

        <CodeBlock language={"python"} codeString={`# Incorrect example
age = 17
if age >= 18:
    print("You are eligible to vote in the United States!")
else age < 18:  # It is INCORRECT for an "else" clause to have a condition
    print("You are not eligible to vote in the United States!") `} />

        <p>Do you see how logically, the condition in the <code className="inline">else</code> clause is already covered by the preceding <code className="inline">if</code> condition? Not only is adding the condition to the <code className="inline">else</code> unnecessary, it would actually lead to a <code className="inline">SyntaxError</code> - <code className="inline">else</code> should <strong>never</strong> have a condition and should always be written <code className="inline">else:</code>.</p>

        <CodeBlock language={"python"} codeString={`# Correct example
age = 17
if age >= 18:
    print("You are eligible to vote in the United States!")
else:
    print("You are not eligible to vote in the United States!") `} />

        <h3>Code Blocks</h3>
        <p>A <strong>code block</strong> or <strong>block</strong> of code is a group of lines of code that are grouped together through indentation - it means that the lines are indented with the <em>same level</em> of indentation. If the condition is met, the <strong>entire</strong> code block is executed (line by line from top to bottom, just as in normal Python code).</p>
        <CodeBlock language={"python"} codeString={`if age >= 18:
    print("You are eligible to vote in the United States!")
    answer = input("Would you like to register for voting materials?")
else:
    print("You are not eligible to vote in the United States!")
    print("See you in a few years!")`} />

        <p>In the above example, there are two code blocks, each with two lines. The first block is executed if the condition is met, and the second block is executed if the condition is not met.</p>
        <Collapsible
          title={`Challenge ${getCurrentNumber()}`}
          section="The Other Path: else"
          number={getCurrentNumberAndIncrement()}
        >
          <p>Write an <code class="inline">if</code> statement with an <code class="inline">else</code> block that has two lines of code in each block.</p>
        </Collapsible>
      </section>

      <section>
        <h2 id="code-execution"><a href="#code-execution" className="section-link">Code Execution</a></h2>
        <p>Code execution continues as normal after an <code class="inline">if</code> statement. Let's examine the following example:</p>
        <CodeBlock language={"python"} codeString={`battery = 100
if battery == 0:
    print("The battery is empty")
else:
    print("The battery is not empty")

print("Battery level: ", battery)  # This line will always print`} />

        <p>In this example, the <code class="inline">if</code> statement is evaluated, and the code block below it is skipped as the condition is not met. The <code class="inline">else</code> block is then executed, because the <code class="inline">if</code> condition was <strong>not</strong> met. Finally, code execution continues, printing the message <code class="inline">"Battery level: 100"</code>. To be clear, the line <code class="inline">print("Battery level: ", battery)</code> will always print  regardless of the result of the preceding <code class="inline">if-else</code> statement.</p>

        <Collapsible
          title={`Challenge ${getCurrentNumber()}`}
          section="Code Execution"
          number={getCurrentNumberAndIncrement()}
        >
          <p>Describe the execution of the above example if the value of <code class="inline">battery</code> is set to <code class="inline">0</code>.</p>
        </Collapsible>
      </section>

      <section>
        <h2 id="multiple-choices-with-elif"><a href="#multiple-choices-with-elif" className="section-link">Multiple Choices with <code className="inline">elif</code></a></h2>
        <p>What if you need more than two options? <code class="inline">elif</code> (short for <em>"else if"</em>) lets you chain multiple conditions. It is usually pronounced "EH-lif".</p>
        <CodeBlock language={"python"} codeString={`grade = 85
if grade >= 90:
    print("Excellent! You got an A")
elif grade >= 80:
    print("Good job! You got a B")
else:
    print("Keep studying, you can improve!")`}></CodeBlock>
        <p>You can interpret the statement in English as: "If the grade is greater than or equal to 90, print the message 'You got an A'. <strong>Else, if</strong> the grade is greater than or equal to 80, print the message 'You got a B'. In all other cases, print the message 'Keep studying, you can improve!'"</p>
        <p>Note that unlike <code class="inline">else</code>, <code class="inline">elif</code> <strong>does</strong> require a specific condition. You can create any number of additional <code class="inline">elif</code> clauses:</p>
        <CodeBlock language={"python"} codeString={`grade = 85
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
        <h2 id="order-matters-in-elif-statements"><a href="#order-matters-in-elif-statements" className="section-link">Order Matters in Elif Statements</a></h2>
        <p>When chaining conditions using <code className="inline">elif</code>, the order in which you place these statements is crucial. An improperly ordered <code className="inline">elif</code> sequence can lead to scenarios where some conditions may never be evaluated. For example, if a more general condition is placed before a more specific one, the specific condition may never be reached.</p>
        <CodeBlock language={"python"} codeString={`grade = 95
if grade > 60:
    print("Pass")
elif grade > 90:
    print("Excellent!")  # This line will never be reached regardless of the value of grade`} />
        <p>In this scenario, because <code className="inline">grade &gt; 60</code> is true, <code className="inline">"Pass"</code> will be printed, and the program will not evaluate <code className="inline">grade &gt; 90</code>, even though it is true, because it comes after an already satisfied condition. Therefore, <code className="inline">"Excellent!"</code> will never be printed, no matter the grade.</p>
        <p>To ensure that all relevant conditions are considered, <strong>start with the most specific conditions</strong> and proceed to the more general ones:</p>
        <CodeBlock language={"python"} codeString={`grade = 95
if grade > 90:
    print("Excellent!")
elif grade > 60:
    print("Pass")`} />
        <p>By ordering the conditions from most to least specific, we ensure that the program checks each scenario in a logical sequence, allowing for more precise control over which code blocks are executed.</p>

        <p>Remember, only one block is executed in a given <code className="inline">if</code> statement, the others are all skipped.</p>

        <Collapsible
          title={`Challenge ${getCurrentNumber()}`}
          section="Order Matters in Elif Statements"
          number={getCurrentNumberAndIncrement()}
        >
          <p>What is the output of the following code?</p>
          <CodeBlock language={"python"} codeString={`temperature = 95  # Fahrenheit
if temperature > 65:
    print("It's not cold.")
elif temperature > 85:
    print("It's hot!")`} />
        </Collapsible>
      </section>


      <section>
        <h2 id="multiple-if-statements-vs-if-else"><a href="#multiple-if-statements-vs-if-else" className="section-link">Multiple <code className="inline">if</code> Statements vs. <code className="inline">if-else</code></a></h2>
        <p>
          You might wonder, couldn't I always just use two separate <code className="inline">if</code> statements instead of a single <code className="inline">if-else</code> structure?
          While sometimes that might seem to work, there's a key difference in how they are handled by Python. Let's see an example:
        </p>
        <CodeBlock language={"python"} codeString={`temperature = 75
if temperature > 80:
    print("It's hot!")
if temperature > 70:
    print("It's warm!")`} />
        <p>With two separate <code className="inline">if</code> statements, both conditions are checked independently. This is because after an <code className="inline">if</code> statement executes, the rest of the code continues to execute from top to bottom as usual. In the example above, if <code className="inline">temperature</code> is <code className="inline">85</code>, <strong>both</strong> messages would be printed!</p>
        <p>The following example uses the regular <code className="inline">if-else</code> structure:</p>
        <CodeBlock language={"python"} codeString={`temperature = 65
if temperature > 80:
    print("It's hot!")
else:
    print("It's not hot")`} />
        <p>Here, once the <code className="inline">if</code> condition is <code className="inline">True</code>, the code in the <code className="inline">else</code> block is skipped. This guarantees only one of the messages will be displayed. This reinforces the idea of <code className="inline">if-else</code> as a branching statement - you can only go down one path at a time.</p>

        <p>Let's examine one final example:</p>
        <CodeBlock language={"python"} codeString={`battery = 50
if battery == 50:
    print("The battery is half full")

if battery > 0:
    print("The battery is not empty")
else:
    print("The battery is empty")

print("Battery level: ", battery)  # This line will always print`} />

        <p>In this example, there are two separate <code className="inline">if</code> statements that are each evaluated separately. The first <code className="inline">if</code> condition is met, so <code className="inline">print("The battery is half full")</code> is executed. Then, the second <code className="inline">if</code> condition is evaluated, and as the condition is also met, <code className="inline">print("The battery is not empty")</code> is executed. Finally, the last line of code is executed, printing the message <code className="inline">"Battery level: 50"</code>.</p>

        <Collapsible
          title={`Challenge ${getCurrentNumber()}`}
          section="Multiple if Statements vs. if-else"
          number={getCurrentNumberAndIncrement()}
        >
          <p>Describe the execution of the above example if the value of <code className="inline">battery</code> is set to <code className="inline">100</code>.</p>
        </Collapsible>
      </section>

      <section>
        <h2 id="implicit-else"><a href="#implicit-else" className="section-link">"Implicit" Else</a></h2>
        <p>The implications of Python code running from top to bottom and the code continuing after if statements leads us to the underlying concept of the implicit else.</p>
        <p>When we use <code className="inline">if</code> and <code className="inline">elif</code> statements in Python, there's an underlying concept known as the implicit <code className="inline">else</code>. This refers to the default action or outcome that occurs when none of the specified conditions in the <code className="inline">if</code> and <code className="inline">elif</code> statements are met. Even if an explicit <code className="inline">else</code> clause is not written out, the logic of <code className="inline">if</code>-<code className="inline">elif</code> constructs implies an <code className="inline">else</code> scenario.</p>

        <p>Consider the following code. The absence of an explicit <code className="inline">else</code> doesn't halt the program; it simply means that if all conditions are false, the program continues line by line without executing any block of code associated with those conditions:</p>
        <CodeBlock language={"python"} codeString={`liters_of_fuel = 10
if liters_of_fuel <= 0:
    print("I must refuel.")

# Implicit else scenario: This line of code executes regardless of the result of the previous if statement
print("Continue driving.")`} />

        <p>In this example, there's no need for an extra <code className="inline">else</code> statement because you will continue driving no matter what the result of the <code className="inline">if</code> statement is - either continue driving after refueling or continue driving without refueling. We don't have to just choose either option.</p>

        <h3>Why use the <code className="inline">else</code> statement at all?</h3>
        <p>Given that Python implicitly handles scenarios not covered by <code className="inline">if</code> through an implicit <code className="inline">else</code>, you might wonder why we need the <code className="inline">else</code> statement at all. The <code className="inline">else</code> statement is crucial for clarity and explicitness in our code. While the implicit <code className="inline">else</code> assumes a default action (or inaction) for unmet <code className="inline">if</code> conditions, explicitly using an <code className="inline">else</code> clarifies your intent to anyone reading your code—including your future self.</p>

        <p>Using <code className="inline">else</code> serves two important purposes:</p>
        <ol>
          <li>It makes it crystal clear that a certain block of code should run only when all preceding conditions are skipped. This enhances readability and maintainability.</li>
          <li>In some cases, you want to <strong>guarantee</strong> that a block of code runs if none of the conditions are met.</li>
        </ol>

        <p>For example, in a game, if a player doesn't hit a target, you might want to explicitly reduce their score or give feedback, which is a perfect use for an <code className="inline">else</code> statement:</p>

        <CodeBlock language={"python"} codeString={`score = 100
targets_hit = 5
if targets_hit >= 3:
    score += 10
    print("Great shots! Score increased.")
else:
    score -= 5
    print("Missed targets! Score decreased.")`} />

        <p>However, in the following example without an explicit <code className="inline">else</code>, it is incorrect to subtract from the score as the default behavior, as that should only happen when the player misses their target. In other words, subtracting from the score should only happen <strong>explicitly</strong> when the user misses, not implicitly after any shot the user takes.</p>
        <CodeBlock language={"python"} codeString={`score = 100
targets_hit = 5
if targets_hit >= 3:
    score += 10
    print("Great shots! Score increased.")

# Implicit else scenario: This code will always execute and the score will always decrease
# That is illogical as it means that the score will decrease even if the player hit the target!
score -= 5
print("Missed shots! Score decreased.")`} />

        <p>This example shows that the <code className="inline">else</code> statement is not just a fallback mechanism but a vital part of controlling the flow of the program and providing specific feedback based on values in the code. Using <code className="inline">else</code> is often (but not always) necessary to handle all possible scenarios in a program.</p>

        <Collapsible
          title={`Challenge ${getCurrentNumber()}`}
          section="Implicit Else"
          number={getCurrentNumberAndIncrement()}
        >
          <p>Consider the following code. What will be printed when it runs?</p>
          <CodeBlock language={"python"} codeString={`humidity = 20

if humidity > 80:
    print("It's very humid today.")

print("Enjoy your day!")

if humidity < 30:
    print("It's not humid today.")`} />

          <p>Now modify the code to use an explicit <code className="inline">else</code> statement that prints "The weather is pleasant." when the temperature is not greater than 30. The final message "Enjoy your day!" should still print regardless of the temperature.</p>
        </Collapsible>
      </section>

      <section>
        <h2 id="more-about-indentation"><a href="#more-about-indentation" className="section-link">More About Indentation</a></h2>
        <p>Indentation is not just a part of Python's syntax; it's a core feature. Every block of code within a control structure, like an <code class="inline">if</code> statement, must be consistently indented to indicate the block's boundaries. Incorrect indentation can lead to <code class="inline">IndentationError</code>, which is a common mistake for beginners.</p>
        <p>Here's an example of an indentation error:</p>
        <CodeBlock language={"python"} codeString={`age = 19
if age >= 18:
print("You are eligible to vote")  # This will cause an IndentationError`}></CodeBlock>
        <p>The above code will raise an <code class="inline">IndentationError</code> because the <code class="inline">print</code> statement is not indented, and Python cannot determine whether the statement is part of the <code class="inline">if</code> block or not.</p>
        <h3>Fixing Indentation Errors</h3>
        <p>To correct an indentation error, ensure that all code intended to be executed within a block (like an <code class="inline">if</code> statement) is indented to the same level:</p>
        <CodeBlock language={"python"} codeString={`age = 19
if age >= 18:
    print("You are eligible to vote")  # Correct indentation`}></CodeBlock>

        <h4>Avoiding Indentation Errors</h4>
        <ul>
          <li><strong>Indentation Level:</strong> The standard indentation level is four spaces per level of indentation. You <em>can</em> also use tabs, but we won't get into that discussion now.</li>
          <li><strong>Consistent Indentation:</strong> Always use the same number of spaces (or tabs) for each level of indentation in your block. Mixing spaces and tabs can lead to errors in Python.</li>
        </ul>

        <Collapsible
          title={`Challenge ${getCurrentNumber()}`}
          section="More About Indentation"
          number={getCurrentNumberAndIncrement()}
        >
          <p>Fix the indentation errors in the following code:</p>
          <CodeBlock language={"python"} codeString={`  weather = "sunny"

if weather == "sunny":
    print("It's a sunny day!")
    print("Don't forget sunscreen!")
else:
  print("It's not sunny")`} />
        </Collapsible>
      </section>

      <section>
        <h2 id="nested-if-statements-in-python"><a href="#nested-if-statements-in-python" className="section-link">Nested <code className="inline">if</code> Statements in Python</a></h2>
        <p>Nested <code className="inline">if</code> statements are <code className="inline">if</code> statements within <code className="inline">if</code> statements.</p>
        <p>Think of nested <code className="inline">if</code> statements in Python like a map or a flowchart. Imagine you're at an intersection in a maze, and each decision you make takes you down a different path. That's what these statements do in your code. Each <code className="inline">if</code> statement is like coming to a new intersection and having to decide which way to go based on specific conditions, and the way you got there was dependent on decisions you made earlier in the maze. When you add more <code className="inline">if</code> statements inside each other, it's like adding more turns to the map, making the journey through your code more interesting and complex.</p>
        <p>Here's an example of a nested <code className="inline">if</code> statement in action:</p>
        <CodeBlock language={"python"} codeString={`# Checking if a user can access a premium feature on an app
account_age_days = 45
login_count = 120

if account_age_days > 30:
    print("You've been with us for over a month!")
    if login_count > 100:
        print("You're one of our most active users! Here's a special reward.")
    else:
        print("Keep using our app to unlock special rewards!")
else:
    print("Thanks for subscribing! Explore all our premium features.")`} />

        <p>In this example, we have two levels of nesting inside <code className="inline">if</code> statements. The program first checks if the user has been with us for over a month. If so, it further checks their login activity to determine if they qualify for a special reward.</p>

        <p>Nested <code className="inline">if</code> statements allow you to create more complex decision trees in your code, where each subsequent condition depends on the previous condition being true. However, be careful not to nest code too deeply, as it can make your code harder to read and maintain.</p>
      </section>

      {/* <section>
                <h2>Projects</h2>
                <p>Let's apply what we've learned about if-else statements. Which of these projects sounds most exciting to try?</p>
                <ul>
                    <li><strong>Number Guessing Game</strong>: The computer picks a secret number, and the user tries to guess it.</li>
                    <li><strong>Rock, Paper, Scissors</strong>: Create a game where you can play against the computer.</li>
                    <li><strong>Interactive Quiz</strong>: Write a program that asks trivia questions and uses 'if-else'

 to check the answers.</li>
                </ul>
            </section> */}
      <section>
        <h2 id="wrapping-up"><a href="#wrapping-up" className="section-link">Wrapping Up</a></h2>
        <p>Great job learning the basics of conditional statements! We'll continue to learn more about applications of conditional statements in future lessons. We'll also take a deeper look at the condition part of <code class="inline">if</code> statements and how the value of the condition is evaluated.</p>

        <div>
          <a href="/quiz?name=03Conditionals.py" target="_blank" rel="noopener noreferrer" className="button">Start Quiz</a>
        </div>
      </section>
    </div>
  );
};

export default Conditionals;