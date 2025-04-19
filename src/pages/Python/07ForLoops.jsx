import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import Collapsible from '../../components/Collapsible';

const ForLoops = () => {
  return (
    <div className="lesson-container">
      <h1>For Loops</h1>
      <section>
        <h2 id="introduction"><a href="#introduction" className="section-link">Introduction</a></h2>
        <p>A <code className="inline">for</code> loop in Python allows us to repeat a block of code a fixed number of times. In this lesson, we will focus on how <code className="inline">for</code> loops can be used with strings to perform operations on each character. In the future, we will learn how to use loops to iterate over other sequential data types.</p>
      </section>

      <section>
        <h2 id="loops-review"><a href="#loops-review" className="section-link">Loops Review</a></h2>
        <p>A task like printing each character of a string one at a time can be incredibly tedious and inefficient. Without a loop, we must manually access each character by its index and writing a separate print statement for each one.</p>

        <CodeBlock language={"python"} codeString={`# Example: Printing "Hello" without a loop
print("Hello"[0])  # Prints 'H'
print("Hello"[1])  # Prints 'e'
print("Hello"[2])  # Prints 'l'
print("Hello"[3])  # Prints 'l'
print("Hello"[4])  # Prints 'o'`} />
        <p>This method is not only cumbersome but also impractical for longer strings or when the exact length of the string is unknown or a variable, such as when the string is submitted using the <code className="inline">input()</code> method from the user. It makes the code hard to write, read, and maintain. For example, if the string changes or its length varies, you would need to adjust the code manually to accommodate each new scenario.</p>

        <h3><code className="inline">while</code> Loops Review</h3>
        <p>As we have learned previously, we could use a <code className="inline">while</code> loop to print each character of a string:</p>
        <CodeBlock language={"python"} codeString={`message = "Hello"
i = 0
while i < len(message):
    print(message[i])
    i += 1`} />

        <p>However, a <code className="inline">for</code> loop is even better at accomplishing this task. Here is the <code className="inline">for</code> loop equivalent of the above code:</p>

        <CodeBlock language={"python"} codeString={`for char in "Hello":
    print(char)`} />

        <p>We'll unpack more of the syntax, advantages, and disadvantages of <code className="inline">for</code> loops throughout this section.</p>

        <Collapsible title={"Challenge"}>
          <p>Why does the following code for a <code className="inline">while</code> loop result in an infinite loop?</p>
          <CodeBlock language={'python'} codeString={`country = "Norway"
i = 0
while i < len(country):
    print(country[i])`} />
        </Collapsible>
      </section>

      <section>
        <h2 id="for-loop-syntax"><a href="#for-loop-syntax" className="section-link"><code className="inline">for</code> Loop Syntax</a></h2>
        <p>Strings in Python are sequences of characters, and <code className="inline">for</code> loops provide a convenient way to iterate through each character in the string. These loops work by repeatedly executing a block of code for each <em>element</em> in the sequence. The loop terminates when all elements in the sequence have been looped over.</p>

        <CodeBlock language={"python"} codeString={`message = "Hello"
for char in message:
    print(char)`} />
        <p>The structure of a <code className="inline">for</code> loop includes two key components:</p>
        <ul>
          <li class="multiline"><strong>Loop Condition:</strong> <code className="inline">for char in message</code> defines the condition under which the loop continues to execute. Here, <code className="inline">char</code> serves as the <b>loop variable</b> that sequentially takes the value of each character in the string <code className="inline">message</code>. The loop continues iterating as long as there are more characters to process.</li>
          <li class="multiline"><strong>Loop Body:</strong> The indented block of code <code className="inline">print(char)</code> specifies what is to be done in each iteration of the loop. <code className="inline">char</code> represents the current character we are looking at.</li>
        </ul>

        <p>In the loop, we start with the first character in <code className="inline">message</code>, and in each iteration, the loop variable <code className="inline">char</code> is updated to the next character in the string until all characters are exhausted. You can essentially read the loop condition as <em>"For each character <code className="inline">char</code> in the string <code className="inline">message</code>"</em>.</p>
        <Collapsible title={"Challenge"}>
          <p>In your code editor, loop through the string <code className="inline">"Canada"</code> and print each letter one at a time.</p>
          <p>The first line of your output should look like this: <code className="inline">C</code>.</p>
        </Collapsible>

        <h3>Naming the Loop Variable</h3>
        <p>Note that there is nothing special about the name we chose for the loop variable <code className="inline">char</code> - it is simply a variable name that we chose to represent the current letter of the string we are on. Oftentimes, programmers will abbreviate the name for the looping variable, like so:</p>
        <CodeBlock language={"python"} codeString={`for c in word:
    print(c)`} />

        <p>As with all variables, however, choosing an accurate and descriptive name will make the code easier to understand. There is one other common convention in Python: the underscore <code className="inline">_</code> character as the loop variable name.</p>

        <CodeBlock language={"python"} codeString={`for _ in message:
    print("Hi")
    print("Hello")

    # If we printed the line below, we WOULD be using the loop variable. But we're not.
    # print(_)`} />

        <p>The underscore <code className="inline">_</code> is a common <em>convention</em> in Python to indicate that a variable is not actually used directly in the loop. Because it is a convention rather than a <em>reserved keyword</em>, any variable name will technically suffice.</p>
        <Collapsible title={"Challenge"}>
          <p>In your code editor, loop through the string <code className="inline">"New Zealand"</code> and print an uppercase version of each letter.</p>
          <p>The last line of your output should look like this: <code className="inline">D</code>.</p>
        </Collapsible>
      </section>

      <section>
        <h2 id="index-based-for-loops"><a href="#index-based-for-loops" className="section-link">Index-Based <code className="inline">for</code> Loops</a></h2>
        <p><em>Index-based</em> <code className="inline">for</code> loops allow you to access each element by its index or position in a sequence.</p>

        <CodeBlock language={"python"} codeString={`message = "Hello"
for i in range(5):
    print(f'Character at position {i} is {message[i]}')`} />
        <p>Here, the loop variable <code className="inline">i</code> starts at <code className="inline">0</code> and increases by one on each iteration until it reaches the end of the string. Here's the breakdown of how <code className="inline">i</code> changes:</p>
        <ul>
          <li>On the first iteration, <code className="inline">i</code> is <code className="inline">0</code>, so <code className="inline">message[0]</code> points to <code className="inline">H</code>.</li>
          <li>On the second iteration, <code className="inline">i</code> increments to <code className="inline">1</code>, accessing <code className="inline">message[1]</code>, which is <code className="inline">e</code>.</li>
          <li>This incrementing continues, with <code className="inline">i</code> taking values <code className="inline">2</code>, <code className="inline">3</code>, and finally <code className="inline">4</code>, accessing <code className="inline">l</code>, <code className="inline">l</code>, and <code className="inline">o</code> respectively.</li>
        </ul>
        <p>In each cycle through the loop, the value of <code className="inline">i</code> is updated, ensuring that every character in the string is accessed sequentially from the first to the last. You can think of this as similar to incrementing the loop variable at the end of a <code className="inline">while</code> loop, although the exact mechanism is a bit different. We'll explore that in the next section. </p>

        <p>One more thing: as with regular <em>element-based</em> <code className="inline">for</code> loops, the actual name of the looping variable is arbitrary. However, it is a common convention to use the letter i, short for index.</p>

        <h3><code className="inline">range()</code> explained</h3>

        <p>The <code className="inline">range()</code> function actually creates a simple sequence of integers. Specifically, <code className="inline">range(n)</code> generates numbers from <code className="inline">0</code> to <code className="inline">n - 1</code>, meaning that <code className="inline">n</code> itself is NOT included in the range. Let's now revisit using the function in a <code className="inline">for</code> loop.</p>

        <CodeBlock language={"python"} codeString={`for i in range(5):
    print(i)`} />
        <p>This will output the numbers <code className="inline">0</code>, <code className="inline">1</code>, <code className="inline">2</code>, <code className="inline">3</code>, and <code className="inline">4</code>, each on a separate line. In other words, <code className="inline">range(5)</code> generates numbers from zero to four. Then, the loop iterates through this sequence of numbers, printing each one. </p>

        <Collapsible title={"Challenge"}>
          <p>What numbers will <code className="inline">range(3)</code> produce? What about <code className="inline">range(0)</code>?</p>
          <p>Try looping through these ranges using a for loop in your code editor to confirm your answers.</p>
        </Collapsible>

        <h3>Using <code className="inline">range()</code> with <code className="inline">len()</code></h3>
        <p>You might have noticed in the earlier example that we <em>hardcoded</em> the value 5 in <code className="inline">range(5)</code>. What if we don't know the length of the string we are going to iterate through, or don't want to count the number of characters ourselves? We can use the <code className="inline">len()</code> function instead to automatically determine the length of the string.</p>
        <CodeBlock language={"python"} codeString={`message = "Hello"
for i in range(len(message)):
    print(message[i])`} />

        <p>Now, <code className="inline">len(message)</code> is first evaluated to <code className="inline">5</code>, which will then be used to create the range <code className="inline">range(5)</code>. The loop will then iterate over each character in <code className="inline">message</code> as usual.</p>

        <h3>Why Use Indexes?</h3>
        <p>Imagine that we wanted to perform an action only on every other item in a sequence.</p>
        <CodeBlock language={"python"} codeString={`for i in range(5):
    if i % 2 == 0:
        print(i)`} />

        <p>Of course, we could use a while loop to accomplish the same task, but the above <code className="inline">for</code> loop is more convenient.</p>

        <CodeBlock language={"python"} codeString={`i = 0
while i < 5:
    if i % 2 == 0:
        print(i)
    i += 1`} />

        <Collapsible title={"Challenge"}>
          <p>In your code editor: use <code className="inline">range()</code> and <code className="inline">len()</code> to print out the index of each character in the string <code className="inline">"Nigeria"</code>.</p>
          <p>The last line of your output should look like this: <code className="inline">"The character at index 6 is 'a'"</code>.</p>
        </Collapsible>

        <h3>Infinite Loops</h3>
        <p>Unlike while loops, for loops always terminate - meaning that you don't have to worry about encountering infinite loops. This is because the loop increments automatically, and you don't have to remember to increment the loop variable yourself.</p>

        <CodeBlock language={"python"} codeString={`i = 0
while i < 3:
    print(i)`} />

        <p>In this while loop, if you forget to add <code className="inline">i += 1</code> at the end of the line, you'll get an infinite loop! Rewritten as a for loop, you would avoid any possibility of getting an infinite loop:</p>

        <CodeBlock language={"python"} codeString={`for i in range(3):
    print(i)`} />

        <Collapsible title={"Challenge"}>
          <p>The code block below attempts to manipulate the index of a <code className="inline">for</code> loop. What do you think will happen when you run the following code?</p>

          <CodeBlock language={"python"} codeString={`country = "Turkiye"
for i in range(len(country)):
    print(country[i])
    i += 1`} />

          <p>Did the result line up with what you expected? Why or why not?</p>
        </Collapsible>
      </section>

      <section>
        <h2 id="comparing-element-based-and-index-based-loops"><a href="#comparing-element-based-and-index-based-loops" className="section-link">Comparing Element-Based and Index-Based Loops</a></h2>
        <p>When creating a <code className="inline">for</code> loop, choosing either an element-based or an index-based approach has its own advantages and disadvantages. As you practice more, you'll develop a better sense of when to use each approach.</p>
        <p>Element-based <code className="inline">for</code> loops offer:</p>
        <ul>
          <li>Simplicity and clarity in accessing elements directly.</li>
          <li>Lack of control over the numerical index if you need to know the position of each element during iteration.</li>
        </ul>

        <p>Index-based <code className="inline">for</code> loops offer:</p>
        <ul>
          <li>Direct control over the numerical index, useful for complex operations that require element positions or modifying the sequence during iteration.</li>
          <li>Slightly more complex syntax and less direct than element-based loops.</li>
        </ul>
        <p>Generally speaking, index-based loops are commonly used if you need to manipulate the position of items or perform mathmetical operations on their positions.</p>

        <Collapsible title={"Challenge"}>
          <p>What type of loop might you use for the following tasks? How might you defend your choice?</p>
          <ul>
            <li>Printing the value of every third character of a string</li>
            <li>Adding each character of a string to a new string</li>
            <li>Swapping the case of every character in a string</li>
          </ul>
        </Collapsible>
      </section>

      <section>
        <h2>Best of Both Worlds: <code className="inline">enumerate()</code></h2>
        <p>The <code className="inline">enumerate()</code> method allows you to access both the index and the element in your looping condition.</p>

        <CodeBlock language={"python"} codeString={`for index, element in enumerate("Hello"):
    print(index + ": " + element)`} />

        <p>The above code outputs:</p>
        <CodeBlock language={"text"} codeString={`0: H
1: e
2: l
3: l
4: o`} />

        <p><code className="inline">enumerate()</code> provides a convenient and easy way to write <code className="inline">for</code> loops that use both the index and the element itself. However, it can be overkill if you only need one or the other. In your code, you want to avoid creating extra variables that you won't end up using.</p>

        <h3><code className="inline">enumerate()</code> Syntax</h3>
        <p>You might have questions about the syntax for the looping variables. The <code className="inline">index, element</code> part of the loop condition is technically a grouping of values known as a <em>tuple</em>. We will learn more about this data type in future chapters.</p>

        <p>As with element-based loops and index-based loops, the actual variable names of the index and element are arbitrary. You often will see code that abbreviates these names: </p>
        <CodeBlock language={"python"} codeString={`for i, x in enumerate("Hello"):
    print(i, x)`} />

        <p><code className="inline">i</code> and <code className="inline">x</code> are fairly common conventions for the index and element looping variables.</p>

        <Collapsible title={"Challenge"}>
          <p>In your code editor, use a for loop with <code className="inline">enumerate()</code> to display the following message for each element in the string <code className="inline">"Cambodia"</code>.</p>
          <p>The first line of your output should look like this: <code className="inline">"The character at position 0 is 'C'"</code></p>
        </Collapsible>

      </section>

      <section>
        <h2 id="break-and-continue"><a href="#break-and-continue" className="section-link">Break and Continue</a></h2>
        <p>As with <code className="inline">while</code> loops, we can use <code className="inline">break</code> and <code className="inline">continue</code> in the same way.</p>
        <CodeBlock language={"python"} codeString={`for i in range(10):
    if i == 5:
        continue
    print(i, end=" ")`} />
        <p>The above code will output: <code className="inline">0 1 2 3 4 6 7 8 9</code>. The <code className="inline">end</code> argument in <code className="inline">print()</code> is an optional parameter used to insert a space after the print instead of the default behavior of printing on the next line.</p>

        <CodeBlock language={"python"} codeString={`for i in range(10):
    if i == 5:
        break
    print(i, end="-")`} />
        <p>The above code will output: <code className="inline">0-1-2-3-4-</code></p>

        <Collapsible title={"Challenge"}>
          <p>In your code editor, write a <code className="inline">for</code> loop that iterates over the string <code className="inline">"United States of America"</code>.</p>
          <p>However, any time the space character comes up (<code className="inline">' '</code>), skip it.</p>
          <p>Your end result should read <code className="inline">"UnitedStatesOfAmerica"</code></p>
        </Collapsible>
      </section>

      <section>
        <h2 id="applications-of-for-loops"><a href="#applications-of-for-loops" className="section-link">Applications of For Loops</a></h2>
        <h4>Counting</h4>
        <p>We can count how many times a specific character appears in a string.</p>
        <CodeBlock language={"python"} codeString={`# Example: Counting 'l' in "Hello"
count = 0
for char in "Hello":
    if char == 'l':
        count += 1
print("The letter 'l' appears", count, "times.")`} />

        <h4>Creating New Strings</h4>
        <p>You can construct new strings from existing strings by iterating through them.</p>
        <CodeBlock language={"python"} codeString={`# Example: Create a new string with slashes instead of periods
original = "12.31.2024"
new_string = ""
for char in original:
    if char == ".":
        new_string += "/"
    else:
        new_string += char
print(new_string)`} />

        <p>In fact, this is a common way to "modify" strings in Python, as strings are immutable, meaning they cannot be changed after they are created.</p>
        <CodeBlock language={"python"} codeString={`# Incorrect code: causes an error 
original = "12.31.2024"
original[2] = '/'  # TypeError: 'str' object does not support item assignment`} />


        <h4>Accessing Specific Indices</h4>
        <p>You may want to access or manipulate only the characters at specific indices in a string.</p>
        <CodeBlock language={"python"} codeString={`# Example: Access and collect characters from even indices
message = "Hello World"
even_chars = ""
for i in range(len(message)):
    if i % 2 == 0:  # Checks if the index is even
        even_chars += message[i]
print("Characters at even indices:", even_chars)
`} />
        <p>This example iterates over the indices of <code className="inline">message</code> and appends characters located at even indices to a new string. The use of <code className="inline">i % 2 == 0</code> ensures that only characters whose indices are divisible by two are considered.</p>
      </section>

      <section>
        <h2 id="nested-loops"><a href="#nested-loops" className="section-link">Nested Loops</a></h2>
        <p>
          A <strong>nested loop</strong> is when you put one loop inside another. This means that for each time the outer loop runs once, the inner loop runs all the way through. Nested loops are useful when you want to work with data in two dimensions, like rows and columns in a table, or when you want to compare every item in one list to every item in another.
        </p>
        <h4>Example 1: Printing a Grid of Stars</h4>
        <p>Suppose you want to print a rectangle of stars, 3 rows by 5 columns:</p>
        <CodeBlock language={"python"} codeString={`for row in range(3):      # Outer loop for each row
    for col in range(5):  # Inner loop for each column
        print("*", end="")
    print()  # Move to the next line after each row`} />
        <p>This code will print:</p>
        <CodeBlock language={"txt"} codeString={`*****
*****
*****`} />
        <h4>Example 2: Comparing Letters in Two Words</h4>
        <p>Let's say you want to see which letters two words have in common:</p>
        <CodeBlock language={"python"} codeString={`word1 = "cat"
word2 = "hat"
for letter1 in word1:
    for letter2 in word2:
        if letter1 == letter2:
            print(f"Both words have: {letter1}")`} />
        <p>Here, the inner loop compares each letter from <code className="inline">word1</code> to every letter in <code className="inline">word2</code>. The output will be:</p>
        <CodeBlock language={"txt"} codeString={`Both words have: a
Both words have: t`} />

        <h4>Example 3: Finding all combinations</h4>
        <p>Suppose you want to find all pairs of letters from two words:</p>
        <CodeBlock language={"python"} codeString={`word1 = "cat"
word2 = "hat"
for letter1 in word1:
    for letter2 in word2:
        print(letter1 + letter2)`} />
        <p>This will print each combination on its own line, showing all possible pairs of letters from the two words.</p>
        <CodeBlock language={"txt"} codeString={`ch
ca
ct
ah
aa
at
hc
ha
ht`} />
        <p>Nested loops can be powerful, but they can also make your code run slower if you have lots of data. Use them when you really need to compare or process combinations of elements. For example, notice how even having one nested loop results in the amount of comparisons being squared (in the above example, from 3 comparisons to 9 comparisons).</p>

        <p>Consider what happens when we add one more nested loop:</p>

        <CodeBlock language={"python"} codeString={`word1 = "cat"
word2 = "hat"
word3 = "bat"
for letter1 in word1:
    for letter2 in word2:
        for letter3 in word3:
            print(letter1 + letter2 + letter3)`} />

        <p>This amount of comparisons begin to rise exponentially - in this case, we now have 3 to the 3rd power (twenty-seven comparisons)!</p>

        <Collapsible title={"Challenge"}>
          <p>How many <code className="inline">print()</code> operations are performed in the code block below?</p>
          <CodeBlock language={"python"} codeString={`columns = "abcdefgh"
rows = "12345678"
for col in columns:
    for row in rows:
        print(col + row)`} />
        </Collapsible>
      </section>
      <section>
        <h2 id="for-else"><a href="#for-else" className="section-link">(Optional) The <code className="inline">for</code>-<code className="inline">else</code> Clause</a></h2>
        <p>
          In Python, you can use an <code className="inline">else</code> clause after a <code className="inline">for</code> loop. The <code className="inline">else</code> block runs only if the loop runs to completion, meaning that it does <strong>not</strong> exit early with a <code className="inline">break</code> statement.
        </p>
        <p>
          This is useful when searching for something in a sequence. If you find what you are looking for and break out of the loop, the <code className="inline">else</code> block is skipped. If the loop finishes without finding it, the <code className="inline">else</code> block runs.
        </p>
        <CodeBlock language={"python"} codeString={`numbers = "13567"
for num in numbers:
    if int(num) % 2 == 0:
        print("Found an even number: " + num)
        break
else:
    print("No even number found.")`} />
        <ul>
          <li>If there is an even number, the message will print and the <code className="inline">else</code> will <strong>not</strong> run.</li>
          <li>If no even number is found, the <code className="inline">else</code> block runs after the loop.</li>
        </ul>

        <h3><code className="inline">for</code>-<code className="inline">else</code> in Detail</h3>
        <p>Consider the following approaches to find an even number in a sequence of single-digit numbers:</p>
        <CodeBlock language={"python"} codeString={`numbers = "13567"
for num in numbers:
    if int(num) % 2 == 0:
        print("Found an even number: " + num)
        
print("No even number found.")`} />

        <p>In the above code, regardless of whether an even number was found, the code <em>after</em> the <code className="inline">for</code> loop will still run. Therefore, the output of running this code is:</p>
        <CodeBlock language={"txt"} codeString={`Found an even number: 6
No even number found.`} />

        <p>The code below fixes that error with a variable <code className="inline">found_even</code> used to track whether an even number was found. While it works, it adds a lot of verbosity:</p>
        <CodeBlock language={"python"} codeString={`numbers = "13567"
found_even = False
for num in numbers:
    if int(num) % 2 == 0:
        print("Found an even number: " + num)
        found_even = True
        break
if not found_even:
    print("No even number found.")`} />

        <p>In the last version of this code, <code className="inline">for-else</code> is used. With <code className="inline">for-else</code>, you don't need to track a separate variable, because the <code className="inline">else</code> block of the <code className="inline">for-else</code> loop only runs if the loop completed normally (i.e., without a <code className="inline">break</code> statement).</p>

        <CodeBlock language={"python"} codeString={`numbers = "13567"
for num in numbers:
    if int(num) % 2 == 0:
        print("Found an even number: " + num)
        break
else:
    print("No even number found.")`} />
        <p>The final output of this code is: <code className="inline">No even number found.</code></p>

        <p>In short, the <code className="inline">for-else</code> pattern allows you to distinguish between <em>"not found"</em> and <em>"found early"</em> cases in search problems, in a concise and easily readable way. In actual practice, the <code className="inline">for-else</code> pattern is rarely used, however.</p>

        <Collapsible title={"Challenge"}>
          <p>Using a <code className="inline">for-else</code> loop, write a program that searches for the letter <code className="inline">"z"</code> in the string <code className="inline">"Uruguay"</code> and prints a message indicating whether the letter was found or not.</p>
          <p>The final output of your code should read: <code className="inline">"Letter z not found in Uruguay"</code></p>
        </Collapsible>
      </section>

      <section>
        <h2 id="wrapping-up"><a href="#wrapping-up" className="section-link">Wrapping Up</a></h2>
        <p>Congratulations! You've learned how to use <code className="inline">for</code> loops in Python to iterate over a strings and perform operations on each item. You've learned multiple ways to set up looping conditions and various different applications of <code className="inline">for</code> loops.</p>
      </section>

      <section>
        <h2 id="additional-challenges"><a href="#additional-challenges" className="section-link">Additional Challenges</a></h2>
        <p>Try these exercises to practice what you've learned:</p>
        <ul>
          <li>Write a for loop that prints out an "!" character whenever it finds the letter "e"</li>
          <li>Write a for loop that prints out the total number of vowels in a string</li>
          <li>Write a for loop that prints "Middle" when it reaches the middle of an odd-length string. Hint: Calculate the middle using len()</li>
          <li>Reverse a string using a for loop.</li>
          <li>Generate a new string that contains every second character of the original string.</li>
        </ul>
      </section>

    </div >
  );
};

export default ForLoops;
