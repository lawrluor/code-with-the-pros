import React from 'react';

const CaesarCipher = () => {
    return (
        <div className="lesson-container">
            <h1>Caesar Cipher Project: Encrypting and Decrypting Messages</h1>
            <p>In this project, we'll build a Caesar cipher, a simple encryption technique used for thousands of years. Imagine you want to send a secret message to your friend, but you don't want anyone else to be able to read it. A Caesar cipher allows you to shift the letters in your message by a certain number of positions, making it appear scrambled to anyone who doesn't know the secret shift value.</p>

            <h2>1. Understanding the Shift</h2>
            <p>The core concept of a Caesar cipher is the shift value. This value determines how many positions each letter in the message is moved. For example, with a shift value of 3, 'A' becomes 'D', 'B' becomes 'E', and so on. The alphabet "wraps around" - 'Z' shifted by 3 becomes 'C'. To understand how to shift characters numerically, we use the ASCII table, the <code>ord()</code> function, and the <code>chr()</code> function respectively.</p>

            <h2>2. Building the Encryption Function</h2>
            <p>We'll write a Python function that takes a message and a shift value as input. The function will iterate through each character in the message and shift it according to the provided value. It will then return the encrypted message.</p>

            <h2>3. Building the Decryption Function</h2>
            <p>Similar to encryption, we'll create a decryption function that takes an encrypted message and the shift value. This function will shift the characters back by the same amount, revealing the original message.</p>

            <h2>4. Input and Output</h2>
            <p>We'll allow the user to input the message they want to encrypt or decrypt, as well as the shift value. Finally, the program will display the encrypted or decrypted message.</p>

            <h3>Bonus</h3>
            <ul>
                <li>You can extend this project by allowing users to choose between uppercase and lowercase letters.</li>
                <li>Implement error handling to ensure users enter valid input (e.g., only alphabetic characters for messages).</li>
            </ul>

            <p>This project is a great introduction to Python programming concepts like functions, loops, string manipulation, and user input/output. It demonstrates how simple algorithms can be used for encryption and decryption.</p>
        </div>
    );
}

export default CaesarCipher;
