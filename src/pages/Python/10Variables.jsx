import React from 'react';
import ProgressBar from "../../components/ProgressBar";
import CodeBlock from '../../components/CodeBlock';
import Collapsible from '../../components/Collapsible';

import useSequentialCounter from '../../hooks/useSequentialCounter';

const Variables = () => {
  const { getCurrentNumberAndIncrement } = useSequentialCounter();

  return (
    <div className="lesson-container">
      <ProgressBar />

      <section>
        <h1>Variables</h1>
        <p>Just like in mathematics, where variables can be used to store numbers or values, in programming, variables act as containers for storing data values. Python variables give us a way to represent data stored in the computer's memory with a name.</p>
      </section>

      <section>
        <h2 id="what-is-a-variable"><a href="#what-is-a-variable" className="section-link">What is a Variable?</a></h2>
        <p>A variable in Python is like a labeled container where you can put something you want to use later. Once you have placed an item into this container, you can use the label to reference what's inside without having to open the container and look inside every time.</p>
      </section>

      <section>
        <h2 id="creating-variables"><a href="#creating-variables" className="section-link">Creating Variables</a></h2>
        <p>To create a variable, you just assign it a value and then start using it. Assignment is done with a single equals sign (<code className="inline">=</code>).</p>
        <CodeBlock language={"python"} codeString={`name = "Alice"          # 'name' is a variable storing the string "Alice"
age = 30                # 'age' is a variable storing the number 30
current_job = "doctor"  # 'current_job' is a variable storing the string "doctor"`} />

        <h3>Rules for Naming Variables</h3>
        <p>Valid variable names:</p>
        <ul>
          <li>Must start with a either a letter or an underscore <code className="inline">_</code>.</li>
          <li>Cannot start with a number.</li>
          <li>Can only contain alpha-numeric characters (letters and numbers) and underscores.</li>
          <li>Are case-sensitive (<code className="inline">age</code>, <code className="inline">Age</code>, and <code className="inline">AGE</code> are three different variables).</li>
          <li>Typically begin lowercase.</li>
          <li>Multi-word variable names should have each word separated by underscores.</li>
        </ul>
      </section>

      <section>
        <h2 id="using-variables"><a href="#using-variables" className="section-link">Using Variables</a></h2>
        <p>Once a variable is established, you can use it to perform operations and make calculations. You can also use them to hold values for output.</p>
        <CodeBlock language={"python"} codeString={`# Using variables in calculations
width = 1.5
length = 2.0
area = width * length
print(area)  # Output: 3.0

# Using variables to hold strings for output
first_name = "Alice"
last_name = "Johnson"
full_name = first_name + " " + last_name  # Concatenating two string variables
print(full_name)`} />
      </section>

      <section>
        <h2 id="updating-variables"><a href="#updating-variables" className="section-link">Updating Variables</a></h2>
        <p>You can change the value of a variable by assigning a new value to it. This is helpful when tracking changing data within a program.</p>
        <CodeBlock language={"python"} codeString={`x = 5  # initial value
x = x + 2  # increase the value of x by 2
print(x)  # output the new value of x, which is 7

x += 1  # An abbreviated syntax that is thesame as x = x + 1
print(x)`} />

        <h3>Reassigning Variables</h3>
        <p>Many operations on variables, especially those involving data manipulation methods, require you to reassign the result back to the variable if you want to keep the changes. This is particularly important when working with strings, as strings in Python are immutable.</p>
        <p>For example, to change a string in a variable, you must reassign the variable:</p>
        <CodeBlock language={"python"} codeString={`my_string = "Hello World"
my_string = my_string.lower()  # convert to lowercase and reassign
print(my_string)`} />
        <p>(Optional) However, some operations might seem to change the variable in place. For example, appending an item to a list:</p>
        <CodeBlock language={"python"} codeString={`my_list = [1, 2, 3]
my_list.append(4)  # appends in place, no need to reassign
print(my_list)`} />

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>Try creating a variable to store your favorite color and print it out. Then, update the variable to store your favorite animal and then print the variable again.</p>
        </Collapsible>
      </section>
    </div>
  );
}

export default Variables;
