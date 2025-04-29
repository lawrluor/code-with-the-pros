import React from 'react';
import ProgressBar from "../../components/ProgressBar";
import CodeBlock from '../../components/CodeBlock';
import Collapsible from '../../components/Collapsible';

import useSequentialCounter from '../../hooks/useSequentialCounter';

const Booleans = () => {
  const { getCurrentNumberAndIncrement } = useSequentialCounter(0);

  return (
    <div className="lesson-container">
      <ProgressBar />

      <section>
        <h1>The Boolean Data Type</h1>
      </section>

      <section>
        <h2 id="boolean-basics"><a href="#boolean-basics" className="section-link">Boolean Basics</a></h2>
        <p>At the heart of every decision-making process in programming, there are Booleans. A <code className="inline">boolean</code> is a special data type that can be one of two values: <code className="inline">True</code> or <code className="inline">False</code>. Like other data types, such as integers, floats, and strings, they can be stored in variables and used in expressions. They are named after George Boole, a 19th-century mathematician.</p>
      </section>

      <section>
        <h2 id="boolean-examples"><a href="#boolean-examples" className="section-link">Boolean Examples</a></h2>
        <p>Here are some examples of booleans:</p>
        <CodeBlock language={"python"} codeString={`True
False
is_sunny = True
is_rainy = False

print(is_sunny)  # True
print(is_rainy)  # False`} />

        <p>Note that in Python, <code className="inline">True</code> and <code className="inline">False</code> are case-sensitive! Below are some common misspellings of <code className="inline">True</code> and <code className="inline">False</code>.</p>
        <CodeBlock language={"python"} codeString={`# Python interprets lowercase "true" and "false" as variable names rather than booleans
true    # NOT interpreted as a boolean
false   # NOT interpreted as a boolean

# These are strings, not booleans
"true"  # NOT interpreted as a boolean
"false" # NOT interpreted as a boolean`} />

        <h3>Naming Booleans</h3>
        <p>As with other data types, you can name booleans using any valid variable name. However, it is best to give booleans variable names that directly describe their purpose. Here are some examples:</p>
        <li><code className="inline">is_rainy</code>: A value of <code className="inline">True</code> implies that it is currently raining.</li>
        <li><code className="inline">did_press_button</code>: A value of <code className="inline">True</code> implies that the user did press a button</li>
        <li><code className="inline">was_present</code>: A value of <code className="inline">True</code> implies that the student was present.</li>

        <h3>Checking the Boolean Type</h3>
        <p>As with other data types, you can check the type of a boolean using the <code className="inline">type()</code> function.</p>
        <CodeBlock language={"python"} codeString={`type(True)   # <class 'bool'>
type(False)  # <class 'bool'>`} />

        <p>You can also <strong>cast</strong> data to and from booleans. To convert a value to a boolean, use the <code className="inline">bool()</code> function.</p>
        <CodeBlock language={"python"} codeString={`bool(1)   # True
bool(0)   # False

bool("True")  # True
bool("")      # False`} />

        <p>We will discuss more specific rules for boolean casting later in the chapter.</p>
      </section>

      <section>
        <h2 id="why-do-we-need-booleans"><a href="#why-do-we-need-booleans" className="section-link">Why Do We Need Booleans?</a></h2>
        <p>While it might seem straightforward to use strings such as "yes" and "no" to make decisions in code, this approach is actually fraught with complications. Booleans provide a clear, unambiguous way to represent the truth or falsehood of a statement.</p>

        <p>One major issue with using strings like "yes" and "no" is the lack of standardization. In the real world, different languages and cultures have different words for affirmative and negative responses, and even within the same language, there can be variations ("yep", "nope", "sure", etc.). This variability can lead to errors and inconsistencies in how conditions are evaluated.</p>

        <p>Moreover, strings are case-sensitive in most programming languages, including Python. Thus, "Yes", "YES", and "yes" would be treated as distinct responses, overcomplicating the logic for interpreting user inputs. This sensitivity adds unnecessary complexity to condition checks and can easily lead to errors.</p>

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>If you're not convinced, consider the following: How would you write a check for whether a string equals <code className="inline">"yes"</code> or <code className="inline">"no"</code>? What code would you need to add to ensure that <code className="inline">"y"</code> and <code className="inline">"n"</code> would also be considered affirmative or negative responses?</p>
        </Collapsible>
      </section>


      <section>
        <h2 id="boolean-expressions"><a href="#boolean-expressions" className="section-link">Boolean Expressions</a></h2>

        <p>Now that we better understand booleans, we can use them to better describe the logic of <code className="inline">if-else</code> statements. In our previous discussion of conditional statements, we referred to the code directly after the <code className="inline">if</code> keyword as the <strong>condition</strong>.</p>
        <CodeBlock language={"python"} codeString={`age = 10
if age >= 10:  # The condition is: age >= 10
    print("You are old enough to ride this rollercoaster.")`} />

        <p>The condition of an <code className="inline">if</code> statement can <em>also</em> be described as a <strong>boolean expression</strong> - an expression that evaluates to either <code className="inline">True</code> or <code className="inline">False</code>. The computer can use the result of the boolean expression in the condition of an <code className="inline">if</code> statement to decide which block of code to execute.</p>
        <p>Let's take a closer look at how this condition can be analyzed as a boolean expression.</p>
        <CodeBlock language={"python"} codeString={`age = 10
print(age >= 10)`} />
        <p>Just as the mathematical expression <code className="inline">10 - 5</code> can be simplified to <code className="inline">5</code>, the boolean expression <code className="inline">age &ge; 10</code> can be simplified to <code className="inline">True</code>.</p>

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>What value does <code className="inline">10 &lt; 15</code> evaluate to? What about <code className="inline">10 &gt; 10</code>?</p>
        </Collapsible>
      </section>

      <section>
        <h2 id="comparison-operators-revisited"><a href="#comparison-operators-revisited" className="section-link">Comparison Operators Revisited</a></h2>
        <p>The comparison operators that we have learned about previously are actually at the heart of boolean expressions.</p>
        <ul>
          <li><code className="inline">==</code> tests for equality, evaluating to <code className="inline">True</code> if the two surrounding values are equal and <code className="inline">False</code> otherwise.</li>
          <li><code className="inline">!=</code> tests for inequality, evaluating to <code className="inline">True</code> if the two surrounding values and <code className="inline">False</code> otherwise.</li>
          <li><code className="inline">&gt;</code> (greater than) checks if the value on the left is greater than the value on the right.</li>
          <li><code className="inline">&lt;</code> (less than) checks if the value on the left is less than the value on the right.</li>
          <li><code className="inline">&gt;=</code> (greater than or equal to)</li>
          <li><code className="inline">&lt;=</code> (less than or equal to)</li>
        </ul>

        <h3>Using Comparison Operators</h3>
        <p>We have seen several examples of comparison operators used with integers and floats. We can actually use them with strings and booleans, too! Let's look at some examples:</p>
        <CodeBlock language={"python"} codeString={`print("apple" == "apple")   # True
print("apple" == "banana")  # False

fruit = "coconut"
print("apple" != fruit)  # True
print(fruit == fruit)    # True`} />

        <p>And now, with booleans:</p>
        <CodeBlock language={"python"} codeString={`print(True == True)      # True
print(False != False)    # False

is_late = True
print(is_late == True)   # True
print(True != is_late)   # False`} />
        <p>The comparison operators are not just simple checks; they are powerful operators that transform expressions into boolean values <code className="inline">True</code> or <code className="inline">False</code>.</p>

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>In your code editor, write the following boolean expressions:</p>
          <ol>
            <li>An expression involving two booleans that evaluates to <code className="inline">True</code>.</li>
            <li>An expression involving two strings that evaluates to <code className="inline">False</code>.</li>
          </ol>
        </Collapsible>

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>Bonus: In your code editor, compare strings using the greater than and less than operators. What do you notice?</p>
        </Collapsible>
      </section>

      <section>
        <h2 id="boolean-operators"><a href="#boolean-operators" className="section-link">Boolean Operators</a></h2>
        <p>Logical Operators allow you to construct complex boolean expressions from simpler ones. Like arithmetic comparison operators, using them also results in boolean expressions. There are three logical operators in Python:</p>
        <ul>
          <li><code className="inline">and</code>: <code className="inline">True</code> if both operands are true, and <code className="inline">False</code> if otherwise.</li>
          <li><code className="inline">or</code>: <code className="inline">True</code> if at least one of the operands is true, and <code className="inline">False</code> if otherwise.</li>
          <li><code className="inline">not</code>: <em>Negates</em> the operand, flipping it from <code className="inline">True</code> to <code className="inline">False</code> and vice-versa.</li>
        </ul>
        <p>An <strong>operand</strong> is the formal term for the values on the left or right of the operator. For example, in the expression <code className="inline">a and b</code>, the operator is <code className="inline">and</code>, while the operands are <code className="inline">a</code> and <code className="inline">b</code>.</p>

        <h3>Using Logical Operators</h3>
        <CodeBlock language={"python"} codeString={`is_raining = True
have_umbrella = False

# Use 'and' for cases where BOTH conditions must be met
if is_raining and have_umbrella:
    print("You can go outside without getting wet.")
else:
    print("You might get wet in the rain.")

# Use 'or' for cases where EITHER condition suffices
if is_raining or have_umbrella:
    print("Either it's raining, or you have an umbrella, or both.")`} />

        <p>Here's a breakdown of the examples:</p>
        <ul>
          <li>Using <code className="inline">and</code>: Checks if it's raining <em>and</em> if you have an umbrella. You're prepared for rain only if both conditions are true.</li>
          <li>Using <code className="inline">or</code>: Useful for scenarios where satisfying at least one of the conditions is enough. Here, if it's raining or you have an umbrella (or both), a specific block of code will execute.</li>
        </ul>

        <h3>The <code className="inline">not</code> Operator</h3>
        <p><code className="inline">not</code> is the odd one out. Let's take a look at an example:</p>
        <CodeBlock language={"python"} codeString={`# Use 'not' to negate a condition
people = 3

if not people >= 3:
    print("Not a crowd.")
else:
    print("A crowd.")`} />

        <p>Using <code className="inline">not</code> negates the condition <code className="inline">people &gt;= 3</code>, which is originally <code className="inline">True</code>. After negating it with <code className="inline">not</code>, the value bcomes <code className="inline">False</code>. Therefore, the <code className="inline">else</code> block is executed.</p>

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>Using <code className="inline">and</code>, write the following:</p>
          <ol>
            <li>An if statement that determines whether or not you should go to school based on the day and hour of the day.</li>
            <li>An if statement that determines whether or not it is New Year's day based on the month and day.</li>
          </ol>
        </Collapsible>

        <h3>Logical Operators in Boolean Expressions</h3>
        <p>Like arithmetic operators, logical operators are used in boolean expressions. Remember that a boolean expression is simply a statement that evaluates to <code className="inline">True</code> or <code className="inline">False</code>.</p>
        <CodeBlock language={"python"} codeString={`print(True and False)  # Simplifies to False
print(True or False)   # Simplifies to True
print(not False)       # Simplifies to True`} />


        <h3>Combining Arithmetic and Logical Operators</h3>
        <p>By combining arithmetic and logical operators, you can create more complex boolean expressions. Code like this is common in real-life applications. Below are some examples: </p>
        <CodeBlock language={"python"} codeString={`# Checking weather conditions for a picnic
temperature = 75
wind_speed = 10

# 1. Using 'and' with arithmetic comparisons
if temperature > 70 and wind_speed < 15:
    print("Perfect weather for a picnic.")
else:
    print("Conditions are not ideal for a picnic.")

# 2. Deciding on an evening activity based on weather conditions
if temperature > 65 and wind_speed < 20:
    print("Great evening for a walk.")
else:
    print("Maybe stay in and read a book.")`} />

        <p>Let's take a closer look. The first <code className="inline">if</code> statement can be broken down into multiple boolean expressions: <code className="inline">temperature &gt; 70</code> and <code className="inline">wind_speed &lt; 15</code>.</p>
        <ol>
          <li><code className="inline">temperature &gt; 70</code> evaluates to <code className="inline">True</code>.</li>
          <li><code className="inline">wind_speed &lt; 15</code> evaluates to <code className="inline">False</code>.</li>
        </ol>

        <p>After simplifying these expressions, the <code className="inline">if</code> statement becomes <code className="inline">if True and False:</code>, which evaluates to <code className="inline">False</code>.</p>

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>Try breaking down the second <code className="inline">if</code> statement into multiple boolean expressions.</p>
        </Collapsible>

        <p>Here's a final example using <code className="inline">or</code> and <code className="inline">not</code>.</p>

        <CodeBlock language={"python"} codeString={`# Determining if you need to water plants based on weather and soil moisture
rained_yesterday = False
soil_moisture = 30  # soil moisture percentage

# Using 'or' and 'not' with arithmetic comparisons
if not rained_yesterday==True or soil_moisture < 40:
    print("You need to water the plants today.")
else:
    print("No need to water the plants today.")`} />

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>What prints out in the above if statement?</p>
        </Collapsible>
      </section>

      <section>
        <h2 id="nested-if-vs-and"><a href="#nested-if-vs-and" className="section-link">Nested <code className="inline">if</code> Statements vs. the <code className="inline">and</code> Operator</a></h2>
        <p>One topic we covered in the last chapter was nested <code className="inline">if</code> statements. In this section, we will explore an alternative way to express the same logical condition using the <code className="inline">and</code> operator.</p>

        <h3>Reviewing Nested <code className="inline">if</code> Statements</h3>
        <p>Nested <code className="inline">if</code> statements involve placing one <code className="inline">if</code> statement inside another. The inner <code className="inline">if</code> statement only executes if the outer <code className="inline">if</code> condition is <code className="inline">True</code>.</p>

        <CodeBlock language={"python"} codeString={`# Using nested if statements
age = 25
has_license = True

if age >= 18:
    if has_license:
        print("You can drive a car.")
    else:
        # Both age >= 18 and has_license must be True for this line to execute
        print("You need a license to drive.")
else:
    print("You must be at least 18 to drive.")`} />

        <h3>Rewriting Nested <code className="inline">if</code> Statements with <code className="inline">and</code></h3>
        <p>Using the <code className="inline">and</code> operator allows you to combine multiple conditions in a single <code className="inline">if</code> statement. For the entire expression to evaluate to <code className="inline">True</code>, <strong>all</strong> conditions must be <code className="inline">True</code>.</p>

        <CodeBlock language={"python"} codeString={`# Using the and operator
age = 25
has_license = True

if age >= 18 and has_license:
    # Both age >= 18 and has_license must be True for this line to execute
    print("You can drive a car.")
elif age >= 18:
    print("You need a license to drive.")
else:
    print("You must be at least 18 to drive.")`} />

        <p>The two code blocks above are functionally equivalent. However, the <code className="inline">and</code> operator is more concise and easier to read. Oftentimes, it's a good idea to use the <code className="inline">and</code> operator as it improves the readability of your code.</p>
        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>Rewrite the following nested <code className="inline">if</code> statement using the <code className="inline">and</code> operator:</p>
          <CodeBlock language={"python"} codeString={`temperature = 28  # degrees Celsius
is_sunny = True

# Using nested if statements
if temperature > 25:
    if is_sunny:
        print("Perfect day for the beach!")
    else:
        print("Good day for outdoor activities, but bring an umbrella.")
else:
    print("Consider indoor activities today.")`} />
        </Collapsible>
      </section>

      <section>
        <h2 id="truth-tables"><a href="#truth-tables" className="section-link">Truth Tables</a></h2>
        <p>A truth table is a mathematical table used to illustrate how the logical operators function for all possible combinations of <code className="inline">True</code> and <code className="inline">False</code>.</p>

        <CodeBlock language={"python"} codeString={`# and
True and True    # True
True and False   # False
False and True   # False
False and False  # False

# or
True or True    # True
True or False   # True
False or True   # True
False or False  # False

# not
not True   # False
not False  # True`} />

        <p>To further illustrate how these values are derived, let's try adding some real-world context.</p>

        <CodeBlock language={"python"} codeString={`True and True
# Statement: Cats are animals and roses are plants.
# Overall truth: True

True and False
# Statement: Cats are animals and roses are animals.
# Overall truth: False

False and True
# Statement: Cats are plants and roses are plants.
# Overall truth: False

False and False
# Statement: Cats are plants and roses are animals.
# Overall truth: False` } />

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>In your code editor, create real-world examples for the <code className="inline">or</code> operator.</p>
        </Collapsible>

        <p>Don't worry about memorizing the truth tables. Most programmers learn them quickly simply by using logical operators in their code. However, they are a useful reference for beginning programmers. The most important takeaway is that: </p>
        <ul>
          <li>If either operand in an <code className="inline">and</code> expression evaluates to <code className="inline">False</code>, the entire expression evaluates to <code className="inline">False</code>.</li>
          <li>If either operand in an <code className="inline">or</code> expression evaluates to <code className="inline">True</code>, the entire expression evaluates to <code className="inline">True</code>.</li>
        </ul>

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>Add the following code to your code editor, then run it to get a visual reference to the truth tables.</p>
          <CodeBlock language={"python"} codeString={`# and Truth Table
print(f"True and True = {True and True}")      # True
print(f"True and False = {True and False}")    # False
print(f"False and True = {False and True}")    # False
print(f"False and False = {False and False}")  # False

# or Truth Table
print(f"True or True = {True or True}")      # True
print(f"True or False = {True or False}")    # True
print(f"False or True = {False or True}")    # True
print(f"False or False = {False or False}")  # False

# not Truth Table
print(f"not True = {not True}")   # False
print(f"not False = {not False}") # True`} />
        </Collapsible>
      </section>

      <section>
        <h2 id="truthy-and-falsy-values"><a href="#truthy-and-falsy-values" className="section-link">Truthy and Falsy Values</a></h2>
        <p>Beyond the explicit Boolean values <code className="inline">True</code> and <code className="inline">False</code>, values of other data types can be evaluated as <code className="inline">True</code> or <code className="inline">False</code> when used in conditions. "Falsy" values are those that Python considers equivalent to <code className="inline">False</code> when evaluated in a Boolean context. Here are some commonly encountered falsy values in Python:</p>
        <ul>
          <li><code className="inline">0</code>: The integer zero</li>
          <li><code className="inline">0.0</code>: The float zero</li>
          <li><code className="inline">''</code> or <code className="inline">""</code>: Empty strings</li>
          {/* <li><code className="inline">[]</code>: An empty list</li>
                    <li><code className="inline">{}</code>: An empty dictionary</li>
                    <li><code className="inline">()</code>: An empty tuple</li>
                    <li><code className="inline">set()</code>: An empty set</li> */}
          <li><code className="inline">None</code>: The <code className="inline">None</code> object</li>
          <li><code className="inline">False</code>: The boolean value <code className="inline">False</code> itself</li>
          <li>Empty sequences of data, which we will learn about in future sections.</li>
        </ul>

        <p>All other values are considered "truthy".</p>

        <h3>Converting Values to Booleans</h3>
        <p>If you ever want to analyze the truthiness of a value, you can simply cast the data to a boolean using the <code className="inline">bool</code> function:</p>
        <CodeBlock language={"python"} codeString={`bool(1)         # True
bool(0)         # False
bool(-2)        # True, because any non-zero number is truthy
bool('Hello!')  # True
bool('')        # False`} />
        <p>Why does Python have truthy and falsy values? This feature enables you to write more concise conditions. For example, instead of checking if a value is equal to <code className="inline">True</code>, you can simply check if the value <em>itself</em> is truthy. The <code className="inline">if</code> statements in both examples below are equivalent:</p>
        <CodeBlock language={"python"} codeString={`is_weekend = True

# 1. Explicit comparison of is_weekend == True is unnecessary, as True is a truthy value
if is_weekend == True:
  print("It's a weekend!")

# 2. Using truthiness
if is_weekend:
  print("It's a weekend!")`} />

        <p>Here's another example with strings:</p>
        <CodeBlock language={"python"} codeString={`username = ""

# 1. Explicit comparison of username != "" is unnecessary, as "" is a falsy value
if username != "":
  print("Valid username: your username is not empty.")

# 2. Using truthiness
if username:
  print("Valid username: your username is not empty.")`} />

        <p>And a final example with integers:</p>
        <CodeBlock language={"python"} codeString={`number_of_items = 0

# 1. Explicit comparison of number_of_items > 0 is unnecessary, as 0 is a falsy value
if number_of_items > 0:
  print("You may proceed to enter your payment information.")
else:
  print("You must check out at least one item.")

# 2. Using truthiness
if number_of_items:
  print("You may proceed to enter your payment information.")
else:
  print("You must check out at least one item.")`} />

        <p>Practically any value of any data type can be tested for truth value, without using an explicit comparison check.</p>

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>In your code editor, rewrite the following expressions without directly comparing the variable to <code className="inline">is_tired</code> to <code className="inline">True</code> or <code className="inline">False</code>.</p>
          <CodeBlock language={"python"} codeString={`# 1.
is_tired = True
if is_tired == True:
  print("Take a break!")

# 2. Bonus
is_tired = True
if is_tired == False:
  print("Keep going!")`} />
        </Collapsible>
      </section>

      <section>
        <h2 id="order-of-operators"><a href="#order-of-operators" className="section-link">Order of Operators</a></h2>
        <p>You might remember the acronym "PEMDAS" from math class, a useful mnemonic for memorizing the order of arithmetic operators: Parentheses, Exponents, Multiplication, Division, Addition, Subtraction. Like arithmetic operators, logical operators also follow a specific order of precedence when evaluating expressions. The basic order of precedence from highest to lowest is: <code className="inline">not</code>, <code className="inline">and</code>, and <code className="inline">or</code>. Let's examine some examples:</p>
        <CodeBlock language={"python"} codeString={`# 'not' has the highest precedence
not False and True  # Evaluates to True`} />

        <p>Here, <code className="inline">not False</code> is evaluated to <code className="inline">True</code>, and then <code className="inline">True and True</code> is evaluated to <code className="inline">True</code>. Now, we'll focus on the <code className="inline">and</code> operator:</p>

        <CodeBlock language={"python"} codeString={`# 'and' has the next highest precedence
True and False or True    # Evaluates to True`} />

        <p>In the above example, <code className='inline'>True and False</code> is first evaluated to <code className="inline">False</code>, and then <code className="inline">False or True</code> is evaluated to <code className="inline">True</code>. Finally, we'll look at the <code className="inline">or</code> operator:</p>

        <CodeBlock language={"python"} codeString={`# 'or' has the lowest precedence
False or False and True   # Evaluates to False`} />

        <p>Here, <code className='inline'>False and True</code> is first evaluated to <code className="inline">False</code>, and then <code className="inline">False or False</code> is evaluated to <code className="inline">False</code>.</p>

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>What will the following expressions will evaluate to? Use your code editor to check your results.</p>

          <CodeBlock language={"python"} codeString={`print(False and False or True)
print(False or True and not True)
print(not True or False and False)`} />
        </Collapsible>


        <h3>Combining Arithmetic Operators with Logical Operators</h3>
        <p>Arithmetic operators have higher precedence than logical ones. This means that in expressions involving both types of operators, the arithmetic operations will be evaluated <strong>first</strong>, followed by the logical operations. This hierarchy ensures that numerical calculations are completed before logical comparisons are made.</p>

        <CodeBlock language={"python"} codeString={`print(1 + 3 * 4 == 14 or True)`} />
        <p>Here, according to PEMDAS rules, multiplication <code className="inline">*</code> happens first, followed by addition <code className="inline">+</code>. We now have:</p>

        <CodeBlock language={"python"} codeString={`print(13 == 14 or True)`} />
        <p>The number on the left is then compared to the number on the right using the <code className="inline">==</code> operator. This simplifies to:</p>

        <CodeBlock language={"python"} codeString={`print(False or True)`} />
        <p>Then, we use the logical operator <code className="inline">or</code>. Since at least one of the operands is true, the boolean expression simplifies to <code className="inline">True</code>.</p>

        <CodeBlock language={"python"} codeString={`print(True)`} />
        <p>Finally, we print <code className="inline">True</code> to the console.</p>

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>What will the following expressions will evaluate to? Use your code editor to check your results.</p>

          <CodeBlock language={"python"} codeString={`print(1 + 10 == 11 and True)
print(13 * 3 == 37 or False)
print("a" == "b" or not False)`} />
        </Collapsible>

        <h3>Using Parentheses <code className="inline">()</code></h3>
        <p>In addition to the above rules, parentheses <code className="inline">()</code> can be used to explicitly define the evaluation order, overriding the default precedence rules. This is particularly useful for making complex expressions clearer and ensuring they evaluate as intended.</p>

        <p>Let's see how using parentheses affects our code.</p>
        <CodeBlock language={"python"} codeString={`result = False and False or True    # Evaluates to True
result = False and (False or True)  # After grouping with parentheses, evaluates to False`} />
        <p>By carefully using parentheses, you can ensure your boolean expressions are evaluated in the exact order that you intend.</p>

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>What will the following boolean expressions with parentheses will evaluate to? Use your code editor to check your results.</p>

          <CodeBlock language={"python"} codeString={`print((False or True) and not False)
print(not "a" == "b" and (False or True))
print(True == False or (False or True))`} />
        </Collapsible>
      </section>

      <section>
        <h2 id="short-circuit-evaluation"><a href="#short-circuit-evaluation" className="section-link">Short-Circuit Evaluation</a></h2>
        <p>In Python, <strong>short-circuit evaluation</strong> is a feature that allows for more efficient evaluation of boolean expressions when one of the operands is already known to be <code className="inline">True</code> or <code className="inline">False</code>. For example: </p>

        <CodeBlock language={"python"} codeString={`# Evaluates to True without checking the second operand (False)
result = True or False

# Evaluates to False without checking the second operand ("hello" == "world")
result = False and ("hello" == "world")

# Evaluates to True without checking the second operand (3 * 9 == 25)
result = True or (3 * 9 == 25)`} />

        <p>In these examples, the second operand is not evaluated because the first operand combined with the logical operator is already known to be <code className="inline">True</code> or <code className="inline">False</code> via the truth tables. Essentially, short-circuit evaluation boils down to two rules:</p>
        <ol>
          <li>In an <code className="inline">or</code> expression, if the first operand is <code className="inline">True</code>, the second operand is not evaluated.</li>
          <li>In an <code className="inline">and</code> expression, if the first operand is <code className="inline">False</code>, the second operand is not evaluated.</li>
        </ol>

        <h3>Implications of Short-Circuit Evaluation</h3>
        <p>By placing conditions that are simpler to evaluate first, you can make the computer's running of your code more efficient. Short-circuit evaluation has the following benefits:</p>
        <ul>
          <li>Optimizing performance by skipping unnecessary evaluations of complex boolean expressions.</li>
          <li>Ensuring that certain conditions are met before executing other conditions, reducing the risk of errors.</li>
        </ul>
      </section>

      <section>
        <h2 id="demorgans-laws"><a href="#demorgans-laws" className="section-link">(Optional) DeMorgan's Laws and Simplifying Boolean Expressions</a></h2>
        <p><strong>DeMorgan's Laws</strong> consist of two transformation rules that help in rephrasing boolean expressions involving <code className="inline">and</code> (conjunction) and <code className="inline">or</code> (disjunction), making complex logic more accessible. Here's how they work:</p>
        <CodeBlock language={"python"} codeString={`# DeMorgan's Laws Examples
# not (a and b) is equivalent to (not a) or  (not b)
# not (a or b)  is equivalent to (not a) and (not b)
`} />
        <p>Here are the laws more formally expressed.</p>
        <ul>
          <li><strong>Law 1:</strong> Negating a conjunction (<code className="inline">and</code>) statement is the same as negating each part separately and joining them with <code className="inline">or</code>.</li>
          <li><strong>Law 2:</strong> Negating a disjunction (<code className="inline">or</code>) statement equates to negating each component and combining them with <code className="inline">and</code>.</li>
        </ul>

        <h3>Applying DeMorgan's Laws</h3>
        <p>Consider a scenario where someone is eligible to vote in the United States if they are at least 18 years old (<code className="inline">age &gt;= 18</code>) and a U.S. citizen (<code className="inline">is_citizen</code> is <code className="inline">True</code>). This scenario will be represented with an <code className="inline">and</code> condition:</p>

        <CodeBlock language={"python"} codeString={`is_citizen = True
if age >= 18 and is_citizen:
    print("Eligible to vote")`} />

        <p>Now, we can apply DeMorgan's Law 1 to invert this condition step by step:</p>
        <CodeBlock language={"python"} codeString={`# Step 1: Apply NOT to the whole condition
not (age >= 18 and is_citizen)

# Step 2: Distribute NOT across the AND condition, flipping AND to OR
(not (age >= 18)) or (not is_citizen)

# Step 3: Simplify the expressions
(age < 18) or (not is_citizen)

# Final inverted condition check for ineligibility
if (age < 18) or (not is_citizen):
    print("Not eligible to vote")

# We can also eliminate the parentheses due to the natural precedence of the operators
if age < 18 or not is_citizen:
    print("Not eligible to vote")`} />

        <h3>Benefits of DeMorgan's Laws:</h3>
        <p>These laws allow for the rewriting of complex boolean expressions into simpler forms. In addition to being easier to read, simplified expressions can sometimes be executed (marginally) more efficiently.</p>
      </section>

      <section>
        <h2 id="ternary-operators"><a href="#ternary-operators" className="section-link">(Optional) Ternary Operators</a></h2>
        <p>Ternary operators are a compact, abbreviated way to write simple conditionals. They are often used in place of short <code class="inline">if-else</code> statements. Here's an example of a ternary operator:</p>
        <CodeBlock language={"python"} codeString={`celsius = 0
water = "frozen" if celsius <= 0 else "not frozen"`} />

        <p>The term <code class="inline">ternary</code> comes from the Latin word <em>"terna"</em> which means three. The three terms are the condition itself, the expression if the condition is <code class="inline">True</code> and the expression if the condition is <code class="inline">False</code>. In the above example, these are:</p>
        <ol>
          <li>Value if the condition is <code class="inline">True</code>: <code class="inline">"frozen"</code></li>
          <li>Value if the condition is <code class="inline">False</code>: <code class="inline">"not frozen"</code></li>
          <li>Condition: <code class="inline">celsius &lt;= 0</code></li>
        </ol>
        <p>The condition is evaluated first. If the result of the expression is evaluated as <code class="inline">True</code>, then is stored into the variable <code class="inline">is_boiling</code>. Storing the result of short boolean expressions into variables is a common use case for ternary operators.</p>

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>Convert the following <code className="inline">if-else</code> statement using a ternary operator.</p>
          <CodeBlock language={"python"} codeString={`celsius = 100
if celsius >= 100:
    water_temp = "boiling"
else:
    water_temp = "not boiling"

print(water_temp)`} />
        </Collapsible>
      </section>

      <section>
        <h2 id="wrapping-up"><a href="#wrapping-up" className="section-link">Wrapping Up</a></h2>
        <p>Understanding booleans will supercharge your <code className="inline">if</code> statements! Writing concise and efficient code that branches based on conditions is a fundamental skill in your programming journey.</p>

        <div>
          <a href="/quiz?name=04Booleans.py" target="_blank" rel="noopener noreferrer" className="button">Start Quiz</a>
        </div>
      </section>
    </div>
  );
};

export default Booleans;
