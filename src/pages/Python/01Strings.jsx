import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import Collapsible from '../../components/Collapsible';

const StringsLesson = () => {
    return (
        <div className="lesson-container">
            <h1>Strings</h1>

            <section>
                <h2>Introduction to Strings</h2>
                <p>A <strong>string</strong> is a common data type in Python that represents text as a sequence of characters. A string can be as short as a single character or as long as multiple paragraphs. They are enclosed in quotes; you can use single quotes (<code className="inline">' '</code>) or double quotes (<code className="inline">" "</code>) depending on your preference.</p>
                <p>Below are some examples of strings:</p>
                <CodeBlock language={"python"} codeString={`# Single character
'x'
"a"

# Word
'hello'
"world"

# Sentence
'Python is fun!'
"The quick brown fox jumps over the lazy dog."`}/>

                <p>For paragraphs or text with multiple line breaks, use sets of three quotation marks (<code className='inline'>''' '''</code>) or (<code className='inline'>""" """</code>).</p>

                <CodeBlock language={"python"} codeString={`# Paragraph
"""Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

    Ut enim ad minim veniam, quis nostrud exercitation ullamco
laboris nisi ut aliquip ex ea commodo consequat."""`}/>

                <h3>String Syntax</h3>
                <p>A string must have matching opening and closing quotation marks.</p>
                <CodeBlock language={"python"} codeString={`'hello"       # SyntaxError: Mismatching marks
'hi everyone  # SyntaxError: Missing closing quotation
name          # NameError: this is interpreted as a variable instead of a string, as it is missing quotation marks`}/>
            </section>

            <section>
                <h2>Storing Strings in Variables</h2>
                <p>As with almost any type of data in Python, we can store strings into variables to reuse them later. Below, there are three variables that have each been assigned a string value.</p>
                    <CodeBlock language={"python"} codeString={`name = 'Lawrence'
occupation = "Software Developer"
bio = """Lawrence is a software developer with a passion for building apps and websites.
He is based in San Francisco, California."""

print(name)
print(occupation)
print(bio)`}/>
            </section>

            <section>
                <h2>Accessing Parts of a String</h2>

                <p>Each character in a string can be accessed using an <strong>index</strong>, which specifies the position of a character in a string. The index starts from <code className="inline">0</code>, representing the first character's position.</p>
                <CodeBlock language={"python"} codeString={`s = 'Hello World'
first_char = s[0]
print(first_char)  # Outputs: H

last_char = s[10]
print(last_char)   # Outputs: d`} />

                <Collapsible title={"Challenge"}>
                    <p>In the above example, what would be the result of <code className="inline">print(s[5])</code>? </p>
                </Collapsible>

                <p>Python also supports negative indexing, which is less common in other programming languages. Negative indexes start from the end of the string as <code className="inline">-1</code> and increment backwards.</p>
                <CodeBlock language={"python"} codeString={`s = 'Hello World'
last_char = s[-1]
print(last_char)  # Outputs: d

print(s[-2])      # Outputs: l
print(s[-3])      # Outputs: o`} />

                <Collapsible title={"Challenge"}>
                    <p>Can you think of why it might be useful to select a single character from a string?</p>
                </Collapsible>

                <Collapsible title={"Challenge"}>
                    <p>For a 6-character long string, print the first character, the 3rd to last character, and the last character, each on a separate line.</p>
                </Collapsible>

                <h3>Slicing Strings</h3>
                <p>What if we want to get more than just a single character from a string? String <strong>slicing</strong> is a way to conveniently get multiple characters from a string. Slicing can be used to obtain a <strong>substring</strong>, or a smaller part or subset of the string. Slicing characters from a string is analagous to slicing pieces of bread from a loaf of bread!</p>
                <CodeBlock language={"python"} codeString={`s = 'Hello World'
sub = s[1:5]  # The format is: s[start:stop]
print(sub)    # Outputs: ello`} />
                <p>Note that the character at the stop index is <strong>not</strong> included, which is a common convention in Python and other programming languages.</p>

                <h4>String Slicing Properties</h4>
                <p>String slicing does <strong>not</strong> modify the original string.</p>
                <CodeBlock language={"python"} codeString={`animal = 'Jellyfish'
print(animal[1:5])  # elly
print(animal)       # Jellyfish`} />

<p>If we wish to modify the original string, we must reassign the slice of the string to the original string.</p>
                <CodeBlock language={"python"} codeString={`animal = 'Jellyfish'
animal = animal[5:9]
print(animal)  # fish`} />


                <h4>Including the "Step" Value</h4>
                <p>There can also be an optional <strong>step</strong> value, which specifies how many characters to skip or "step" between characters in the slice. The syntax is <code className="inline">s[start:stop:step]</code>. </p>
                <CodeBlock language={"python"} codeString={`s = 'Hello World'
sub_step = s[0:8:2]
print(sub_step)  # Outputs: HloW`} />

                <p>Here, "step" specifies that the slice should skip every second character, starting from the first character and ending at (but not including) the 8th index.</p>

                <Collapsible title={"Challenge"}>
                    <p>In the above example, what would the result of <code className="inline">s[0:8:3]</code> be? What about <code className="inline">s[4:8:-1]</code>?</p>
                </Collapsible>
            </section>

            <section>
                <h2><code className="inline">IndexError</code></h2>
                <p>An <code className="inline">IndexError</code> or "string index out of range" error occurs when you attempt to access an index of a string that matches or exceeds the total length of the string.</p>
                <CodeBlock language={"python"} codeString={`s = 'Hello'
print(s[4])   # Outputs: o
print(s[5])   # IndexError: string index out of range
print(s[10])  # IndexError: string index out of range`} />

                <h3>Out-of-Bounds Slicing</h3>
                <p>Unlike the direct indexing examples above, slicing a string outside of its bounds does <strong>not</strong> result in an error. Instead, Python handles it gracefully by adjusting the bounds:</p>
                <ul>
                    <li><strong>Overextended Slices:</strong> If the start index is beyond the string length, Python returns an empty string.</li>
                    <CodeBlock language={"python"} codeString={`s = "Hello World"
print(s[10:])  # Outputs: ''`} />
                    <li><strong>Negative Indexing Beyond Bounds:</strong> Negative indices beyond the string's length wrap around, potentially leading to non-empty results if not calculated correctly.</li>
                    <CodeBlock language={"python"} codeString={`s = "Hello World"
print(s[-10:2])  # Outputs: 'He'`} />
                </ul>

                <h3>Avoiding <code className="inline">IndexError</code></h3>
                <p>When indexing a string, it's best to carefully select indices that are within the bounds of a string, keeping in mind that the first character has an index of <code className="inline">0</code>.</p>

                <Collapsible title={"Challenge"}>
                    <p>Identify which of the following <code className="inline">print()</code> statements will result in an <code className="inline">IndexError</code>.</p>
                    <CodeBlock language={"python"} codeString={`planet = "Jupiter"
print(planet[10])
print(planet[4])
print(planet[-8])`} />

                </Collapsible>
            </section>

            <section>
                <h2>Concatenating Strings in Python</h2>
                <p><strong>Concatenation</strong>, also known as string concatenation or string addition, is the process of combining two or more strings into a single longer string. The simplest way to concatenate strings is by using the plus <code className="inline">+</code> operator.</p>
                <CodeBlock language={"python"} codeString={`message = "hi" + "there"
print(message)  # Outputs: hithere

greeting = 'Hello' + ' ' + "World"
print(greeting)  # Outputs: Hello World`} />

                <p>We can also concatenate strings to variables that have been assigned string values.</p>
                <CodeBlock language={"python"} codeString={`word = "Salutations"
print(word + "!")  # Outputs: Salutations!`}/>

                <p>Keep in mind that spaces are <strong>not</strong> automatically inserted between concatenated strings - we must include them ourselves.</p>

                <h3><code className="inline">TypeError</code> Revisited</h3>
                <p>Attempting to concatenate strings with non-string types (like integers or floats) will lead to a <code className="inline">TypeError</code>. To avoid this, make sure that you only add strings to other strings, or convert the non-string data to strings using the <code className="inline">str()</code> function before concatenation. This is known as <strong>casting</strong>; to convert a data type to a string is to <strong>cast</strong> that data type to a string.</p>
                <CodeBlock language={"python"} codeString={`# Incorrect
age = 30
greeting = 'Alice is ' + age + ' years old'  # TypeError

# Correct
greeting = 'Alice is ' + str(age) + ' years old'  # str(age) becomes the string '30'`} />

                <p>When concatenating strings, it doesn't matter if the strings use different types of quotes. Strings with different types of quotes are still strings and are the same data type, so they can be combined together without causing <code className="inline">TypeError</code>.</p>

                <CodeBlock language={"python"} codeString={`# Using different types of quotes
greeting = 'Hello' + " there"
print(greeting)  # Outputs: Hello there`} />

                <Collapsible title={"Challenge"}>
                    <p>Identify which of the following <code className="inline">print()</code> statements will result in a <code className="inline">TypeError</code>. </p>
                    <CodeBlock language={"python"} codeString={`# 1.
print("Apple" + 5)

# 2.
print("Banana" + "5.0")

# 3.
print("Coconut" + ' ')`} />
                </Collapsible>
            </section>

            <section>
                <h2>Choosing Between Single and Double Quotes</h2>
                <p>As both single quotes <code className="inline">' '</code> and double quotes <code className="inline">" "</code> can be used to define strings, the choice between these can sometimes depend on the content of the string itself.
                For example, if the string itself contains single quotes like the apostrophe symbol <code className="inline">'</code>, using single quotes can cause an error.</p>
                <CodeBlock language={"python"} codeString={`'This is the cat's home.'  # SyntaxError: Each opening quote must have a corresponding closing quote`} />
                <p>There is an error because the Python interpreter sees the apostrophe and believes it to be the end of the string. Using double quotes for the string instead ensures that the single quote from the apostrophe symbol is interpreted correctly.</p>

                <CodeBlock language={"python"} codeString={`"This is the cat's home."`} />

                <h3>Using Single Quotes</h3>
                <p>Single quotes are useful when the string contains double quotes. This can be particularly handy in strings representing spoken dialog or when quoting text.</p>
                <CodeBlock language={"python"} codeString={`'She said, "Hello, how are you?"'`} />

                <Collapsible title={"Challenge"}>
                    <p>Create an example where using double quotes could result in a <code className="inline">SyntaxError</code>.</p>
                </Collapsible>
            </section>

            <section>
                <h2>(Optional) Escape Characters</h2>
                <p>Alternatively, you can use the escape character <code className="inline">\</code> to tell Python to interpret a quote as a literal quotation mark rather than use its default behavior of ending the string.</p>
                <CodeBlock language={"python"} codeString={`"She said, \\"It's lovely to see you!\\""`} />
                <p>This will print <code className="inline">She said, "It's lovely to see you!"</code>, including the quotation marks in the actual string itself.</p>
            </section>

            <section>
                <h2>Empty Strings <code className="inline">""</code></h2>
                <p>Empty strings are, well, strings that are empty, meaning that they contain no characters. In Python, an empty string is represented by <code className="inline">""</code>. It is analogous to the number <code className="inline">0</code> in math - just as <code className="inline">0</code> is still a number, an empty string is still a string, just one that currently holds no value.</p>

                <h3>The Purpose of Empty Strings</h3>
                <p>Empty strings are often used as placeholders for variables that have not been assigned a value yet. For example, if we wanted to create a greeting message, we could use an empty string as a placeholder for the name of the person we are greeting, then later update the name when we are ready to assign it a value.</p>
                <CodeBlock language={"python"} codeString={`name = ""

# Other code...

name = "Roma"
greeting = "Hello, " + name + "!"`} />

                The following example illustrates how the empty string can function as a starting placeholder, much like the number zero:
                <CodeBlock language={"python"} codeString={`total = 0          # start with a default value
total = total + 1  # increment total by 1

message = ""             # start with a default value of empty string
message = message + "a"  # add the letter "a" to the message`} />

                <p>Concatenating an empty string to another string is analagous to adding <code className="inline">0</code> to a number.</p>
                <CodeBlock language={"python"} codeString={`day = "Friday"
print(day + "") # Outputs: Friday`} />

                <Collapsible title={"Challenge"}>
                    <p>What is the result of the following <code className="inline">print()</code> statement?</p>
                    <CodeBlock language={"python"} codeString={`name = "Liam"
print("" + "Hi" + " " + "" + name + "")`} />
                </Collapsible>
            </section>

            <section>
                <h2>Common String Methods</h2>
                <p> A <strong>method</strong>, another name for a function, is an action that a string can perform or an operation that can be applied to a string. Some common methods like <code className="inline">.upper()</code> and <code className="inline">.lower()</code> are used to create a new, altered version of the string.</p>
                <CodeBlock language={"python"} codeString={`greeting = 'Happy birthday'
print(greeting.upper())    # Outputs: HAPPY BIRTHDAY

lowercase_greeting = "Greetings Everyone!".lower()
print(lowercase_greeting)  # Outputs: greetings everyone!`} />

                <p>Note that most string methods return a <em>new</em> string, rather than actually modifying the original string (known as "in-place" methods). In the following example, note how even though <code className="inline">.upper()</code> is used on the original string, the original string remains unchanged.</p>
                <CodeBlock language={"python"} codeString={`greeting = 'Hello, World!'
print(greeting.upper())  # Outputs: HELLO, WORLD

print(greeting)          # Outputs: Hello, World!`} />

                <p><code className="inline">.strip()</code> returns a new version of the string with the whitespace "trimmed" from the beginning and end of a string.</p>
                <CodeBlock language={"python"} codeString={`greeting = '   Hello, World!   '
print(greeting.strip())  # Outputs: Hello, World!`} />

                <p>Some methods like <code className="inline">.isalpha()</code> does not return an altered string, but instead gets information about the string, in this case checking if the string contains only letters.</p>
                <CodeBlock language={"python"} codeString={`name = 'Rachel'
print(name.isalpha())  # Outputs: True

sentence = 'I have 3 cats.'
print(sentence.isalpha())  # Outputs: False`} />

                <p>There are dozens of other string methods, but you can find them all along with their explanations in the <a href="https://docs.python.org/3/library/stdtypes.html#string-methods" target="_blank" rel="noreferrer">Python developer handbook</a>.</p>

                <Collapsible title={"Challenge"}>
                    <p>Think of something useful that you would like to be able to do with strings that hasn't been covered already. Then, see if there is a string method in the Python documentation that does what you want.</p>
                </Collapsible>
            </section>

            <section>
                <h2><code className="inline">.format()</code></h2>
                <p>Concatenating strings can be a pain. As we saw in earlier examples, we had to <strong>cast</strong> integers to strings in order to properly concatenate them to other strings. Fortunately, we can use the <code className="inline">.format()</code> method to make things more convenient for us.</p>
                <CodeBlock language={"python"} codeString={`name = 'Alice'
age = 30
print('{} is {} years old'.format(name, age))  # Outputs: Alice is 30 years old`} />
                <p>Compare this to where we have to cast the int variable <code className="inline">age</code> to a string before concatenating it to the other strings.</p>
                <CodeBlock language={"python"} codeString={`name = 'Alice'
age = 30
print(name + ' is ' + str(age) + ' years old')  # Outputs: Alice is 30 years old`} />
                <p>Another advantage of <code className="inline">.format()</code> is that we don't need to include multiple <code className="inline">+</code> symbols. Generally, these improvements over regular string addition make combining strings with the <code className="inline">.format()</code> method easier for you to write and easier for others to read.</p>

                <h3>Another Alternative to <code className="inline">.format()</code></h3>
                <p><strong>f-strings</strong> are an abbreviated way to format strings, derived from the <code className="inline">.format()</code> method. Here, the letter <code className="inline">f</code> is written before the opening quotation mark, which tells Python that this is a special string that can be formatted with variables.</p>
                <CodeBlock language={"python"} codeString={`name = 'Alice'
age = 30
print(f'{name} is {age} years old')  # Outputs: Alice is 30 years old`} />

                <h3>(Optional) Old methods of string formatting</h3>
                <p>In older versions of Python, string formatting was typically done with the <code className="inline">%</code> character. We can still use this syntax, though it is no longer recommended.</p>
                <CodeBlock language={"python"} codeString={`print('%s is %d years old' % (name, age))  # Outputs: Alice is 30 years old`} />
            </section>

            <section>
                <h2>(Optional) Advanced String Methods and Manipulation</h2>
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
