import React from 'react';
import ProgressBar from "../../components/ProgressBar";
import CodeBlock from "../../components/CodeBlock";
import Collapsible from "../../components/Collapsible";
import useSequentialCounter from "../../hooks/useSequentialCounter";

export default function Project08() {
  const { getCurrentNumber, getCurrentNumberAndIncrement } = useSequentialCounter(0);

  return (
    <div className="lesson-container">
      <ProgressBar />

      <section>
        <h1>Project: Music Playlist Manager</h1>
        <p>
          Welcome to the Music Playlist Manager project! In this project, you'll create a Python program that allows you to manage a list of your favorite songs.
          You'll be able to add songs, remove them, view your playlist, and even move a song to the top of your listening queue.
        </p>
        <p>This project will help you practice using:</p>
        <ul>
          <li>Lists to store and manipulate data (in this case, the data being your songs).</li>
          <li>While loops for getting user input and handling user input errors.</li>
          <li>Conditional statements to perform different actions based on user input.</li>
          <li>Functions to organize your code.</li>
        </ul>
      </section>

      <section>
        <h2 id={`step-${getCurrentNumber()}-display-menu`}><a href={`#step-${getCurrentNumber()}-display-menu`} className="section-link">Step {getCurrentNumberAndIncrement()}: Display the Menu Options</a></h2>
        <p>Create a function called <code className="inline">display_menu</code>. Your function should not take any parameters.</p>
        <p>Inside the function body, print the available menu options. Each option should have a number starting from <code className="inline">1</code>. Your menu should include the following options:</p>
        <ol>
          <li>View Playlist</li>
          <li>Add Song</li>
          <li>Remove Song</li>
          <li>Move Song to Front</li>
          <li>Clear Playlist</li>
          <li>Exit</li>
        </ol>

        <Collapsible title="Hint">
          <p>For example:</p>
          <CodeBlock language="python" codeString={`print("Menu:")
print("1. View Playlist")
# ...
print("6. Exit")`} />

          <p>Alternatively, you can use the newline character <code className="inline">\n</code> escape character in a string to add a lines in between a string in a single print statement, or use triple quotes to create a multiline string.</p>
        </Collapsible>
      </section>

      <section>
        <h2 id={`step-${getCurrentNumber()}-initialize-playlist`}><a href={`#step-${getCurrentNumber()}-initialize-playlist`} className="section-link">Step {getCurrentNumberAndIncrement()}: Initialize the Playlist</a></h2>
        <p>We'll need a place to hold our songs. Create an empty list called <code className="inline">playlist</code>.</p>

        <Collapsible title="Hint">
          <p>We initialize an empty list because, at the start of the program, the user hasn't added any songs yet. As the user interacts with the program, we'll add songs to this list.</p>
        </Collapsible>
      </section>

      <section>
        <h2 id={`step-${getCurrentNumber()}-main-loop`}><a href={`#step-${getCurrentNumber()}-main-loop`} className="section-link">Step {getCurrentNumberAndIncrement()}: Start the Main Program Loop</a></h2>
        <p>Our playlist manager needs to keep running so the user can perform as many menu actions as they want. We'll use a <code className="inline">while True:</code> loop for this, which is a loop that will continue indefinitely until the user chooses to exit.</p>
        <p>Right after initializing your <code className="inline">playlist</code>, start an infinite loop by defining the loop header <code className="inline">while True:</code>. Then, inside the loop body, call the <code className="inline">display_menu</code> function to show the menu options to the user.</p>

        <p>Note: Don't run your code yet, or you'll be stuck in an infinite loop!</p>

        <Collapsible title="Hint">
          <p><code className="inline">while True:</code> creates a loop that will run forever unless a <code className="inline">break</code> statement is encountered inside it. This is ideal for menu-driven programs where you want to repeatedly offer choices to the user.</p>
          <p>The basic structure looks like this:</p>
          <CodeBlock language="python" codeString={`# Previous code

while True:
    # Code inside this indented block will repeat
    print("I am a message that will repeat infinitely!")`} />
        </Collapsible>
      </section>

      <section>
        <h2 id={`step-${getCurrentNumber()}-get-choice`}><a href={`#step-${getCurrentNumber()}-get-choice`} className="section-link">Step {getCurrentNumberAndIncrement()}: Get The User's Choice</a></h2>
        <p>After the user sees the menu of options, they should be allowed to select a choice. Use the <code className="inline">input()</code> function to prompt the user to enter the number for their desired action, and store their response in a variable called <code className="inline">choice</code>.</p>

        <Collapsible title="Hint">
          <p>Remember that the <code className="inline">input()</code> function always returns the user's typed text as a string. So, when you check the user's <code className="inline">choice</code> later (e.g., <code className="inline">if choice == '1':</code>), you'll be comparing it to string values like <code className="inline">'1'</code>, <code className="inline">'2'</code>, etc., not integer values like <code className="inline">1</code>, <code className="inline">2</code>.</p>
          <p>A typical way to get input is: <code className="inline">variable_name = input("Your prompt message: ")</code>.</p>
        </Collapsible>
      </section>


      <section>
        <h2 id={`step-${getCurrentNumber()}-action-exit`}><a href={`#step-${getCurrentNumber()}-action-exit`} className="section-link">Step {getCurrentNumberAndIncrement()}: Exit Program</a></h2>
        <p>Before we get into the fun stuff, let's make sure that we can safely run and exit our while loop. Add an <code className="inline">if</code> condition to check if the <code className="inline">choice</code> is <code className="inline">'6'</code>. If it is, print a goodbye message and then use the <code className="inline">break</code> keyword to terminate the <code className="inline">while</code> loop and end the program.</p>

        <p>After doing this, you should be able to run the program and exit it by typing <code className="inline">'6'</code> when prompted for your choice.</p>

        <Collapsible title="Hint">
          <p>The <code className="inline">break</code> keyword immediately stops the innermost loop it's in. In this case, it stops the <code className="inline">while True:</code> loop, and since there's no more code after our loop, the program finishes.</p>
          <p>Structure:</p>
          <CodeBlock language="python" codeString={`if choice == '6':
    print("Exiting playlist manager. Goodbye!")
    break`} />
        </Collapsible>
      </section>

      <section>
        <h2 id={`step-${getCurrentNumber()}-action-view`}><a href={`#step-${getCurrentNumber()}-action-view`} className="section-link">Step {getCurrentNumberAndIncrement()}: View Playlist</a></h2>
        <p>Let's handle the first menu option: viewing the playlist. Modify the <code className="inline">if</code> statement in the previous step to check if the <code className="inline">choice</code> is <code className="inline">'1'</code>, and change the existing <code className="inline">if choice == '6':</code> to <code className="inline">elif choice == '6':</code>. Iterate through the playlist and print each song. The output should resemble the format below: </p>
        <CodeBlock language="txt" codeString={`1. First Song
2. Second Song
...
10. Last Song`} />

        <Collapsible title="Hint">
          <p>You can use <code className="inline">enumerate()</code> to get each song and its order in the playlist.</p>
          <CodeBlock language="python" codeString={`for i, song in enumerate(playlist):`} />
        </Collapsible>
      </section>

      <section>
        <h2 id={`step-${getCurrentNumber()}-add-song-condition`}><a href={`#step-${getCurrentNumber()}-add-song-condition`} className="section-link">Step {getCurrentNumberAndIncrement()}: Add Song</a></h2>
        <p>Let's handle when the user chooses the option to add a song. This involves adding another branch to our <code className="inline">if-elif-else</code> structure that handles the user's main menu choice.</p>
        <p>Create an <code className="inline">elif</code> statement that checks if the user's <code className="inline">choice</code> variable matches the menu number for adding a song.</p>
        <Collapsible title="Hint">
          <p>Your main <code className="inline">if-elif-else</code> structure checks the <code className="inline">choice</code> variable. You'll add a new <code className="inline">elif choice == 'X':</code> where 'X' is the menu number for adding a song (e.g., '2'). All the logic for adding a song will go inside this block.</p>
          <p>Example of extending the structure:</p>
          <CodeBlock language="python" codeString={`if choice == '1':
    # ... view playlist logic ...
elif choice == '2': # Assuming '2' is for adding a song
    # Logic for adding a song will go here
elif choice == '6':
    # ... exit logic ...
else:
    # ... invalid choice logic ...`} />
        </Collapsible>
      </section>

      <section>
        <h2 id={`step-${getCurrentNumber()}-get-song-name`}><a href={`#step-${getCurrentNumber()}-get-song-name`} className="section-link">Step {getCurrentNumberAndIncrement()}: Get Song Name from User</a></h2>
        <p>Once we know the user wants to add a song, we need to ask them for the song's title.</p>
        <p>Inside the <code className="inline">elif</code> block for adding a song, use the <code className="inline">input()</code> function to display a prompt asking the user to enter the name of the song. Store the user's response in a variable called <code className="inline">song_name</code>.</p>
        <Collapsible title="Hint">
          <p>The <code className="inline">input()</code> function displays a message to the user and waits for them to type something and press Enter. The text they type is then returned as a string.</p>
          <p>For example: <code className="inline">new_song_title = input("Enter the title of the song: ")</code>. The variable <code className="inline">new_song_title</code> will then hold whatever the user typed.</p>
        </Collapsible>
      </section>

      <section>
        <h2 id={`step-${getCurrentNumber()}-add-to-list`}><a href={`#step-${getCurrentNumber()}-add-to-list`} className="section-link">Step {getCurrentNumberAndIncrement()}: Add Song to the Playlist</a></h2>
        <p>After getting the song's name from the user, the next step is to add it to our <code className="inline">playlist</code> list. Add <code className="inline">song_name</code> to the end of the list either with list concatenation or <code className="inline">.append()</code>.</p>
        <p>Once the song has been added to the playlist, display a confirmation message to the user. The output should resemble the format below: </p>
        <CodeBlock language="txt" codeString={`'SONG NAME' has been added to your playlist.`} />
        <Collapsible title="Hint">
          <p>Lists in Python have a built-in method called <code className="inline">.append()</code> which adds an item to the very end of the list.</p>
          <p>If your list is called <code className="inline">names</code> and the song title is stored in <code className="inline">name</code>, you would use: <code className="inline">names.append(name)</code>.</p>
        </Collapsible>
      </section>

      <section>
        <h2 id={`step-${getCurrentNumber()}-remove-condition`}><a href={`#step-${getCurrentNumber()}-remove-condition`} className="section-link">Step {getCurrentNumberAndIncrement()}: Remove Song</a></h2>
        <p>Next, let's tackle removing a song from the playlist. As you did with the first menu option, add an <code className="inline">elif</code> condition to your <code>display_menu</code> function's <code className="inline">if-elif-else</code> structure that checks if the user's <code className="inline">choice</code> is <code className="inline">'3'</code>.</p>
        <p>Inside this new <code className="inline">elif</code> block, the very first thing to do is to check if the playlist is actually empty. After all, we can't remove a song if there are no songs! Create an if statement nested inside the <code className="inline">elif</code> block to check if the playlist is empty. If so, display a message informing the user that the playlist is empty.</p>
        <Collapsible title="Hint">
          <p>You'll add an <code className="inline">elif choice == '3':</code> to your <code className="inline">if-elif-else</code> structure.</p>
          <p>To check if a list is empty, you can use the <code className="inline">len()</code> method.</p>
          <CodeBlock language="python" codeString={`elif choice == '3':
  if ...`} />
        </Collapsible>
      </section>

      <section>
        <h2 id={`step-${getCurrentNumber()}-display-for-removal`}><a href={`#step-${getCurrentNumber()}-display-for-removal`} className="section-link">Step {getCurrentNumberAndIncrement()}: Display Songs for Removal</a></h2>
        <p>If the playlist is not empty, we need to display the playlist so the user can choose which song to remove. This is similar to the "View Playlist" option.</p>
        <p>Add an <code className="inline">else</code> block: You should iterate through the <code className="inline">playlist</code> and print each song along with its numerical position in the playlist.</p>
        <Collapsible title="Hint">
          <p>Using <code className="inline">enumerate(playlist, 1)</code> will give you both an index (starting from 1) and the song item, making it easy to display a numbered list.</p>
          <CodeBlock language="python" codeString={`print("Songs available to remove:")
for i, song in enumerate(playlist, 1):
    print(f"{i}. {song}")`} />
        </Collapsible>
      </section>

      <section>
        <h2 id={`step-${getCurrentNumber()}-get-removal-choice`}><a href={`#step-${getCurrentNumber()}-get-removal-choice`} className="section-link">Step {getCurrentNumberAndIncrement()}: Get Song Number for Removal</a></h2>
        <p>After displaying the numbered list of songs, ask the user to enter the number corresponding to the song they wish to remove.</p>
        <p>Use the <code className="inline">input()</code> function to get this number and store it in a variable called <code className="inline">song_number_to_remove</code>.</p>
        <Collapsible title="Hint">
          <p>The prompt should be clear, for example: <code className="inline">song_number_to_remove = input("Enter the number of the song to remove: ")</code>.</p>
          <p>Remember, <code className="inline">input()</code> returns a string, even if the user types a number. We'll handle converting it to an integer in the next step.</p>
        </Collapsible>
      </section>

      <section>
        <h2 id={`step-${getCurrentNumber()}-validate-removal-input`}><a href={`#step-${getCurrentNumber()}-validate-removal-input`} className="section-link">Step {getCurrentNumberAndIncrement()}: Validate Song Number</a></h2>
        <p>It's crucial to validate the user's input. They might type text instead of a number, or a number that's too large or too small given the size of the current playlist.</p>
        <p>Check if the user's input is one of the valid numerical positions for songs in the playlist. For example, if there are only three songs, the user should only be able to select <code className="inline">'1'</code>, <code className="inline">'2'</code>, or <code className="inline">'3'</code>.</p>
        <Collapsible title="Hint">
          <p>Remember that list indices are 0-based. If the user enters <code className="inline">'1'</code> for the first song, its index is <code className="inline">0</code>. So you'll need to subtract <code className="inline">1</code> from <code className="inline">song_num_to_remove</code> when you actually access the list item.</p>
        </Collapsible>
      </section>

      <section>
        <h2 id={`step-${getCurrentNumber()}-perform-removal`}><a href={`#step-${getCurrentNumber()}-perform-removal`} className="section-link">Step {getCurrentNumberAndIncrement()}: Remove Selected Song</a></h2>
        <p>If the user's input for the song number has been successfully validated (it's a number and it's in the correct range), we can now remove the song from the playlist.</p>
        <p>Inside the <code className="inline">if</code> block where you confirmed the song number is valid, use the <code className="inline">.pop()</code> method to remove the song from the <code className="inline">playlist</code>. Remember to adjust the user's input number to be a 0-based index for the list (i.e., subtract 1).</p>

        <p>Finally, let the user know that the song has been successfully removed. The <code className="inline">.pop()</code> method conveniently returns the item that was removed, so store it to a variable, then print out a message like <code className="inline">"Removed SONG_NAME from your playlist."</code></p>
        <Collapsible title="Hint">
          <p>If <code className="inline">song_num_to_remove</code> holds the 1-based number the user entered, you'd use <code className="inline">playlist.pop(song_num_to_remove - 1)</code>.</p>
          <CodeBlock language="python" codeString={`removed_song_title = playlist.pop(song_num_to_remove - 1)
print(removed_song_title)`} />
        </Collapsible>
      </section>

      <section>
        <h2 id={`step-${getCurrentNumber()}-move-condition`}><a href={`#step-${getCurrentNumber()}-move-condition`} className="section-link">Step {getCurrentNumberAndIncrement()}: Move Song</a></h2>
        <p>Let's implement the feature to move a song to the front of the playlist. This starts with an <code className="inline">elif</code> block for the user's menu choice.</p>
        <p>Inside this block, set up an <code className="inline">if-elif-else</code> structure.</p>
        <ol>
          <li>In the if statement, check if the playlist is empty and inform the user.</li>
          <li>In the elif statement, check if the playlist contains only one song and inform the user.</li>
          <li>Leave the <code className="inline">else</code> statement empty for now. We'll implement the logic for moving a song to the front of the playlist in the next step.</li>
        </ol>

        <Collapsible title="Hint">
          <CodeBlock language="python" codeString={`elif choice == '4':
    if playlist == []:
        print("Playlist is empty. Nothing to move.")
    elif len(playlist) == 1:
        print("Only one song in the playlist, cannot move.")
    else:
        # Full logic for when the playlist has songs to move will go here in the next step
        pass`} />
        </Collapsible>
      </section>

      <section>
        <h2 id={`step-${getCurrentNumber()}-display-for-moving`}><a href={`#step-${getCurrentNumber()}-display-for-moving`} className="section-link">Step {getCurrentNumberAndIncrement()}: Display Songs for Moving</a></h2>
        <p>If the playlist has two or more songs, we need to show the user the current order so they can choose which song to move.</p>
        <p>In the <code className="inline">else</code> part of your playlist state check, display the current playlist as you did in the "View Playlist" option and "Remove Song" option.</p>
        <Collapsible title="Hint">
          <p>If you are using the same code as in the "View Playlist" option, you can copy and paste it here, or better yet, you can call a function that you created for the purpose of displaying the menu.</p>
        </Collapsible>
      </section>

      <section>
        <h2 id={`step-${getCurrentNumber()}-get-move-choice`}><a href={`#step-${getCurrentNumber()}-get-move-choice`} className="section-link">Step {getCurrentNumberAndIncrement()}: Get Song Number to Move</a></h2>
        <p>
          After displaying the songs, ask the user to enter the number of the song they want to move to the front of the playlist.
        </p>
        <p>Use the <code className="inline">input()</code> function to get this number and store it in a variable called <code className="inline">song_num_to_move</code>.</p>
        <Collapsible title="Hint">
          <p>A clear prompt like <code className="inline">song_num_to_move = input("Enter the number of the song to move to the front: ")</code> will guide the user.</p>
          <p>This input will be a string, and we'll validate and convert it next.</p>
        </Collapsible>
      </section>

      <section>
        <h2 id={`step-${getCurrentNumber()}-validate-move-input`}><a href={`#step-${getCurrentNumber()}-validate-move-input`} className="section-link">Step {getCurrentNumberAndIncrement()}: Validate Input for Moving</a></h2>
        <p>Just like with removing a song, you must validate the user's input. It needs to be a number, and that number must correspond to an actual song in the playlist. The validation logic is very similar to the one used for removing a song.</p>
      </section>

      <section>
        <h2 id={`step-${getCurrentNumber()}-perform-move`}><a href={`#step-${getCurrentNumber()}-perform-move`} className="section-link">Step {getCurrentNumberAndIncrement()}: Perform the Move</a></h2>
        <p>
          If the input is valid, you can now move the song. This is a two-step process using list methods:
          <ol>
            <li>First, remove the chosen song from its current position in the playlist. The <code className="inline">.pop(index)</code> method is ideal as it removes the song and also returns it, allowing you to save it to a variable.</li>
            <li>Second, insert the song you just <code className="inline">pop</code>ped at the very beginning of the playlist. You can either use the <code className="inline">.insert()</code> method or list concatenation to achieve this.</li>
            <li>Finally, print a message that lets the user know that the song has been successfully moved to the front of the playlist.</li>
          </ol>
        </p>

        <Collapsible title="Hint">
          <p>The process looks something like this:</p>
          <CodeBlock language="python" codeString={`drinks = ["coffee", "tea", "water"]
drinks.insert(0, "juice")`} />
        </Collapsible>
      </section>

      <section>
        <h2 id={`step-${getCurrentNumber()}-clear-condition`}><a href={`#step-${getCurrentNumber()}-clear-condition`} className="section-link">Step {getCurrentNumberAndIncrement()}: Clear Playlist</a></h2>

        <p>As you did with the other menu options, add an <code className="inline">elif</code> condition to your <code>display_menu</code> function's <code className="inline">if-elif-else</code> structure that checks if the user's <code className="inline">choice</code> is <code className="inline">'5'</code>.</p>
        <Collapsible title="Hint">
          <p>This <code className="inline">elif choice == '5':</code> will be another branch in your main decision-making structure, similar to how you've handled other menu options like "View Playlist" or "Add Song".</p>
        </Collapsible>
      </section>

      <section>
        <h2 id={`step-${getCurrentNumber()}-perform-clear`}><a href={`#step-${getCurrentNumber()}-perform-clear`} className="section-link">Step {getCurrentNumberAndIncrement()}: Perform the Clear Operation</a></h2>
        <p>Once the program knows the user wants to clear the playlist, the next action is to empty the list. It's also good to handle the case where the playlist might already be empty.</p>
        <p>Inside the <code className="inline">elif</code> block for clearing the playlist, first check if the <code className="inline">playlist</code> is already empty. If it is, you can print a message informing the user that this is the case. Otherwise, use the list's <code className="inline">.clear()</code> method on your <code className="inline">playlist</code> variable to remove all items.</p>
        <p>After clearing the playlist, you print a message to inform the user that the playlist has been cleared successfully.</p>
        <Collapsible title="Hint">
          <p>You can check if the list is empty using <code className="inline">if not playlist:</code>. If this condition is true, print your message. In the <code className="inline">else</code> part (meaning the list is not empty), you would then call <code className="inline">playlist.clear()</code>.</p>
          <p>The <code className="inline">.clear()</code> method directly modifies the list, making it empty.</p>
        </Collapsible>
      </section>

      <section>
        <h2 id={`step-${getCurrentNumber()}-action-invalid`}><a href={`#step-${getCurrentNumber()}-action-invalid`} className="section-link">Step {getCurrentNumberAndIncrement()}: Handle Invalid Menu Choices</a></h2>
        <p>What if the user types something that isn't a valid menu option? We should tell them!</p>
        <p>Add an <code className="inline">else</code> block at the end of your <code>display_menu</code> function's <code className="inline">if-elif</code> structure. This block will run if none of the previous choices were picked. Print the message <code className="inline">"Invalid choice, please try again."</code></p>

        <Collapsible title="Hint">
          <p>An <code className="inline">else</code> block at the end of an <code className="inline">if-elif</code> chain acts as a default case. If none of the <code className="inline">if</code> or <code className="inline">elif</code> conditions are true, the <code className="inline">else</code> block's code is executed.</p>
          <p>Structure:</p>
          <CodeBlock language="python" codeString={`# Continuing the if-elif-else structure
else:
    print("Invalid option, please select a number from 1 to 6.")`} />
        </Collapsible>
      </section>

      <section>
        <h2 id="summary"><a href="#summary" className="section-link">Summary & Next Steps</a></h2>
        <p>Fantastic work completing the Music Playlist Manager project! You've built a functional command-line application that handles various list manipulations, user input, and menu-driven interactions.</p>
        <p>Through this project, you've practiced:</p>
        <ul>
          <li><strong>Python Lists</strong>: Creating them, adding items (<code className="inline">append</code>), removing items (<code className="inline">pop</code>, <code className="inline">clear</code>), inserting items (<code className="inline">insert</code>), checking their length (<code className="inline">len</code>), and iterating through them.</li>
          <li><strong>Loops</strong>: Using a <code className="inline">while</code> loop to create a continuous menu system.</li>
          <li><strong>Conditional Logic</strong>: Employing <code className="inline">if/elif/else</code> statements to make decisions based on user input.</li>
          <li><strong>User Input</strong>: Getting data from the user with <code className="inline">input()</code> and converting it when necessary.</li>
          <li><strong>String Methods</strong>: Using <code className="inline">.isnumeric()</code> for input validation.</li>
          <li><strong>Readability</strong>: Using <code className="inline">enumerate()</code> for user-friendly numbered lists.</li>
        </ul>

        <h3>Additional Challenges</h3>
        <p>If you're feeling adventurous, here are some ideas to enhance your playlist manager:</p>
        <ul>
          <li><strong>Prevent Duplicate Songs</strong>: Before adding a song, check if it's already in the playlist.</li>
          <li><strong>Refactoring Repeated Code</strong>: You can improve your code by creating functions to handle repetitive tasks, such as displaying the playlist or checking valid user input.</li>
          <li><strong>Shuffle Playlist</strong>: Implement a feature to randomly shuffle the songs in the playlist (Hint: look at the <code className="inline">random</code> module and its <code className="inline">shuffle()</code> function).</li>
        </ul>
      </section>
    </div>
  );
}