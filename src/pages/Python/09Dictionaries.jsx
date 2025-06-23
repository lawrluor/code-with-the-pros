import React from 'react';
import ProgressBar from "../../components/ProgressBar";
import CodeBlock from '../../components/CodeBlock';
import Collapsible from '../../components/Collapsible';
import useSequentialCounter from '../../hooks/useSequentialCounter';

const Dictionaries = () => {
  const { getCurrentNumberAndIncrement } = useSequentialCounter(0);

  return (
    <div className="lesson-container">
      <ProgressBar />

      <section>
        <h1>Dictionaries</h1>
        <p>Dictionaries in Python are powerful data structures that store data in <strong>key-value</strong> pairs. In a dictionary of the English language, for example, each word is a <strong>key</strong> and each word's definition is a <strong>value</strong> that is linked to the key.</p>

      </section>

      <section>
        <h2 id="understanding-dictionaries"><a href="#understanding-dictionaries" className="section-link">Understanding Dictionaries</a></h2>
        <p>Imagine you're creating a contact list on your phone. If you used lists, you might have to use two lists, one for names and one for numbers. Finding a specific person's number might be inconvenient and inefficient, especially as the list grows in length.</p>
        <p>This is where dictionaries come in. A dictionary is a data structure designed to solve this exact problem. Instead of storing items in a simple sequence, it stores them in <strong>key-value pairs</strong>.</p>
        <ul>
          <li>The <strong>key</strong> is a unique identifier (like a person's name in your contact list).</li>
          <li>The <strong>value</strong> is the data associated with that key (like their phone number).</li>
        </ul>
        <p>By using a key, you can access its corresponding value almost instantly, no matter how large the dictionary is. This makes them incredibly fast and efficient for looking up information.</p>

        <h3>Real-World Examples of Dictionaries</h3>
        <p>You'll find the dictionary pattern of keys and values everywhere in the real world:</p>
        <ul>
          <li><strong>User Profiles:</strong> Storing multiple facets of a user's information with keys like "username" and "email".</li>
          <li><strong>Game Inventories:</strong> Tracking a player's items with keys like "health_potion" and values like "5" to represent the quantity of the item.</li>
          <li><strong>Application Settings:</strong> Managing display preferences with keys like "theme_color" and values like "blue".</li>
        </ul>

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>Think of some system or task that you've encountered in your daily life that could be described using a dictionary.</p>
        </Collapsible>
      </section>

      <section>
        <h2 id="creating-a-dictionary"><a href="#creating-is-a-dictionary" className="section-link">Creating a Dictionary</a></h2>
        <p>We use the "curly" braces <code className="inline">{`{}`}</code> to create a new dictionary:</p>
        <CodeBlock language={"python"} codeString={`# Creating an empty dictionary
{}

# Creating an empty dictionary and assigning it to a variable
menu = {}

# Creating a dictionary with three key-value pairs
person = {"name": "John", "age": 30, "city": "New York"}

# Creating a dictionary with four key-value pairs, each on their own line
person = {
    "name": "John",
    "age": 30,
    "city": "New York",
    "occupation": "Tutor"
}`} />
        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>Time to get some hands-on practice. Create a dictionary to represent one of your favorite movies.</p>
          <ol>
            <li>Create a variable named <code className="inline">favorite_movie</code>.</li>
            <li>Assign a dictionary to it with the following keys: <code className="inline">"title"</code>, <code className="inline">"director"</code>, and <code className="inline">"release_year"</code>.</li>
            <li>Fill in the values for each key with the details of your chosen movie.</li>
          </ol>
          <p>There's no need to print anything yet, just focus on getting the syntax right!</p>
        </Collapsible>
      </section>

      <section>
        <h2 id="dictionary-syntax"><a href="#dictionary-syntax" className="section-link">Dictionary Syntax Explained</a></h2>
        <p>Let's break down the fundamental rules for writing a dictionary.</p>
        <ul>
          <li>Dictionaries are enclosed in curly braces: <code className="inline">{`{}`}</code></li>
          <li>Inside, they contain zero or more <strong>key-value pairs</strong></li>
          <li>Each key is followed by a colon <code className="inline">:</code> and then its corresponding value</li>
          <li>Key-value pairs are separated from each other by commas: <code className="inline">,</code></li>
        </ul>
        <CodeBlock language={"python"} codeString={`# A dictionary representing a user profile
user_profile = {
    "username": "alex_codes",
    "age": 21,
    "12345": "user_id",
    "hobbies": ["reading", "hiking", "coding"],
    "is_active": True
}

print(user_profile)`} />
        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>What are the keys in the <code className="inline">user_profile</code> dictionary? What is each key's corresponding value?</p>
        </Collapsible>
      </section>

      <section>
        <h2>Rules for Keys and Values</h2>
        <p>There are two important rules about the <strong>keys</strong> of a dictionary:</p>
        <ol>
          <li>Keys must be unique. You cannot have two identical keys in the same dictionary. If you try, the last one will simply overwrite the previous one.</li>
          <li>Keys must be <em>immutable</em>. This means you can use data types like strings, numbers, or even <em>tuples</em> as keys, but you cannot use mutable types like lists.</li>
        </ol>
        <p>The <strong>values</strong>, on the other hand, can be any data type you want: strings, numbers, booleans, lists, or even other dictionaries!</p>

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>Which of the following key-value pairs are invalid? Why?</p>
          <CodeBlock language={"python"} codeString={`game = {
    "health": 100,
    "score": 0,
    123: "level",
    ['crafting', 'farming']: 30,
    "is_online": False
}`} />
        </Collapsible>
      </section>

      <section>
        <h2>Ordering of Dictionary Items</h2>
        <p>In Python, dictionaries historically are unordered data structures that do not keep the positions of their key-value pairs in a reliable order. In other words, adding or removing items may "shuffle" or change the entire "ordering" of the dictionary in unpredictable ways. This is why we cannot use indexes to access dictionary items, as the positions of items in dictionaries are not guaranteed.</p>
        <p>While most common versions of Python have ordered dictionaries, dictionaries in other computer languages remain unordered, so it is best to continue to conceptually treat dictionaries as unordered for your overall learning.</p>

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p><strong>True or False:</strong> You can reliably access the first item added to a Python dictionary using an index, like <code className="inline">my_dict[0]</code>.</p>
          <p><strong>True or False:</strong> You can reliably access the second item added to a Python list using an index, like <code className="inline">my_list[1]</code>.</p>
          <p><strong>True or False:</strong> You can reliably access the last item added to a Python dictionary using an index, like <code className="inline">my_dict[-1]</code>.</p>
          <p>Hint: Think about the core difference between how lists and dictionaries store and retrieve data.</p>
        </Collapsible>
      </section>

      <section>
        <h2>Accessing Dictionary Items</h2>
        <p>Accessing dictionary items is similar to accessing list items. You use square brackets <code className="inline">[]</code>, but instead of the index (position of the item in the list), you use the key instead.</p>
        <CodeBlock language={"python"} codeString={`dict_example = {"a": 1, "b": 2, "c": 3}

# Accessing a dictionary item using square brackets
print(dict_example["a"])  # Outputs: 1

# NOT correct: attempting to access an item using indexes (positions)
print(dict_example[0])`} />

        <p>In other words, the pattern for accessing dictionary values given a key is <code className="inline">DICTIONARY_NAME[KEY_NAME]</code>.</p>


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
        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>Let's practice accessing dictionary values safely. Given the following dictionary:</p>
          <CodeBlock language={"python"} codeString={`inventory = {
    "apples": 10,
    "oranges": 5,
    "bananas": 0
}`} />
          <p>Write a small script to do the following:</p>
          <ol>
            <li>Check if the key <code className="inline">"apples"</code> exists. If it does, print how many apples are in stock.</li>
            <li>Check if the key <code className="inline">"grapes"</code> exists. If it does, print how many grapes are in stock. If it doesn't, print a message saying "Grapes are not available."</li>
          </ol>
          <p>This exercise will help you get used to using the <code className="inline">in</code> keyword to prevent errors.</p>
        </Collapsible>
      </section>

      <section>
        <h2>Adding and Modifying Items</h2>
        <p>You can add new items or change existing items in a dictionary:</p>
        <CodeBlock language={"python"} codeString={`# Adding a new key-value pair
person["height"] = 175

# Modifying an existing key-value pair
person["name"] = "Jane"
print(person)  # Outputs: {'name': 'Jane', 'age': 30, 'city': 'New York', 'height': 175}`} />

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>Let's practice updating a dictionary. Imagine you have a dictionary for a game character:</p>
          <CodeBlock language={"python"} codeString={`player_stats = {
    "name": "Roric",
    "class": "Warrior",
    "level": 1
}`} />
          <p>Perform the following actions:</p>
          <ol>
            <li>Add a new key-value pair to represent the character's experience points: <code className="inline">"experience": 100</code>.</li>
            <li>The character just leveled up! Modify the <code className="inline">"level"</code> key to have a new value of <code className="inline">2</code>.</li>
            <li>Finally, print the <code className="inline">player_stats</code> dictionary to see your changes.</li>
          </ol>
        </Collapsible>
      </section>

      <section>
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

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>Let's practice tidying up a dictionary. Imagine you have a dictionary of app settings, and one of the settings is now obsolete.</p>
          <CodeBlock language={"python"} codeString={`app_settings = {
    "theme": "dark",
    "notifications": True,
    "font_size": 14
}`} />
          <p>Your task is to remove the <code className="inline">"font_size"</code> key-value pair from the dictionary. After removing it, print the dictionary to confirm it's gone.</p>
        </Collapsible>
      </section>

      <section>
        <h2>Getting the Dictionary Size</h2>
        <p>Just like with lists, you can find out how many key-value pairs are in a dictionary by using the built-in <code className="inline">len()</code> function.</p>
        <CodeBlock language={"python"} codeString={`student_grades = {"Alice": 91, "Bob": 88, "Charlie": 95}
number_of_students = len(student_grades)  # Get the number of key-value pairs
print(number_of_students)  # Outputs: 3`} />

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>Let's practice finding the size of a dictionary. Create a dictionary with three items.</p>

          <p>Then, write code that does the following:</p>
          <ol>
            <li>Find the number of items in the dictionary and store it in a variable.</li>
            <li>Print a sentence that says: "There are X students in the class", where <code className="inline">X</code> is the variable..</li>
          </ol>
        </Collapsible>
      </section>

      <section>
        <h2>The <code className="inline">.get()</code> Method</h2>
        <p>The <code className="inline">.get()</code> method provides a safer way to access values by allowing you to set a default value if the key is not found, thus avoiding <code className="inline">KeyError</code>.</p>
        <CodeBlock language={"python"} codeString={`# Accessing using get()
print(dict_example.get("b"))  # Outputs: 2
print(dict_example.get("d"))  # Outputs: None
print(dict_example.get("d", "Not Found"))  # Outputs: 'Not Found'`} />
        <p>Using <code className="inline">.get()</code> is ideal for situations where certain keys might not be present, such as when dealing with incomplete datasets, and you need to ensure your program doesn't end early when it runs into an error.</p>

        <h3>Best Practices</h3>
        <ul>
          <li>Use the <code className="inline">.get()</code> method when there is uncertainty about the presence of a key.</li>
          <li>Handle potential instances of <code className="inline">KeyError</code> with conditional statements when using square brackets, especially if the dictionary keys are unknown or generated programatically.</li>
        </ul>

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>Let's practice accessing dictionary values safely. Given the following dictionary:</p>
          <CodeBlock language={"python"} codeString={`inventory = {
    "apples": 10,
    "oranges": 5,
    "bananas": 0
}`} />
          <p>Write a small script to do the following:</p>
          <ol>
            <li>Check if the key <code className="inline">"apples"</code> exists using the <code className="inline">in</code> keyword. If it does, print how many apples are in stock.</li>
            <li>Check if the key <code className="inline">"grapes"</code> exists using the <code className="inline">.get()</code> method, then print how many grapes are in stock. The default value should be <code className="inline">0</code>.</li>
          </ol>
          <p>This exercise will help you get used to using the <code className="inline">in</code> keyword to prevent errors.</p>
        </Collapsible>
      </section>

      <section>
        <h2 id="nested-data-structures"><a href="#nested-data-structures" className="section-link">Nested Data Structures</a></h2>
        <p>The real power of dictionaries and lists comes alive when you start combining them. This is called <em>nesting</em>, and it's how most complex data is structured in the real world.</p>

        <h3>1. Nested Dictionaries (A Dictionary in a Dictionary)</h3>
        <p>You can have a dictionary as a value inside another dictionary. This is useful for grouping related information together.</p>
        <CodeBlock language={"python"} codeString={`# A user profile with a nested dictionary for contact info
user_profile = {
    "username": "dev_dani",
    "level": 12,
    "contact": {
        "email": "dani@example.com",
        "phone": "555-1234"
    }
}`} />

        <p>To access items inside a nested dictionary, you can use multiple sets of square brackets.</p>

        <CodeBlock language={"python"} codeString={`print(user_profile["username"])  # Outputs: dev_dani
print(user_profile["contact"])   # Outputs: {'email': 'dani@example.com', 'phone': '555-1234'}
print(user_profile["contact"]["email"])  # Outputs: dani@example.com`} />

        <p>Using the <code className="inline">contact</code> key returns the inner dictionary of the contact information. Then, we use the <code className="inline">email</code> key to access the email address.</p>

        <p>Consider one more example where we store the inner dictionary into a variable before accessing the data inside it.</p>

        <CodeBlock language={"python"} codeString={`contact_info = user_profile["contact"]  # Stores: {'email': 'dani@example.com', 'phone': '555-1234'}
print(contact_info["email"])  # Outputs: dani@example.com`} />

        <p>This two-step process can be useful when you need to access the inner dictionary multiple times, but is not necessary and can overcomplicate your code.</p>

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>Given the following dictionary for a movie's details:</p>
          <CodeBlock language={"python"} codeString={`movie_details = {
    "title": "Inception",
    "director": "Christopher Nolan",
    "ratings": {
        "IMDb": 8.8,
        "Rotten Tomatoes": 87
    }
}`} />
          <p>Write a single line of code that accesses the IMDb rating and prints it to the console.</p>
        </Collapsible>

        <h3>2. A List of Dictionaries</h3>
        <p>This is one of the most common and useful data structures. You can create a list where each item is a dictionary. This is perfect for representing a collection of similar objects, like a roster of students or a list of products.</p>
        <CodeBlock language={"python"} codeString={`# A list of student dictionaries
class_roster = [
    {
        "name": "Leo",
        "grade": 85,
        "id": 101
    },
    {
        "name": "Mia",
        "grade": 92,
        "id": 102
    },
    {
        "name": "Noah",
        "grade": 78,
        "id": 103
    }
]

# To access data, you use the list index first, then the dictionary key
# Get the second student in the list (Mia)
second_student = class_roster[1]
print(second_student)  # Outputs: {'name': 'Mia', 'grade': 92, 'id': 102}

# Get the name of the second student
print(class_roster[1]["name"])  # Outputs: Mia`} />

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>Given the following list of products, each product being stored as a dictionary:</p>
          <CodeBlock language={"python"} codeString={`products = [
    {"name": "Laptop", "price": 1200, "in_stock": True},
    {"name": "Mouse", "price": 25, "in_stock": True},
    {"name": "Keyboard", "price": 75, "in_stock": False}
]`} />
          <p>Write code that does the following:</p>
          <ol>
            <li>Access the second dictionary in the list (the "Mouse") and store it in a variable.</li>
            <li>From that variable, access the price of the mouse.</li>
            <li>Print a sentence that says: "The price of the Mouse is $25." using the data you accessed.</li>
          </ol>
        </Collapsible>
      </section>

      <section>
        <h2 id="iterating-through-dictionaries"><a href="#iterating-through-dictionaries" className="section-link">Iterating Through Dictionaries</a></h2>
        <p>Just like with lists, you can use a <code className="inline">for</code> loop to go through the items in a dictionary. You have the flexibility to loop through its keys, its values, or both at the same time.</p>
        <p>Let's use a student's profile as an example:</p>
        <CodeBlock language={"python"} codeString={`student_profile = {
    "name": "Alex",
    "grade": 9,
    "favorite_subject": "Science"
}

# 1. Looping through KEYS (this is the default behavior)
print("--- Student's Profile Keys ---")
for key in student_profile:
    print(key)  # Prints the key itself
    print(student_profile[key])  # Prints the value associated with this key

# 2. Looping through VALUES using the .values() method
print("--- Student's Profile Values ---")
for value in student_profile.values():
    print(value)  # Prints the value
    # Note: There is no efficient way to access the key at this point!

# 3. Looping through both KEYS and VALUES using the .items() method
print("--- Full Profile ---")
for key, value in student_profile.items():
    print(f"{key}: {value}")`} />

        <h3>Best Practices</h3>
        <ul>
          <li>Looping <code className="inline">for key in my_dict:</code> is the simplest way to get just the keys.</li>
          <li>The <code className="inline">.values()</code> method gives you a view of all the values in the dictionary, which you can then loop through.</li>
          <li>The <code className="inline">.items()</code> method is very powerful. It gives you a view of all the key-value pairs together. That's why in the loop, we can use <code className="inline">for key, value</code> to get both at once.</li>
        </ul>

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>Given the following dictionary of course information:</p>
          <CodeBlock language={"python"} codeString={`course_info = {
    "course_name": "Intro to Python",
    "instructor": "Dr. Smith",
    "credits": 3
}`} />
          <p>Write a loop that iterates through the dictionary and prints each piece of information on a new line in the format: <code className="inline">"Key: [key], Value: [value]"</code>. You can use any method that you like.</p>
        </Collapsible>

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>This is a conceptual challenge to get you thinking like a developer. For each scenario below, decide which looping method might be best and why.</p>
          <ol>
            <li>You have a dictionary of student names and their final scores. You only need to print a list of the scores. Which method might be most direct: looping with <code className="inline">my_dict</code>, <code className="inline">my_dict.values()</code>, or <code className="inline">my_dict.items()</code>?</li>
            <li>You have the same dictionary, but this time you need to print a report card that says <code className="inline">"[Student Name]: [Score]"</code>. Which method might be most efficient?</li>
          </ol>
          <p>Consider code readability and the scope of the data you need.</p>
        </Collapsible>
      </section>

      <section>
        <h2>Dictionaries vs. Lists</h2>
        <p>It's important to know when to use a dictionary and when to use a list. Here's a comparison:</p>
        <ul>
          <li>Lists are an ordered collection of items. Dictionaries are an unordered collection of key-value pairs.</li>
          <li>You access list items by their position (index), like <code className="inline">my_list[0]</code>. You access dictionary values by their unique key, like <code className="inline">my_dict["name"]</code>.</li>
          <li>Use a list when you have a sequence of items and the order matters (e.g., a list of students in a line). Use a dictionary when you want to store related pieces of information and look them up easily (e.g., a student's profile with a name, age, and grade).</li>
        </ul>

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>Let's test your understanding. For each scenario below, decide whether a list or a dictionary would be the better choice. There's no code to write, just think about the "why."</p>
          <ol>
            <li>You need to store the names of five friends you want to invite to a party, in the order you'll call them.</li>
            <li>You need to store a person's contact details: their name, email address, and phone number.</li>
            <li>You need to store the top ten high scores achieved by a player in a video game.</li>
          </ol>
        </Collapsible>
      </section>

      <section>
        <h2 id="wrapping-up"><a href="#wrapping-up" className="section-link">Wrapping Up</a></h2>
        <p>Fantastic work! You've learned about Python dictionaries, one of the most versatile data structures in the language. They are essential for organizing data and accessing data efficiently.</p>
      </section>
    </div>
  );
}

export default Dictionaries;
