import React from 'react';
import CodeBlock from '../components/CodeBlock';

const Booleans = () => {
    return (
        <div className="lesson-container">
            <h1>The Boolean Data Type</h1>

            <section>
                <h2>What Are Booleans?</h2>
                <p>
                    At the heart of every decision-making process in programming, there are Booleans. Booleans are a special data type that can be one of two values: <code className="inline">True</code> or <code className="inline">False</code>. Like other data types such as <code className="inline">int</code> and <code className="inline">float</code>, they can be stored in variables and used in expressions.

                    They are named after George Boole, a 19th-century mathematician who pioneered the field of algebraic logic.
                </p>

                <p>Here are some examples of how you might use booleans. Note that in Python, <code className="inline">True</code> and <code className="inline">False</code> are case-sensitive!</p>
                <CodeBlock language={"python"} codeString={`True
False
is_sunny = True
is_rainy = False

true   # NOT interpreted as a boolean
false  # NOT interpreted as a boolean`} />
            </section>

            <section>
                <h2>Why Do We Need Booleans?</h2>
                <p>While it might seem straightforward to use strings such as "yes" and "no" to make decisions in code, this approach is fraught with complications. The Boolean data type, which includes only two values, <code className="inline">True</code> and <code className="inline">False</code>, provides a clear, unequivocal way to represent the truth or falsehood of a statement, which is crucial for decision-making in programming.</p>

                <p>One major issue with using strings like "yes" and "no" is the lack of standardization. In the real world, different languages and cultures have different words for affirmative and negative responses, and even within the same language, there can be variations ("yep", "nope", "sure", etc.). This variability can lead to errors and inconsistencies in how conditions are evaluated.</p>

                <p>Moreover, strings are case-sensitive in most programming languages, including Python. Thus, "Yes", "YES", and "yes" would be treated as distinct responses, complicating the logic for interpreting user inputs. This sensitivity adds unnecessary complexity to condition checks and can easily lead to bugs.</p>

                <p>The Boolean data type eliminates these issues by providing a universal, language-independent way of representing truth values. This not only makes the code more reliable and straightforward but also enhances its readability and maintainability. When conditions are evaluated using Boolean values, there's no ambiguity about the outcome—either a condition is <code className="inline">True</code>, or it is <code className="inline">False</code>, with no room for misinterpretation or error.</p>
            </section>


            <section>
                <h2>Boolean Expressions</h2>

                <p>In our discussion of if-else statements, we referred to the code after the <code className="inline">if</code> keyword as the <strong>condition</strong>.</p>
                <CodeBlock language={"python"} codeString={`age = 19
if age >= 18:  # (age >= 18) is the condition of this if statement
    print("You are eligible to vote")`} />

                <p>The condition of an <code className="inline">if</code> statement can also be described as a <strong>boolean expression</strong> - an expression that evaluates to either <code className="inline">True</code> or <code className="inline">False</code>. The computer can use the result of the boolean expression in the condition of an <code className="inline">if</code> statement to decide which block of code to execute.</p>
                <p>Let's take a closer look at how this condition can be analyzed as a boolean expression.</p>
                <CodeBlock language={"python"} codeString={`age >= 18  # a boolean expression`} />
                <p>Here, <code className="inline">age &gt;= 18</code> is a boolean expression because it evaluates to either <code className="inline">True</code> or <code className="inline">False</code> depending on the value of <code className="inline">age</code>.</p>
            </section>

            <section>
                <h2>Comparison Operators</h2>
                <p>The comparison operators are boolean expressions that compare the relative values of data. Though the comparison operators have a specific syntax in Python, we actually use comparisons like these in our daily lives. The comparison operators include:</p>
                <ul>
                    <li><code className="inline">==</code> tests for equality, evaluating to <code className="inline">True</code> if two values are equal and <code className="inline">False</code> otherwise.</li>
                    <li><code className="inline">!=</code> tests for inequality, evaluating to <code className="inline">True</code> if two values are not equal and <code className="inline">False</code> otherwise.</li>
                    <li><code className="inline">&gt;</code> (greater than) checks if the value on the left is greater than the value on the right.</li>
                    <li><code className="inline">&lt;</code> (less than) checks if the value on the left is less than the value on the right.</li>
                    <li><code className="inline">&gt;=</code> (greater than or equal to)</li>
                    <li><code className="inline">&lt;=</code> (less than or equal to)</li>
                </ul>

                <p>Here are some examples of comparison operators at work:</p>
                <CodeBlock language={"python"} codeString={`5 == 5   # True
10 > 20  # False
7 != 3   # True
x >= 4
temperature <= 1
`} />
                <p>The comparison operators are not just simple checks; they are powerful operators that compare two values and return either <code className="inline">True</code> or <code className="inline">False</code>. These operators are fundamental to programming, allowing us to make decisions and control the flow of our programs based on specific conditions.</p>
            </section>

            <section>
                <h2>Logical Operators</h2>
                <p>Logical Operators allow you to construct complex boolean expressions from simpler ones. Like arithmetic comparison operators, using them also results in boolean expressions. There are three logical operators in Python:</p>
                <ul>
                    <li><code className="inline">and</code>: Returns <code className="inline">True</code> if both operands are true, and <code className="inline">False</code> if otherwise.</li>
                    <li><code className="inline">or</code>: Returns <code className="inline">True</code> if at least one of the operands is true, and <code className="inline">False</code> if otherwise.</li>
                    <li><code className="inline">not</code>: "Negates" the operand, flipping it from <code className="inline">True</code> to <code className="inline">False</code> and vice versa.</li>
                </ul>
                <p>Like arithmetic operators, they can be used in boolean expressions and evaluate to either <code className="inline">True</code> or <code className="inline">False</code>. Here are some examples of how to use logical operators.</p>
                <CodeBlock language={"python"} codeString={`is_raining = True
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
            <CodeBlock language={"python"} codeString={`# Checking weather conditions for a picnic
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

                <CodeBlock language={"python"} codeString={`# and Truth Table
print("True and True =", True and True)   # True
print("True and False =", True and False)  # False
print("False and True =", False and True)  # False
print("False and False =", False and False) # False

# or Truth Table
print("True or True =", True or True)    # True
print("True or False =", True or False)   # True
print("False or True =", False or True)   # True
print("False or False =", False or False)  # False

# NOT Truth Table
print("not True =", not True)  # False
print("not False =", not False) # True`}/>
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
                <CodeBlock language={"python"} codeString={`bool(1)  # True
bool(0)  # False
bool(-2)  # True, because any non-zero number is truthy
bool('Hello!')  # True
bool('')  # False
bool([1, 2, 3])  # True, because the list is not empty
bool([])  # False, because the list is empty`} />
                <p>Why does Python have truthy and falsy values? This feature enables you to write more readable and concise conditions. For example, instead of checking if a list's length is greater than zero to determine if it's not empty, you can directly use the list in a condition. This leverages Python's ability to treat non-empty collections as truthy:</p>
                <CodeBlock language={"python"} codeString={`my_list = [1, 2, 3]  # truthy value
if my_list:
    print("The line of code will execute")

x = 0  # falsy value
if x:
    print("This line of code will not execute")
            `} />
                <p>Understanding truthy and falsy values is crucial for effectively controlling the flow of your programs and writing Pythonic code that is both clear and concise.</p>
            </section>

            <section>
                <h2>Ordering and Grouping Logical Operators</h2>
                <p>You might remember the acronym "PEMDAS" from math class, a useful mnemonic for memorizing the order of arithmetic operators. Like arithmetic operators, logical operators also follow a specific order of precedence when evaluating expressions. This order is crucial for understanding how complex boolean expressions are resolved. The basic order of precedence from highest to lowest is: <code className="inline">not</code>, <code className="inline">and</code>, and <code className="inline">or</code>.</p>
                <CodeBlock language={"python"} codeString={`# 'not' has the highest precedence
not False and True  # Evaluates to True

# 'and' is evaluated next
True and False or True  # Evaluates to True

# 'or' has the lowest precedence
False or True and False  # Evaluates to False
`} />
                <h3>Combining Arithmetic Operators with Logical Operators</h3>
                <p>Arithmetic operators have higher precedence than logical ones. This means that in expressions involving both types of operators, the arithmetic operations will be evaluated first, followed by the logical operations. This hierarchy ensures that numerical calculations are completed before logical comparisons are made.</p>

                <CodeBlock language={"python"} codeString={`# Arithmetic operation is performed first, then logical
print(2 + 3 * 4 == 14 and True)  # Evaluates to True`} />
                <p>Here, multiplication is performed, followed by addition, then the equality check, and finally the logical <code className="inline">and</code>.</p>

                <h3>Using Parentheses <code className="inline">()</code></h3>
                <p>In addition to the above rules, parentheses <code className="inline">()</code> can be used to explicitly define the evaluation order, overriding the default precedence rules. This is particularly useful for making complex expressions clearer and ensuring they evaluate as intended.</p>

                <p>Let's see how using parentheses affects our code. In each example, the second result will use parentheses, thereby changing the final result of the expression.</p>
                <CodeBlock language={"python"} codeString={`# Example 1
result = False or True and not False
# Evaluates to True

result = (False or True) and not False
# After grouping with parentheses, evaluates to True


# Example 2
result2 = False and False or True
# Evaluates to True

result2 = False and (False or True)
# After grouping with parentheses, evaluates to False
`} />
                <p>By thoughtfully using parentheses, you can ensure your boolean expressions are evaluated in the exact order you intend, avoiding potential logic errors in your code.</p>
            </section>


            <section>
                <h2>DeMorgan's Laws and Simplifying Boolean Expressions (Optional)</h2>
                <p>DeMorgan's Laws consist of two transformation rules that help in rephrasing boolean expressions involving <code className="inline">and</code> (conjunction) and <code className="inline">or</code> (disjunction), making complex logic more accessible. Here's how they work:</p>
                <CodeBlock language={"python"} codeString={`# DeMorgan's Laws Examples
# not (a and b) is equivalent to (not a) or  (not b)
# not (a or b)  is equivalent to (not a) and (not b)
`} />
                <p>Here are the laws more formally expressed.</p>
                <ul>
                    <li><strong>Law 1:</strong> Negating a conjunction (<code className="inline">and</code>) statement is the same as negating each part separately and joining them with <code className="inline">or</code>.</li>
                    <li><strong>Law 2:</strong> Negating a disjunction (<code className="inline">or</code>) statement equates to negating each component and combining them with <code className="inline">and</code>.</li>
                </ul>

                <p><strong>Benefits of DeMorgan's Laws:</strong></p>
                <ul>
                    <li><strong>Simplification:</strong> These laws allow for the rewriting of complex boolean expressions into simpler forms.</li>
                    <li><strong>Efficiency:</strong> Simplified expressions can sometimes be executed more efficiently, depending on the programming environment.</li>
                    <li><strong>Flexibility:</strong> By offering alternative ways to express conditions, DeMorgan's Laws enhance the versatility of your logical operations.</li>
                </ul>

                <p><strong>Example:</strong></p>
                <p>Consider a scenario where someone is eligible to vote if they are at least 18 years old (<code className="inline">age >= 18</code>) and a citizen (<code className="inline">isCitizen</code> is <code className="inline">True</code>). This is represented with an <code className="inline">and</code> condition:</p>

                <CodeBlock language={"python"} codeString={`# Original eligibility check
isCitizen = True
if age >= 18 and isCitizen:
    print("Eligible to vote")

# Applying DeMorgan's Law 1 to express the inverse logic step by step:

# Step 1: Apply NOT to the whole condition
not (age >= 18 and isCitizen)

# Step 2: Distribute NOT across the AND condition, flipping AND to OR
(not (age >= 18)) or (not isCitizen)

# Step 3: Simplify the expressions
(age < 18) or (not isCitizen)

# Final inverted condition check for ineligibility
if (age < 18) or (not isCitizen):
    print("Not eligible to vote")

# We can also eliminate the parentheses due to the natural precedence of the operators
if age < 18 or not isCitizen:
    print("Not eligible to vote")
`} />
            </section>

        </div>
    );
};

export default Booleans;
