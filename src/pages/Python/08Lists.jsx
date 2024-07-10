import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import Collapsible from '../../components/Collapsible';

const Lists = () => {
    return (
        <div className="lesson-container">
            <h1>Understanding Lists in Python</h1>
            <p>Now that you've learned about strings, taking input, and loops, let's dive into one of the most versatile data structures in Python: the list. A list in Python is similar to a shopping list; it's a collection of items, stored in a particular order that can be modified.</p>
            <p>Lists are used extensively in Python for tasks like data organization, repetitive operations, and scenarios where you need to store groups of elements. For instance, managing a list of users in an application, storing different states of a game, or simply grouping related items together like the days of a week.</p>

            <h2>Creating and Accessing Lists</h2>
            <p>Lists can store different types of items, from numbers and strings to more complex objects. Here’s how you can create and access items in a list:</p>

            <CodeBlock language={"python"} codeString={`# Creating a list
fruits = ["apple", "banana", "cherry"]
print(fruits)

# Accessing list items by index
print(fruits[0])  # Output: apple
print(fruits[1])  # Output: banana
print(fruits[2])  # Output: cherry

# Accessing beyond the list size results in an IndexError
# print(fruits[3])  # Uncommenting this line would cause an error`} />

            <h2>Modifying Lists</h2>
            <p>Lists are mutable, which means you can change their content without creating a new list:</p>
            <CodeBlock language={"python"} codeString={`# Modifying the third item of the list
fruits[2] = "orange"
print(fruits)  # Output: ['apple', 'banana', 'orange']

# Adding items to a list
fruits.append("grape")
print(fruits)  # Output: ['apple', 'banana', 'orange', 'grape']

# Inserting at a specific position
fruits.insert(1, "mango")
print(fruits)  # Output: ['apple', 'mango', 'banana', 'orange', 'grape']`} />

            <p>Compare this to strings, which are immutable.</p>
            <CodeBlock language={"python"} codeString={`animal = "cat"
name[0] = "b"  # TypeError: 'str' object does not support item assignment`}/>

            <Collapsible title="View Challenge">
                <p className="challenge">How would you change the above code to change the string as intended?</p>
            </Collapsible>

            <h2>Iterating Through Lists</h2>
            <p>Using what you've learned about loops, you can iterate through each item in a list:</p>
            <CodeBlock language={"python"} codeString={`# Using a for loop to iterate through the list
for fruit in fruits:
    print(fruit)

# Using a while loop with an index
i = 0
while i < len(fruits):
    print(fruits[i])
    i += 1`} />


            <h2>List Methods</h2>
            <p>Python lists come with a variety of methods that allow you to manipulate their contents efficiently. These methods make it easier to modify, search, and manage the lists in your programs.</p>

            <p>Here are some of the most commonly used list methods along with examples:</p>

            <h3>Adding Items</h3>
            <CodeBlock language={"python"} codeString={`# append() - Adds an item to the end of the list
fruits = ["apple", "banana"]
fruits.append("cherry")
print(fruits)  # Output: ['apple', 'banana', 'cherry']

# extend() - Adds all elements of a list to another list
vegetables = ["carrot", "potato"]
fruits.extend(vegetables)
print(fruits)  # Output: ['apple', 'banana', 'cherry', 'carrot', 'potato']

# insert() - Inserts an item at a defined index
fruits.insert(1, "orange")
print(fruits)  # Output: ['apple', 'orange', 'banana', 'cherry', 'carrot', 'potato']`} />

            <h3>Removing Items</h3>
            <CodeBlock language={"python"} codeString={`# remove() - Removes the first matching item
fruits.remove("banana")
print(fruits)  # Output: ['apple', 'orange', 'cherry', 'carrot', 'potato']

# pop() - Removes an item at a specific index and returns it
popped_item = fruits.pop(2)  # 'cherry' is removed
print(popped_item)  # Output: 'cherry'
print(fruits)  # Output: ['apple', 'orange', 'carrot', 'potato']

# clear() - Removes all items from the list
fruits.clear()
print(fruits)  # Output: []`} />

            <h3>Finding Items and Sorting</h3>
            <CodeBlock language={"python"} codeString={`# index() - Returns the index of the first matching item
numbers = [5, 7, 9, 7]
print(numbers.index(7))  # Output: 1

# count() - Returns the number of times an item appears in the list
print(numbers.count(7))  # Output: 2

# sort() - Sorts the list in ascending order
numbers.sort()
print(numbers)  # Output: [5, 7, 7, 9]

# reverse() - Reverses the order of the list
numbers.reverse()
print(numbers)  # Output: [9, 7, 7, 5]`} />

            <p>These methods are invaluable for managing lists in Python, providing powerful tools for handling data collections. Experiment with these methods to understand their impacts and discover how they can be combined to manipulate lists effectively.</p>



            <h2>Practice Challenges</h2>
            <p>Here are some challenges to help you practice:</p>
            <ul>
                <li>Try creating a list of your favorite movies and use a loop to print each one.</li>
                <li>Modify the list by replacing one of the movies with another one, and add a new movie to the end of the list.</li>
                <li>Try accessing an index that does not exist to see what error you get and then handle that error using a conditional statement to prevent it.</li>
            </ul>
        </div>
    );
}

export default Lists;
