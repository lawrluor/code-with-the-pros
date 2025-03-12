import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import Collapsible from '../../components/Collapsible';

const StringsLesson = () => {
    return (
        <div className="lesson-container">
            <h1>Strings</h1>

            <section>
                <h2>Introduction to Strings</h2>
                <p>Strings are sequences of characters used in Python to represent text. A string can be as short as a single character or as long as multiple paragraphs. They are enclosed in quotes; you can use single quotes (<code className="inline">' '</code>) or double quotes (<code className="inline">" "</code>) depending on your preference.</p>
                <p>Some examples of strings:</p>
                <CodeBlock language={"python"} codeString={` # Single character
'x'
"a"

# Word
'hello'
"world"

# Sentence
'Python is fun!'
"The quick brown fox jumps over the lazy dog."`}/>
                <p>The quotations must be matched, as in there must be a matching closing quotation for each opening quotation mark for the string to be valid.</p>
                <CodeBlock language={"python"} codeString={`'hello"       # Mismatching marks
'hi everyone  # Missing closing quotation
name          # Interpreted as a variable instead of a string, as it is missing quote marks`}/>
                <p>For paragraphs or text with multiple line breaks, use triple quotes (<code className='inline'>''' '''</code>) or (<code className='inline'>""" """</code>).</p>

                <CodeBlock language={"python"} codeString={`# Paragraph
"""Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Ut enim ad minim veniam, quis nostrud exercitation ullamco
laboris nisi ut aliquip ex ea commodo consequat."""`}/>

                <p>As with almost any type of data in Python, we can store strings into variables to reuse them later.</p>
                <CodeBlock language={"python"} codeString={`name = "Lawrence"
occupation = "Software Developer"

print(name)
print(occupation)`}/>
            </section>

            <section>
                <h2>Indexing and Slicing Strings in Python</h2>
                <p>TODO: Explain the terms slicing and indexing and analogies</p>

                <p>Each character in a string can be accessed using an index, which specifies the position of a character in a string. The index starts from 0 for the first character.</p>
                <CodeBlock language={"python"} codeString={`s = 'Hello World'
first_char = s[0]
print(first_char)  # Outputs: H`} />

                <p>Python also supports negative indexing, which is less common in other programming languages. Negative indexes start from the end of the string as -1 and count backwards.</p>
                <CodeBlock language={"python"} codeString={`s = 'Hello World'
last_char = s[-1]
print(last_char)  # Outputs: d

print(s[-2])      # Outputs: l
print(s[-3])      # Outputs: o`} />

                <Collapsible title={"Challenge"}>
                    <p>Can you think of why it might be useful to select a single character from a string?</p>
                </Collapsible>

                <Collapsible title={"Challenge"}>
                    <p>For a 6-character long string, print the first character, the 3rd to last character, and the last character.</p>
                </Collapsible>

                <h3>Slicing Strings</h3>
                <p>What if we want to get more than just a single character from a string? Slicing can be used to obtain a substring, or a smaller part or subset of the string.</p>
                <CodeBlock language={"python"} codeString={`s = 'Hello World'
sub = s[1:5]  # Format is: s[start:stop]
print(sub)    # Outputs: ello`} />
                <p>Note that the character at the stop index is <strong>not</strong> included, which is a common convention in Python.</p>

                <h4>Including the "Step" Value</h4>
                <p>There can also be an optional step value, which specifies the increment between characters in the slice. The syntax is <code className="inline">s[start:stop:step]</code>. </p>
                <CodeBlock language={"python"} codeString={`s = 'Hello World'
sub_step = s[0:8:2]
print(sub_step)  # Outputs: HloW`} />

                <p>Here, the <code className="inline">step</code> parameter specifies that the slice should skip every second character, starting from the first character and ending at (but not including) the 8th index.</p>
            </section>

            <section>
                <h2>Handling <code className="inline">IndexError</code></h2>
                <p>An <code className="inline">IndexError</code> or "Index Out of Range" error in Python occurs when you attempt to access an index that matches or exceeds the length of the string, leading to an <code className="inline">IndexError</code>. </p>
                <CodeBlock language={"python"} codeString={`# String indexes start from 0
s = 'Hello'
print(s[4])  # Outputs: o
print(s[5])  # IndexError: string index out of range`} />

                <p>Unlike the direct indexing examples above, slicing a string outside of its bounds does <strong>not</strong> result in an error. Instead, Python handles it gracefully by adjusting the bounds:</p>
                <ul>
                    <li><strong>Overextended Slices:</strong> If the start index is beyond the string length, Python returns an empty string.</li>
                    <CodeBlock language={"python"} codeString={`print(s[10:])  # Outputs: ''`} />
                    <li><strong>Negative Indexing Beyond Bounds:</strong> Negative indices beyond the string's length wrap around, potentially leading to non-empty results if not calculated correctly.</li>
                    <CodeBlock language={"python"} codeString={`print(s[-10:2])  # Outputs: 'He'`} />
                </ul>

                <h3>Avoiding Index Errors</h3>
                <p>We will learn more about how to avoid index errors in future sections, but for now, make sure that you carefully select indices that are within the bounds of a string.</p>
            </section>

            <section>
                <h2>Concatenating Strings in Python</h2>
                <p>Concatenation, or string addition, is the process of combining two or more strings into one longer one. The simplest way to concatenate strings is by using the plus (<code className="inline">+</code>) operator.</p>
                <CodeBlock language={"python"} codeString={`message = "hi" + "there"
print(message)  # Outputs: hithere

greeting = 'Hello' + ' ' + "World"
print(greeting)  # Outputs: Hello World

# We can also concatenate strings to variables
print(message + "!")  # Outputs: hithere!`
} />

                <p>Attempting to concatenate strings with non-string types (like integers) directly with the <code className="inline">+</code> operator will lead to a <code className="inline">TypeError</code>. To avoid this, make sure that you only add strings to other strings, or convert them explicitly to strings (known as casting) using the <code className="inline">str()</code> function.</p>
                <CodeBlock language={"python"} codeString={`# Incorrect
age = 30
greeting = 'Alice is ' + age + ' years old'  # Raises TypeError

# Correct
greeting = 'Alice is ' + str(age) + ' years old'`} />
            </section>

            <section>
                <h2>Choosing Between Single and Double Quotes in Strings</h2>
                <p>As both single quotes (<code className="inline">' '</code>) and double quotes (<code className="inline">" "</code>) can be used to define strings, the choice between these can sometimes depend on the content of the string itself.
                For example, if the string itself contains single quotes like the apostrophe symbol, using single quotes can cause an error.</p>
                <CodeBlock language={"python"} codeString={`'This is the cat's home."  # Syntax parsing error`} />
                <p>There is an error because the Python interpreter sees the apostrophe (single quote symbol) and believes that it is the end of the string. If we use double quotes instead, so that the single quote from the apostrophe symbol is not interpreted as attempting to end the string.</p>

                <CodeBlock language={"python"} codeString={`"This is the cat's home."`} />

                <h3>Using Single Quotes</h3>
                <p>Single quotes are useful when the string contains double quotes. This can be particularly handy in strings representing spoken dialog or when quoting text.</p>
                <CodeBlock language={"python"} codeString={`'She said, "Hello, how are you?"'`} />
            </section>

            <section>
                <h2>Escape Characters</h2>
                <p>Alternatively, you can use escape characters (<code className="inline">\</code>) to tell Python to interpret a quote as a literal quotation mark rather than use its default behavior of ending the string.</p>
                <CodeBlock language={"python"} codeString={`"She said, \\"It's lovely to see you!\\""`} />
                <p>This will print <code className="inline">She said, "It's lovely to see you!"</code>, including the quotation marks in the actual string itself.</p>
            </section>

            <section>
                <h2>Empty Strings (<code className="inline">""</code>)</h2>
                <p>Empty strings are, well, strings that are empty, meaning that they contain no characters. In Python, an empty string is represented by <code className="inline">""</code>. It is analogous to the number 0 in math - just as 0 is still a number, an empty string is still a string that contains nothing.</p>

                <h3>Why use empty strings?</h3>
                <p>Why use empty strings and what are their purpose? Empty strings are often used as placeholders for variables that have not been assigned a value yet. For example, if we wanted to create a greeting message, we could use an empty string as a placeholder for the name of the person we are greeting, then later update name when we are ready to assign it a value.</p>
                <CodeBlock language={"python"} codeString={`name = ""

# Other code

name = input("What's your name? ")
greeting = "Hello, " + name + "!"`} />

                The following example illustrates how the empty string can function as a starting placeholder, much like the number zero:
                <CodeBlock language={"python"} codeString={`total = 0  # start with a default value
total = total + 1  # increment total by 1

message = ""  # start with a default value of empty string
message = message + "a"  # add the letter 'a' to the message`} />
            </section>

            <section>
                <h2>Common String Methods</h2>
                <p> A method, also known as a function, is an action that a string can take or an operation that can be applied to a string. Some common methods like <code className="inline">.upper()</code> and <code className="inline">.lower()</code> are used to create an altered version of the string.</p>
                <CodeBlock language={"python"} codeString={`greeting = 'Hello, World!'
print(greeting.upper())  # Outputs: HELLO WORLD

lowercase_greeting = "Greetings everyone!".lower()
print(lowercase_greeting)  # Outputs: greetings everyone!`} />

                <p>Note that most string methods return a <em>new</em> string, rather than actually modifying the original string (known as "in-place" methods).</p>
                <CodeBlock language={"python"} codeString={`greeting = 'Hello, World!'
print(greeting.upper())  # Outputs: HELLO, WORLD

# The original string remains unchanged.
print(greeting)         # Outputs: Hello, World!`} />

                <p><code className="inline">.strip()</code> returns a new version of the string with the whitespace "trimmed" from the beginning and end of a string.</p>
                <CodeBlock language={"python"} codeString={`greeting = '   Hello, World!   '
print(greeting.strip())  # Outputs: Hello, World!`} />

                <p>Some methods like <code className="inline">.isalpha()</code> does not return an altered string, but instead gets information about the string, in this case checking if the string contains only letters.</p>
                <CodeBlock language={"python"} codeString={`name = 'Rachel'
print(name.isalpha())  # Outputs: True

sentence = 'I have 3 cats.'
print(sentence.isalpha())  # Outputs: False`} />

                <p>There are dozens of other string methods, but you can find them all along with their explanations in the <a href="https://docs.python.org/3/library/stdtypes.html#string-methods" target="_blank" rel="noreferrer">Python documentation</a>.</p>
            </section>

            <section>
                <h2>Formatting Strings</h2>
                <p>Sometimes, inserting text into a string is a bit of a pain. Fortunately, we can use the <code className="inline">.format()</code> method to help us.</p>
                <CodeBlock language={"python"} codeString={`print('{} is {} years old'.format(name, age))  # Outputs: Alice is 30 years old`} />
                <p>Note how we didn't have to cast the int variable <code className="inline">age</code> to a string, saving us some work. Furthermore, we didn't need to include multiple <code className="inline">+</code> symbols. Generally, these improvements over regular string addition make combining strings with the <code className="inline">.format()</code> method easier for you to write and easier for others to read.</p>

                <h3>Using f-strings</h3>
                <p>f-strings are an abbreviated way to format strings, derived from the <code className="inline">.format()</code> method. Here, the letter <code className="inline">f</code> is written before the opening quotation mark, which tells Python that this is a special string that can be formatted with variables.</p>
                <CodeBlock language={"python"} codeString={`name = 'Alice'
age = 30
print(f'{name} is {age} years old')  # Outputs: Alice is 30 years old`} />

                <h3>Old methods of string formatting (optional)</h3>
                <p>In older versions of Python, string formatting was typically done with the <code className="inline">%</code> character. We can still use this syntax, though it is no longer recommended.</p>
                <CodeBlock language={"python"} codeString={`print('%s is %d years old' % (name, age))  # Outputs: Alice is 30 years old`} />
            </section>

            <section>
                <h2>String Methods and Manipulation</h2>
                <p>Strings in Python come with a set of built-in methods that allow you to perform necessary manipulations. These methods include searching for substrings, replacing content, splitting strings, and joining them.</p>
                <CodeBlock language={"python"} codeString={`# Find a substring
print('World' in greeting)  # Outputs: True

# Replace a part of the string
new_greeting = greeting.replace('World', 'Everyone')
print(new_greeting)  # Outputs: Hello Everyone

# Splitting and joining
words = new_greeting.split()
reversed_greeting = ' '.join(reversed(words))
print(reversed_greeting)  # Outputs: Everyone Hello`} />
            </section>
        </div>
    );
};

export default StringsLesson;
