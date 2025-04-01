import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import Collapsible from '../../components/Collapsible';

const Project04B = () => {
	return (
	<div className="lesson-container">
		<section>
			<h1>Project: Input Validation</h1>
			<p>
				The online store that you helped created has been taking off, and customers have been inquiring for a way to create accounts. You've decided to build a signup page that allows users to sign up to enhance their online shopping experience. As part of the sign up page, you need to create a <strong>validation system</strong> to ensure that usernames and passwords have some level of security.
				Your system will check the following conditions:
			</p>
			<ol>
				<li>The username must be <strong>at least 5 characters long</strong>.</li>
				<li>At least one of the <strong>last three characters</strong> in the username <strong>must be a number</strong>.</li>
				<li>The password <strong>cannot be the same as the username</strong>.</li>
				<li>The password cannot be one of the <strong>top three most common</strong> alphabetical <a href="https://en.wikipedia.org/wiki/Wikipedia:10,000_most_common_passwords" target="_blank" rel="noreferrer">passwords</a>: <code className="inline">"password"</code>, <code className="inline">"qwerty"</code>, or <code className="inline">"dragon"</code>.</li>
				<li>The password must be <strong>at least 6 characters long</strong>, but no more than <strong>10 characters long</strong>.</li>
				<li>The password cannot be made up <strong>entirely of numbers</strong>.</li>
				<li>The password must contain a mixture of <strong>uppercase and lowercase letters</strong>.</li>
			</ol>

			<p>We will use a combination of logical operators and string methods to check that these conditions are met. The string methods that we will use return <code>True</code> or <code>False</code> when applied to a string, depending on the properties of the string. Let's get started!</p>
		</section>

		<section>
			<h2 id="step-0-define-your-inputs"><a href="#step-0-define-your-inputs" className="section-link">Step 0: Define Your Inputs</a></h2>
			<p>Create variables <code className="inline">username</code> and <code className="inline">password</code> that will accept string input from the user.</p>

			<Collapsible title="Hint">
				<p>Use the <code>input()</code> function to get store user input into a <code className="inline">username</code> variable and a <code className="inline">password</code> variable.</p>
			</Collapsible>
		</section>

		<section>
			<h2 id="step-1-check-username-length"><a href="#step-1-check-username-length" className="section-link">Step 1: Check Username Length</a></h2>
			<p>The username must be at least five characters long. The <code>len()</code> function can be used to check the length of the username. Once you obtain the length of the username, compare it arithmetically to <code>5</code>.</p>

			<p>Store the result of this boolean expression to a variable called <code className="inline">check_1</code>.</p>

			<Collapsible title="Hint">
				<p>The <code>len()</code> function counts the number of characters in a string. For example:</p>

				<CodeBlock language="python" codeString={`len("Saturn")  # Outputs: 6`} />
			</Collapsible>
		</section>

		<section>
			<h2 id="step-2-ensure-username-contains-number"><a href="#step-2-ensure-username-contains-number" className="section-link">Step 2: Ensure the End of the Username Contains a Number</a></h2>
			<p>The last three characters of the username must contain at least one number. Use the <code>.isdigit()</code> string method to check each character.</p>

			<p>Store the result of this boolean expression to a variable called <code className="inline">check_2</code>.</p>

			<Collapsible title="Hint">
				<p>The <code>.isdigit()</code> string method returns <code>True</code> if a character is a digit (0-9) and <code>False</code> if it is not. Access the last three characters using string indexing and check each one individually.</p>
			</Collapsible>
		</section>

		<section>
			<h2 id="step-3-check-password-not-username"><a href="#step-3-check-password-not-username" className="section-link">Step 3: Ensure the Password is Not the Same as Username</a></h2>
			<p>A secure password cannot be the same as the username. Compare the password and username strings for equality.</p>

			<p>Store the result of this boolean expression to a variable called <code className="inline">check_3</code>.</p>

			<Collapsible title="Hint">
				<p>
					The <code>!=</code> operator means "not equal to."
					If the password and username are the same, this will return <code>False</code>.
				</p>
			</Collapsible>
		</section>

		<section>
			<h2 id="step-4-check-password-common"><a href="#step-4-check-password-common" className="section-link">Step 4: Check Password for Common Passwords</a></h2>
			<p>A secure password cannot be one of the following: <code>"password"</code>, <code>"qwerty"</code>, or <code>"dragon"</code>. Create a boolean expression that checks if the password is one of these common passwords, and store the result to a variable called <code className="inline">check_4</code>.</p>

			<Collapsible title="Hint">
				<p>Use the <code>or</code> operator to combine multiple boolean expressions.</p>
			</Collapsible>
		</section>

		<section>
			<h2 id="step-5-check-password-length"><a href="#step-5-check-password-length" className="section-link">Step 5: Check Password Length</a></h2>
			<p>The password must be at least <strong>6 characters long</strong>, but no greater than <code>10</code> characters. Use the <code>len()</code> function again.</p>

			<p>Store the result of this boolean expression to a variable called <code className="inline">check_5</code>.</p>

			<Collapsible title="Hint">
				<p>Once you obtain the length of the password, make two arithmetic comparisons to ensure that it is at least six characters long and no more than ten characters long.</p>
			</Collapsible>
		</section>

		<section>
			<h2 id="step-6-check-password-not-all-numbers"><a href="#step-6-check-password-not-all-numbers" className="section-link">Step 6: Check Password for Only Numbers</a></h2>
			<p>The password cannot be made up of only numbers. The <code>.isnumeric()</code> string method returns <code>True</code> if all the characters in the string are numbers and <code>False</code> if otherwise. Store the result of this boolean expression to a variable called <code className="inline">check_6</code>.</p>

			<Collapsible title="Hint">
				<CodeBlock language="python" codeString={`"123".isnumeric()  # Outputs: True
"ab1".isnumeric()  # Outputs: False`} />
			</Collapsible>
		</section>

		<section>
			<h2 id="step-7-check-mixed-case"><a href="#step-7-check-mixed-case" className="section-link">Step 7: A Mix of Uppercase and Lowercase Letters</a></h2>
			<p>The password must contain at least one uppercase letter and at least one lowercase letter. We will use the <code>.isupper()</code> and <code>.islower()</code> string methods for these checks. Here is how each method works:</p>

			<ol>
				<li>If all the characters in the string are uppercase, <code>.isupper()</code> returns <code>True</code>.</li>
				<li>If all the characters in the string are lowercase, <code>.islower()</code> returns <code>True</code>.</li>
			</ol>

			<p>Combine these methods to check if the password contains at least one uppercase letter and at least one lowercase letter. Store the result of this boolean expression to a variable called <code className="inline">check_7</code>.</p>

			<Collapsible title="Hint">
				<p>For this check to pass, neither <code>.isupper()</code> nor <code>.islower()</code> should return <code>True</code>.</p>
			</Collapsible>
		</section>

		<section>
			<h2 id="step-8-final-validation"><a href="#step-8-final-validation" className="section-link">Step 8: Final Validation</a></h2>
			<p>If all the checks are met, the username and password should be accepted. Let's combine the checks <code className="inline">check_1</code>, <code className="inline">check_2</code>, <code className="inline">check_3</code>, <code className="inline">check_4</code>, <code className="inline">check_5</code>, <code className="inline">check_6</code>, and <code className="inline">check_7</code> using logical operators and an <code>if-else</code> statement.</p>

			<p>If all the checks are made, print <code>"Account creation successful! Welcome, [username]"</code>. If any of the checks are not met, print <code>"Account creation failed."</code>.</p>

			<Collapsible title="Hint">
				<p>Use <code>and</code> to ensure <strong>all conditions</strong> are met before allowing the account to be created.</p>
			</Collapsible>
		</section>

		<section>
			<h2 id="step-9-admin-exception"><a href="#step-9-admin-exception" className="section-link">Step 9: An Unwelcome Surprise</a></h2>
			<p>Your boss has decided that there should be a special admin account. Against your recommendation, they have decided that if a username is <code>"admin"</code>, any password will be accepted. Check if the username is <code>"admin"</code> and store the result in a variable called <code className="inline">is_admin</code>.</p>

			<p>Modify your <code className="inline">if-else</code> statement in the previous step to include the logic for this admin check.</p>

			<Collapsible title="Hint">
				<p>You can use <code>or</code> to create an exception for the admin username. Your final validation should check if either:</p>
				<ol>
					<li>The username is "admin", OR</li>
					<li>All the other validation checks pass</li>
				</ol>
				<CodeBlock language="python" codeString={`if is_admin or all_other_checks_pass:
    print(f"Account creation successful! Welcome, {username}")
else:
    print("Account creation failed.")`} />
			</Collapsible>
		</section>

		<section>
			<h2 id="congratulations"><a href="#congratulations" className="section-link">Congratulations!</a></h2>
			<p>Experiment with different usernames and passwords to see how your code behaves.</p>

			<p>Bonus exercise: Are there other ways to write the code so that we don't need to do a final check using logical operators? What are some benefits and downsides of these methods?</p>
		</section>
		</div>
	)
}

export default Project04B;