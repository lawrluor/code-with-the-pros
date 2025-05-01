import React from 'react';
import ProgressBar from "../../components/ProgressBar";
import CodeBlock from '../../components/CodeBlock';
import Collapsible from "../../components/Collapsible";
import useSequentialCounter from "../../hooks/useSequentialCounter";

const Project07B = () => {
  const { getCurrentNumber, getCurrentNumberAndIncrement } = useSequentialCounter(0);

  return (
    <div className="lesson-container">
      <ProgressBar />

      <section>
        <h1>Project: Caesar Cipher</h1>
        <p>In this project, we'll create a <strong>Caesar cipher</strong>. This is a classic way to send secret messages by shifting each letter in your message by a certain number of places in the alphabet. For example, if you use a shift of <code className="inline">3</code>, any occurrences of the letter <code className="inline">'A'</code> in your message would become <code className="inline">'D'</code>, any occurrences of the letter <code className="inline">'B'</code> would become <code className="inline">'E'</code>, and so on. This would make it pretty difficult for anyone who didn't know the shift value to read your message, at least at first glance!</p>
        <p>While the Caesar cipher is certainly not the most sophisticated way to send secret messages, it is a great way to practice working with strings, loops, conditionals, and functions in Python.</p>
      </section>

      <section>
        <h2 id={`step-${getCurrentNumber()}-ascii-basics`}><a href={`#step-${getCurrentNumber()}-ascii-basics`} className="section-link">Step {getCurrentNumberAndIncrement()}: Understanding ASCII Values</a></h2>
        <p>Computers use numbers to represent letters. The <strong>ASCII</strong> text encoding is a system that gives each typable character a unique number from <code className="inline">0</code> to <code className="inline">127</code>. For example, <code className="inline">'A'</code> is the 65th character in the table, so it corresponds to the number <code className="inline">65</code>. <code className="inline">'B'</code> is the 66th character, so it corresponds to the number <code className="inline">66</code>, and so on. Another way to think of the number associated with the character is the "id" of the character.</p>
        <h3>The ASCII Table</h3>
        <p>The ASCII table is a handy reference for understanding which characters correspond to which numbers. Positions 0-9 in the table represent the typable numbers 0-9, and positions 10-127 represent other typable characters and symbols including all lowercase and uppercase letters of the alphabet.</p>
        <p>Here's a subset of the table:</p>
        <CodeBlock language={"python"} codeString={`# 0: 0   # 65: A   # 97: a
# 1: 1   # 66: B   # 98: b
# 2: 2   # 67: C   # 99: c
...
# 9: 9   # 90: Z   # 122: z`}
        />
        <p>You can view the full table <a href="https://asciitable.com/" target="_blank" rel="noopener noreferrer">here</a>.</p>

        <h3><code className="inline">ord()</code> and <code className="inline">chr()</code> functions</h3>
        <p>Of course, it's not practical to remember the ASCII table, and besides, we don't want to encrypt messages by hand - we want the computer to handle the work for us. There are two functions that can help us with this:</p>
        <p><code className="inline">ord()</code> takes a character and returns its ASCII number. <code className="inline">chr()</code> does the opposite - it takes an ASCII number and returns the corresponding character.</p>
        <CodeBlock language={"python"} codeString={`print(ord('A')) # 65
print(chr(65))  # 'A'
  
print(ord('a')) # 97
print(chr(97))  # 'a'
`} />
      </section>

      <section>
        <h2 id={`step-${getCurrentNumber()}-understanding-the-shift`}><a href={`#step-${getCurrentNumber()}-understanding-the-shift`} className="section-link">Step {getCurrentNumberAndIncrement()}: Understanding the Shift</a></h2>
        <p>The core concept of a Caesar Cipher is the shift value. This value determines how many positions each letter in the message is moved. For example, with a shift value of <code className="inline">3</code>, <code className="inline">'A'</code> moves forward three letters and becomes <code className="inline">'D'</code>, <code className="inline">'B'</code> moves forward three letters and becomes <code className="inline">'E'</code>, and so on. The alphabet "wraps around", so that <code className="inline">'Y'</code> shifted by three characters becomes <code className="inline">'B'</code> and <code className="inline">'Z'</code> shifted by three characters becomes <code className="inline">'C'</code>.</p>

        <h3>Encryption and Decryption</h3>
        <p>Transforming a message into a disguised, unreadable form is called <strong>encryption</strong>, and the reverse process of transforming an encrypted message back into its original form is called <strong>decryption</strong>.</p>

        <p>Consider the following examples of the results of encrypting and decrypting messages:</p>
        <CodeBlock language="python" codeString={`message = "HowWillIKnow"

encrypted_message = encrypt(message, 3) 
print(encrypted_message) 
# "KrzZlooLNqrz"

decrypted_message = decrypt(encrypted_message, 3)
print(decrypted_message) 
# "HowWillIKnow"`} />

        <p>Through this project, you will create both a <code className="inline">encrypt</code> and <code className="inline">decrypt</code> function for a Caesar cipher, as well as take user input for what the initial message and shift value should be.</p>
      </section>

      <section>
        <h2 id={`step-${getCurrentNumber()}-get-input`}><a href={`#step-${getCurrentNumber()}-get-input`} className="section-link">Step {getCurrentNumberAndIncrement()}: Get User Input</a></h2>
        <p>Ask the user to enter the message or phrase that they want to encrypt or decrypt, and save it to a variable called <code className="inline">message</code>.</p>
        <p>On a separate line, prompt them to enter the shift value (how many letters to move each character by), and save it to a variable called <code className="inline">shift</code>.</p>

        <Collapsible title="Hint">
          <p>Consider what data types these two variables should be. Ideally, use a <code className="inline">while</code> loop to ask the user to try again if they enter a value that is invalid.</p>
          <p>Use <code className="inline">input()</code> to get user input.</p>
        </Collapsible>
      </section>

      <section>
        <h2 id={`step-${getCurrentNumber()}-encrypt-function`}><a href={`#step-${getCurrentNumber()}-encrypt-function`} className="section-link">Step {getCurrentNumberAndIncrement()}: Write the Encryption Function</a></h2>
        <p>Now, let's write a function called <code className="inline">encrypt</code> to transform the original message into an encrypted message. As shown in the examples earlier, the function should:</p>
        <ul>
          <li>Take the message and shift value as arguments</li>
          <li>Loop through each character in the message</li>
          <li>Shift each character by the shift value</li>
          <li>Return the encrypted message</li>
        </ul>

        <Collapsible title="Hint">
          <p>How would you wrap around the alphabet? For example, <code className="inline">'Z'</code> shifted by <code className="inline">1</code> becomes <code className="inline">'A'</code>. Is there any mathematical way you can achieve this behavior?</p>
        </Collapsible>
      </section>

      <section>
        <h2 id={`step-${getCurrentNumber()}-decrypt-function`}><a href={`#step-${getCurrentNumber()}-decrypt-function`} className="section-link">Step {getCurrentNumberAndIncrement()}: Write the Decryption Function</a></h2>
        <p>Next, write a function called <code className="inline">decrypt</code> to convert an encrypted message back into the original message. As shown in the examples earlier, the function should:</p>
        <ul>
          <li>Take the encrypted message and shift value as arguments</li>
          <li>Loop through each character in the message</li>
          <li>Shift each character by the shift value</li>
          <li>Return the decrypted message</li>
        </ul>

        <Collapsible title="Hint">
          <p>Decryption is just like encryption, but all the operations are essentially reversed.</p>
        </Collapsible>
      </section>

      <section>
        <h2 id={`step-${getCurrentNumber()}-test-your-functions`}><a href={`#step-${getCurrentNumber()}-test-your-functions`} className="section-link">Step {getCurrentNumberAndIncrement()}: Test Your Functions</a></h2>
        <p>Now that you've created the <code className="inline">encrypt</code> and <code className="inline">decrypt</code> functions, use them to encrypt the user's message, then decrypt it to check that your code works.</p>
        <p>Compare your result against the ASCII table to make sure that you've executed the shift correctly!</p>

        <Collapsible title="Hint">
          <p>Run your code and when prompted, enter values for <code className="inline">message</code> and <code className="inline">shift</code>.</p>
          <CodeBlock language="python" codeString={`encrypted = encrypt(message, shift)
print("Encrypted message:" + encrypted)

decrypted = decrypt(encrypted, shift)
print("Decrypted message:" + decrypted)`} />
        </Collapsible>
      </section>

      <section>
        <h2 id={`step-${getCurrentNumber()}-putting-it-together`}><a href={`#step-${getCurrentNumber()}-putting-it-together`} className="section-link">Step {getCurrentNumberAndIncrement()}: Putting It Together</a></h2>
        <p>Our code already allows the user to enter two inputs: the message and the shift value. Let's add a third input: whether they want to encrypt or decrypt the message that they type. Store this into a variable called <code className="inline">operation</code>.</p>
        <p>In your code, add an <code className="inline">if</code> statement that calls <code className="inline">encrypt()</code> or <code className="inline">decrypt()</code> based on the user's answer to the third input.</p>

        <Collapsible title="Hint">
          <p>There should now be three calls to <code className="inline">input()</code> that might look something like this:</p>

          <CodeBlock language="python" codeString={`message = input("Enter your message: ")
shift = int(input("Enter the shift value: "))
operation = input("Do you want to encrypt or decrypt? ")`} />
        </Collapsible>
      </section>

      <section>
        <h2 id={`summary`}><a href={`#summary`} className="section-link">Summary</a></h2>
        <p>Awesome job! You just built your own Caesar cipher program. You learned about ASCII, string manipulation, and how to use functions to organize your code. Consider some of these bonus challenges:</p>
        <ol>
          <li>How could you make sure only alphabetic characters are shifted, leaving numbers, spaces, and punctuation unchanged?</li>
          <li>What if you wanted lowercase letters to remain lowercase and uppercase letters to remain uppercase? How would you modify your code?</li>
          <li>What happens if the shift value is really large?</li>
          <li>Add error handling for invalid input, such as letters in the shift value.</li>
        </ol>

        <Collapsible title={"Sample Solution"}>
          <CodeBlock language="python" codeString={`# Sample Solution for Bonus Challenges
def encrypt(message, shift):
  encrypted = ""
  for char in message:
    if char.isalpha():
      # Shift uppercase letters
      if char.isupper():
        encrypted += chr((ord(char) - 65 + shift) % 26 + 65)
      else:
        # Shift lowercase letters
        encrypted += chr((ord(char) - 97 + shift) % 26 + 97)
    else:
      encrypted += char
  return encrypted

def decrypt(encrypted_message, shift):
  decrypted = ""
  for char in encrypted_message:
    if char.isalpha():
      if char.isupper():
        decrypted += chr((ord(char) - 65 - shift) % 26 + 65)
      else:
        decrypted += chr((ord(char) - 97 - shift) % 26 + 97)
    else:
      decrypted += char
  return decrypted
  
# Main code
message = input("Enter your message: ")
shift = int(input("Enter the shift value: "))
operation = input("Do you want to encrypt or decrypt? ")

if operation == "encrypt":
  encrypted = encrypt(message, shift)
  print("Encrypted message:" + encrypted)
else:
  decrypted = decrypt(message, shift)
  print("Decrypted message:" + decrypted)`} />
        </Collapsible>
      </section>
    </div>
  );
}

export default Project07B;
