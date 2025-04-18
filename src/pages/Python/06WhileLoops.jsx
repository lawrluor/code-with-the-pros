import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import Collapsible from '../../components/Collapsible';

import useSequentialCounter from '../../hooks/useSequentialCounter';

const WhileLoops = () => {
  const { getCurrentNumberAndIncrement } = useSequentialCounter(0);

  return (
    <div className="lesson-container">
      <h1>While Loops</h1>

      <section>
        <h2 id="what-is-a-while-loop"><a href="#what-is-a-while-loop" className="section-link">What is a While Loop?</a></h2>
        <p>A <code className="inline">while</code> loop repeatedly executes a block of code as long as a given condition is <code className="inline">True</code>. Before looking at any code, let's consider some real-life examples of when we might use a while loop:</p>
        <ul>
          <li>Starting a stopwatch to time how long it takes you to run a lap</li>
          <li>Running a game until the player wins</li>
          <li>Allowing a user to enter a number until they guess the correct answer</li>
        </ul>

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>What would the condition be for stopping each of the examples above? How might you phrase that condition as a boolean expression?</p>
        </Collapsible>
      </section>

      <section>
        <h2 id="while-loop-syntax"><a href="#while-loop-syntax" className="section-link">While Loop Syntax</a></h2>
        <p>The basic structure of a <code className="inline">while</code> loop includes the <strong>loop header</strong>, which is the first line of the loop, and the <strong>loop body</strong>, the indented block of code underneath the loop header that executes repeatedly.</p>
        <CodeBlock language={"python"} codeString={`counter = 0
while counter < 5:
    print("Counting:", counter)
    counter += 1`} />

        <p>In the code above, the <code className="inline">while</code> keyword is used to start the loop. The <code className="inline">counter &lt; 5</code> is the <strong>loop condition</strong>, a boolean expression that evaluates to <code className="inline">True</code> or <code className="inline">False</code>. The indented lines <code className="inline">print("Counting:", counter)</code> and<code className="inline">counter += 1</code> make up the loop body.</p>

        <h3>Code Explanation</h3>
        <p>In the code example, we first define a variable called <code className="inline">counter</code> and set it to <code className="inline">0</code>. We then create the loop. The looping condition <code className="inline">counter &lt; 5</code> is checked, and if it's <code className="inline">True</code>, the code inside the loop runs, printing the counter's current value and then incrementing the counter by 1. We then jump back to the top of the loop and check the looping condition again. If it is <code className="inline">True</code>, we once again run the lines of code in the loop body. When <code className="inline">counter</code> eventually reaches <code className="inline">5</code>, the looping condition becomes <code className="inline">False</code>, and the loop stops.</p>

        <h3>Iteration</h3>
        <p><strong>To iterate</strong> means to repeat something or go through it again. When we say "the loop iterates five times," we mean that the code inside the loop executes five times in succession. The term <strong>iteration</strong> means repetition - in the context of a while loop, it refers to one complete execution of the loop body. In other words, each time the code inside the loop body runs, that's considered one iteration. </p>

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>How many iterations are in the code below?</p>
          <CodeBlock language={"python"} codeString={`counter = 0
while counter < 3:
    print("Counting:", counter)
    counter += 1`} />
        </Collapsible>
      </section>

      <section>
        <h2>Code Tracing</h2>
        <p><strong>Code tracing</strong> is a technique used to understand how code executes by tracking the value of variables and the flow of control step by step. This is a classic, necessary skill for all programmers. Tracing through a loop ensures that you understand exactly what is happening in the loop at every step.</p>

        <p>Let's try an example:</p>

        <CodeBlock language={"python"} codeString={`x = 1
while x <= 3:
    print(x)
    x = x + 1
print("Done!")`} />

        <p>Here's a step-by-step trace of this code's execution:</p>

        <ol>
          <li><strong>Initialize starting variable:</strong> <code className="inline">x = 1</code></li>
          <li><strong>Jump back to check looping condition:</strong> Is <code className="inline">x &lt;= 3</code>?
            <ul>
              <li>Yes, 1 is less than or equal to 3, so the looping condition is <code className="inline">True</code>.</li>
              <li>Therefore, we will now enter the loop body.</li>
            </ul>
          </li>
          <li><strong>Enter loop body:</strong>
            <ul>
              <li>Execute: <code className="inline">print(x)</code> → Output: <code className="inline">1</code></li>
              <li>Execute: <code className="inline">x = x + 1</code> → Now <code className="inline">x = 2</code></li>
            </ul>
          </li>
          <li><strong>Jump back to check looping condition:</strong> Is <code className="inline">x &lt;= 3</code>?
            <ul>
              <li>Yes, 2 is less than or equal to 3, so the looping condition is <code className="inline">True</code>.</li>
              <li>Therefore, we will now enter the loop body.</li>
            </ul>
          </li>
          <li><strong>Enter loop body:</strong>
            <ul>
              <li>Execute: <code className="inline">print(x)</code> → Output: <code className="inline">2</code></li>
              <li>Execute: <code className="inline">x = x + 1</code> → Now <code className="inline">x = 3</code></li>
            </ul>
          </li>
          <li><strong>Jump back to check looping condition:</strong> Is <code className="inline">x &lt;= 3</code>?
            <ul>
              <li>Yes, 3 is less than or equal to 3, so the looping condition is <code className="inline">True</code>.</li>
              <li>Therefore, we will now enter the loop body.</li>
            </ul>
          </li>
          <li><strong>Enter loop body:</strong>
            <ul>
              <li>Execute: <code className="inline">print(x)</code> → Output: <code className="inline">3</code></li>
              <li>Execute: <code className="inline">x = x + 1</code> → Now <code className="inline">x = 4</code></li>
            </ul>
          </li>
          <li><strong>Jump back to check looping condition:</strong> Is <code className="inline">x &lt;= 3</code>?
            <ul>
              <li>No, 4 is not less than or equal to 3, so the looping condition is <code className="inline">False</code>.</li>
              <li>Therefore, we will now exit the loop.</li>
            </ul>
          </li>
          <li><strong>Exit loop:</strong> Continue running any lines of code that appears after the loop</li>
          <li><strong>Execute:</strong> <code className="inline">print("Done!")</code> → Output: <code className="inline">Done!</code></li>
        </ol>

        <p>So, the complete output of this program would be:</p>

        <CodeBlock language={"txt"} codeString={`1
2
3
Done!`} />

        <p>Remember that after each iteration of the loop, we jump back to the loop header, then check the looping condition again to determine if we should run the loop body again or instead, exit the loop.</p>

        <h3>Abbreviated Code Tracing</h3>
        <p>While the step-by-step approach above is thorough, you can often use a simpler method for code tracing by creating a small table. This approach makes it easier to track variable changes and loop conditions at a glance.</p>

        <p>For the same example above, we can perform code tracing using a table with columns for:</p>
        <ul>
          <li>Iteration number</li>
          <li>Variable values before the loop body executes</li>
          <li>The loop condition result</li>
          <li>Output produced</li>
        </ul>

        <p>Let's trace our example code using this table approach:</p>

        <table>
          <thead>
            <tr>
              <th>Iteration</th>
              <th>x value</th>
              <th>condition<br />(x &lt;= 3)</th>
              <th>Output</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>True</td>
              <td>1</td>
            </tr>
            <tr>
              <td>2</td>
              <td>2</td>
              <td>True</td>
              <td>2</td>
            </tr>
            <tr>
              <td>3</td>
              <td>3</td>
              <td>True</td>
              <td>3</td>
            </tr>
            <tr>
              <td>Loop End</td>
              <td>4</td>
              <td>False</td>
              <td>Done!</td>
            </tr>
          </tbody>
        </table>

        <p>This table format quickly shows:</p>
        <ol>
          <li>We start with <code className="inline">x = 1</code>, and the condition is <code className="inline">True</code></li>
          <li>After three iterations, <code className="inline">x</code> becomes <code className="inline">4</code></li>
          <li>When <code className="inline">x</code> is <code className="inline">4</code>, the condition becomes <code className="inline">False</code> and we exit the loop</li>
          <li>The final output is the sequence <code className="inline">"1", "2", "3", "Done!"</code>, all printed on separate lines</li>
        </ol>

        <p>To clarify, the last iteration number is three as iteration refers to execution of the loop body. While there are four checks on the loop condition, the loop body is only executed three times.</p>

        <p>The table method is especially useful when tracing loops with multiple variables or more complex conditions. If you are running into unexpected results after writing a <code className="inline">while</code> loop, using this type of code tracing will help you identify the issue.</p>

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>Trace through this code step by step and determine what the final value of <code className="inline">count</code> will be. You may create a table to help you track the values of <code className="inline">total</code> and the condition <code className="inline">count &lt; 4</code>.</p>
          <CodeBlock language={"python"} codeString={`count = 4
while count > 0:
    print(count)
    count = count - 1
print("Exited Loop")
print("Final count:", count)`} />
        </Collapsible>
      </section>

      <section>
        <h2>While Loops as Repeated <code className="inline">if</code> Statements</h2>
        <p>While loops can be thought of as repeated <code className="inline">if</code> statements. However, unlike an <code className="inline">if</code> statement that checks a condition once, a while loop will continually re-evaluate its condition after each iteration, making it ideal for ensuring a user's input is valid.</p>
        <p>Let's look at an example of an <code className="inline">if</code> statement that checks a user's input:</p>

        <CodeBlock language={"python"} codeString={`user_input = input("Enter a number greater than 10: ")
if int(user_input) <= 10:
  print("That's not a valid number but I won't be able to check again.")`} />

        <p>Try running this code in your code editor. In this example, the program asks the user once for a number and checks if it is greater than 10. If the user fails to do so, the program notes the error but is <strong>not</strong> able to start over and prompt again, even though the input the user gave was invalid.</p>

        <h3>Repeating Checks</h3>
        <p>Now, let's look at how we can improve this by using a <code className="inline">while</code> loop:</p>

        <CodeBlock language={"python"} codeString={`user_input = input("Enter a number greater than 10: ")
while int(user_input) <= 10:
  print("That's not a valid number, please try again.")
  user_input = input("Enter a number greater than 10: ")

print("Thank you for entering a valid number!")`} />
        <p>In contrast to the simple <code className="inline">if</code> statement, the <code className="inline">while</code> loop will prompt the user <strong>again</strong> for valid input if the input is deemed invalid. This repeated checking is akin to an <code className="inline">if</code> statement that repeats each time the condition <code className="inline">number &gt; 10</code> is not met.</p>

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>Technically, you can nest another <code className="inline">if</code> statement inside the first one to check the user's input again if it is invalid. However, this is not the best way to handle this situation - can you think of some shortcomings of this code?</p>
          <CodeBlock language={"python"} codeString={`user_input = input("Enter a number greater than 10: ")
if int(user_input) <= 10:
  print("That's not a valid number, please try again.")
  user_input = input("Enter a number greater than 10: ")
  if int(user_input) <= 10:
    print("That's not a valid number, please try again.")
    user_input = input("Enter a number greater than 10: ")

print("Thank you for entering a valid number!")`} />
        </Collapsible>
      </section>

      <section>
        <h2>Using While Loops</h2>
        <p>In the example below, the <code className="inline">countdown</code> variable starts at <code className="inline">10</code> and is decremented in each iteration of the loop. The loop continues running as long as <code className="inline">countdown</code> is greater than <code className="inline">0</code>. Once <code className="inline">countdown</code> reaches <code className="inline">0</code>, the loop is exited, and <code className="inline">"Lift off!"</code> is printed, signaling the end of the countdown.</p>

        <CodeBlock language={"python"} codeString={`countdown = 10
while countdown > 0:
  print("Counting down:", countdown)
  countdown -= 1
print("Lift off!")`} />

        <p>While loops can also be used to iterate through each character in a string.</p>
        <CodeBlock language={"python"} codeString={`message = "North America"
index = 0
while index < len(message):
  print("Character at position " + str(index) + " is " + message[index])
  index += 1`} />
        <p>Try running the above code in your code editor. In this example, the loop iterates through each character in the string <code className="inline">"North America"</code> using an <code className="inline">index</code>. The condition checks if the <code className="inline">index</code> is less than the length of <code className="inline">message</code>, ensuring the loop runs for each character in the string.</p>

        <p>We can also use a while loop to check if a string contains a certain character.</p>
        <CodeBlock language={"python"} codeString={`phrase = "Africa! I would love to visit."
has_exclamation = False
index = 0
while index < len(phrase):
  if phrase[index] == "!":
    has_exclamation = True
  index += 1
print(has_exclamation)`} />

        <p><code className="inline">index</code> represents the position of the current character in the string. In each iteration of the while loop above, we check if the current character (described by <code className="inline">phrase[index]</code>) is an exclamation point. If it is, we set <code className="inline">has_exclamation</code> to <code className="inline">True</code>. We then print the value of <code className="inline">has_exclamation</code>.</p>
        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>The following code is incomplete. Complete steps 1 and 2 of the while loop to print each letter in the word "Asia":</p>
          <CodeBlock language={"python"} codeString={`word = "Asia"
index = 0

while index < len(word):
  # 1. print the current letter
  # 2. increment the index`} />
        </Collapsible>
      </section>

      <section>
        <h2 id="break-keyword"><a href="#break-keyword" className="section-link">The <code className="inline">break</code> Keyword</a></h2>
        <p>In while loops, the ideal scenario is for the loop to terminate based on its loop condition. However, sometimes you may want to exit a loop early based on a specific situation. Sometimes, this situation is one that cannot be predicted by the initial loop condition. This is where the <code className="inline">break</code> keyword comes into play.</p>

        <p>The <code className="inline">break</code> keyword immediately terminates the loop, regardless of the loop's original condition. It provides a way to exit the loop from inside the loop body, typically under a conditional statement.</p>

        <CodeBlock language={"python"} codeString={`count = 0
while count < 10:
  print("Count is:", count)
  if count == 5:
    print("Count reached 5, breaking out of the loop.")
    break
  count += 1`} />
        <p>This loop is set to run until the count reaches 10. However, within the loop, there's a check to see if the count equals 5. When the count does reach 5, the <code className="inline">break</code> keyword is executed, which immediately stops the loop. This example demonstrates how <code className="inline">break</code> can be used to halt the execution of a loop based on a condition met <em>inside the loop body</em>, even if the top-level loop condition would allow it to continue.</p>

        <h3>Using <code className="inline">break</code></h3>
        <p>The previous example is unlikely to be a way that you use the <code className="inline">break</code> keyword, as a better method would be simply to set the looping condition to while <code className="inline">count &lt; 5</code>. Here's a more realistic example of when you might use <code className="inline">break</code>.</p>

        <CodeBlock language={"python"} codeString={`attempts = 0
while attempts < 3:
  password = input("Enter your password: ")
  if password == "secret123":
    print("Access granted!")
    break

  attempts += 1
  if attempts == 3:
    print("Too many failed attempts. Account locked.")`} />
        <p>In this example, we're implementing a simple password validation system. The loop allows up to 3 attempts to enter the correct password. If the correct password is entered at any point, we use <code className="inline">break</code> to immediately exit the loop and grant access. This demonstrates how <code className="inline">break</code> can be used to provide an early exit when a specific condition is met, regardless of how many attempts were planned.</p>

        <p>While the <code className="inline">break</code> keyword is powerful, it should be used judiciously. Relying heavily on <code className="inline">break</code> can make the loop logic hard to follow, especially in complex loops. Ideally, the loop's condition should be sufficient to control its termination, and <code className="inline">break</code> should be reserved for exceptional circumstances where an immediate exit is required.</p>

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>1. What will be the output of the following code?</p>
          <CodeBlock language={"python"} codeString={`ducks = 0
while ducks < 2:
  print(ducks)
  ducks += 1
  break

print("Exited loop")`} />

          <p>2. The following code loops through a string to check if it contains an exclamation point. How could using <code className="inline">break</code> improve the efficiency of the code below?</p>
          <CodeBlock language={"python"} codeString={`phrase = "Africa! I would love to visit."
has_exclamation = False
i = 0
while i < len(phrase):
  if phrase[i] == "!":
    has_exclamation = True
  i += 1
print(has_exclamation)`} />
        </Collapsible>
      </section>

      <section>
        <h2>The <code className="inline">continue</code> Keyword</h2>
        <p>While the <code className="inline">break</code> keyword exits a loop entirely, the <code className="inline">continue</code> keyword <em>skips</em> the rest of the current iteration and attempts to start the next one, jumping back to the loop condition. This can be useful when you want to skip certain iterations based on specific conditions.</p>

        <p>Here's a practical example of using <code className="inline">continue</code> to skip even numbers:</p>

        <CodeBlock language={"python"} codeString={`count = 0
while count < 10:
  count += 1
  if count % 2 == 0:  # If count is even
    continue
  print(count)`} />
        <p>In this example, when <code className="inline">count</code> is even, the <code className="inline">continue</code> statement is triggered, thereby skipping the <code className="inline">print(count)</code> line and jumps back to check the loop condition. When <code className="inline">count</code> is odd, the <code className="inline">if</code> statement is skipped, and the <code className="inline">print(count)</code> line is executed, and the loop continues as usual. The end result of the loop is that only odd numbers are printed.</p>

        <h3>When <code className="inline">continue</code> is Redundant</h3>
        <p>While <code className="inline">continue</code> can be useful, it's often unnecessary and can make code harder to read. Here's an example of redundant usage:</p>

        <CodeBlock language={"python"} codeString={`# Using continue
seconds = 0
while seconds < 5:
  seconds += 1
  print(seconds)
  continue`} />

        <p>In this example, the <code className="inline">continue</code> keyword is redundant because the <code className="inline">print(seconds)</code> line is the last line in the loop body. What would happen normally without the <code className="inline">continue</code> keyword is that the loop would attempt to move to the next iteration, jumping back up to the loop condition.</p>

        <CodeBlock language={"python"} codeString={`# This example is equivalent to the previous one
seconds = 0
while seconds < 5:
  seconds += 1
  print(seconds)`} />
        <p>The <code className="inline">continue</code> statement in this case is essentially repeating work that would have already been done and making the code harder to read. Be sure that if you use <code className="inline">continue</code>, you are not using it in a place where your code would have moved on to the next iteration regardless!</p>

        <h3>Avoiding <code className="inline">continue</code></h3>
        <p>In the examples below, using <code className="inline">continue</code> adds unnecessary complexity. The second version is clearer and achieves the same result by simply using an <code className="inline">if</code> statement to control when to print.</p>

        <CodeBlock language={"python"} codeString={`# Using continue
count = 0
while count < 5:
  count += 1
  if count == 3:
    continue
  print(count)

# Better approach without continue
count = 0
while count < 5:
  count += 1
  if count != 3:  # Simply use an if statement
    print(count)`} />
        <p>As a general rule, if you can achieve the same result using a simple <code className="inline">if</code> statement, that's usually the better choice. The <code className="inline">continue</code> keyword is most valuable when you need to skip complex processing or multiple lines of code within a loop iteration.</p>

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>What will this code print? Could it be rewritten without using <code className="inline">continue</code>?</p>
          <CodeBlock language={"python"} codeString={`x = 0
while x < 5:
  x += 1
  if x == 2 or x == 4:
    continue
  print(x)`} />
        </Collapsible>

        <h3><code className="inline">break</code> and <code className="inline">continue</code> stop execution</h3>
        <p>The <code className="inline">break</code> keyword stops the loop immediately, while <code className="inline">continue</code> stops the current iteration and moves to the next iteration of the loop. In both cases, code directly after each keyword is not executed.</p>

        <CodeBlock language={"python"} codeString={`customers = 4
while customers > 0:
  if customers == 3:
    continue
    print("This line of code will never be executed.")
  elif customers == 1:
    break
    print("This line of code will also never be executed.")
  else:
    print(customers)
    customers -= 1

print("Exited loop.")`} />

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>What does the code above print?</p>
        </Collapsible>
      </section>

      <section>
        <h2>Infinite While Loops</h2>
        <p>We've learned about different ways a while loop can terminate. What happens if we don't apply these techniques correctly? It is possible to run into situations where your while loop never terminates, resulting in your program freezing or becoming unresponsive. This is known as an <strong>infinite loop</strong> - this occurs when the loop condition never becomes <code className="inline">false</code>.</p>

        <p>Here's an example of a common mistake that leads to an infinite loop:</p>

        <CodeBlock language={"python"} codeString={`counter = 0
while counter < 5:
  print("Counting:", counter)`} />
        <p>Here, the <code className="inline">counter</code> variable is never incremented inside the loop, so the condition <code className="inline">counter &lt; 5</code> will <strong>always</strong> evaluate to <code className="inline">True</code>, meaning we will endlessly repeat the loop body. This results in an infinite loop that continuously prints <code className="inline">"Counting: 0"</code> without stopping.</p>

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>Try running the above code in your code editor. What happens?</p>
        </Collapsible>

        <h3>While Loops with <code className="inline">input()</code></h3>

        <p>Sometimes we can write an "intentional" infinite loop that uses the <code className="inline">break</code> keyword instead of the initial looping condition to exit the loop. We can use infinite loops intentionally to keep a program running indefinitely until an external action occurs, such as user input or an error that breaks the loop.</p>

        <p>Consider the following example:</p>
        <CodeBlock language={"python"} codeString={`# Example: Infinite while loop with a break condition
while True:
  response = input("Feel free to type anything you want. When you're finished, enter 'quit' to exit: ")
  if response == 'quit':
    break
  print("You entered:", response)`} />
        <p><code className="inline">while True</code> means that the loop condition that will always evaluate to <code className="inline">True</code>, resulting in an infinite loop. This loop will continually prompt the user to enter a response.
          If the user types <code className="inline">'quit'</code>, the <code className="inline">break</code> statement is executed, which immediately exits the loop.
          Otherwise, it will print the user's response and prompt again. The use of the <code className="inline">break</code> keyword allows for looping that is directly controlled by user interaction.</p>
        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>As we discussed earlier, it is generally preferable to avoid using <code className="inline">break</code> and <code className="inline">continue</code>, instead having a loop condition that will naturally terminate. In the example above, how could you rewrite the code to avoid using <code className="inline">break</code>? What would the new loop condition be?</p>
        </Collapsible>

        <h3>Best Practices</h3>
        <p>While loops should include a clear and reachable exit condition to prevent them from running indefinitely in an uncontrollable manner. Ensure that the <code className="inline">while</code> loops that you write have a clear way to terminate via either the <code className="inline">break</code> statement or a change in the loop condition.</p>

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>Why is this code an infinite loop? What line of code would you add to fix it?</p>
          <CodeBlock language={"python"} codeString={`x = 1
while x < 5:
    print(x)`} />
        </Collapsible>
      </section>

      <section>
        <h2>Exiting Loops with <code className="inline">return</code></h2>
        <p>While in a function, the <code className="inline">return</code> statement can be used to exit a function and return a value. Consider the following example:</p>

        <CodeBlock language={"python"} codeString={`def find_first_a(word):
  i = 0
  while i < len(word):
    if word[i] == "a":
      return i
    i += 1
  return -1

first_a_index = find_first_a("straw")
print(first_a_index)  # Output: 2`} />

        <p>In this example, the <code className="inline">return</code> statement terminates the function (and therefore, the loop) entirely when the first <code className="inline">"a"</code> is found. The function then returns the index of the first <code className="inline">"a"</code> in the word. If no <code className="inline">"a"</code> is found, the function returns <code className="inline">-1</code>. (The value <code className="inline">-1</code> is used to indicate that the position of the first <code className="inline">"a"</code> does not exist.)</p>

        <p>You <em>could</em> use <code className="inline">break</code> instead of <code className="inline">return</code> to achieve the same result, but it is a little harder to read. See the example below, which is functionally equivalent to the one above:</p>

        <CodeBlock language={"python"} codeString={`def find_first_a(word):
  i = 0
  result = -1  # Assumes we don't find an "a" until proven otherwise
  while i < len(word):
    if word[i] == "a":
      result = i
      break  # Exit the loop early
    i += 1

  return result

first_a_index = find_first_a("straw")
print(first_a_index)  # Output: 2`} />

        <p>Remember, the <code className="inline">return</code> statement can only be used inside a function. This means that this technique only works for loops that are inside a function. If you try to use <code className="inline">return</code> outside of a function, you will get a <code className="inline">SyntaxError</code>.</p>

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>Rewrite the following code using a <code className="inline">return</code> statement to exit the loop instead of <code className="inline">break</code>.</p>
          <CodeBlock language={"python"} codeString={`def has_digit(s):
  result = False
  i = 0
  while i < len(s):
    if word[i].isdigit():
      result = True
      break
    i += 1
  return result

  has_digit("abc123")  # Output: True`} />
        </Collapsible>
      </section>

      <section>
        <h2>Wrapping Up</h2>
        <p>Great job! You've learned about while loops and how to use them practically to repeat code.</p>
      </section>

      <section>
        <button className="next-button" onClick={() => window.location.href = "/quiz?name=06WhileLoops.py"}>Start Quiz</button>
      </section>

      {/* <h3>Using <code className="inline">break</code> for random numbers</h3>
            <p>The previous example is unlikely to be a way that you use the <code className="inline">break</code> keyword, as a better method would be simply to set the looping condition to while <code className="inline">count &lt;= 5</code>. Here's a more realistic example of when you would use <code className="inline">break</code>.</p>

            <CodeBlock language={"python"} codeString={`import random  # import code for generating random numbers

while True:
  number = random.randint(1, 10)  # Generate a random number between 1 and 10
  print("Random number generated:", number)
  if number == 7:
    print("Lucky number 7! Breaking out of the loop.")
    break`} />
            <p>In this example, a random number between 1 and 10 is generated in each iteration using the <code className="inline">random.randint()</code> function. The loop continues indefinitely because its condition is always <code className="inline">True</code>. However, if the number 7 is generated, a condition within the loop checks for this outcome and executes a <code className="inline">break</code> statement, which stops the loop. This demonstrates how <code className="inline">break</code> can be used to provide an exit path in scenarios where continuing the loop becomes undesirable or unnecessary based on runtime conditions.</p>

            <p>While the <code className="inline">break</code> keyword is powerful, it should be used judiciously. Relying heavily on <code className="inline">break</code> can make the loop logic hard to follow, especially in complex loops. Ideally, the loop's condition should be sufficient to control its termination, and <code className="inline">break</code> should be reserved for exceptional circumstances where an immediate exit is required.</p> */}

    </div>
  );
};

export default WhileLoops;
