import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import Collapsible from '../../components/Collapsible';

const Project04A = () => {
	return(
		<div className="lesson-container">
			<section>
				<h2>Truth or Trick? A Boolean Investigation</h2>
				<p>
					Welcome to "Truth or Trick?" – a challenge where you will uncover the secrets of
					Boolean logic and apply it in a mystery-solving scenario! You'll work with Boolean
					values, logical operators, and truthy/falsy values to determine what’s really true.
				</p>
			</section>

			<section>
				<h3>Step 1: Understanding Booleans</h3>
				<p>
					Before we start solving the mystery, let’s establish the basics. A Boolean can only
					be one of two values: <code>True</code> or <code>False</code>. Let's confirm this by
					printing the type of a Boolean value.
				</p>
				<CodeBlock>
					print(type(True))
					print(type(False))
				</CodeBlock>
			</section>

			<section>
				<h3>Step 2: Introducing the Mystery</h3>
				<p>
					A secret vault has been locked, and only a Boolean-based security system can
					determine if someone is authorized to enter. The system evaluates multiple conditions
					and decides if the vault should open. Your job is to figure out how it works.
				</p>
			</section>

			<section>
				<h3>Step 3: Naming Booleans</h3>
				<p>
					The system checks three conditions:
					<ul>
						<li>Whether the person has a valid key</li>
						<li>Whether they know the password</li>
						<li>Whether they have security clearance</li>
					</ul>
					Let's represent these as Boolean variables:
				</p>
				<CodeBlock>
					has_key = True
					knows_password = False
					has_clearance = True
				</CodeBlock>
				<p>What do these values tell you about the person?</p>
			</section>

			<section>
				<h3>Step 4: Using Boolean Expressions</h3>
				<p>
					The vault will only open if the person has a key AND knows the password,
					OR if they have security clearance. Let’s express this using Boolean logic:
				</p>
				<CodeBlock>
					can_open_vault = (has_key and knows_password) or has_clearance
					print(can_open_vault)
				</CodeBlock>
				<p>What do you think will print? Try changing the values and observing the results.</p>
			</section>

			<section>
				<h3>Step 5: Logical Operators in Action</h3>
				<p>
					Now let’s analyze how different logical operators affect the vault security system.
					Modify the expressions below and see how the output changes.
				</p>
				<CodeBlock>
					print(has_key and knows_password)  # Should be False
					print(has_key or knows_password)   # Should be True
					print(not has_clearance)           # Should be False
				</CodeBlock>
				<p>How does <code>not</code> change the result?</p>
			</section>

			<section>
				<h3>Step 6: Truthy and Falsy Values</h3>
				<p>
					The security system sometimes uses numbers instead of Booleans. In Python,
					non-zero numbers are considered <strong>truthy</strong>, and zero is <strong>falsy</strong>.
				</p>
				<CodeBlock>
					print(bool(1))   # True
					print(bool(0))   # False
					print(bool(""))  # False
				</CodeBlock>
				<p>How might this impact the vault security system?</p>
			</section>

			<section>
				<h3>Step 7: Fixing a Security Flaw</h3>
				<p>
					There's a security flaw! The vault is currently using a weak rule to check security
					clearance. Rewrite the following condition to make it stricter.
				</p>
				<CodeBlock>
					# Current rule (too weak)
					is_authorized = has_clearance or knows_password

					# Make it stricter: The person must have clearance AND know the password
					is_authorized = ______________  # Fill in the blank!
				</CodeBlock>
				<Collapsible title="Hint">
					<p>Use the <code>and</code> operator.</p>
				</Collapsible>
			</section>

			<section>
				<h3>Step 8: Final Challenge - The Master Lock</h3>
				<p>
					The vault designers have added a final layer of security. The vault will only
					open if:
				</p>
				<ul>
					<li>The person has a key and either knows the password OR has clearance.</li>
					<li>AND the person has not been previously banned.</li>
				</ul>
				<p>Write a Boolean expression that enforces this rule.</p>
				<CodeBlock>
					is_banned = False
					can_open = ______________  # Fill in the blank!
				</CodeBlock>
				<Collapsible title="Hint">
					<p>Use a combination of <code>and</code>, <code>or</code>, and <code>not</code>.</p>
				</Collapsible>
			</section>

			<section>
				<h3>Conclusion</h3>
				<p>
					You've successfully navigated the vault security system! Understanding Booleans,
					logical operators, and truthy/falsy values is crucial for making real-world decisions
					in programming.
				</p>
				<p>
					Can you think of other security systems that might rely on Boolean logic? Try
					creating your own security rules and testing them in Python!
				</p>
			</section>
		</div>
	)
}

export default Project04A;