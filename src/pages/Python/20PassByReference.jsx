import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const PassByReference = () => {
    return (
        <div className="lesson-container">
            <h1>Passing Lists by Reference in Python</h1>

            <section>
                <h2>Introduction to Passing by Reference</h2>
                <p>
                    In Python, lists are passed to functions by reference, meaning that any changes made to a list within a function affect the original list. This behavior can be both useful and lead to potential bugs if not handled carefully.
                </p>
            </section>

            <section>
                <h2>Example of Passing Lists by Reference</h2>
                <p>Let's explore how passing by reference works with a simple function:</p>
                <CodeBlock language={"python"} codeString={`def modify_list(lst):
    lst.append(4)
    return lst

my_list = [1, 2, 3]
modify_list(my_list)
print(my_list)`}></CodeBlock>
                <p>This function appends a number to the list. After calling <code className="inline">modify_list</code>, the original list <code className="inline">my_list</code> is modified.</p>
            </section>

            <section>
                <h2>Common Mistake: Reassignment Inside Functions</h2>
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
`}></CodeBlock>
                <p>Despite the reassignment inside the function, the original list variables remains unchanged outside the function.</p>
                <CodeBlock language={"python"} codeString={``}></CodeBlock>
            </section>

            <section>
                <h2>Modifying Elements of a List</h2>
                <p>Directly modifying elements of a list inside a function will affect the original list:</p>
                <CodeBlock language={"python"} codeString={`def change_element(lst):
    lst[0] = 99  # This changes the first element of the passed list

a_list = [1, 2, 3]
change_element(a_list)
print(a_list)`}></CodeBlock>
                <p>The change to the first element of <code className="inline">a_list</code> inside the function is reflected outside the function.</p>
            </section>

            <section>
                <h2>Best Practices</h2>
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
