import React from 'react';
import CodeBlock from '../components/CodeBlock';

const Booleans = () => {
    return (
        <div className="lesson-container">
            <h1>Understanding Booleans in Python</h1>

            <section>
                <h2>What Are Booleans?</h2>
                <p>
                    At the heart of every decision-making process in programming, there are Booleans. Booleans represent one of two values: <code className="inline">True</code> or <code className="inline">False</code>.

                    They are named after George Boole, a 19th-century mathematician who pioneered the field of algebraic logic.
                </p>

                <p>
                    Understanding booleans is essential for understanding the conditions within if-else statements. The conditions in these statements *must* evaluate to either <code className="inline">True</code> or <code className="inline">False</code> for the computer to decide which block of code to execute.
                </p>
            </section>

            <section>
                <h2>Arithmetic Comparison Operators</h2>
                <p>Arithmetic comparisons are not just simple checks; they are powerful operators that compare two values and return either <code className="inline">True</code> or <code className="inline">False</code>. These operators are fundamental to programming, allowing us to make decisions and control the flow of our programs based on specific conditions. The main comparison operators are:</p>
                <ul>
                    <li><code className="inline">==</code> tests for equality, evaluating to <code className="inline">True</code> if two values are equal and <code className="inline">False</code> otherwise.</li>
                    <li><code className="inline">!=</code> tests for inequality, evaluating to <code className="inline">True</code> if two values are not equal and <code className="inline">False</code> otherwise.</li>
                    <li><code className="inline">&gt;</code> (greater than) checks if the value on the left is greater than the value on the right.</li>
                    <li><code className="inline">&lt;</code> (less than) checks if the value on the left is less than the value on the right.</li>
                    <li><code className="inline">&gt;=</code> (greater than or equal to)</li>
                    <li><code className="inline">&lt;=</code> (less than or equal to)</li>
                </ul>
                <p>Here are some examples of arithmetic comparisons at work:</p>
                <CodeBlock codeString={`5 == 5  # True
10 > 20  # False
7 != 3  # True
x >= 4
temperature <= 1
`} />
                <p>These comparisons which result in either <code className="inline">True</code> or <code className="inline">False</code> are known as <strong>boolean expressions</strong>. Understanding boolean expressions and how to evaluate them is crucial for programming logic. They serve as the building blocks for decision-making within the programs we write.</p>
            </section>

            <section>
                <h2>Logical Operators</h2>
                <p>Logical Operators allow you to construct complex boolean expressions from simpler ones. There are three logical operators in Python:</p>
                <ul>
                    <li><code className="inline">and</code>: Returns <code className="inline">True</code> if both operands are true, and <code className="inline">False</code> if otherwise.</li>
                    <li><code className="inline">or</code>: Returns <code className="inline">True</code> if at least one of the operands is true, and <code className="inline">False</code> if otherwise.</li>
                    <li><code className="inline">not</code>: "Negates" the operand, flipping it from <code className="inline">True</code> to <code className="inline">False</code> and vice versa.</li>
                </ul>
                <p>Like arithmetic operators, they can be used in boolean expressions and evaluate to either <code className="inline">True</code> or <code className="inline">False</code>. Here are some examples of how to use logical operators.</p>
                <CodeBlock codeString={`is_raining = True
have_umbrella = False
# Use 'and' to check multiple conditions
if is_raining and have_umbrella:
    print("You can go outside without getting wet.")
else:
    print("You might get wet in the rain.")

# Use 'or' for cases where either condition suffices
if is_raining or have_umbrella:
    print("Either it's raining, or you have an umbrella, or both.")

# Use 'not' to negate a condition
if not is_raining:
    print("It's not raining, you can leave the umbrella at home.")
else:
    print("It's raining, you might need an umbrella.")`} />
            <p>Here's a breakdown of the examples:</p>
            <ul>
            <li><strong>Using <code className="inline">and</code></strong>: Checks if it's raining <em>and</em> if you have an umbrella. You're prepared for rain only if both conditions are true.</li>
            <li><strong>Using <code className="inline">or</code></strong>: Useful for scenarios where satisfying at least one of the conditions is enough. Here, if it's raining or you have an umbrella (or both), a specific block of code will execute.</li>
            <li><strong>Using <code className="inline">not</code></strong>: Inverts the truth value of a condition. If it's <em>not</em> raining, you don't need an umbrella.</li>
            </ul>
            <p>These examples demonstrate how logical operators allow for the combination of multiple Boolean expressions, enhancing the decision-making capabilities of your programs.</p>

            <h3>Combining Arithmetic and Logical Operators</h3>
            <p>The following examples use both arithmetic and logical operators. Code like this is common in programming.</p>
            <CodeBlock codeString={`# Checking weather conditions for a picnic
temperature = 75
wind_speed = 10

# Using 'and' with arithmetic comparisons
if temperature > 70 and wind_speed < 15:
    print("Perfect weather for a picnic.")
else:
    print("Conditions are not ideal for a picnic.")

# Deciding on an evening activity based on weather conditions
if temperature > 65 and not (wind_speed > 20):
    print("Great evening for a walk.")
else:
    print("Maybe stay in and read a book.")

# Determining if you need to water plants based on weather and soil moisture
rained_yesterday = False
soil_moisture = 30  # soil moisture percentage

# Using 'or' and 'not' with arithmetic comparisons
if not rained_yesterday or soil_moisture < 40:
    print("You need to water the plants today.")
else:
    print("No need to water the plants today.")`}/>
            </section>

            <section>
                <h2>Truth Tables (Optional)</h2>
                <p>A truth table is a mathematical table used to illustrate how the logical operators function for all possible true/false combinations of their inputs. They are essential because they provide a clear, systematic way to understand how different Boolean expressions will evaluate, making them an invaluable tool for anyone looking to debug or design logical statements in programming.</p>

                <p>Truth tables display the outcomes of logical operations for every possible combination of inputs. For programmers, they are particularly useful for:</p>
                <ul>
                    <li>Visualizing how logical operators combine multiple conditions.</li>
                    <li>Debugging complex conditional statements by breaking down the expressions.</li>
                    <li>Ensuring the logic of conditional expressions is accurate and behaves as expected.</li>
                </ul>

                <p>By fully grasping the mechanics of logical operators through truth tables, programmers can create more effective and error-free code, especially when dealing with intricate conditional logic.</p>

                <p>Here are the truth tables for these logical operators, which illustrate the result of each operation based on all possible input combinations:</p>

                <CodeBlock codeString={`# AND Truth Table
print("True and True =", True and True)   # True
print("True and False =", True and False)  # False
print("False and True =", False and True)  # False
print("False and False =", False and False) # False

# OR Truth Table
print("True or True =", True or True)    # True
print("True or False =", True or False)   # True
print("False or True =", False or True)   # True
print("False or False =", False or False)  # False

# NOT Truth Table
print("not True =", not True)  # False
print("not False =", not False) # True`}>
               </CodeBlock>
            </section>

            <section>
                <h2>Truthy and Falsy Values (Optional)</h2>
                <p>In Python, beyond the explicit Boolean values <code className="inline">True</code> and <code className="inline">False</code>, other types of values are also evaluated for their truthiness or falsiness when used in conditions. This means that practically any value can be tested for truth value, allowing for more sophisticated and concise control flow without the need for explicit comparison checks.</p>
                <p>Falsy values are those that Python considers equivalent to <code className="inline">False</code> when evaluated in a Boolean context. Here are the commonly encountered falsy values in Python:</p>
                <ul>
                    <li><code className="inline">0</code>: The integer zero</li>
                    <li><code className="inline">0.0</code>: The float zero</li>
                    <li><code className="inline">''</code> or <code className="inline">""</code>: Empty strings</li>
                    <li><code className="inline">[]</code>: An empty list</li>
                    <li><code className="inline">{}</code>: An empty dictionary</li>
                    <li><code className="inline">()</code>: An empty tuple</li>
                    <li><code className="inline">set()</code>: An empty set</li>
                    <li><code className="inline">None</code>: The <code className="inline">None</code> object</li>
                    <li><code className="inline">False</code>: The Boolean value <code className="inline">False</code> itself</li>
                </ul>
                <p>Here's how some values behave in a Boolean context:</p>
                <CodeBlock codeString={`bool(1)  # True
bool(0)  # False
bool(-2)  # True, because any non-zero number is truthy
bool('Hello!')  # True
bool('')  # False
bool([1, 2, 3])  # True, because the list is not empty
bool([])  # False, because the list is empty`} />
                <p>Why does Python have truthy and falsy values? This feature enables you to write more readable and concise conditions. For example, instead of checking if a list's length is greater than zero to determine if it's not empty, you can directly use the list in a condition. This leverages Python's ability to treat non-empty collections as truthy:</p>
                <CodeBlock codeString={`my_list = [1, 2, 3]
if my_list:
    print("The list is not empty!")  # This will execute`} />
                <p>Understanding truthy and falsy values is crucial for effectively controlling the flow of your programs and writing Pythonic code that is both clear and concise.</p>
            </section>

            <section>
                <h2>Putting It All Together</h2>
                <p>Mastering the use of Booleans and arithmetic comparisons is essential for programming. They help your code make decisions and react differently under various circumstances, enhancing your applications' dynamism and responsiveness.</p>
            </section>
        </div>
    );
};

export default Booleans;
