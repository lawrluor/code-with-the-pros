import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import Collapsible from '../../components/Collapsible';
import ProgressBar from "../../components/ProgressBar";

import useSequentialCounter from '../../hooks/useSequentialCounter';

const PassByReference = () => {
  const { getCurrentNumberAndIncrement } = useSequentialCounter();

  return (
    <div className="lesson-container">
      <ProgressBar />

      <section>
        <h1>Passing Lists by Reference in Python</h1>
      </section>

      <section>
        <h2 id="introduction-to-passing-by-reference"><a href="#introduction-to-passing-by-reference" className="section-link">Introduction to Passing by Reference</a></h2>
        <p>In Python, lists are passed to functions by reference, meaning that any changes made to a list within a function affect the original list. This behavior can be both useful and lead to potential bugs if not handled carefully.</p>
      </section>

      <section>
        <h2 id="example-of-passing-lists-by-reference"><a href="#example-of-passing-lists-by-reference" className="section-link">Example of Passing Lists by Reference</a></h2>
        <p>Let's explore how passing by reference works with a simple function:</p>
        <CodeBlock language={"python"} codeString={`def modify_list(lst):
    lst.append(4)
    return lst

my_list = [1, 2, 3]
modify_list(my_list)
print(my_list)`} />
        <p>This function appends a number to the list. After calling <code className="inline">modify_list</code>, the original list <code className="inline">my_list</code> is modified.</p>

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>Explain what the term "passing by reference" means in the context of Python functions.</p>
        </Collapsible>
      </section>

      <section>
        <h2 id="common-mistake-reassignment-inside-functions"><a href="#common-mistake-reassignment-inside-functions" className="section-link">Common Mistake: Reassignment Inside Functions</a></h2>
        <p>Reassigning a list inside a function does not affect the original list:</p>
        <CodeBlock language={"python"} codeString={`def reassign_list(lst):
    lst = [4, 5, 6]  # This creates a new *local* variable called lst and therefore does not affect the passed list

original_list = [1, 2, 3]
reassign_list(original_list)
print(original_list)

def reassign_list(lst):
    lst = [4, 5, 6]  # Even with the same name, this still creates a new *local* variable called lst and therefore does not affect the original variable lst

lst = [1, 2, 3]
reassign_list(lst)
print(original_list)
`} />
        <p>Despite the reassignment inside the function, the original list variables remains unchanged outside the function.</p>
        <CodeBlock language={"python"} codeString={``} />
      </section>

      <section>
        <h2 id="modifying-elements-of-a-list"><a href="#modifying-elements-of-a-list" className="section-link">Modifying Elements of a List</a></h2>
        <p>Directly modifying elements of a list inside a function will affect the original list:</p>
        <CodeBlock language={"python"} codeString={`def change_element(lst):
    lst[0] = 99  # This changes the first element of the passed list

a_list = [1, 2, 3]
change_element(a_list)
print(a_list)`} />
        <p>The change to the first element of <code className="inline">a_list</code> inside the function is reflected outside the function.</p>
      </section>

      <section>
        <h2 id="best-practices"><a href="#best-practices" className="section-link">Best Practices</a></h2>
        <p>
          When working with lists in functions:
          <ul>
            <li>Be cautious of unintended side effects due to modifications.</li>
            <li>Consider returning a new list if you do not intend to modify the original.</li>
            <li>Document functions clearly to indicate whether they modify their inputs.</li>
          </ul>
        </p>
      </section>
    </div>
  );
};

export default PassByReference;
