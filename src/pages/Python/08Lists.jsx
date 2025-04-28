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
        <p>A list in Python is a collection of items of any data type that are stored in a specific order. A list, sometimes referred to as an <em>array</em>, is <strong>mutable</strong> or changeable, meaning that both the order of the list and its individual items can be modified.</p>
        <p>If you've played a game, used social media, or simply written a series of chores that you need to do for the day, you've already worked with lists. Some common applications of lists include managing a collection of users in an application, storing items in an inventory of a game, or grouping related items together like the names of all the months in a year.</p>
      </section>

      <section>
        <h2 id="what-is-a-list"><a href="#what-is-a-list" className="section-link">What is a List?</a></h2>
        <p>Consider a playlist of music or videos: each song or video has a specific position, and you can add, remove, or change the order of items in the playlist.</p>
        <p>Lists can contain items of any type, and can even have mixed types inside them — numbers, strings, or even other lists—and their size can grow or shrink dynamically.</p>
        <CodeBlock language={"python"} codeString={`# Example: a list of songs
songs = ["Overjoyed", "Sir Duke", "Superstition"]

print(songs)        # ['Overjoyed', 'Sir Duke', 'Superstition']
print(type(songs))  # <class 'list'>`} />

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>Think of another example of a list that you have encountered in your daily life.</p>
        </Collapsible>
      </section>

      <section>
        <h2 id="list-syntax"><a href="#list-syntax" className="section-link">List Syntax</a></h2>
        <p>Use the square brackets <code className='inline'>[]</code>, known as <em>list literals</em>, to create a new list. Consider the following examples that show different ways to create an empty list, or a list with values.</p>

        <CodeBlock language={"python"} codeString={`# Creating an empty list, analagous to an empty string
[]

# Using a variable to store an empty list
fruits = []

# Creating a list with three values and storing into a variable
fruits = ["apple", "banana", "cherry"]`} />

        <p>Items in a list are separated by commas <code className='inline'>,</code>, and each item can also be referred to as an <em>element</em> of the list.</p>

        <p>Below is an example of a list that contains items of different data types:</p>
        <CodeBlock language={"python"} codeString={`mix = [1, "two", 3.0]`} />

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>In your code editor, create a list that contains at least four different data types. Then, print the list.</p>
        </Collapsible>

        <h3>Using <code className='inline'>list()</code></h3>
        <p>You can also use the <code className='inline'>list()</code> method to create a list from other <em>iterables</em> or sequences, like strings or ranges. The term <em>iterable</em> refers to a sequence of items that can be <em>iterated</em> over one by one, such as when using a <code className='inline'>for</code> or <code className='inline'>while</code> loop.</p>
        <CodeBlock language={"python"} codeString={`# From a string
chars = list("hello")
print(chars)  # ['h', 'e', 'l', 'l', 'o']

# From a range
nums = list(range(5))
print(nums)  # [0, 1, 2, 3, 4]`} />

        <p>Because a string is a type of sequence or iterable, you can use <code className='inline'>list()</code> to convert a string into a different type of sequence: a list of its characters.</p>

        <p>Using <code className='inline'>list()</code> is actually an example of <em>type casting</em>, in this case changing an existing data type to a list.</p>

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>In your code editor, try calling <code className='inline'>list()</code> with an argument of <code className='inline'>3</code>. What happens, and how might you explain this?</p>
        </Collapsible>

        <h3>Nested Lists</h3>
        <p>Lists can also contain other lists, creating a nested structure. This is analagous to an essay outline or bullet point list, where each item or bullet point can have its own list of items.</p>
        <CodeBlock language={"python"} codeString={`table = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]`} />

        <p>The above example is considered a <em>two-dimensional list</em>, because each item in the list is itself a list. Sometimes, it is useful to write a two-dimensional list as a grid or table, for better readability:</p>
        <CodeBlock language={"python"} codeString={`table = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]`} />
        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>What might a three-dimensional list look like? Try writing one in your code editor. Then, print it.</p>
        </Collapsible>
      </section>

      <section>
        <h2 id="accessing-list-items"><a href="#accessing-list-items" className="section-link">Accessing List Items</a></h2>
        <p>Just as you can access individual characters within strings, you can access individual items of a list by using the index (position) number. Remember that the first item has an index of <code className='inline'>0</code>.</p>

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

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>In your code editor, print the first item of the list <code className='inline'>["Overjoyed", "Sir Duke", "Superstition"]</code> using positive indexing and negative indexing.</p>
        </Collapsible>

        <h3>Using <code className='inline'>len()</code></h3>
        <p>If you're not sure how many items are in a list, you can use the <code className='inline'>len()</code> function to find out. Knowing the length of a list is helpful to avoid running into index errors.</p>
        <CodeBlock language={"python"} codeString={`fruits = ["apple", "banana", "cherry"]
print(len(fruits))  # 3`} />

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>What is the length of an empty list? Try calling <code className='inline'>len([])</code> in your code editor if you are unsure.</p>
        </Collapsible>

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

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>In your code editor, use slicing to generate the following sub-lists from the following list: <code className='inline'>numbers = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]</code></p>
          <CodeBlock language={"python"} codeString={`# 1. 
[10, 20, 30]

# 2. 
[100]

# 3. Bonus
[]`} />

        </Collapsible>

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

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>In your code editor, use indexing, slicing, or both to generate the following results from the following two-dimensional list:</p>
          <CodeBlock language={"python"} codeString={`numbers = [
  [0, 10, 20], 
  [30, 40, 50], 
  [60, 70, 80], 
  [90, 100]
]

# 1. 
[[0, 10, 20], [30, 40, 50]]

# 2.
90

# 3. 
[70, 80]

# 4. Bonus
IndexError

# 5. Bonus
[]`} />

        </Collapsible>

      </section>

      <section>
        <h2 id="modifying-list-items"><a href="#modifying-list-items" className="section-link">Modifying List Items</a></h2>
        <p>You can modify list items by assigning new values to them directly.</p>
        <CodeBlock language={"python"} codeString={`# Modifying the third item of the list
fruits = ['apple', 'banana', 'cherry']
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
          <p>What is the result of the following list operations? Optionally, try them in your code editor.</p>
          <CodeBlock language={"python"} codeString={`# 1.
fruits = ["apple", "banana", "cherry"]
fruits[2] = "orange"
print(fruits)

# 2.
fruits = ["apple", "banana", "cherry"]
fruits[1] = "orange"
fruits[2] = "orange"
fruits[2] = "mango"
print(fruits)`} />
        </Collapsible>
      </section>

      <section>
        <h2 id="adding-list-items"><a href="#adding-list-items" className="section-link">Adding List Items</a></h2>
        <p>Adding items to a list is a very common task in programming. You might have experienced this before: your mom sends you on a shopping errand, and while you're at the store, she calls to ask if you can grab one more item for her. If so, you've added an item to a list in real life!</p>

        <h3>Concatenation</h3>
        <p>List concatenation is the process of adding or joining one list to another. An analogy is adding one group of people to another to form a larger group.
          Just as string concatenation creates a new string from two or more existing strings, list concatenation creates a new list formed from the combining the smaller lists. You can do this simply by using the <code className="inline">+</code> operator. </p>
        <CodeBlock language={"python"} codeString={`# Creating two lists
list_one = [1, 2, 3]
list_two = [4, 5, 6]

# Concatenating lists
combined_list = list_one + list_two
print(combined_list)  # Output: [1, 2, 3, 4, 5, 6]`} />

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>What is the output of the following code?</p>
          <CodeBlock language={"python"} codeString={`
first_list = ["Hi"]
second_list = ["my", "name", "is", "Richard"]
combined = first_list + second_list
print(combined)`} />
        </Collapsible>

        <h3>Using <code className="inline">.append()</code></h3>
        <p>The <code className="inline">.append()</code> method adds an item to the end of an existing list. It modifies the list <strong>in place</strong>, which means it doesn't create a new list but alters the original list directly.
          The method takes a single argument, which is the item that you want to add to the list. This item can be of any data type.</p>
        <CodeBlock language={"python"} codeString={`# Original list
fruits = ['apple', 'banana', 'cherry']

# Appending a new item
fruits.append('orange')
print(fruits)  # Output: ['apple', 'banana', 'cherry', 'orange']`} />

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>In your code editor, create two lists of names: <code className="inline">parents</code> and <code className="inline">friends</code>. Then, run the code <code className="inline">parents.append(friends)</code>. Then, print out <code className="inline">parents</code>. Does anything unexpected happen?</p>
        </Collapsible>

        <h3>When to Use Each Strategy</h3>
        <p>Though the tradeoffs are not major, choosing whether to use concatenation or <code className="inline">.append()</code> can have some implications:</p>
        <ul>
          <li className="multiline">Concatenation is best when you need to combine multiple lists into one and do not need to keep the original lists.</li>
          <li className="multiline"><code className="inline">.append()</code> is ideal when building a single list incrementally. It's considered more efficient than concatenation because it modifies the existing list in place rather than creating a new list each time an element is added.</li>
          <li className="multiline">Using <code className="inline">.append()</code> to combine two lists will add the second list directly to the end of the first list, resulting in a nested list!</li>
        </ul>

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>Combine the following three short lists into one longer, one-dimensional list. Then, print your result.</p>
          <CodeBlock language={"python"} codeString={`a = [1, 2, 3]
b = [4, 5, 6]
c = [7, 8, 9]

# d = `} />

          <p>Your final output should be: <code className="inline">[1, 2, 3, 4, 5, 6, 7, 8, 9]</code>.</p>
        </Collapsible>
      </section>

      <section>
        <h2 id="removing-list-items"><a href="#removing-list-items" className="section-link">Removing List Items</a></h2>
        <p>Removing items from a list is just as important as adding them to a list. There are two primary ways to do so:</p>

        <h3><code className="inline">.remove()</code></h3>
        <p>The <code className="inline">.remove()</code> method searches for the first occurrence of a given element and removes it from the list. If the element is not found, Python raises a <code className="inline">ValueError</code>. This error type is generally used to describe a situation where a value is not found in a list or sequence.</p>
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

        <p>You can still get an <code className="inline">IndexError</code> if you try to pop an item from an index that is out of bounds.</p>
        <CodeBlock language={"python"} codeString={`fruits = ["apple", "orange", "cherry"]
fruits.pop(10)  # Raises IndexError, as there is no index 10`} />

        <p>Like <code className="inline">.append()</code>, both <code className="inline">.pop()</code> and <code className="inline">.remove()</code> modify the original list in place, which means they don't create a new list but alter the existing one directly.</p>

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>In your code editor, use <code className="inline">.pop()</code> twice and <code className="inline">.remove()</code> once to delete items until the starting list <code className="inline">berries = ["blueberry", "blackberry", "strawberry", "raspberry", "boysenberry"]</code> looks like: <code className="inline">["blueberry", "strawberry"]</code>.</p>
        </Collapsible>
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

        <h3>Modifying Lists with Loops</h3>
        <p>You can also use loops to modify the elements of a list directly, rather than returning a new list. For example, you can use a loop to subtract each element of a list by a given number, then store the calculated values back into the original list.</p>
        <CodeBlock language={"python"} codeString={`balances = [10.00, 16.00, 13.50, 6.00]
admission_fee = 3.00
for i in range(len(balances)):
    balances[i] = balances[i] - admission_fee
print(balances)  # Output: [7.0, 13.0, 10.5, 3.0]`} />

        <p>Note that this would NOT work with an element based loop:</p>
        <CodeBlock language={"python"} codeString={`balances = [10.00, 16.00, 13.50, 6.00]
for balance in balances:
    balance = balance - admission_fee
print(balances)  # Output: [10.0, 16.0, 13.5, 6.0]`} />

        <p>This is because the loop variable <code className="inline">balance</code> is a <em>copy</em> of the list element, not the actual element itself. So, the modification changes the value of the copied variable <code className="inline">balance</code>, but <strong>not</strong> the original element of the list.</p>

        <h3>Looping through Nested Lists</h3>
        <p>Nested loops are the perfect complement to nested lists. You can use them to iterate through each item of a multi-dimensional list:</p>
        <CodeBlock language={"python"} codeString={`days = [["Monday", "Tuesday", "Wednesday"], ["Thursday", "Friday", "Saturday"], ["Sunday"]]

# Using a nested for loop to iterate through the nested list
for group in days:
    for day in group:
        print(day)`} />

        <p>This results in the output:</p>
        <CodeBlock language={"text"} codeString={`Monday
Tuesday
Wednesday
Thursday
Friday
Saturday
Sunday`} />

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>Loop through the following nested list and print each item one at a time. Print an additional exclamation mark next to the numberwhen you reach the number <code className="inline">5</code>.</p>

          <CodeBlock language={"python"} codeString={`table = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]`} />

          <p>Your end result should be:</p>
          <CodeBlock language={"text"} codeString={`1
2
3
4
5!
6
7
8
9`} />
        </Collapsible>
      </section>

      <section>
        <h2 id="applications-of-loops-with-lists"><a href="#applications-of-loops-with-lists" className="section-link">Applications of Loops with Lists</a></h2>
        <p>Below are some common applications of lists with loops:</p>

        <h3>Creating a new list from an existing list</h3>
        <p>You can use a loop to create a new, modified list from an existing list:</p>
        <CodeBlock language={"python"} codeString={`# Example: Creating a new list from an existing list
numbers = [1, 2, 3, 4, 5]
new_list = []
for num in numbers:
    new_list.append(num * 2)
print(new_list)  # Output: [2, 4, 6, 8, 10]`} />

        <h3>Filtering a list</h3>
        <p>You can also use a loop to filter a list:</p>
        <CodeBlock language={"python"} codeString={`# Example: Filtering a list
numbers = [1, 2, 3, 4, 5]
filtered_list = []
for num in numbers:
    if num % 2 == 0:
        filtered_list.append(num)
print(filtered_list)  # Output: [2, 4]`} />

        <h3>Flattening a Nested List</h3>
        <p>Sometimes, you may need to <em>flatten</em> a nested list into a one-dimensional list. You can do this by using a nested loop:</p>
        <CodeBlock language={"python"} codeString={`days = [["Monday", "Tuesday", "Wednesday"], ["Thursday", "Friday", "Saturday"], ["Sunday"]]

flattened_days = []
for group in days:
    for day in group:
        flattened_days.append(day)

print(flattened_days)
# Output: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']`} />

        <p>You can also use the concatenation operator <code className="inline">+</code> to flatten a nested list:</p>
        <CodeBlock language={"python"} codeString={`days = [["Monday", "Tuesday", "Wednesday"], ["Thursday", "Friday", "Saturday"], ["Sunday"]]

flattened_days = []
for week in days:
    flattened_days += week

print(flattened_days) 
# Output: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']`} />

        <h3>Comparing Multiple Items in a List</h3>
        <p>Using an index-based loop, you can compare items to other items in a list:</p>
        <CodeBlock language={"python"} codeString={`numbers = [1, 2, 3, 3, 4, 5, 5]
for i in range(len(numbers) - 1):
    if numbers[i] == numbers[i + 1]:
        print("Consecutive numbers found at index " + str(i))`} />

        <p>In the above code, we actually loop through <strong>two numbers</strong> at a time. In the if statement, we compare the current number <code className="inline">numbers[i]</code> with the number directly after it <code className="inline">numbers[i + 1]</code> and check if they are equal to each other.</p>
        <p>Note that the looping condition includes <code className="inline">len(numbers) - 1</code> rather than simply <code className="inline">len(numbers)</code> to avoid <code className="inline">IndexError</code>. This is because the last iteration of the loop will have the comparison <code className="inline">numbers[6] == numbers[7]</code>, where <code className="inline">numbers[7]</code> is out of bounds.</p>

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>Say that we are looping through three consecutive numbers in a list. What will the looping condition need to be to avoid going out of bounds? Write it in your code editor.</p>
        </Collapsible>

        <h4>Rewritten as a Function</h4>
        <p>You can even create a function to do this:</p>
        <CodeBlock language={"python"} codeString={`def has_consecutive_numbers(numbers):
    for i in range(len(numbers) - 1):
        if numbers[i] == numbers[i + 1]:
            return True
    return False`} />
        <p>This function will return <code className="inline">True</code> if there are any consecutive numbers in the list, and <code className="inline">False</code> otherwise.</p>
        <p>For example, <code className="inline">has_consecutive_numbers([1, 2, 3, 3, 4, 5])</code> will return <code className="inline">True</code> because <code className="inline">3</code> appears consecutively in the list.</p>


        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>Given a list of numbers, we want to check if the current number squared is equal to the number <strong>after</strong> the next number. If so, print the current number and break out of the loop. Carefully consider the looping condition.</p>
          <p>For <code className="inline">numbers = [1, 2, 4, 8, 16]</code>, the loop will print <code className="inline">4</code> and break when it reaches index 3.</p>
          <p>For <code className="inline">numbers = [1, 2, 4, 8]</code>, the loop should not print anything, and should not result in any errors.</p>
        </Collapsible>
      </section>

      <section>
        <h2 id="list-comprehension"><a href="#list-comprehension" className="section-link">List Comprehension</a></h2>
        <p>A list comprehension is a concise way to create lists in Python. It's a powerful feature that allows you to create new lists by applying an expression to each item in an existing list or other iterable (like a string or range).</p>
        <p>List comprehensions can sometimes be more readable and are often faster to write than using traditional loops to create lists. They follow this basic syntax:</p>
        <CodeBlock language={"python"} codeString={`[expression for item in sequence]`} />

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

        <p>As you can see, while the outputs are identical, the list comprehension is much more concise!</p>
        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>Write a list comprehension to generate a list of individual characters from the string <code className="inline">"I Wish"</code>.</p>
          <p>Your final output should be: <code className="inline">["I", " ", "w", "i", "s", "h"]</code>.</p>
        </Collapsible>

        <h3>List Comprehension with Conditions</h3>
        <p>You can also add conditions to filter items in your list comprehension:</p>
        <CodeBlock language={"python"} codeString={`# Using a for loop to create a list of even squares from 0 to 9
even_squares = []
for i in range(10):
    if i % 2 == 0:
        even_squares.append(i ** 2)
print(even_squares)  # Output: [0, 4, 16, 36, 64]

# Using list comprehension with a condition
even_squares = [i ** 2 for i in range(10) if i % 2 == 0]
print(even_squares)  # Output: [0, 4, 16, 36, 64]`} />

        <h4>Logical Operators in List Comprehensions</h4>
        <p>Just like in a regular loop, you can use logical operators like <code className="inline">and</code> and <code className="inline">or</code> in list comprehensions:</p>
        <CodeBlock language={"python"} codeString={`# Create a list of numbers from 1 to 20 that are divisible by 2 and 3
numbers = [n for n in range(1, 21) if n % 2 == 0 and n % 3 == 0]
print(numbers)  # Output: [6, 12, 18]

# This is equivalent to:
numbers = []
for n in range(1, 21):
    if n % 2 == 0 and n % 3 == 0:
        numbers.append(n)
print(numbers)  # Output: [6, 12, 18]`} />

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p className="challenge">Using a list comprehension with the string "Signed, Sealed, Delivered", generate a list that does <strong>not</strong> contain the comma <code className="inline">","</code> and space <code className="inline">" "</code> characters.</p>
          <p>Your final output should be: <code className="inline">["s", "i", "g", "n", "e", "d", "s", "e", "a", "l", "e", "d", "d", "e", "l", "e", "v", "e", "r", "e", "d"]</code>.</p>
        </Collapsible>

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

        <p>Note the difference in syntax: when using <code className="inline">if-else</code> in the expression part, the <code className="inline">if</code> comes directly after the expression, but when using <code className="inline">if</code> only as a filter, it comes after the for loop part.</p>

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
print(first_letters)  # Output: ['a', 'b', 'c']`} />

        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p className="challenge">Using a list comprehension, generate a list of the first ten perfect cubes (1, 8, 27, etc.) that are <strong>not</strong> divisible by three.</p>
          <p>Your final output should be: <code className="inline">[1, 8, 64, 125, 216, 343, 512, 1000]</code>.</p>
        </Collapsible>
      </section>

      <section>
        <h2 id="list-methods"><a href="#list-methods" className="section-link">List Methods (Optional)</a></h2>
        <p>Python lists come with a variety of methods that allow you to manipulate their contents efficiently. These methods make it easier to modify, search, and manage the lists in your programs.</p>
        <p>While these methods are useful for managing lists efficiently, most of their functionality can be replicated using the basic list methods we learned above in addition to using iteration (loops). Thererefore, there is no need to memorize them now, as you will naturally become familiar with them as you work with lists in Python.</p>

        <h3>Adding Items</h3>
        <CodeBlock language={"python"} codeString={`# .extend() - Adds all elements of a list to another list
# Similar to concatenation, but it modifies the list in place instead of creating a new list
vegetables = ["carrot", "potato"]
fruits.extend(vegetables)
print(fruits)  # Output: ['apple', 'banana', 'cherry', 'carrot', 'potato']

# .insert() - Inserts an item at a defined index
fruits.insert(1, "orange")
print(fruits)  # Output: ['apple', 'orange', 'banana', 'cherry', 'carrot', 'potato']`} />

        <h3>Searching for Items</h3>
        <CodeBlock language={"python"} codeString={`# .index() - Returns the index of the first matching item
numbers = [5, 7, 9, 7]
print(numbers.index(7))  # Output: 1

# .count() - Returns the number of times an item appears in the list
print(numbers.count(7))  # Output: 2`} />

        <h3>Sorting Items</h3>
        <CodeBlock language={"python"} codeString={`# .sort() - Sorts the list in ascending order
numbers = [5, 7, 9, 7]
numbers.sort()
print(numbers)  # Output: [5, 7, 7, 9]

# .reverse() - Reverses the order of the list
numbers.reverse()
print(numbers)  # Output: [9, 7, 7, 5]`} />

        <h3>The <code className="inline">.clear()</code> Method</h3>
        <p>The <code className="inline">.clear()</code> method removes all items from the list, effectively clearing it. This is equivalent to deleting all items in the list. Use <code className="inline">.clear()</code> when you want to empty a list but keep the list itself for future use.</p>
        <CodeBlock language={"python"} codeString={`cart = ["shirt", "hat", "shoes"]
cart.clear()
print(cart)  # Output: []`} />
      </section>

      <section>
        <h2 id="wrapping-up"><a href="#wrapping-up" className="section-link">Wrapping Up</a></h2>

        <p>Congratulations! You've learned the basics of lists in Python, including how to create, modify, and access elements inside them. You've also learned about list comprehensions, which are a powerful way to create lists in a concise and readable way, and how to work with nested lists.</p>

        <div>
          <button className="next-button" onClick={() => window.location.href = "/quiz?name=08Lists.py"}>Start Quiz</button>
        </div>
      </section>
    </div>
  );
}

export default Lists;
