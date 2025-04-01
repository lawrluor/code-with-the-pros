import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import Collapsible from '../../components/Collapsible';

const Lists = () => {
    return (
        <div className="lesson-container">
            <h1>Understanding Lists</h1>
            <p>A list in Python is a collection of items that are stored in a particular order. A list is <strong>mutable</strong> (changeable), meaning that both the order of the list and its individual items can be modified.</p>
            <p>Lists are used for tasks like data organization and repetitive operations. For instance, lists may be used for managing a collection of users in an application, storing items in an inventory of a game, or simply grouping related items together like the days of a week.</p>

            <section>
                <h2 id="what-is-a-list"><a href="#what-is-a-list" className="section-link">What is a List?</a></h2>
            </section>

            <h2>Creating a List</h2>
            <p>Use the square brackets <code className='inline'>[]</code> to create a new list:</p>

            <CodeBlock language={"python"} codeString={`# Creating an empty list
[]
print([])

# Storing the list in a variable
fruits = []
print(fruits)

# Creating a list with values and storing into a variable
fruits = ["apple", "banana", "cherry"]
print(fruits)`} />

            <section>
                <h2 id="list-syntax"><a href="#list-syntax" className="section-link">List Syntax</a></h2>
            </section>

            <h2>Accessing List Items</h2>
            <p>As in strings, you can access individual items of a list by using the index (position) number. Remember that the first item has an index of <code className='inline'>0</code>.</p>

            <CodeBlock language={"python"} codeString={`# Accessing list items by index
print(fruits[0])  # apple
print(fruits[1])  # banana
print(fruits[2])  # cherry`} />

            <p>If you try to access an index that is out of range, you will get an error:</p>
            <CodeBlock language={"python"} codeString={`print(fruits[100])  # IndexError: list index out of range
print(fruits[3])    # IndexError: list index out of range`} />

            <p>You can also use negative indexing to start from the end of the list. Of course, accessing a negative index that is out of range of the list will still result in an <code className='inline'>'IndexError</code>.</p>

            <CodeBlock language={"python"} codeString={`# Negative indexing
print(fruits[-1])  # cherry
print(fruits[-2])  # banana
print(fruits[-3])  # apple

print(fruits[-4])  # IndexError: list index out of range `}/>

            <section>
                <h2 id="list-operations"><a href="#list-operations" className="section-link">List Operations</a></h2>
            </section>

            <h2>Modifying List Items</h2>
            <p>You can modify list items by assigning new values to them, without creating a new list:</p>
            <CodeBlock language={"python"} codeString={`# Modifying the third item of the list
fruits[2] = "orange"
print(fruits)  # Output: ['apple', 'banana', 'orange']`} />

            <p>Compare this to strings, which are immutable.</p>
            <CodeBlock language={"python"} codeString={`animal = "cat"
name[0] = "b"  # TypeError: 'str' object does not support item assignment`}/>

            <Collapsible title={"Challenge"}>
                <p className="challenge">How would you change the above code to change the string as intended?</p>
            </Collapsible>

            <h2>Adding List Items</h2>
            <p>Two of the most common methods are by using list concatenation (addition) and the <code className="inline">.append()</code> method. Each method has its specific use case and benefits.</p>

            <h3>Concatenation</h3>
            <p>List concatenation is the process of adding or joining one list to another. It's like adding one group of people to another to form a larger group.
                This can be done simply by using the <code className="inline">+</code> operator. Just as string concatentation creates a new string from two or more existing strings, list concatenation creates a new list formed from the combining the smaller lists.</p>
            <CodeBlock language={"python"} codeString={`# Creating two lists
list_one = [1, 2, 3]
list_two = [4, 5, 6]

# Concatenating lists
combined_list = list_one + list_two
print(combined_list)  # Output: [1, 2, 3, 4, 5, 6]`} />

            <Collapsible title={"Challenge"}>
                <CodeBlock language={"python"} codeString={`# 1. Create two lists of names and concatenate them together

# 2. What is the output of the following code?
first_list = ["Hi"]
second_list = ["Hello", "World"]
combined = first_list + second_list
print(combined)
`} />
            </Collapsible>

            <h3>Using <code className="inline">.append()</code></h3>
            <p>The <code className="inline">.append()</code> method adds an item to the <strong>end</strong> of an existing list. It modifies the list <strong>in place</strong>, which means it doesn't create a new list but alters the original list directly.
            The method takes a single argument, which is the item that you want to add to the list. This item can be of any data type.</p>
            <CodeBlock language={"python"} codeString={`# Original list
fruits = ['apple', 'banana', 'cherry']

# Appending a new item
fruits.append('orange')
print(fruits)  # Output: ['apple', 'banana', 'cherry', 'orange']`} />
            <p>Using <code className="inline">.append()</code> is particularly useful when you need to add items to a list in a loop or during a conditional operation. It's efficient because it doesn't require the creation of a new list unlike concatenation.</p>

            <h3>When to Use Each Strategy</h3>
            <p>Concatenation is best when you need to combine multiple lists into one and do not need to keep the original lists. It's also useful when working with immutable list-like types, such as tuples or strings.</p>
            <p><code className="inline">.append()</code> is ideal when building a single list incrementally. It's more efficient than concatenation because it modifies the existing list in place rather than creating a new list each time an element is added.</p>

            <Collapsible title={"Challenge"}>
                <CodeBlock language={"python"} codeString={`# 1. Use both strategies to combine these three lists into one list.
a = [1, 2, 3]
b = [4, 5, 6]
c = [7, 8, 9]`} />
            </Collapsible>

            <h2>Removing Items</h2>
            <p>Removing items from a list is just as important as adding them to a list. There are two primary ways to do so:</p>

            <h3>The <code className="inline">remove()</code> Method</h3>
            <p>The <code className="inline">remove()</code> method searches for the first occurrence of a given element and removes it from the list. If the element is not found, Python raises a <code className="inline">ValueError</code>.</p>
            <CodeBlock language={"python"} codeString={`fruits = ["apple", "banana", "cherry", "banana"]
fruits.remove("banana")  # Removes the first 'banana' item
print(fruits)            # Output: ['apple', 'cherry', 'banana']

fruits.remove("plum")    # Raises ValueError, as 'plum' does not exist`} />
            <p>This method is useful when you know the element you want to remove but not its position/index in the list. If the list contains duplicates of the element, only the first one will be removed.</p>

            <h3>The <code className="inline">pop()</code> Method</h3>
            <p>The <code className="inline">pop()</code> method removes the item at the specified position in the list and returns it. If no index is specified, <code className="inline">pop()</code> removes and returns the last item in the list by default.</p>
            <CodeBlock language={"python"} codeString={`fruits = ["apple", "orange", "cherry", "potato"]
popped_item = fruits.pop(2)  # Removes 'cherry' at index 2
print(popped_item)           # Output: 'cherry'
print(fruits)                # Output: ['apple', 'orange', 'potato']

fruits.pop()  # Removes the last item
print(fruits)  # Output: ['apple', 'orange']`} />

            <p>You don't need to save the popped item, either. The following code still removes the item at index <code className="inline">2</code>.</p>
            <CodeBlock language={"python"} codeString={`fruits = ["apple", "orange", "cherry", "potato"]
fruits.pop(2)  # Removes 'cherry' at index 2
print(fruits)  # Output: ['apple', 'orange', 'potato']`} />


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

            <section>
                <h2 id="list-methods"><a href="#list-methods" className="section-link">List Methods</a></h2>
            </section>

            <h2>Other List Methods (Optional)</h2>
            <p>Python lists come with a variety of methods that allow you to manipulate their contents efficiently. These methods make it easier to modify, search, and manage the lists in your programs.</p>
            <p>While these methods are useful for managing lists efficiently, most of their functionality can be replicated using the basic list methods we learned above in addition to using iteration (loops). Thererefore, there is no need to memorize them now, as you will naturally become familiar with them as you work with lists in Python.</p>

            <h3>Adding Items</h3>
            <CodeBlock language={"python"} codeString={`# extend() - Adds all elements of a list to another list
# Similar to concatenation, but it modifies the list in place instead of creating a new list
vegetables = ["carrot", "potato"]
fruits.extend(vegetables)
print(fruits)  # Output: ['apple', 'banana', 'cherry', 'carrot', 'potato']

# insert() - Inserts an item at a defined index
fruits.insert(1, "orange")
print(fruits)  # Output: ['apple', 'orange', 'banana', 'cherry', 'carrot', 'potato']`} />

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

            <h3>The <code className="inline">clear()</code> Method</h3>
            <p>The <code className="inline">clear()</code> method removes all items from the list, effectively clearing it. This is equivalent to deleting all items in the list. Use <code className="inline">clear()</code> when you want to empty a list but keep the list itself for future use.</p>
            <CodeBlock language={"python"} codeString={`cart = ["shirt", "hat", "shoes"]
cart.clear()
print(cart)  # Output: []

# Later, we can add items back into the cart!`} />

            <section>
                <h2 id="list-slicing"><a href="#list-slicing" className="section-link">List Slicing</a></h2>
            </section>

            <h2>Practice Challenges</h2>
            <ul>
                <li>Create a list of your favorite movies and use a loop to print each one.</li>
                <li>Modify the list by replacing one of the movies with another one, and add a new movie to the end of the list.</li>
                <li>Access an index that does not exist to see what error you get and then handle that error using a conditional statement to prevent it.</li>
            </ul>

            <section>
                <h2 id="list-comprehension"><a href="#list-comprehension" className="section-link">List Comprehension</a></h2>
            </section>

            <section>
                <h2 id="wrapping-up"><a href="#wrapping-up" className="section-link">Wrapping Up</a></h2>
            </section>
        </div>
    );
}

export default Lists;
