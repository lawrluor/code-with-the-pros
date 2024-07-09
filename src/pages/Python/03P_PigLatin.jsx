import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const PigLatin = () => {
    return (
        <div className="lesson-container">
            <h1>Translate English to Pig Latin</h1>
            <p>Pig Latin is a playful way of altering English words. The rules are simple: move the first consonant or consonant cluster to the end of the word, add "ay" if it starts with a consonant, and "way" if it starts with a vowel. This project will walk you through how to create a Pig Latin translator using Python.</p>

            <h2>1. Understanding Pig Latin</h2>
            <p>Before coding, let's understand the rules of Pig Latin:</p>
            <ul>
                <li>If a word starts with a vowel, add "way" to the end of the word.</li>
                <li>If a word starts with one or more consonants, move all the consonants that appear before the first vowel to the end of the word, then add "ay".</li>
                <li>If a word is one letter or less, keep it the same.</li>
            </ul>

            <h2>2. Planning Your Python Code</h2>
            <p>Start by planning how to break down the problem:</p>
            <ul>
                <li>Identify whether the first letter of a word is a vowel or a consonant.</li>
                <li>Figure out how to split the word based on the first vowel.</li>
                <li>Determine how to reconstruct the word according to Pig Latin rules.</li>
            </ul>

            <h3>Identifying Vowels and Consonants</h3>
            <p>Here's how you might check if a letter is a vowel or a consonant:</p>
            <CodeBlock language={"python"} codeString={`vowels = 'aeiou'
def is_vowel(letter):
    return letter in vowels`} />

            <h3>Handling User Input</h3>
            <p>Next, we need to get the user's input. This is how you might ask a user for a word and store their input:</p>
            <CodeBlock language={"python"} codeString={`word = input('Enter a word to translate to Pig Latin: ').lower()`} />

            <h3>Creating a Function for Translation</h3>
            <p>Here's how you can start building a function to translate English to Pig Latin:</p>
            <ul>
                <li>Check if the word starts with a vowel or consonant.</li>
                <li>Translate the word into Pig Latin based on the first character.</li>
            </ul>

            <p>Here's a starting point for your function:</p>
            <CodeBlock language={"python"} codeString={`def translate_to_pig_latin(word):
    # Check if the first letter is a vowel
    if is_vowel(word[0]):
        # Code for vowel handling here
    else:
        # Code for consonant handling here
`} />

            <h2>3. Expanding Your Translator</h2>
            <p>After you handle words beginning with vowels and single consonants, consider how to deal with consonant clusters and very short words.</p>

            <h3>Challenges</h3>
            <ul>
                <li>Add error handling to ensure that users enter valid words.</li>
            </ul>
        </div>
    );
}

export default PigLatin;
