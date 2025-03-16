import CodeBlock from "../../components/CodeBlock";
import Collapsible from "../../components/Collapsible";

const Project02 = () => {
	return (
		<div className="lesson-container">
			<section>
					<h2>Project: Mad Libs Generator</h2>
					<p>Now that you've learned about <code className="inline">input()</code>, let's put it to use with a fun project! In this <a href="https://en.wikipedia.org/wiki/Mad_Libs" target="_blank" rel="noreferrer">Mad Libs</a> game, the user will provide a series of words, and those words will be inserted into a story of your creation.</p>
					<h3>Tasks</h3>
					<ol>
							<li>Create at least five variables on separate lines.</li>
							<li>On each line, prompt the user to enter a specific type of word on each line such as a noun, verb, adjective, and so on.</li>
							<li>Use string formatting or string concatenation to insert the words into a short (and ideally, entertaining) story.</li>
							<li>Display the final completed story.</li>
					</ol>

					<h3>Example</h3>
					<p>If the user enters the following words:</p>
					<ul>
							<li><code className="inline">name</code>: Maya</li>
							<li><code className="inline">verb</code>: danced</li>
							<li><code className="inline">adjective</code>: sparkly</li>
							<li><code className="inline">noun</code>: pumpkin</li>
							<li><code className="inline">place</code>: enchanted forest</li>
							<li><code className="inline">animal</code>: unicorn</li>
							<li><code className="inline">emotion</code>: excited</li>
					</ul>

					<p>The program would generate a story like this:</p>

					<CodeBlock language={"txt"} codeString={`One day, Maya danced into a sparkly pumpkin.
It was the most surprising moment of their life!
They ran through the enchanted forest, where they met a talking unicorn.
The unicorn seemed excited to see Maya and asked, "Would you like to go on an adventure?"
And so, their magical journey began...`} />

					<Collapsible title="Answer">
					<CodeBlock language={"python"} codeString={`# Example Project

print("Welcome to the Mad Libs Generator!")

# Collect user inputs
name = input("Enter a name: ")
verb = input("Enter a verb (past tense): ")
adjective = input("Enter an adjective: ")
noun = input("Enter a noun: ")
place = input("Enter a place: ")
animal = input("Enter an animal: ")
emotion = input("Enter an emotion: ")

# Construct the Mad Libs story
story = """One day, {name} {verb} into a {adjective} {noun}.
It was the most surprising moment of their life!
They ran through the {place}, where they met a talking {animal}.
The {animal} seemed {emotion} to see {name} and asked, "Would you like to go on an adventure?"
And so, their magical journey began...""".format(name, verb, adjective, noun, place, animal, emotion)

# Display the final story
print("Here is your Mad Libs story:")
print(story)`} />

					<p>Note that the <code className="inline">format()</code> method can include variables names in the curly bracket placeholders, which can help keep your code readable when there are many variables to insert.</p>
					</Collapsible>
			</section>

			<section>
					<h2>Further Projects</h2>
					<p>Copy and modify one of your existing projects to use <code className="inline">input()</code> instead of using hard-coded values. Reflect on how doing so might make your program more useful to others.</p>
			</section>
		</div>
	)
}

export default Project02;