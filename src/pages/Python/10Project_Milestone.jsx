import React from 'react';
import ProgressBar from "../../components/ProgressBar";
import CodeBlock from '../../components/CodeBlock';
import Collapsible from '../../components/Collapsible';
import useSequentialCounter from '../../hooks/useSequentialCounter';

const Project09 = () => {
  const { getCurrentNumber, getCurrentNumberAndIncrement } = useSequentialCounter(1);

  return (
    <div className="lesson-container">
      <h1>Project: Basic Sentiment Analyzer</h1>
      <p>In this project, you'll build a basic sentiment analyzer program that can determine if a sentence has a positive, negative, or neutral tone. While our version will be very simple and imperfect, it will serve as an introduction to core ideas in artificial intelligence and natural language processing (NLP). We'll use a dictionary as the core of our program's "brain."</p>

      <ProgressBar />

      <section>
        <h2 id={`step-${getCurrentNumber()}`}><a href={`#step-${getCurrentNumber()}`} className="section-link">Step {getCurrentNumberAndIncrement()}: The Sentiment Lexicon</a></h2>
        <p>First, we need to teach our program which words are positive and which are negative. We'll use a dictionary for this, called a "sentiment lexicon." The keys will be words, and the values will be their sentiment score: <code className="inline">1</code> for positive, <code className="inline">-1</code> for negative, and <code className="inline">0</code> for neutral.</p>
        <p>Create a dictionary named <code className="inline">lexicon</code> with the following words and scores:</p>
        <CodeBlock language="python" codeString={`lexicon = {
    "happy": 1,
    "amazing": 1,
    "good": 1,
    "great": 1,
    "sad": -1,
    "bad": -1,
    "terrible": -1,
    "horrible": -1
}`} />
      </section>

      <section>
        <h2 id={`step-${getCurrentNumber()}`}><a href={`#step-${getCurrentNumber()}`} className="section-link">Step {getCurrentNumberAndIncrement()}: Get User Input</a></h2>
        <p>Next, prompt the user to enter a sentence that they want to analyze. Store their input in a variable called <code className="inline">user_sentence</code>.</p>
        <Collapsible title="Hint">
          <p>Use the <code className="inline">input()</code> function to get the sentence from the user.</p>
          <CodeBlock language="python" codeString={`user_sentence = input("Enter a sentence to analyze: ")`} />
        </Collapsible>
      </section>

      <section>
        <h2 id={`step-${getCurrentNumber()}`}><a href={`#step-${getCurrentNumber()}`} className="section-link">Step {getCurrentNumberAndIncrement()}: The Analyzer Logic</a></h2>
        <p>Now for the core logic. We need to calculate the total sentiment score of the user's sentence. Follow these steps:</p>
        <ol>
          <li>Initialize a variable called <code className="inline">total_score</code> to 0.</li>
          <li>Convert the <code className="inline">user_sentence</code> to lowercase and split it into a list of words.</li>
          <li>Loop through each word in the list.</li>
          <li>Inside the loop, use the <code className="inline">.get()</code> method to find the word in our <code className="inline">lexicon</code>. If the word isn't found, default to a score of 0.</li>
          <li>Add the score for each word to <code className="inline">total_score</code>.</li>
        </ol>
        <Collapsible title="Completed Code">
          <CodeBlock language="python" codeString={`total_score = 0
words = user_sentence.lower().split()

for word in words:
    total_score += lexicon.get(word, 0)`} />
        </Collapsible>
      </section>

      <section>
        <h2 id={`step-${getCurrentNumber()}`}><a href={`#step-${getCurrentNumber()}`} className="section-link">Step {getCurrentNumberAndIncrement()}: Determine the Outcome</a></h2>
        <p>Finally, use an <code className="inline">if-elif-else</code> statement to check the <code className="inline">total_score</code> and print the final sentiment.</p>
        <ul>
          <li>If the score is greater than 0, print "Sentiment: Positive".</li>
          <li>If the score is less than 0, print "Sentiment: Negative".</li>
          <li>Otherwise, print "Sentiment: Neutral".</li>
        </ul>
        <p>Now, run your complete program and test it with different sentences!</p>
      </section>

      <section>
        <h2 id="summary"><a href="#summary" className="section-link">Summary</a></h2>
        <p>Congratulations! You've built a basic sentiment analyzer. You used a dictionary to store knowledge and then used that knowledge to analyze new data. This is a core principle of many AI systems.</p>
        <p>Consider these bonus challenges to improve your project:</p>
        <ol>
          <li><b>Expand the Lexicon:</b> Add more words to your <code className="inline">lexicon</code> to make it more accurate.</li>
          <li><b>Handle Punctuation:</b> Right now, a word like "happy!" won't be found. How could you strip punctuation from words before checking them?</li>
          <li><b>Handle Negations:</b> A sentence like "not a good day" will currently be rated as positive. How could you check for words like "not" and reverse the sentiment of the next word?</li>
        </ol>
      </section>
    </div>
  );
};

export default Project09;
