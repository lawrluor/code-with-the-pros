import CodeBlock from "../../components/CodeBlock";
import Collapsible from "../../components/Collapsible";
import useSequentialCounter from "../../hooks/useSequentialCounter";

export default function Project06() {
  const { getCurrentNumber, getCurrentNumberAndIncrement } = useSequentialCounter(0);

  return <div className="lesson-container">
    <section>
      <h1>Project: Number Guessing Game</h1>
      <p>Let's create a number guessing game! In this game, the computer will choose a random number between 0 and 99, and you'll try to guess the number it chose. Each time you guess, the computer will tell you whether your guess is too high or too low until you find the right number.</p>

      <p>In this project, you'll use while loops to:</p>
      <ul>
        <li>Generate a random number</li>
        <li>Repeatedly prompt the user for a guess until the correct number is found</li>
      </ul>
    </section>

    <section>
      <h2>The <code className="inline">random</code> Module</h2>
      <p>A <em>module</em> is a collection of functions and variables that can be imported and used in other Python files. The <code className="inline">random</code> module provides us with functions that can generate random numbers. To use it, we need to:</p>
      <ol>
        <li>Import the module using <code className="inline">import random</code></li>
        <li>Use the <code className="inline">random.randrange()</code> function to generate a random integer</li>
      </ol>

      <p>Below is an example of how to use <code className="inline">random</code> and <code className="inline">random.randrange()</code>:</p>

      <CodeBlock language="python" codeString={`import random

# Generate a random number between 0 and 9
# The second argument in random.randrange() is the stopping point and is NOT included!
random_number = random.randrange(0, 10)

print(f"The number generated is: {random_number}")`} />

      <p>Try running this code a few times in your code editor. Each time the code runs, <code className="inline">random_number</code> will be assigned a random number between <code className="inline">0</code> and <code className="inline">9</code>.</p>

      <Collapsible title="Hint">
        <p>Make sure to test your code with both valid and invalid guesses to ensure it works correctly.</p>
      </Collapsible>
    </section>

    <section>
      <h2 id={`step-${getCurrentNumber()}-generate-a-random-number`}><a href={`#step-${getCurrentNumber()}-generate-a-random-number`} className="section-link">Step {getCurrentNumberAndIncrement()}: Generate a Random Number</a></h2>
      <p>First, import the <code className="inline">random</code> module and generate a random number between <code className="inline">0</code> and <code className="inline">99</code>. Store the randomly generated number in a variable called <code className="inline">secret_number</code>.</p>

      <Collapsible title="Hint">
        <ol>
          <li>Add the line <code className="inline">import random</code> at the top of your file.</li>
          <li>Call <code className="inline">random.randrange()</code> and pass it arguments that will generate a random number between <code className="inline">0</code> and <code className="inline">99</code>. Remember that the last number in <code className="inline">random.randrange()</code> is NOT included!</li>
          <li>Assign the result of calling the method to <code className="inline">secret_number</code>.</li>
        </ol>
      </Collapsible>
    </section>

    <section>
      <h2 id={`step-${getCurrentNumber()}-initialize-variables`}><a href={`#step-${getCurrentNumber()}-initialize-variables`} className="section-link">Step {getCurrentNumberAndIncrement()}: Initialize Variables</a></h2>
      <p>Underneath <code className="inline">secret_number</code> variable, create a variable <code className="inline">guess</code> to keep track of the value of the user's current guess.</p>
      <p>Before the game starts, the user has not made any guesses yet. What initial value should you assign to <code className="inline">guess</code>?</p>

      <Collapsible title="Hint">
        <p>Assign an empty string <code className="inline">""</code> as the initial value for <code className="inline">guess</code> since the user has not made a guess yet. Though it seems counterintuitive, <code className="inline">guess</code> is actually a string, since we will be getting the user's guess using <code className="inline">input()</code>, which always returns a string.</p>
      </Collapsible>
    </section>

    <section>
      <h2 id={`step-${getCurrentNumber()}-create-the-while-loop-header`}><a href={`#step-${getCurrentNumber()}-create-the-while-loop-header`} className="section-link">Step {getCurrentNumberAndIncrement()}: Create the While Loop Header</a></h2>
      <p>Let's begin writing our while loop, starting with the loop condition. The loop condition determines whether or not the loop should continue running.</p>

      <p>In our game, we want the loop to keep running until the user guesses the correct number. In other words, we want the loop to keep running while the user has <em>not</em> guessed the correct number.</p>

      <p>Based on this reasoning, use the <code className="inline">while</code> keyword along with a boolean expression involving <code className="inline">guess</code> and <code className="inline">secret_number</code> to create the loop condition.</p>

      <Collapsible title="Hint">
        <p>Write the while loop header using the following condition:</p>
        <CodeBlock language="python" codeString={`while guess != secret_number:`} />

        <p>The loop will continue running as long as <code className="inline">guess</code> is not equal to <code className="inline">secret_number</code>.</p>
      </Collapsible>
    </section>

    <section>
      <h2 id={`step-${getCurrentNumber()}-start-the-while-loop-body`}><a href={`#step-${getCurrentNumber()}-start-the-while-loop-body`} className="section-link">Step {getCurrentNumberAndIncrement()}: Start the While Loop Body</a></h2>
      <p>Now that we have our while loop header, let's create the body of the loop. This is the indented code that will run repeatedly as long as the loop condition is true. Inside the loop body, we need to first ask the user for their guess.</p>

      <p>Use <code className="inline">input()</code> to prompt the user to enter their guess. Overwrite your previously created variable <code className="inline">guess</code> with the user's input.</p>

      <p><em>Note that at this point, if you run your code, you may encounter an infinite loop. If you do end up stuck in a loop when you run your code, press the keys <code className="inline">CTRL+C</code> (<code className="inline">CONTROL+C</code>) on your keyboard to stop Python's execution and exit the loop.</em></p>

      <Collapsible title="Hint">
        <p>Here is an example of using <code className="inline">input()</code> to get a string from the user:</p>
        <CodeBlock language="python" codeString={`guess = input("Enter your name: ")`} />
      </Collapsible>
    </section>

    <section>
      <h2 id={`step-${getCurrentNumber()}-validating-user-input`}><a href={`#step-${getCurrentNumber()}-validating-user-input`} className="section-link">Step {getCurrentNumberAndIncrement()}: Validating User Input</a></h2>
      <p>Now that we have the user's input, we want to make sure that it is valid before we compare it with the secret number. Our game expects the user's input to be formatted as a number between <code className="inline">0</code> and <code className="inline">99</code>. Let's walk through some examples of invalid and valid inputs:</p>

      <CodeBlock language="python" codeString={`"a"      # not valid
" "      # not valid
"hello"  # not valid
"100"    # not valid

"92"    # valid
"4"     # valid
"0"     # valid`} />

      <p>To perform the task of validating the user's input, we'll define a custom function called <code className="inline">is_valid_guess()</code> above the loop. This function will take a single string parameter <code className="inline">text</code> and return a boolean value indicating whether the text is formatted as a valid guess or not. For now, simply create the function header for <code className="inline">is_valid_guess()</code>.</p>

      <Collapsible title="Hint">
        <p>Here is an example of a function header that takes a single parameter:</p>
        <CodeBlock language="python" codeString={`def change_name(new_name):`} />
      </Collapsible>
    </section>

    <section>
      <h2 id={`step-${getCurrentNumber()}-finishing-your-function`}><a href={`#step-${getCurrentNumber()}-finishing-your-function`} className="section-link">Step {getCurrentNumberAndIncrement()}: Finishing Your Function</a></h2>
      <p>Inside the function body, we need to check two things: first, that the string only has one or two digits, and second, that the string is formatted as a number.</p>

      <ol>
        <li>Check if <code className="inline">text</code> has a valid number of characters.</li>
        <li>Use the <code className="inline">.isnumeric()</code> method to check if <code className="inline">text</code> is formatted as a number.</li>
        <li>If both conditions are met, return <code className="inline">True</code> at the end of the function body. Otherwise, return <code className="inline">False</code>.</li>
      </ol>

      <Collapsible title="Hint">
        <p>There are a few ways to check if a string has a valid number of characters - one of the simple methods is to check its length using <code className="inline">len()</code>:</p>
        <CodeBlock language="python" codeString={`len("turtle")  # 6
len("32768")   # 5`} />
        <p><code className="inline">.isnumeric()</code> is a string method that checks if the string contains only numeric characters:</p>
        <CodeBlock language="python" codeString={`name = "Lawrence"
name.isnumeric()  # False

number = "abc123"
number.isnumeric()  # False

number = "123"
number.isnumeric()  # True`} />
      </Collapsible>
    </section>

    <section>
      <h2 id={`step-${getCurrentNumber()}-testing-your-function`}><a href={`#step-${getCurrentNumber()}-testing-your-function`} className="section-link">Step {getCurrentNumberAndIncrement()}: Testing Your Function</a></h2>
      <p>Now that you've created your function, test it with calls to the example inputs in the "Validating User Input" section above. Make sure that your results match up with the expected outputs.</p>

      <p>After testing and verifying that your function works as expected, comment out or delete your function calls. We will use the function in the next section.</p>

      <Collapsible title="Hint">
        <p>Here are some example calls to the function:</p>
        <CodeBlock language="python" codeString={`is_valid_guess("99")    # True
is_valid_guess("42")    # True
is_valid_guess("100")   # False
is_valid_guess("9999")  # False
is_valid_guess("a")     # False
is_valid_guess(" ")     # False`} />
      </Collapsible>
    </section>

    <section>
      <h2 id={`step-${getCurrentNumber()}-loop-flow`}><a href={`#step-${getCurrentNumber()}-loop-flow`} className="section-link">Step {getCurrentNumberAndIncrement()}: Loop Flow</a></h2>
      <p>At this point, you should have a while loop, a loop condition, and a function to check if the user's input is valid. If their input is a valid number, we want to continue to compare their guess to the secret number. Otherwise, we want to go back to the beginning of the loop and have the user try again to enter a valid guess.</p>

      <p>Inside the loop body, call the <code className="inline">is_valid_guess()</code> function with the <code className="inline">guess</code> as the argument. If the function returns <code className="inline">True</code>, we want to continue to the next part of the code. Otherwise, we want to print a message telling the user to enter a valid number, then go back to the beginning of the loop so that the user can try again to enter an input.</p>

      <Collapsible title="Hint">
        <p>Here is an example of controlling the flow of a loop using <code className="inline">continue</code>:</p>
        <CodeBlock language="python" codeString={`while True:
    username = input("Enter your username: ")
    if not is_valid_username(username):
        continue`} />

        <p>Alternatively, you could leave the <code className="inline">if</code> block empty for now:</p>
        <CodeBlock language="python" codeString={`while True:
    username = input("Enter your username: ")
    if is_valid_username(username):
        # Do more stuff here
        
    # Implicit else: jump back to the beginning of the loop`} />
      </Collapsible>
    </section>

    <section>
      <h2 id={`step-${getCurrentNumber()}-check-your-guess`}><a href={`#step-${getCurrentNumber()}-check-your-guess`} className="section-link">Step {getCurrentNumberAndIncrement()}: Check Your Guess</a></h2>
      <p>If the guess was a valid number, we want to compare it with the secret number. In order to compare your guess with the secret number, we first need to convert the guess to an integer. This is because <code className="inline">input()</code> assigned a string to <code className="inline">guess</code>, but <code className="inline">secret_number</code>, obtained from <code className="inline">random.randrange()</code>, is an integer.</p>

      <p>Inside your existing <code className="inline">if</code> statement, convert the user's guess to an integer and reassign it to <code className="inline">guess</code>.</p>

      <Collapsible title="Hint">
        <p>Use the <code className="inline">int()</code> casting function to change <code className="inline">guess</code> from a string to an integer. Remember to indent all the code inside the loop body.</p>
      </Collapsible>
    </section>

    <section>
      <h2 id={`step-${getCurrentNumber()}-compare-guess-with-secret-number`}><a href={`#step-${getCurrentNumber()}-compare-guess-with-secret-number`} className="section-link">Step {getCurrentNumberAndIncrement()}: Compare Guess with Secret Number</a></h2>
      <p>If the guess is equal to the secret number, print a congratulatory message and use <code className="inline">break</code> to exit the loop. Otherwise, print a message indicating whether the guess is too high or too low.</p>

      <Collapsible title="Hint">
        <p>For the comparison, create an <code className="inline">if-elif-else</code> statement to check if the guess is equal to, greater than, or less than the secret number, and display the corresponding message for each case.</p>

        <p>If you're not sure where to place this statement, here's a hint: Remember that we only want to make this <code className="inline">if-elif-else</code> comparison if we've already decided that the guess is valid.</p>
      </Collapsible>
    </section>

    <section>
      <h2 id={`step-${getCurrentNumber()}-test-your-game`}><a href={`#step-${getCurrentNumber()}-test-your-game`} className="section-link">Step {getCurrentNumberAndIncrement()}: Test Your Game</a></h2>
      <p>Congratulations! Your game is now ready to play.</p>

      <p>Remember that after the code in the loop body executes, the computer jumps back up to the loop condition. The loop condition is then checked again - if it is still true, the loop body is executed again. If it is false, we exit the loop. This process repeats until the loop condition becomes false.</p>

      <p>Therefore, after running the check on the user's guess, there are three possible scenarios:</p>
      <ol>
        <li className="multiline"><b>The correct number is guessed</b>, and we print a congratulatory message and exit the loop.</li>
        <li className="multiline"><b>The guessed number is too high</b>, and we print a message indicating that the guess is too high. The computer then jumps back to the beginning of the loop and checks the loop condition again.</li>
        <li className="multiline"><b>The guessed number is too low</b>, and we print a message indicating that the guess is too low. The computer then jumps back to the beginning of the loop and checks the loop condition again.</li>
      </ol>

      <p>Run your code and play your game a few times to verify that the game is working as expected.</p>
    </section>

    <section>
      <h2 id={`step-${getCurrentNumber()}-track-the-number-of-attempts`}><a href={`#step-${getCurrentNumber()}-track-the-number-of-attempts`} className="section-link">Step {getCurrentNumberAndIncrement()}: Track the Number of Attempts</a></h2>
      <p>Hopefully, your game is working and you've had a few solid play sessions. Now, let's add some enhancements to make it more engaging.</p>

      <p>Above your loop, add another a variable called <code className="inline">attempts</code> to keep track of how many guesses the user has made so far. What value should you assign to <code className="inline">attempts</code> initially?</p>
      <Collapsible title="Hint">
        <p><code className="inline">attempts</code> should be initialized to 0 before the loop starts, as no guess attempts have been made yet.</p>
      </Collapsible>
    </section>

    <section>
      <h2 id={`step-${getCurrentNumber()}-use-the-number-of-attempts`}><a href={`#step-${getCurrentNumber()}-use-the-number-of-attempts`} className="section-link">Step {getCurrentNumberAndIncrement()}: Use the Number of Attempts</a></h2>
      <p>Now that we've defined our <code className="inline">attempts</code> variable, let's use it to improve our game. Each time the user makes a valid guess, we should increment the <code className="inline">attempts</code> variable by <code className="inline">1</code>. We should <strong>not</strong> increment the <code className="inline">attempts</code> variable if the user's guess is invalid.</p>

      <p>Additionally, when the user makes a correct guess, modify your congratulatory statement to include the number of attempts it took the user to guess the correct number.</p>

      <Collapsible title="Hint">
        <p>Use string formatting or string concatenation to include the number of attempts in the congratulatory message. For example: </p>
        <CodeBlock language="python" codeString={`ships = 3
# Using string concatenation
print("I saw  " + str(ships) + " ships!")

# Using string formatting
print("I saw {} ships!".format(ships))`} />
      </Collapsible>
    </section>

    <section>
      <h2 id={`step-${getCurrentNumber()}-upping-the-challenge`}><a href={`#step-${getCurrentNumber()}-upping-the-challenge`} className="section-link">Step {getCurrentNumberAndIncrement()}: Upping the Challenge</a></h2>
      <p>Right now, the game isn't very difficult. While the game tracks the number of attempts, there's no limit to how many times the user can guess! There's nothing exciting about that.</p>
      <p>Modify the code to add a condition that checks if the user has exceeded seven attempts. If the user has exceeded the maximum number of attempts, print a message indicating that the user has lost the game and exit the loop using <code className="inline">break</code>.</p>

      <Collapsible title={"Hint"}>
        <p>Think carefully about where the <code className="inline">break</code> statement should be placed. When testing this addition to the game, ensure that the game ends after the seventh attempt, and doesn't allow them to guess again.</p>
      </Collapsible>
    </section>

    <section>
      <h2 id={`summary`}><a href={`#summary`} className="section-link">Summary</a></h2>
      <p>Great work! You've built a number guessing game using while loops, functions, and the random module. If you're up for it, consider some of the following upgrades to your project:</p>
      <ol>
        <li>If you used <code className="inline">break</code> or <code className="inline">continue</code>, can you think of ways to rewrite your code without those keywords?</li>
        <li>How could you allow the user to choose the range of numbers to guess from, or even the maximum number of attempts?</li>
        <li>How could you set different difficulty levels in the game?</li>
        <li>How might you set up the game to be played again without running the code again? For example, restarting the game if the user types a specific word or phrase.</li>
      </ol>
    </section>

    {/*
    <section>
      <h2 id={`sample-solutions`}><a href={`#sample-solutions`} className="section-link">Sample Solutions</a></h2>
      <Collapsible title="Solution">
        <p>This is one way to implement the number guessing game:</p>
        <CodeBlock language="python" codeString={`import random

# Generate a random number between 0 and 99
secret_number = random.randrange(0, 100)
guess = ""
attempts = 0

print("Welcome to the Number Guessing Game!")
print("I'm thinking of a number between 0 and 99.")

def is_valid_guess(text):
  if text.isnumeric() and len(text) < 3:
    return True
  else:
    return False

while guess != secret_number:
  if attempts >= 7:
    print("\nGame Over! You've exceeded the maximum number of attempts.")
    break
  
  guess = input("Enter your guess: ")
  if is_valid_guess(guess):
    guess = int(guess)    
    
    if guess == secret_number:
      print(f"\nCongratulations! You found the number in {attempts} attempts!")
      break
    elif guess < secret_number:
      print("Too low! Try again.")
    else:
      print("Too high! Try again.")
    
    attempts += 1
  else:
    print("Please enter a valid number between 0 and 99!")`} />
      </Collapsible>
    </section>
    */}
  </div >
}
