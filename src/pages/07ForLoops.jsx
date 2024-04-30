import React from 'react';
import CodeBlock from '../components/CodeBlock';

const ForLoops = () => {
    return (
        <div className="lesson-container">
            <h1>For Loops</h1>

            <section>
                <h2>Introduction to For Loops</h2>
                <p>
                    A <code className="inline">for</code> loop in Python allows us to repeat a block of code a fixed number of times. In this lesson, we will focus on how <code className="inline">for</code> loops can be used with strings to perform operations on each character. In the future, we will learn how to use loops to iterate over other sequential data types, such as collections like lists and dictionaries.
                </p>
            </section>

            <section>
                <h2>Why Are Loops Useful?</h2>
                <p>A task like printing each character of a string individually can be incredibly tedious and inefficient. Without a loop, we must manually access each character by its index and writing a separate print statement for each one.</p>

                <CodeBlock codeString={`# Example: Printing "Hello" without a loop
print("Hello"[0])  # Prints 'H'
print("Hello"[1])  # Prints 'e'
print("Hello"[2])  # Prints 'l'
print("Hello"[3])  # Prints 'l'
print("Hello"[4])  # Prints 'o'`} />
                <p>This method is not only cumbersome but also impractical for longer strings or when the exact length of the string is unknown or a variable, such as when the string is submitted using the <code className="inline">input()</code> method from the user. It makes the code hard to write, read, and maintain. For example, if the string changes or its length varies, you would need to adjust the code manually to accommodate each new scenario.</p>

                <p>In contrast, using a <code className="inline">for</code> loop to complete the same task is a much simpler process.</p>

                <CodeBlock codeString={`for char in "Hello":
    print(char)`} />
                <p>With a loop, no matter the length of the string, any number of characters will be handled, making your code more robust and flexible.</p>
                <p>There are two general ways to write for loops: element-based and index-based.</p>
            </section>

            <section>
                <h2>Element-Based For Loops</h2>
                <p>Strings in Python are sequences of characters, and <code className="inline">for</code> loops provide a convenient way to iterate through each character in the string. These loops work by repeatedly executing a block of code for each element in the sequence.</p>

                <CodeBlock codeString={`message = "Hello"
for char in message:
    print(char)`} />
                <p>The structure of an element-based <code className="inline">for</code> loop includes two key components:</p>
                <ul>
                    <li><strong>Looping Condition:</strong> <code className="inline">for char in message</code> defines the condition under which the loop continues to execute. Here, <code className="inline">char</code> serves as the loop variable that sequentially takes the value of each character in the string <code className="inline">message</code>. The loop iterates as long as there are more characters to process.</li>
                    <li><strong>Repeating Code Block:</strong> The indented block of code <code className="inline">print(char)</code> specifies what is to be done with each character. This part of the code repeats for each iteration of the loop, where <code className="inline">char</code> represents the current character. The indentation is crucial as it defines the scope of the loop in Python, indicating that the <code className="inline">print</code> statement is the action to be repeated.</li>
                </ul>

                <p>The loop initiates with the first character in <code className="inline">message</code>, and in each iteration, the loop variable <code className="inline">char</code> is updated to the next character in the string until all characters are exhausted. This way, the "For each character <code className="inline">char</code> in the string <code className="inline">message</code>" effectively describes the loop's operation.</p>

                <h3>Defining the Loop Variable</h3>
                <p>Note that there is nothing special about the variable <code className="inline">char</code> - it is simply a variable name that we chose to represent the current letter of the string we are on. Oftentimes, programmers will abbreviate the name for the looping variable, like so:</p>
                <CodeBlock codeString={`for x in message:
    print(x)

for _ in message:
    print("Hi")
    print("Hello")  # We can have any number of lines in the repeating block`} />
            </section>

            <section>
                <h2>Index-Based For Loops</h2>
                <p>What if we wanted to perform an action only on every other item in a sequence? Index-based for loops in Python allow you us to access each element by its index or position in a sequence. The index variable <code className="inline">i</code> changes values throughout the loop's execution.</p>

                <CodeBlock codeString={`# Example of an index-based loop with dynamic index changes
message = "Hello"
for i in range(len(message)):
    print(f'Character at position {i} is {message[i]}')`} />
                <p>In this loop, <code className="inline">i</code> starts at 0 and increases by one on each iteration until it reaches the end of the string. Here's the breakdown of how <code className="inline">i</code> changes:</p>
                <ul>
                    <li>On the first iteration, <code className="inline">i</code> is 0, so <code className="inline">message[0]</code> points to 'H'.</li>
                    <li>On the second iteration, <code className="inline">i</code> increments to 1, accessing <code className="inline">message[1]</code>, which is 'e'.</li>
                    <li>This incrementing continues, with <code className="inline">i</code> taking values 2, 3, and finally 4, accessing 'l', 'l', and 'o' respectively.</li>
                </ul>
                <p>In each cycle through the loop, the value of <code className="inline">i</code> is updated, ensuring that every character in the string is accessed sequentially from the first to the last.</p>

                <h3><code className="inline">range()</code> explained</h3>

                <p>The <code className="inline">range</code> function creates a simple sequence of integers.</p>
                <CodeBlock codeString={`print(list(range(5))  # Output: [0, 1, 2, 3, 4]`} />
                <p>Don't worry about <code className="inline">list()</code>, as we haven't covered that yet. Focus on the idea that <code className="inline">range(n)</code> generates numbers from 0 to n - 1. Let's now revisit using the function in a <code className="inline">for</code> loop.</p>

                <CodeBlock codeString={`for i in range(5):
    print(i)`} />
                <p>This will output the numbers 0, 1, 2, 3, and 4, each on a separate line. In other words, <code className="inline">range(5)</code> generates numbers from 0 to 4. Then, the loop iterates through this sequence, printing each one. </p>
            </section>



            <section>
                <h2>Comparing Element-Based and Index-Based Loops</h2>
                <ul>
                    <li><strong>Element-Based Loops:</strong>
                        <ul>
                            <li><strong>Pros:</strong> Simplicity and clarity in accessing elements directly.</li>
                            <li><strong>Cons:</strong> Lack of control over the index if you need to know the position of each element during iteration.</li>
                        </ul>
                    </li>
                    <li><strong>Index-Based Loops:</strong>
                        <ul>
                            <li><strong>Pros:</strong> Provides control over the index, useful for complex operations that require element positions or modifying the sequence during iteration.</li>
                            <li><strong>Cons:</strong> Slightly more complex and less direct than element-based loops because you must handle indices.</li>
                        </ul>
                    </li>
                </ul>
                <p>Generally speaking, index-based loops are commonly used if you need to manipulate the position of items or perform mathmetical operations on their positions.</p>
            </section>


            <section>
                <h2>Applications of For Loops</h2>
                <h3>Counting</h3>
                <p>We can count how many times a specific character appears in a string.</p>
                <CodeBlock codeString={`# Example: Counting 'l' in "Hello"
count = 0
for char in "Hello":
    if char == 'l':
        count += 1
print("The letter 'l' appears", count, "times.")`} />

                <h3>Creating New Strings</h3>
                <p>Although strings in Python are immutable, meaning they cannot be changed after they are created, you can construct new strings as you iterate through them.</p>
                <CodeBlock codeString={`# Example: Create a new string with slashes instead of periods
original = "12.31.2024"
new_string = ""
for char in original:
    if char == ".":
        new_string += "/"
    else:
        new_string += char
print(new_string)`} />

                <h3>Accessing Specific Indices</h3>
                <p>You may want to access or manipulate only the characters at specific indices in a string.</p>
                <CodeBlock codeString={`# Example: Access and collect characters from even indices
message = "Hello World"
even_chars = ""
for i in range(len(message)):
    if i % 2 == 0:  # Checks if the index is even
        even_chars += message[i]
print("Characters at even indices:", even_chars)
`} />
                <p>This example iterates over the indices of "Hello World" and appends characters located at even indices (0, 2, 4, ...) to a new string. The use of <code className="inline">i % 2 == 0</code> ensures that only characters whose indices are divisible by 2 (i.e., even) are considered.</p>
            </section>

            <section>
                <h2>Challenges</h2>
                <p>Try these exercises to practice what you've learned:</p>
                <ul>
                    <li>Write a for loop that prints out an "!" character whenever it finds the letter "e"</li>
                    <li>Write a for loop that prints out the total number of vowels in a string</li>
                    <li>Write a for loop that prints "Middle" when it reaches the middle of an odd-length string. Hint: Calculate the middle using len()</li>
                    <li>Reverse a string using a for loop.</li>
                    <li>Generate a new string that contains every second character of the original string.</li>
                </ul>
            </section>
        </div>
    );
};

export default ForLoops;
