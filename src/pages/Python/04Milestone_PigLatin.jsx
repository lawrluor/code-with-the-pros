import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import Collapsible from '../../components/Collapsible';

const MilestoneProject04 = () => {
    return (
        <div className="lesson-container">
            <h1>A "Secret" Language: "Pig Latin"</h1>
            <p>Pig Latin is a playful way of altering English words. In elementary or middle school, you may have even used it as a "secret code" with your friends or siblings! The idea behind Pig Latin is simple: you take a word, move the first letter to the end, and add <code className="inline">"ay"</code> to the end. In this project, you'll create your own Pig Latin encoder using conditional statements, string indexing and slicing, and the <code className="inline">.input()</code> method.</p>

            <section>
                <h2 id="what-is-pig-latin"><a href="#what-is-pig-latin" className="section-link">What is Pig Latin?</a></h2>
                <p>Before writing any code, let's review more specific rules about how Pig Latin works:</p>
                <ol>
                    <li>If a word starts with a vowel, add <code className="inline">"way"</code> to the end of the word.</li>
                    <li>If a word starts with a consonant, move all the consonants that appear before the first vowel to the end of the word, then add <code className="inline">"ay"</code>.</li>
                    <li>If a word is one letter or less, make no alterations and simply return the same word.</li>
                    <li>For now, we will ignore handling all other cases, including words that start with multiple consonants, special characters, or numbers. This means your output for in these cases might not follow the Pig Latin rules.</li>
                </ol>

                <p>For our purposes, <code className="inline">"y"</code> will not count as a vowel. Here are some example outputs of words that have been translated to Pig Latin:</p>

                <CodeBlock language={"txt"} codeString={`# 1. Word starts with vowel
"apple" becomes "appleway"

# 2. Word starts with consonant
"banana" becomes "ananabay"

# 3. Word is one character or less
"p" remains "p"

# 4. None of the above applies
"Tree" remains "Tree"
"hi123" remains "hi123"
"!@#" remains "!@#"`} />
            </section>

            <section>
                <h2 id="step-1-understand-the-project"><a href="#step-1-understand-the-project" className="section-link">Step 1: Understand the Project</a></h2>
                <p>We'll need a way to get a word from the user. Use the <code className="inline">input()</code> function and assign the user input to a variable called <code className="inline">word</code>:</p>
                <Collapsible title="Hint">
                    <CodeBlock language={"python"} codeString={`word = input('Enter a word to translate to Pig Latin: ')`} />
                </Collapsible>
            </section>

            <section>
                <h2 id="step-2-initialize-variables"><a href="#step-2-initialize-variables" className="section-link">Step 2: Initialize Variables</a></h2>
                <p>We want all our letters in Pig Latin to be lowercase. Consider the following example: </p>
                <CodeBlock language={"txt"} codeString={`"Python" becomes "ythonPay"`}/>

                <p>Not that Pig Latin is particularly hard to crack, but this makes it just a bit <em>too</em> obvious as to what we're looking at. Use the <code className="inline">.lower()</code> string method on the user's input and reassign it to <code className="inline">word</code>.</p>

                <Collapsible title="Hint">
                    <p>Here's an example of using the <code className="inline">.lower()</code> string method:</p>
                    <CodeBlock language="python" codeString={`word = "PythOn"
word = word.lower()
print(word)  # prints "python`} />
                </Collapsible>
            </section>

            <section>
                <h2 id="step-3-main-algorithm"><a href="#step-3-main-algorithm" className="section-link">Step 3: Main Algorithm</a></h2>
                <p>In Pig Latin, as outlined in step zero, there are different rules to follow depending on the word itself. Use <code className="inline">if</code>, <code className="inline">elif</code>, and <code className="inline">else</code> statements to make sure that we are following the correct rules for their respective conditions.</p>

                <Collapsible title="Hint">
                    <p>There are three specific conditions to check for as outlined in step zero. All other words that don't match these conditions should be handled together with <code className="inline">else</code>.</p>
                </Collapsible>
            </section>

            <section>
                <h2 id="step-4-running-your-translator"><a href="#step-4-running-your-translator" className="section-link">Step 4: Running Your Translator</a></h2>
                <p>Create a variable called <code className="inline">first_letter</code> and use string indexing to assign it to the first letter of <code className="inline">word</code>.</p>

                <Collapsible title="Hint">
                    <p>Here's an example of indexing a single letter of a string:</p>
                    <CodeBlock language="python" codeString={`word = "Scarlet"
last_letter = word[6]  # 't'`} />
                </Collapsible>
            </section>

            <section>
                <h2 id="advanced-extensions"><a href="#advanced-extensions" className="section-link">Advanced Extensions</a></h2>
                <p>There are a few ways to check if the first letter is a vowel or a consonant. The simplest way is to use a conditional statement with <code className="inline">or</code>, checking the letter against each possible vowel.</p>

                <Collapsible title="Hint">
                    <p>Here's an example of checking if a letter is one of the last two characters of the alphabet:</p>
                    <CodeBlock language="python" codeString={`letter = "a"
letter == "y" or letter == "z"` } />
                </Collapsible>
            </section>

            <section>
                <h2 id="step-5-slice-the-string"><a href="#step-5-slice-the-string" className="section-link">Step 5: Slice the String</a></h2>
                <p>Now that you have the first letter, use string slicing to extract the rest of the word and assign it to a variable called <code className="inline">rest_of_word</code>.</p>

                <Collapsible title="Hint">
                    <p>Here's an example of string slicing that retrieves the last three characters of a string:</p>
                    <CodeBlock language="python" codeString={`word = "Scarlet"
rest_of_word = word[3:7]  # 'let'`} />
                </Collapsible>
            </section>

            <section>
                <h2 id="step-6-create-new-string"><a href="#step-6-create-new-string" className="section-link">Step 6: Create a New String</a></h2>
                <p>Now, create a new string called <code className="inline">new_word</code> that will contain the Pig Latin translation of <code className="inline">word</code>. Concatenate the variables that you created in the previous steps in the correct order.</p>

                <Collapsible title="Hint">
                    <p>Here's an example of string concatenation:</p>
                    <CodeBlock language="python" codeString={`first_name = "John"
last_name = "Doe"
full_name = first_name + " " + last_name
print(full_name)  # "John Doe"`} />
                </Collapsible>
            </section>

            <section>
                <h2 id="step-7-finishing-touch"><a href="#step-7-finishing-touch" className="section-link">Step 7: The Finishing Touch</a></h2>
                <p>For each condition, add the proper ending string to <code className="inline">new_word</code>: <code className="inline">"ay"</code>, <code className="inline">"way"</code>, or nothing.</p>
            </section>

            <h3>Summary</h3>
            <p>Great job! You've successfully translated simple words from English to Pig Latin. One important thing we ignored was how to deal with consonant clusters. Technically, you could write code to handle this case, but it's slightly beyond the scope of this project. We'll learn how to tackle that in future topics.</p>

        </div>
    );
}

export default MilestoneProject04;
