import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import Collapsible from '../../components/Collapsible';

const Intro = () => {
  return (
        <div className="lesson-container">
          <section>
            <h1>Intro to Python</h1>
            <p>Imagine you're learning to cook. Just as you need to understand common ingredients and tools, in programming, you need to understand data types and operations in order to build useful programs. This lesson introduces you to these basic "ingredients" of Python programming.</p>
          </section>

          <section>
            <h2>What is Programming?</h2>
            <p>Programming is the act of creating instructions that a computer can follow. Just as you might follow a recipe to make a meal, a computer will follow a program to perform task such as printing a paper or loading your favorite app. A program contains code, the actual written instructions that the computer can understand.</p>

						<p>Let's write some code for our first program.</p>

						<CodeBlock language={"python"} codeString={`print("Hello, world!")`} />

						<p>What's happening here? We wrote out an instruction for the computer to follow: <code className="inline">print()</code> displays the message <code className="inline">"Hello, world!"</code> to the computer screen.</p>

            <Collapsible title={"Challenge"}>
              <p>In your code editor, write a program that prints your name to the screen.</p>
            </Collapsible>
          </section>

          <section>
						<h2>Comments</h2>
            <p>Comments are notes in your code or labels that explain what your code does, created with the hashtag or pound <code className="inline">#</code> symbol. They are essential for explaining what your code does, making it easier for others (and yourself) to understand your code, but are otherwise ignored by your computer.</p>

<CodeBlock language={"python"} codeString={`print("Python is fun!")  # Displays a message`} />

						<p>These following lines of code are interpreted by the computer identically:</p>

						<CodeBlock language={"python"} codeString={`print("Python is fun!")
print("Python is fun!")  # Displays a message`} />

            <p>Throughout the reading, you will see comments used to explain, label, and annotate code examples.</p>

            <Collapsible title={"Challenge"}>
              <p>In your code editor, add a comment at the top of your file that says <code className="inline">Program 1</code>.</p>
            </Collapsible>
          </section>

          <section>
            <h2>The <code className="inline">print()</code> Statement</h2>
            <p>When you use <code className="inline">print()</code>, you're telling Python to display whatever is inside the parentheses onto your screen. Almost anything in Python can be printed: </p>
            <CodeBlock language={"python"} codeString={`# Printing a single character
print("a")

# Printing a sentence
print("Hello, world!")

# Printing a number
print(5)`} />
            <p>Each <code className="inline">print()</code> statement includes a new line (also known as a line break), so every print statement outputs to a new line on your screen. This is like pressing the "enter" or "return" key on your keyboard after typing each line.</p>
						<CodeBlock language={"python"} codeString={`# Three print statements
print("a")
print("Hello, world!")
print(5)

# The computer outputs each print statement on a separate line
a
Hello, world
5`} />
						<p><code className="inline">print()</code> is a type of <strong>function</strong>: a piece of code that allows us to perform a specific action (in this case, display something on the screen). Throughout our learning, we will come across many more useful functions in Python and even learn to create our own!</p>

            <Collapsible title={"Challenge"}>
              <p>In your code editor, use <code className="inline">print()</code> to display the name of three different colors on separate lines.</p>
            </Collapsible>
          </section>

          <section>
            <h2>Basic Math (Arithmetic Operators)</h2>
            <p>Computers were originally designed to do math (it's in the name "compute!"). So, it's no surprise that we can use Python for mathematical operations. Here are some of just the simplest operators that you can use to add, subtract, multiply, and divide numbers. Note that these operators might not look exactly like the ones you're used to when doing math by hand. </p>
            <CodeBlock language={"python"} codeString={`# Adding (+) two numbers
print(10 + 5)     # Results in 15

# Subtracting (-) one number from another
print(10 - 5)     # Results in 5

# Multiplying (*) two numbers together
print(10 * 5)     # Results in 50

# Dividing one (/) number by another
print(10 / 2)     # Results in 5.0

# Raising one number to the power (**) of another (exponents)
print(10 ** 2)     # (10 to the power of 2), results in 100.
print(100 ** 0.5)  # Square root of 100, results in 10`} />

<p>Just like in math, we can use multiple operators in the same arithmetic expression.</p>

            <CodeBlock language={"python"} codeString={`print(10 + 5 - 2)     # Results in 13
print(10 * 5 / 2)     # Results in 25.0`}/>

            <p>Note that exponents do NOT use the carat <code className="inline">^</code> sign!</p>

            <Collapsible title={"Challenge"}>
              <p>In your code editor, create 3 different expressions using the arithmetic operators. Try using more than one operator in one of your expressions.</p>
            </Collapsible>
          </section>

          <section>
						<h2>Data Types</h2>
            <p>Just as ingredients in cooking can be liquids, solids, or gases, information in Python can be integers, decimals, words, or other values. Here are some examples of the most common data types in Python:</p>

						<CodeBlock language={"python"} codeString={`# string (used to represent any type of text, and are surrounded by quotation marks/symbols)
print("c")
print("Hi!")
print("I Like Python")

# int (short for integer)
print(10)
print(-1000)

# float (short for "floating point" number, a type of decimal)
print(10.5)
print(0.0)

# boolean (named after the mathematician George Boole, and used to represent either True or False)
print(True)
print(False)

# None (used to represent the absence of data or absence of a value)
print(None)`} />

						<h3>Why Are Data Types Important?</h3>
						<p>Understanding the different data types in Python and how they interact is important. Using incorrect data types can lead to unexpected errors. Just as when cooking, if you're asked to add a cup of water, you wouldn't add a cup of ice instead (even though in some ways both are similar)! </p>
						<CodeBlock language={"python"} codeString={`# 1. Attempting to add an int to a string
print(10 + "5")  # Error: Should add 10 + 5 as two integers

# 2. Attempting to insert an integer between two strings
print("I have " + 2 + " dogs")  # Error: we cannot use the '+' operator to add strings and integers directly

# 3. Attempting to add a number to a 'None' value
print(10 + None)  # Error: it doesn't make sense to add anything to a non-number!`}/>
						<h3>Checking Data Types</h3>
            <p>One way to check the data type of a variable is to use the <code className="inline">type()</code> function. Like <code className="inline">print()</code>, it is a piece of code that performs a simple task. The <code className="inline">type()</code> function will display the data type of the variable. You can do this if you're not sure what the data type is or if you encounter a new one that you don't recognize! </p>
            <CodeBlock language={"python"} codeString={`print(type(10))   # int
print(type("5"))   # string
print(type(10.5))  # float`} />
            <Collapsible title={"Challenge"}>
            <p>In your code editor, use the <code className="inline">type()</code> function to check the data type of <code className="inline">"10"</code>.</p>
            </Collapsible>

						<h3>Converting Data Types (Casting)</h3>
            <p>One way to fix errors like the ones above is to convert or <code className="inline">cast</code> the data types to the correct types, so Python will be able to perform the operation correctly. You can use the following functions to cast data types: </p>
            <CodeBlock language={"python"} codeString={`# 1.
print(10 + int("5"))  # Simplifies to 10 + 5, which results in 15

# 2.
print("I have " + str(2) + " dogs")  # Simplifies to "I have " + "2" + " dogs", which results in "I have 2 dogs"`}/>

						<p>Of course, oftentimes the best way to fix an error is to not have one in the first place! Here are alternate versions of the above examples if they were rewritten to use the correct data type from the start: </p>
						<CodeBlock language={"python"} codeString={`# 1.
print(10 + 5)

# 2.
print("I have " + "2" + " dogs")

# 3.
print(10 + 0)`}/>

						<p>Like <code className="inline">print()</code>, casting also uses functions. If you recall, functions are pieces of code that perform specific tasks. The casting functions <code className="inline">int()</code>, <code className="inline">float()</code>, <code className="inline">str()</code> performs the specific task of converting data to a new data type.</p>

            <Collapsible title={"Challenge"}>
							<p>Exercise: Use casting to convert data types: </p>
							<CodeBlock language={"python"} codeString={`# 1. Integer to a string
# 2. String to an integer
# 3. Integer to a float`} />
            </Collapsible>
          </section>

          <section>
						<h2>Storing Information (Variables)</h2>
            <p>Variables are like containers in your kitchen. You can store data of any data type inside variables, and you can use them again later in your code.</p>
            <CodeBlock language={"python"} codeString={`# Storing a message
message = "Hello World"
print(message)  # Displays "Hello World"

# Doing other stuff in your code
print(5 + 5)
print("Hi!")

# Reusing the same variable that we created earlier
print(message)  # Displays "Hello World" again`} />

            <p>In this case, the variable's name is <code className="inline">message</code> and stores the string <code className="inline">"Hello World"</code>. When defining or <strong>declaring</strong> variables, we always place the variable on the left side and the value assigned to it on the right side.</p>

            <h3>Changing Variable Contents</h3>
            <p>Variables aren't just static; you can update their contents:</p>
            <CodeBlock language={"python"} codeString={`count = 10

# Adding one to the count
count = count + 1
print(count)  # Results in 11

# Adding one to the count again (using abbreviated syntax)
count += 1
print(count)  # Results in 12

# Reassigning the value of count ("resetting")
count = 0
print(count)  # Results in 0
`} />

<p>Note that the line <code className="inline">count += 1</code> is the same as <code className="inline">count = count + 1</code>, but it's a shorter way to write the same thing. You can also use the abbreviation operators <code className="inline">-=</code>, <code className="inline">*=</code>, and <code className="inline">/=</code> operators to update the value of a variable.</p>

            <Collapsible title="Challenge">
              <p>In your code editor, add a variable called <code className="inline">age</code> and assign it the value of your age. Then, use the <code className="inline">+=</code> operator to add 1 year to your age. Finally, use the <code className="inline">print()</code> function to display your updated age.</p>
            </Collapsible>
          </section>

          <section>
						<h2>Common Errors in Python</h2>
            <p>When learning Python, you're bound to encounter errors; they're part of the learning process. Understanding common errors can help you write your code more efficiently and avoid bugs in your code. Two of the most common errors you might come across are <code className="inline">SyntaxError</code> and <code className="inline">NameError</code>.</p>

						<h3><code className="inline">SyntaxError</code></h3>
            <p>A <code className="inline">SyntaxError</code> occurs when Python can't understand the written instructions that you have given it. The syntax, or grammatical rules of Python are strict, and breaking them is easy. A <code className="inline">SyntaxError</code> could arise due to missing punctuation, incorrect spacing, or misuse of the operators that Python relies on.</p>

            <CodeBlock language={"python"} codeString={`print("Hi there"  # Missing closing parenthesis
print("Hi there)  # Missing closing quotation mark
9 ++ 4            # Incorrect operator: should be 9 + 4
x _ 10            # Defining a variable: should be x = 10`}/>

            <h3><code className="inline">NameError</code></h3>
            <p>A <code className="inline">NameError</code> happens when Python does not recognize a name you reference. This usually occurs if you try to use a variable that has not been defined, similar to referencing a spice in your recipe that you forgot to list in your ingredients.</p>

            <CodeBlock language={"python"} codeString={`print(age)
# Python is looking for a variable called age
# If 'age' has not been defined earlier, this causes NameError

# Perhaps, you meant to print the string "age" instead of the variable named "age"
print("age")  # no error

# If you did want to use the variable age, define it first:
age = 30
print(age)`}/>

            <p>To avoid <code className="inline">NameError</code>, make sure all your variables are defined and accessible where you try to use them. Think of it as making sure all your ingredients are on the counter before you start cooking.</p>

            <Collapsible title="Challenge">
            <p>What kind of errors will you get if you run the following code?</p>

            <CodeBlock language={"python"} codeString={`#1.
print("Hello, world!')

#2.
age = 5
print(agee)`} />
            </Collapsible>
          </section>

          <section>
            <h2>Avoiding Common Errors</h2>
            <ul>
                <li><strong>Double Check Syntax:</strong> Check that parentheses or opening quotation marks are matched with their closing counterpart.</li>
                <li><strong>Declare Variables Before Use:</strong> Make sure all your variables are declared and initialized before you use or update them.</li>
            </ul>
          </section>

          <section>
            <h2>Special Arithmetic Operators</h2>
            <h3>Integer division</h3>
            <p>This arithmetic operator <code className="inline">//</code> divides one number by another, just like the standard division operator <code className="inline">/</code>, but it returns the quotient without any remainder, effectively "flooring" or rounding down the result to the nearest whole number.</p>
            <CodeBlock language={"python"} codeString={`# Example of integer division vs normal division
print(10 / 3)    # Outputs: 3.3333333333333335 (normal division)
print(10 // 3)   # Outputs: 3 (integer division)

print(9 / 2)     # Outputs: 4.5 (normal division)
print(9 // 2)    # Outputs: 4 (integer division)
print(-11 // 3)  # Outputs: -4 (integer division)`} />

            <p>You can also think about integer division as truncating, or chopping off the decimal point of a number.</p>

            <Collapsible title="Challenge">
              <p>Can you think of an example where integer division could be useful or preferable to normal division?</p>
            </Collapsible>

            <h3>Modulo Operator <code className="inline">%</code></h3>
            <p>This operator returns the <strong>remainder</strong> of a division between two numbers. For example, <code className="inline">5 % 2</code> (read as "5 mod 2") results in <code className="inline">1</code>. Here are some more examples:</p>
            <CodeBlock language={"python"} codeString={`print(10 % 3)   # Outputs: 1 (10 divided by 3 leaves a remainder of 1)
print(18 % 4)   # Outputs: 2 (18 divided by 4 leaves a remainder of 2)
print(20 % 2)   # Outputs: 0 (20 is even, so division by 2 has no remainder)
print(7 % 2)    # Outputs: 1 (7 is an odd number)
print(5.5 % 5)  # Outputs: 0.5 (5.5 is not an integer)`} />

            <p>Time for a practical example. Imagine you have a group of students and you want to assign them into different project groups. You can use the modulo operator to determine which group each student belongs to.</p>
            <CodeBlock language={"python"} codeString={`# Determine the group number of the last student
num_students = 10
num_groups = 3
print(num_students % num_groups)  # Outputs: 1 (the last student belongs to the 1st group)`} />

            <Collapsible title="Challenge">
              <p>In your code editor, use the modulo operator to determine the result of <code className="inline">5 % 0</code>. What is the result and how might you explain this?</p>
            </Collapsible>
          </section>

          <section>
              <h2>Wrapping Up</h2>
              <p>Great job! You've started learning about the most fundamental building blocks of the Python language. Feel free to take the quiz to test your knowledge.</p>
              <button onClick={() => window.location.href = '/quiz?name=00Intro.py'}>Start Quiz</button>
          </section>
        </div>
    );
}

export default Intro;
