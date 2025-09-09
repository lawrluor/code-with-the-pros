import React from 'react';
import ProgressBar from "../../components/ProgressBar";
import CodeBlock from '../../components/CodeBlock';
import Collapsible from '../../components/Collapsible';
import useSequentialCounter from '../../hooks/useSequentialCounter';

const Project09 = () => {
  const { getCurrentNumber, getCurrentNumberAndIncrement } = useSequentialCounter(1);

  return (
    <div className="lesson-container">
      <h1>Project: Build Your Own Quiz Game</h1>
      <p>In this project, you'll create a fun, interactive quiz game from scratch. You'll use a dictionary to store your questions and answers, and then write the code to present the quiz to the user and keep score. This is a great way to practice working with dictionaries, loops, and user input.</p>

      <ProgressBar />

      <section>
        <h2 id={`step-${getCurrentNumber()}`}><a href={`#step-${getCurrentNumber()}`} className="section-link">Step {getCurrentNumberAndIncrement()}: Create the Quiz Data</a></h2>
        <p>First, you need questions and answers. A dictionary is the perfect data structure for this, allowing you to map each question (a key) to its correct answer (a value).</p>
        <p>Create a dictionary called <code className="inline">quiz_data</code>. Add at least four questions about a topic you enjoy, like movies, science, or video games.</p>
        <CodeBlock language="python" codeString={`# Example for a science quiz
quiz_data = {
    "What is the chemical symbol for water?": "H2O",
    "What planet is known as the Red Planet?": "Mars",
    "What is the powerhouse of the cell?": "Mitochondria",
    "What force pulls objects towards the Earth?": "Gravity"
}`} />
      </section>

      <section>
        <h2 id={`step-${getCurrentNumber()}`}><a href={`#step-${getCurrentNumber()}`} className="section-link">Step {getCurrentNumberAndIncrement()}: The Quiz Loop</a></h2>
        <p>Next, you need to present each question to the user and get their answer. A <code className="inline">for</code> loop is ideal for iterating through your dictionary.</p>
        <p>Write a loop that goes through each key-value pair in your <code className="inline">quiz_data</code> dictionary using the <code className="inline">.items()</code> method. Inside the loop, print the question and then use <code className="inline">input()</code> to get the user's answer.</p>
        <Collapsible title="Hint">
          <p>Your loop structure should look something like this:</p>
          <CodeBlock language="python" codeString={`for question, correct_answer in quiz_data.items():
    user_answer = input(question + " ")
    # ... logic to check the answer will go here ...`} />
        </Collapsible>
      </section>

      <section>
        <h2 id={`step-${getCurrentNumber()}`}><a href={`#step-${getCurrentNumber()}`} className="section-link">Step {getCurrentNumberAndIncrement()}: Check Answers & Keep Score</a></h2>
        <p>Now, let's process the user's answer. You'll need a variable to keep score, and an <code className="inline">if</code> statement to see if the user was right.</p>
        <ol>
          <li>Before the loop starts, create a variable called <code className="inline">score</code> and set it to 0.</li>
          <li>Inside the loop, after you get the user's answer, use an <code className="inline">if</code> statement to compare their answer to the <code className="inline">correct_answer</code>.</li>
          <li>To make it case-insensitive, use the <code className="inline">.lower()</code> method on both the user's answer and the correct answer.</li>
          <li>If they are correct, print a confirmation message and add 1 to their <code className="inline">score</code>.</li>
          <li>If they are wrong, let them know and tell them the correct answer.</li>
        </ol>
        <Collapsible title="Completed Code Snippet">
          <CodeBlock language="python" codeString={`score = 0
for question, correct_answer in quiz_data.items():
    user_answer = input(question + " ")
    if user_answer.lower() == correct_answer.lower():
        print("Correct!")
        score += 1
    else:
        print(f"Sorry, the correct answer is {correct_answer}")`} />
        </Collapsible>
      </section>

      <section>
        <h2 id={`step-${getCurrentNumber()}`}><a href={`#step-${getCurrentNumber()}`} className="section-link">Step {getCurrentNumberAndIncrement()}: Show the Final Results</a></h2>
        <p>After the loop has finished, the quiz is over. The last step is to tell the user their final score. You can use an f-string to make a nice, formatted message.</p>
        <p>To calculate the total number of questions, you can use <code className="inline">len(quiz_data)</code>.</p>
        <CodeBlock language="python" codeString={`# This code goes *after* the loop has finished
total_questions = len(quiz_data)
print(f"Quiz Complete! You scored {score} out of {total_questions}.")`} />
      </section>

      <section>
        <h2 id="summary"><a href="#summary" className="section-link">Summary</a></h2>
        <p>Great job! You've built a fully functional quiz game. You used a dictionary to store data, a loop to iterate through it, conditionals to make decisions, and variables to keep track of state. These are all fundamental skills in programming.</p>
        <p>Consider these bonus challenges to take your project to the next level:</p>
        <ol>
          <li><b>Multiple Choice:</b> How could you change your dictionary to support multiple-choice questions? (Hint: The value for each question key could be another dictionary containing a list of options and the correct answer).</li>
          <li><b>Randomize Questions:</b> The questions always appear in the same order. How could you ask them in a random order? (Hint: Look into Python's built-in <code className="inline">random</code> module).</li>
          <li><b>Different Topics:</b> How could you let the user choose a quiz topic at the start (e.g., 'Science', 'History')? You would need to set up multiple quiz dictionaries.</li>
        </ol>
      </section>
    </div>
  );
};

export default Project09;
