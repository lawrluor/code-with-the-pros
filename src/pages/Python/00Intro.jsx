import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const Intro = () => {
    return (
        <div className="lesson-container">
            <h1>Intro to Python Programming</h1>
            <p>Imagine you're learning to cook. Just as you need to know different ingredients and tools, in programming, you need to understand data types, operations, and how to store information. This lesson introduces you to these basic "ingredients" of Python programming.</p>

            <h2>What is Programming?</h2>
            <p>Programming is the act of creating instructions that a computer can follow. Just as you might follow a recipe to make a meal, a computer will follow a program to perform task such as printing a paper or loading your favorite app. A program contains code, the actual written instructions that the computer can understand.</p>

						<h3>Our First Program</h3>
						<p>Let's write some code for our first program.</p>

						<CodeBlock language={"python"} codeString={`# Program 1
print("Hello, world!")`} />

						<p>What's happening here? We wrote out an instruction for the computer to follow: the <code className="inline">print()</code> function to send the message <code className="inline">"Hello, world!"</code> to the computer screen. You can try this in your own code editor if you'd like.</p>

						<h2>Comments</h2>
            <p>Comments are notes in your code or labels that explain what your code does, created with the hashtag or pound <code className="inline">#</code> symbol. They are essential for explaining what your code does, making it easier for others (and yourself) to understand your code, but are basically ignored by your computer.</p>

<CodeBlock language={"python"} codeString={`# Printing a message
print("Python is fun!")  # Prints a sentence`} />

						<p>While code is the written instructions that the computer can follow, comments in the code are the one exception - the computer does not read them as instructions. In other words, the following code without comments leads to identical results as the code block above: </p>

						<CodeBlock language={"python"} codeString={`print("Python is fun!")`} />

            <h2>The <code className="inline">print()</code> Statement</h2>
            <p>When you use <code className="inline">print()</code>, you're telling Python to display whatever is inside the parentheses onto your screen. Almost anything in Python can be printed: </p>
            <CodeBlock language={"python"} codeString={`# Printing a single character
print("a")

# Printing a simple message
print("Hello, world!")

# Printing a number
print(5)`} />
            <p>Each <code className="inline">print()</code> statement includes a new line (line break), so every print statement outputs to a new line on your screen. This is like pressing "enter" on your keyboard after typing each line.</p>
						<CodeBlock language={"python"} codeString={`# The above code block results in:
a
Hello, world
5`} />
						<p>Technically, <code className="inline">print</code> is a function, meaning that it allows us to perform a specific action (in this case, output to the screen). Throughout our learning, we will come across many more useful functions in Python and even learn to create our own!</p>


            <h2>Basic Math (Arithmetic Operators)</h2>
            <p>Computers were originally designed to do math (it's in the name "compute!"). So, it's no surprise that we can use Python for mathematical operations. Here are some of just the simplest operators that you can use to add, subtract, multiply, and divide numbers:</p>
            <CodeBlock language={"python"} codeString={`# Adding two numbers
print(10 + 5)  # Results in 15

# Subtracting one number from another
print(10 - 5)  # Results in 5

# Multiplying two numbers
print(10 * 5)  # Results in 50

# Dividing one number by another
print(10 / 2)  # Results in 5.0`} />

						<h2>Data Types</h2>
						<p>Note that in the above code block, the division of <code className="inline">10 / 2</code> resulted in a decimal value <code className="inline">5.0</code>. In Python, this number is considered to be of the <code className="inline">float</code> data type, a different data type than the numbers without decimal points (<code className="inline">integer</code>).</p>
						<p>So, just as ingredients can be liquids, solids, or gases, information in Python can be integers, decimals, words, or other values. Here are some examples of the most common data types in Python:</p>

						<CodeBlock language={"python"} codeString={`# Integers
print(10)
print(-1000)

# Floats (short for "Floating Point" number, also known as decimals)
print(10.5)
print(0.0)

# Strings (used to represent text, and are surrounded by quotation marks/symbols)
print("c")
print("Hello World")
print("I" + "Like" + "Python")

# Booleans (used to represent either True or False)
print(True)
print(False)

# None (used to represent the absence of data or absence of a value)
print(None)`} />

						<h3>Why Are Data Types Important?</h3>
						<p>Understanding the different data types in Python and how they interact is important. Using incorrect data types can lead to programming and logical errors. Just as when cooking, if you're asked to add a cup of water, you wouldn't add a cup of ice instead (even though in some ways both are similar)! </p>
						<CodeBlock language={"python"} codeString={`# 1. Attempting arithmetic on a string
print(10 + "5")  # Error: Should add 10 + 5 as two integers

# 2. Inserting an integer into a string sentence
print("I have " + 2 + " dogs")  # Error: we cannot add strings and integers directly

# 3. Attempting arithmetic on None
print(10 + None)  # Error: it doesn't make sense to add a non-number!
`}/>

						<h3>Converting Data Types (Casting)</h3>
            <p>One way to fix errors like the ones above is to convert or <code className="inline">cast</code> the data types to the correct types, so Python will be able to perform the operation correctly. You can use the following functions to cast data types: </p>
            <CodeBlock language={"python"} codeString={`# 1.
print(10 + int("5"))  # Results in 15

# 2.
print("I have " + str(2) + " dogs")  # Results in 'I have 2 dogs'`}/>

						<p>Of course, oftentimes the best way to fix an error is to not have one in the first place! Here are alternate versions of the above examples if they used the correct data type from the beginning: </p>
						<CodeBlock language={"python"} codeString={`# 1.
print(10 + 5)

# 2.
print("I have " + "2" + " dogs")

# 3.
print(10 + 0)  # Error: it doesn't make sense to add a non-number!`}/>

						<p>Like <code className="inline">print()</code>, casting also uses functions. Each performs the specific task of converting the data to the specified data type: <code className="inline">int()</code>, <code className="inline">float()</code>, <code className="inline">str()</code>.</p>

						<p>Exercise: Use casting to convert data types: </p>
						<CodeBlock language={"python"} codeString={`# 1. Integer to a float
# 2. Float to a string
# 3. String to an integer`} />

						<h2>Storing Information (Variables)</h2>
            <p>Variables are like containers in your kitchen. You can store data of any data type inside variables, and you can use them again later.</p>
            <CodeBlock language={"python"} codeString={`# Storing a message
message = "Hello World"
print(message)  # Displays 'Hello World'

# Changing the message
message = "Hello Again"
print(message)  # Displays 'Hello Again'`} />

						<p></p>

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
						<h2>Common errors in Python</h2>
            <p>When learning Python, you're bound to encounter errors; they're part of the learning process. Understanding common errors can help you write your code more efficiently and avoid bugs in your code. Here are two of the most common errors you might come across: <strong>SyntaxError</strong> and <strong>NameError</strong>.</p>

						<h3><code className="inline">SyntaxError</code></h3>
            <p>A <code className="inline">SyntaxError</code> occurs when Python can't understand the written instructions that you have given it. The syntax, or grammatical rules of Python are strict, and breaking them is easy. A <code className="inline">SyntaxError</code> could arise due to missing punctuation, incorrect spacing, or misuse of the operators that Python relies on.</p>

            <CodeBlock language={"python"} codeString={`print("Hi there"  # Missing closing parenthesis
print("Hi there)  # Missing closing quotation mark
9 ++ 4           # Incorrect operator: should be 9 + 4
x _ 10            # Defining a variable: should be x = 10`}/>

            <p>These errors are akin to forgetting a key ingredient in a recipe or using a teaspoon instead of a tablespoon — small mistakes that have big impacts.</p>

            <h3><code className="inline">NameError</code></h3>
            <p>A <strong>NameError</strong> happens when Python does not recognize a name you reference. This usually occurs if you try to use a variable that has not been defined, similar to referencing a spice in your recipe that you forgot to list in your ingredients.</p>

            <CodeBlock language={"python"} codeString={`print(age)
# Python is looking for a variable called age
# If 'age' has not been defined earlier, this causes NameError

# Perhaps, you meant to print the string "age" instead of the variable named "age"
print("age")  # no error`}/>

            <p>To avoid <code className="inline">NameError</code>, make sure all your variables are defined and accessible where you try to use them. Think of it as making sure all your ingredients are on the counter before you start cooking.</p>

            <h2>Tips for Avoiding Common Errors</h2>
            <ul>
                <li><strong>Check Your Syntax:</strong> Always check that your lines end with the correct punctuation and that you're using Python's syntax correctly.</li>
                <li><strong>Declare Variables Before Use:</strong> Make sure all your variables are declared and initialized before you use them.</li>
                <li><strong>Use Comments Wisely:</strong> Commenting your code can help you keep track of what each part of your program is supposed to do, which can prevent both SyntaxErrors and NameErrors.</li>
            </ul>

            <p>By understanding these common mistakes and learning how to prevent them, you'll be better equipped to write cleaner, error-free code. Remember, every error is a learning opportunity!</p>

            <h2>Practice Challenges</h2>
        </div>
    );
}

export default Intro;
