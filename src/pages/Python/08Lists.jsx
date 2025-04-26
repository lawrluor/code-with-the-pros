import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import Collapsible from '../../components/Collapsible';
import useSequentialCounter from '../../hooks/useSequentialCounter';

const Lists = () => {
  const { getCurrentNumberAndIncrement } = useSequentialCounter(0);

  return (
    <div className="lesson-container">
      <section>
        <h1>Lists</h1>
        <p>A list in Python is a collection of items of any data type that are stored in a specific order. A list is <strong>mutable</strong> or changeable, meaning that both the order of the list and its individual items can be modified.</p>
        <p>Lists are used for tasks like data organization and repetitive operations. For instance, lists may be used for managing a collection of users in an application, storing items in an inventory of a game, or simply grouping related items together like the days of a week.</p>
      </section>

      <section>
        <h2 id="what-is-a-list"><a href="#what-is-a-list" className="section-link">What is a List?</a></h2>
        <p>A list is an ordered collection of items in Python. Think of it like a shopping list or a playlist: each item has a specific position, and you can add, remove, or change items as needed.</p>
        <p>Lists can contain items of any type—numbers, strings, or even other lists—and their size can grow or shrink dynamically.</p>
        <p>Some common uses of lists include:</p>
        <ul>
          <li>Storing a sequence of daily tasks</li>
          <li>Holding student names in a classroom application</li>
          <li>Managing inventory items in a game</li>
        </ul>
        <CodeBlock language={"python"} codeString={`# Example: a list of days in a week
days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
print(days)  # ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
print(type(days))  # <class 'list'>`} />
      </section>

      <section>
        <h2 id="list-syntax"><a href="#list-syntax" className="section-link">List Syntax</a></h2>
        <p>Use the square brackets <code className='inline'>[]</code>, known as <em>list literals</em>, to create a new list:</p>

        <CodeBlock language={"python"} codeString={`# Creating an empty list
[]
print([])

# Storing the list in a variable
fruits = []
print(fruits)

# Creating a list with values and storing into a variable
fruits = ["apple", "banana", "cherry"]
print(fruits)`} />

        <p>Lists can also contain items of different types:</p>
        <CodeBlock language={"python"} codeString={`# List with mixed types
mix = [1, "two", 3.0, True]
print(mix)  # [1, 'two', 3.0, True]`} />

        <h3>Using <code className='inline'>list()</code></h3>
        <p>You can also use the <code className='inline'>list()</code> constructor to create a list from other iterable objects like strings or ranges:</p>
        <CodeBlock language={"python"} codeString={`# From a string
chars = list("hello")
print(chars)  # ['h', 'e', 'l', 'l', 'o']

# From a range
nums = list(range(5))
print(nums)  # [0, 1, 2, 3, 4]`} />

        <h3>Nested Lists</h3>
        <p>Lists can also contain other lists, creating a nested structure. This is analagous to a bullet point list, where each item can have its own list of items.</p>
        <CodeBlock language={"python"} codeString={`table = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]`} />

        <p>The above example is a two-dimensional list, because each item in the list is itself a list. Sometimes, it is useful to write a two-dimensional list as a grid or table, for better readability:</p>
        <CodeBlock language={"python"} codeString={`table = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]`} />
      </section>

      <section>
        <h2 id="accessing-list-items"><a href="#accessing-list-items" className="section-link">Accessing List Items</a></h2>
        <p>As with strings, you can access individual items of a list by using the index (position) number. Remember that the first item has an index of <code className='inline'>0</code>.</p>

        <CodeBlock language={"python"} codeString={`# Accessing list items by index
fruits = ["apple", "banana", "cherry"]
print(fruits[0])  # apple
print(fruits[1])  # banana
print(fruits[2])  # cherry`} />

        <p>If you try to access an index that is out of range, you will get an error:</p>
        <CodeBlock language={"python"} codeString={`fruits = ["apple", "banana", "cherry"]
print(fruits[100])  # IndexError: list index out of range
print(fruits[3])    # IndexError: list index out of range`} />

        <p>You can also use negative indexing to start from the end of the list. Of course, accessing a negative index that is out of range of the list will still result in an <code className='inline'>IndexError</code>.</p>

        <CodeBlock language={"python"} codeString={`# Negative indexing
fruits = ["apple", "banana", "cherry"]
print(fruits[-1])  # cherry
print(fruits[-2])  # banana
print(fruits[-3])  # apple

print(fruits[-4])  # IndexError: list index out of range `} />

        <h3>Using <code className='inline'>len()</code></h3>
        <p>If you're not sure how many items are in a list, you can use the <code className='inline'>len()</code> function to find out. Knowing the length of a list is helpful to avoid running into index errors.</p>
        <CodeBlock language={"python"} codeString={`fruits = ["apple", "banana", "cherry"]
print(len(fruits))  # 3`} />

        <h3>List Slicing</h3>
        <p>As with string slicing, list slicing allows you to extract a part or subsequence of a list. The syntax is <code className="inline">list_name[start_index:end_index]</code>.</p>
        <p>It returns items from index <code className="inline">start_index</code> up to but <strong>not including</strong> <code className="inline">end_index</code>.</p>
        <CodeBlock language={"python"} codeString={`fruits = ["apple", "banana", "cherry", "date", "elderberry"]

# items at index 1 and 2
print(fruits[1:3])   # ['banana', 'cherry']

# using negative indices
print(fruits[-4:-1]) # ['banana', 'cherry', 'date']`} />

        <p>You can also omit <code className="inline">start_index</code> or <code className="inline">end_index</code> to slice from the beginning or up to the end.</p>

        <CodeBlock language={"python"} codeString={`# from 0 to index 2
print(fruits[:3])    # ['apple', 'banana', 'cherry']

# from index 2 to the last item
print(fruits[2:])    # ['cherry', 'date', 'elderberry']`} />

        <h3>Accessing Items in Nested Lists</h3>
        <p>Below are some examples of how to access items in a nested list. Note the use of the <code className="inline">[]</code> operator to access items at different levels of the nested list.</p>
        <CodeBlock language={"python"} codeString={`table = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

# Accessing the first row
print(table[0])    # [1, 2, 3]

# Accessing the second item of the first row
print(table[0][1]) # 2

# Accessing the second row
row2 = table[1]
print(row2)        # [4, 5, 6]

# Accessing each item of the second row
print(row2[0])     # 4
print(row2[1])     # 5
print(row2[2])     # 6`} />

      </section>

      <section>
        <h2 id="modifying-list-items"><a href="#modifying-list-items" className="section-link">Modifying List Items</a></h2>
        <p>You can modify list items by assigning new values to them directly.</p>
        <CodeBlock language={"python"} codeString={`# Modifying the third item of the list
fruits[2] = "orange"
print(fruits)  # Output: ['apple', 'banana', 'orange']`} />

        <p>This is different compared to strings, which are <em>immutable</em>.</p>
        <CodeBlock language={"python"} codeString={`animal = "cat"
name[0] = "b"  # TypeError: 'str' object does not support item assignment`} />

        <p>As a result, you cannot modify a string in place, and you must create a new string instead.</p>
        <CodeBlock language={"python"} codeString={`animal = "cat"
new_animal = "b" + animal[1:]
print(new_animal)  # Output: 'bat'`} />

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>What is the result of the following list operation?</p>
          <CodeBlock language={"python"} codeString={`fruits = ["apple", "banana", "cherry"]
fruits[2] = "orange"
print(fruits)`} />
        </Collapsible>
      </section>

      <section>
        <h2 id="adding-list-items"><a href="#adding-list-items" className="section-link">Adding List Items</a></h2>
        <p>Adding items to a list is one of the most common operations. You might have experienced this before: your mom sends you on a shopping errand, and while you're at the store, she calls to ask if you can grab one more item for her. If so, you've added an item to a list in real life!</p>

        <h3>Concatenation</h3>
        <p>List concatenation is the process of adding or joining one list to another. It's like adding one group of people to another to form a larger group.
          This can be done simply by using the <code className="inline">+</code> operator. Just as string concatentation creates a new string from two or more existing strings, list concatenation creates a new list formed from the combining the smaller lists.</p>
        <CodeBlock language={"python"} codeString={`# Creating two lists
list_one = [1, 2, 3]
list_two = [4, 5, 6]

# Concatenating lists
combined_list = list_one + list_two
print(combined_list)  # Output: [1, 2, 3, 4, 5, 6]`} />

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <CodeBlock language={"python"} codeString={`# 1. Create two lists of names and concatenate them together

# 2. What is the output of the following code?
first_list = ["Hi"]
second_list = ["my", "name", "is", "Richard"]
combined = first_list + second_list
print(combined)`} />
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
        <p>Though the tradeoffs are not major, choosing which method to use can have some implications:</p>
        <ul>
          <li className="multiline">Concatenation is best when you need to combine multiple lists into one and do not need to keep the original lists. It's also useful when working with immutable list-like types, such as tuples or strings.</li>
          <li className="multiline"><code className="inline">.append()</code> is ideal when building a single list incrementally. It's considered more efficient than concatenation because it modifies the existing list in place rather than creating a new list each time an element is added.</li>
        </ul>

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <CodeBlock language={"python"} codeString={`# 1. Use both strategies to combine these three lists into one list.
a = [1, 2, 3]
b = [4, 5, 6]
c = [7, 8, 9]`} />
        </Collapsible>
      </section>

      <section>
        <h2 id="removing-list-items"><a href="#removing-list-items" className="section-link">Removing List Items</a></h2>
        <p>Removing items from a list is just as important as adding them to a list. There are two primary ways to do so:</p>

        <h3><code className="inline">.remove()</code></h3>
        <p>The <code className="inline">.remove()</code> method searches for the first occurrence of a given element and removes it from the list. If the element is not found, Python raises a <code className="inline">ValueError</code>.</p>
        <CodeBlock language={"python"} codeString={`fruits = ["apple", "banana", "cherry", "banana"]
fruits.remove("banana")  # Removes the first 'banana' item
print(fruits)            # Output: ['apple', 'cherry', 'banana']

fruits.remove("plum")    # Raises ValueError, as 'plum' does not exist`} />
        <p>This method is useful when you know the element you want to remove but not its position/index in the list. If the list contains duplicates of the element, only the first one will be removed.</p>

        <h3><code className="inline">.pop()</code></h3>
        <p>The <code className="inline">.pop()</code> method removes the item at the specified position in the list and returns it. If no index is specified, <code className="inline">.pop()</code> removes and returns the last item in the list by default.</p>
        <CodeBlock language={"python"} codeString={`fruits = ["apple", "orange", "cherry", "potato"]
popped_item = fruits.pop(2)  # Removes 'cherry' at index 2
print(popped_item)           # Output: 'cherry'
print(fruits)                # Output: ['apple', 'orange', 'potato']

fruits.pop()   # Removes the last item
print(fruits)  # Output: ['apple', 'orange']`} />

        <p>You don't need to save the popped item to a variable, either. The following code still removes the item at index <code className="inline">2</code>.</p>
        <CodeBlock language={"python"} codeString={`fruits = ["apple", "orange", "cherry", "potato"]
fruits.pop(2)  # Removes 'cherry' at index 2
print(fruits)  # Output: ['apple', 'orange', 'potato']`} />
      </section>

      <section>
        <h2 id="iterating-through-lists"><a href="#iterating-through-lists" className="section-link">Iterating Through Lists</a></h2>
        <p>Using what you've learned about loops, you can iterate through each item in a list:</p>
        <CodeBlock language={"python"} codeString={`# Using an element-based for loop to iterate through the list
for fruit in fruits:
    print(fruit)

# Using an index-based for loop to iterate through the list
for i in range(len(fruits)):
    print(fruits[i])

# Using a while loop with an index
i = 0
while i < len(fruits):
    print(fruits[i])
    i += 1`} />

        <h3>Looping through Nested Lists</h3>
        <p>Nested loops are the perfect complement to nested lists. You can use them to iterate through each item of a multi-dimensional list:</p>
        <CodeBlock language={"python"} codeString={`# Example: nested list of days in a week
days = [["Monday", "Tuesday", "Wednesday"], ["Thursday", "Friday", "Saturday"], ["Sunday"]]

# Looping through the nested list
for week in days:
    for day in week:
        print(day)`} />

        <p>This results in the output:</p>
        <CodeBlock language={"text"} codeString={`Monday
Tuesday
Wednesday
Thursday
Friday
Saturday
Sunday`} />
      </section>

      <section>
        <h2 id="other-list-methods"><a href="#other-list-methods" className="section-link">Other List Methods (Optional)</a></h2>
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
      </section>

      <section>
        <h2 id="list-applications"><a href="#list-applications" className="section-link">List Applications</a></h2>
        <p>Lists are versatile and can be used in many different ways. Here are some common applications:</p>

        <h3>Creating a new list from an existing list</h3>
        <p>An example of using a for loop to create a new list from an existing list:</p>
        <CodeBlock language={"python"} codeString={`# Example: Creating a new list from an existing list
numbers = [1, 2, 3, 4, 5]
new_list = []
for num in numbers:
    new_list.append(num * 2)
print(new_list)  # Output: [2, 4, 6, 8, 10]`} />

        <h3>Filtering a list</h3>
        <p>An example of using a for loop to filter a list:</p>
        <CodeBlock language={"python"} codeString={`# Example: Filtering a list
numbers = [1, 2, 3, 4, 5]
filtered_list = []
for num in numbers:
    if num % 2 == 0:
        filtered_list.append(num)
print(filtered_list)  # Output: [2, 4]`} />
      </section>

      <section>
        <h2 id="list-comprehension"><a href="#list-comprehension" className="section-link">List Comprehension</a></h2>
        <p>A list comprehension is a concise way to create lists in Python. It's a powerful feature that allows you to create new lists by applying an expression to each item in an existing list or other iterable (like a string or range).</p>
        <p>List comprehensions can sometimes be more readable and are often faster to write than using traditional loops to create lists. They follow this basic syntax:</p>
        <CodeBlock language={"python"} codeString={`[expression for item in iterable]`} />

        <h3>Basic List Comprehension</h3>
        <p>Let's start with a simple example to create a list of squares:</p>
        <CodeBlock language={"python"} codeString={`# Using a for loop to create a list of squares from 0 to 9
squares = []
for i in range(10):
    squares.append(i ** 2)
print(squares)  # Output: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# Using list comprehension to do the same thing
squares = [i ** 2 for i in range(10)]
print(squares)  # Output: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]`} />

        <p>As you can see, the list comprehension is much more concise and readable!</p>

        <h3>List Comprehension with Conditions</h3>
        <p>You can also add conditions to filter items in your list comprehension:</p>
        <CodeBlock language={"python"} codeString={`# Using a for loop to create a list of even squares from 0 to 9
even_squares = []
for i in range(10):
    if i % 2 == 0:  # Only include even numbers
        even_squares.append(i ** 2)
print(even_squares)  # Output: [0, 4, 16, 36, 64]

# Using list comprehension with a condition
even_squares = [i ** 2 for i in range(10) if i % 2 == 0]
print(even_squares)  # Output: [0, 4, 16, 36, 64]`} />

        <h3>List Comprehension with Multiple Conditions</h3>
        <p>You can use multiple conditions in your list comprehension:</p>
        <CodeBlock language={"python"} codeString={`# Create a list of numbers from 1 to 20 that are divisible by 2 and 3
numbers = [n for n in range(1, 21) if n % 2 == 0 if n % 3 == 0]
print(numbers)  # Output: [6, 12, 18]

# This is equivalent to:
numbers = []
for n in range(1, 21):
    if n % 2 == 0 and n % 3 == 0:
        numbers.append(n)
print(numbers)  # Output: [6, 12, 18]`} />

        <h3>List Comprehension with If-Else</h3>
        <p>You can also use if-else conditions in your list comprehension:</p>
        <CodeBlock language={"python"} codeString={`# Create a list where even numbers are squared and odd numbers are cubed
numbers = [i ** 2 if i % 2 == 0 else i ** 3 for i in range(10)]
print(numbers)  # Output: [0, 1, 4, 27, 16, 125, 36, 343, 64, 729]

# This is equivalent to:
numbers = []
for i in range(10):
    if i % 2 == 0:
        numbers.append(i ** 2)
    else:
        numbers.append(i ** 3)
print(numbers)  # Output: [0, 1, 4, 27, 16, 125, 36, 343, 64, 729]`} />

        <p>Note the difference in syntax: when using if-else in the expression part, the if comes after the expression, but when using if only as a filter, it comes after the for loop part.</p>

        <h3>(Optional) Nested List Comprehensions</h3>
        <p>You can also create nested list comprehensions to work with multi-dimensional data:</p>
        <CodeBlock language={"python"} codeString={`# Create a 3x3 matrix using nested list comprehension
matrix = [[i * j for j in range(1, 4)] for i in range(1, 4)]
print(matrix)  # Output: [[1, 2, 3], [2, 4, 6], [3, 6, 9]]

# This is equivalent to:
matrix = []
for i in range(1, 4):
    row = []
    for j in range(1, 4):
        row.append(i * j)
    matrix.append(row)
print(matrix)  # Output: [[1, 2, 3], [2, 4, 6], [3, 6, 9]]`} />

        <h3>Practical Examples</h3>
        <p>List comprehensions are useful for many common operations:</p>
        <CodeBlock language={"python"} codeString={`# Convert a list of strings to uppercase
fruits = ["apple", "banana", "cherry"]
upper_fruits = [fruit.upper() for fruit in fruits]
print(upper_fruits)  # Output: ['APPLE', 'BANANA', 'CHERRY']

# Extract the first letter of each word
first_letters = [word[0] for word in fruits]
print(first_letters)  # Output: ['a', 'b', 'c']

# Create a list of tuples with the word and its length
word_lengths = [(word, len(word)) for word in fruits]
print(word_lengths)  # Output: [('apple', 5), ('banana', 6), ('cherry', 6)]`} />

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p className="challenge">Create a list comprehension that generates a list of the first 10 perfect squares (1, 4, 9, etc.) that are not divisible by 3.</p>
        </Collapsible>
      </section>


      <section>
        <h2 id="wrapping-up"><a href="#wrapping-up" className="section-link">Wrapping Up</a></h2>

        <p>Congratulations! You've learned the basics of lists in Python, including how to create, modify, and access elements inside them. You've also learned about list comprehensions, which are a powerful way to create lists in a concise and readable way, and how to work with nested lists.</p>

        <p>Here are some exercises that can help you solidify your understanding of lists:</p>
        <ul>
          <li>Create a list of your favorite movies and use a loop to print each one.</li>
          <li>Modify the list by replacing one of the movies with another one, and add a new movie to the end of the list.</li>
          <li>Access an index that does not exist to see what error you get and then handle that error using a conditional statement to prevent it.</li>
        </ul>
      </section>
    </div>
  );
}

export default Lists;
