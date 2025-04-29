import React from 'react';
import ProgressBar from '../../components/ProgressBar';
import CodeBlock from '../../components/CodeBlock';
import Collapsible from '../../components/Collapsible';

import useSequentialCounter from '../../hooks/useSequentialCounter';

const Input = () => {
  const { getCurrentNumberAndIncrement } = useSequentialCounter(0);

  return (
    <div className="lesson-container">
      <ProgressBar />

      <section>
        <h1>The <code className="inline">input()</code> Function</h1>
      </section>

      <section>
        <h2 id="user-input"><a href="#user-input" className="section-link">User Input</a></h2>
        <p>
          Up to this point, we've mainly been using values that have been fixed or <em>hard-coded</em>.
          For example, a calculator that is pre-programmed to only add the numbers <code className="inline">10 + 5</code> when you power it on, and that doesn't allow you to enter your own numbers is not very helpful. Wouldn't it be great if we could add code that allows the user to enter their own numbers?

          {/* Furthermore, you might not always be the only one who uses the code that you write. What if we are building a tool for someone else to use?
                    By accepting user input with the <code className="inline">input()</code> method, our program could ask for a name and say <code className="inline">"Hello, NAME!"</code>. */}
        </p>

        <p>Believe it or not, you've already encountered various different types of user input! Using websites or software regularly involves providing input to your computer or device, often through writing and submitting text.</p>

        <ul>
          <li>Search Engines: When you type queries into a search engine like Google, you provide search terms and expect relevant search results.</li>
          <li>Social Media: Writing comments and messaging all require typing into a textbox or text area.</li>
        </ul>

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>Think of a specific situation where you have entered input into your computer, a website, or an application.</p>
        </Collapsible>

        <h3>The User</h3>
        <p>What exactly is a user? A <strong>user</strong> is simply whoever is <em>using</em> a program. In the above example, the user is the person who is using the calculator. If someone is on a website that you made, they are a user of your website. If someone is running code that you wrote, they are currently your user.</p>
      </section>

      <section>
        <h2 id="the-input-function"><a href="#the-input-function" className="section-link">The <code className="inline">input()</code> Function</a></h2>
        <p>Consider the following code:</p>
        <CodeBlock language={"python"} codeString={`print("Hello, World!")`} />

        <p>Running this program will invariably display <code className="inline">"Hello, World!"</code> (which at this point, is probably becoming a bit boring). Instead, let's learn to ask the user what their name is, then greet them by displaying <code className="inline">"Hello, NAME!"</code>. </p>

        <CodeBlock language={"python"} codeString={`name = input("What's your name?")
print(name)`} />

        <p>Let's break down this code:</p>
        <ul>
          <li><code className="inline">name</code>: A variable to store the user's input.</li>
          <li><code className="inline">input()</code>: The function that pauses the program and waits for the user to type something.</li>
          <li><code className="inline">"What's your name?"</code>: The <em>prompt</em> displayed to the user, generally a question or request.</li>
        </ul>

        <p>When the <code className="inline">input()</code> function is called, the program will pause and wait for the user to type something. To answer the prompt, the user should type text, then press the <code className="inline">"Enter"</code> or <code className="inline">"Return"</code> key.</p>

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <ul>
            <li>In your code editor, use <code className="inline">input()</code> to prompt the user to type their favorite color and store their input into a variable.</li>
            <li>In your code editor, use <code className="inline">input()</code> to prompt the user to type a city that they've visited and store their input into a variable.</li>
          </ul>

          <p>Don't forget to try typing some text into the prompt after running your code editor to see how it works!</p>
        </Collapsible>

        <h3>Formatting User Input</h3>
        <p>Note that <code className="inline">input()</code> does <strong>not</strong> automatically add any spaces or other formatting to the user's input. A typical convention is to put a space (<code className="inline">' '</code>) at the end of the prompt to separate the prompt from the user's input when the user enters text.</p>
        <CodeBlock language={"python"} codeString={`age = input("What's your age? ")
print(age)

food = input("Enter a food you like: ")
print(food)`} />

        <h3>Empty Prompt</h3>
        <p>Technically, the prompt is optional. In this case, the user will be prompted to enter text, but no prompt will be displayed. This is not recommended, however, as it can be confusing to users.</p>
        <CodeBlock language={"python"} codeString={`name = input()
print(name)`} />
      </section>

      <section>
        <h2 id="how-input-works"><a href="#how-input-works" className="section-link">How <code className="inline">input()</code> Works</a></h2>
        <p>The <code className="inline">input()</code> function does more than just collect user input - it also <strong>pauses</strong> the program until the user provides an entry and presses the <code className="inline">Enter</code> or <code className="inline">Return</code> key. This means that no code after the <code className="inline">input()</code> statement will run until the user responds.</p>

        <CodeBlock language={"python"} codeString={`print("Step 1: Program has started.")

 # Code execution pauses here until user input is provided
name = input("Step 2: Program has paused. Enter your name, then press 'Return/Enter' to continue: ")

print("Step 3: Program has resumed. Hello, " + name + "!")

print("Step 4: Program has finished.")`} />

        <p>When this code runs, the output will look like this:</p>

        <CodeBlock language={"txt"} codeString={`Step 1: Program has started.
Step 2: Program has paused. Enter your name, then press 'Return/Enter' to continue: Richard
Step 3: Hello, Richard! The program has resumed.
Step 4: Program has finished.`} />

        <p>To summarize, when <code className="inline">input()</code> prompts the user, the Python does not continue executing other lines of code until <strong>after</strong> the user enters a response. This makes <code className="inline">input()</code> essential for interactive programs that we will explore later.</p>

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>Why do you think it's necessary that Python pauses the program until the user provides input? Can you think of a specific error that could occur otherwise?</p>
        </Collapsible>
      </section>

      <section>
        <h2 id="input-always-gives-you-strings"><a href="#input-always-gives-you-strings" className="section-link"><code className="inline">input()</code> Always Gives You Strings</a></h2>
        <p>Even if the user types a number, using <code className="inline">input()</code> will <strong>always</strong> result in a string.</p>
        <CodeBlock language={"python"} codeString={`num1 = input("Enter a number: ")
num2 = input("Enter another number: ")
print(num1 + num2)  # Can you guess what will happen here?`} />

        <p>In the above example, <code className="inline">num1</code> and <code className="inline">num2</code> are both strings, meaning that the <code className="inline">+</code> operator results in string concatenation instead of mathematical addition. Therefore, if the user enters <code className="inline">"5"</code> and <code className="inline">"10"</code>, for example, the result will actually be <code className="inline">"510"</code>!</p>

        <h3>Performing Calculations</h3>
        <p>Type conversion/casting may be needed if you intend to perform calculations.</p>
        <CodeBlock language={"python"} codeString={`num1 = input("Enter a number: ")
num2 = input("Enter another number: ")

# Rather than add two strings together, first convert the string inputs to integers
int_num1 = int(num1)
int_num2 = int(num2)

# Then, add the two integers together to yield a mathematical sum
total = int_num1 + int_num2

# Assuming the user enters "5" and "10", this would correctly be the integer 15
print(total)  `} />

        <p>If you don't need to store the integer versions of the strings, this would be a simpler version of the code:</p>
        <CodeBlock language={"python"} codeString={`num1 = input("Enter a number: ")
num2 = input("Enter another number: ")
print(int(num1) + int(num2))`} />

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <div>
            <p>What is the result of the following code?</p>
            <CodeBlock language={"python"} codeString={`num1 = input("Enter a number: ")
num2 = int(input("Enter another number: "))
print(num1 + num2)`} />
          </div>

          <div>
            <p>Try running the following code in your code editor. Enter numbers for each input.</p>
            <CodeBlock language={"python"} codeString={`num1 = int(input("Enter a number: "))
num2 = float(input("Enter another number: "))
print(num1 + num2)`} />
          </div>
        </Collapsible>
      </section>

      <section>
        <h2 id="wrapping-up"><a href="#wrapping-up" className="section-link">Wrapping Up</a></h2>
        <p>In future chapters, you'll learn other ways that <code className="inline">input()</code> can be useful. In the meantime, we'll practice applying <code className="inline">input()</code> to past projects and in a new project.</p>

        <div>
          <a href="/quiz?name=02Input.py" target="_blank" rel="noopener noreferrer" className="button">Start Quiz</a>
        </div>
      </section>
    </div>
  );
};

export default Input;
