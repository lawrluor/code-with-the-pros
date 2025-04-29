import React from 'react';
import ProgressBar from "../../components/ProgressBar";
import CodeBlock from '../../components/CodeBlock';
import Collapsible from '../../components/Collapsible';

const Dictionaries = () => {
  return (
    <div className="lesson-container">
      <ProgressBar />

      <section>
        <h1>Understanding Dictionaries in Python</h1>
        <p>Dictionaries in Python are powerful data structures that store data in <strong>key-value</strong> pairs. In a real dictionary, for example, each word is a key and each definition is a value that is linked to the key.</p>
      </section>

      <section>
        <h2 id="what-is-a-dictionary"><a href="#what-is-a-dictionary" className="section-link">What is a Dictionary?</a></h2>
        <h2>Creating Dictionaries</h2>
        <p>Use curly braces <code className="inline">{`{}`}</code> to create a new dictionary:</p>
        <CodeBlock language={"python"} codeString={`# Creating an empty dictionary
{}

# Creating an empty dictionary and assigning it to a variable
menu = {}

# Creating a dictionary with three key-value pairs
person = {"name": "John", "age": 30, "city": "New York"}`} />
      </section>

      <section>
        <h2 id="dictionary-syntax"><a href="#dictionary-syntax" className="section-link">Dictionary Syntax</a></h2>
        <h2>Adding and Modifying Items</h2>
        <p>You can add new items or change existing items in a dictionary:</p>
        <CodeBlock language={"python"} codeString={`# Adding a new key-value pair
person["height"] = 175

# Modifying an existing key-value pair
person["name"] = "Jane"
print(person)  # Outputs: {'name': 'Jane', 'age': 30, 'city': 'New York', 'height': 175}`} />
      </section>

      <section>
        <h2 id="dictionary-operations"><a href="#dictionary-operations" className="section-link">Dictionary Operations</a></h2>
        <h2>Removing Items</h2>
        <p>Items can be removed from a dictionary using several methods:</p>
        <CodeBlock language={"python"} codeString={`# Removing an item with a specific key
del person["city"]
print(person)  # Outputs: {'name': 'Jane', 'age': 30, 'height': 175}

# Removing the last inserted item
popped_item = person.popitem()
print(popped_item)  # Outputs: ('height', 175)
print(person)  # Outputs: {'name': 'Jane', 'age': 30}

# Clearing all items from the dictionary
person.clear()
print(person)  # Outputs: {}`} />
      </section>

      <section>
        <h2 id="dictionary-methods"><a href="#dictionary-methods" className="section-link">Dictionary Methods</a></h2>
        <h2>Accessing Dictionary Items</h2>
        <p>Accessing dictionary items is similar to accessing list items. You use square brackets <code className="inline">[]</code>, but instead of the index (position of the item in the list), use the key instead.</p>
        <CodeBlock language={"python"} codeString={`dict_example = {"a": 1, "b": 2, "c": 3}

# Accessing a dictionary item using square brackets
print(dict_example["a"])  # Outputs: 1

# NOT correct: attempting to access an item using indexes (positions)
print(dict_example[0])`} />

        <p>In other words, the pattern for accessing dictionary values given a key is <code className="inline">DICTIONARY_NAME[KEY_NAME]</code>.</p>

        <Collapsible>
          <p>In Python, dictionaries historically are unordered data structures that do not keep the positions of their key-value pairs in a reliable order. In other words, adding or removing items may change the entire "ordering" of the dictionary. This is why we cannot use indexes to access dictionary items, as the positions of items in dictionaries are not guaranteed.</p>
          <p>While the most modern versions of Python have ordered dictionaries, dictionaries in other computer languages remain unordered, so it is best to continue to conceptually treat dictionaries as unordered for your overall learning.</p>
        </Collapsible>

        <h3><code className="inline">KeyError</code></h3>
        <p>When you access dictionary values this way, the key must exist in the dictionary. If the key does not exist, Python will raise a <code className="inline">KeyError</code>.</p>
        <CodeBlock language={"python"} codeString={`dict_example = {"a": 1, "b": 2, "c": 3}
print(dict_example["d"])  # KeyError: 'd'. This key does not exist in the dictionary`} />

        <p>One way to avoid this error is to use conditionals to first check if the key exists before using it. The <code className="inline">in</code> operator can check if a key exists in the dictionary.</p>

        <CodeBlock language={"python"} codeString={`dict_example = {"a": 1, "b": 2, "c": 3}
if "d" in dict_example:
    print(dict_example["d"])
else:
    print("Key 'd' does not exist in the dictionary")`} />
        <p>In this example, there is no longer danger of the code stopping as a result of a <code className="inline">KeyError</code>.</p>

        <h3><code className="inline">TypeError</code></h3>
        <p>This error can occur if you use an <strong>unhashable type</strong> (a sequenced data type such as a list), as a dictionary key.</p>

        <CodeBlock language={"python"} codeString={`# Attempting to create a dictionary with a list as a key
dict_example = {[1, 2, 3]: "a"}  # TypeError: unhashable type: 'list'

# Accessing using a list as a key
print(dict_example[[1, 2, 3]])  # TypeError: unhashable type: 'list")`} />

        <p>To avoid errors, stick to the allowed types for dictionary keys: <strong>immutable</strong> data types such as integers, strings, or floats.</p>

        <h2>The <code className="inline">get()</code> Method</h2>
        <p>The <code className="inline">get()</code> method provides a safer way to access values by allowing you to set a default value if the key is not found, thus avoiding <code className="inline">KeyError</code>.</p>
        <CodeBlock language={"python"} codeString={`# Accessing using get()
print(dict_example.get("b"))  # Outputs: 2
print(dict_example.get("d"))  # Outputs: None
print(dict_example.get("d", "Not Found"))  # Outputs: 'Not Found'`} />
        <p>Using <code className="inline">.get()</code> is ideal for situations where certain keys might not be present, such as when dealing with incomplete datasets, and you need to ensure your program doesn't end early when it runs into an error.</p>

        <h3>Best Practices</h3>
        <ul>
          <li>Use the <code className="inline">get()</code> method when there is uncertainty about the presence of a key.</li>
          <li>Handle potential <code className="inline">KeyError</code>s with conditional statements when using square brackets, especially if the dictionary keys are dynamic or not guaranteed.</li>
        </ul>
      </section>

      <section>
        <h2 id="dictionary-comprehension"><a href="#dictionary-comprehension" className="section-link">Dictionary Comprehension</a></h2>
        <h2>Iterating through Dictionaries</h2>
        <p>You can loop through a dictionary to access keys, values, or both:</p>
        <CodeBlock language={"python"} codeString={`# Loop through keys
for key in person:
    print(key)

# Loop through values
for value in person.values():
    print(value)

# Loop through key-value pairs
for key, value in person.items():
    print(key, value)`} />
      </section>

      <section>
        <h2 id="wrapping-up"><a href="#wrapping-up" className="section-link">Wrapping Up</a></h2>
        <h2>Practice Challenges</h2>
        <ul>
          <li>Create a dictionary representing a book with properties like title, author, and year.</li>
          <li>Write a function that takes a dictionary representing a person and prints each key with its corresponding value.</li>
        </ul>
      </section>
    </div>
  );
}

export default Dictionaries;
