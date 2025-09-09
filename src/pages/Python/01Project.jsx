import Collapsible from "../../components/Collapsible";
import CodeBlock from "../../components/CodeBlock";
import ProgressBar from "../../components/ProgressBar";
import useSequentialCounter from "../../hooks/useSequentialCounter";

const Project01 = () => {
  const { getCurrentNumber, getCurrentNumberAndIncrement } = useSequentialCounter(0);

  return (
    <div className="lesson-container">
      <ProgressBar />

      <section>
        <h1>Project: Personalized ID Badge Generator</h1>
        <p>Imagine that you are the head of employee resources at a new company. The CEO has asked you to create a program that generates a digital ID (identification) badge for an employee.
          You know that just like a business card, an ID badge contains key information about
          an employee, such as their name, job title, and email. In this project, you'll
          use variables and strings to format and display this information.
        </p>
      </section>

      <section>
        <h2 id={`step-${getCurrentNumber()}-setting-up`}><a href={`#step-${getCurrentNumber()}-setting-up`} className="section-link">Step {getCurrentNumberAndIncrement()}: Setting Up</a></h2>
        <p>Start by defining variables to store key details.</p>

        <ul>
          <li>
            Create a variable <code className="inline">first_name</code> to store the employee's first name.
          </li>
          <li>
            Create a variable <code className="inline">last_name</code> to store the employee's last name.
          </li>
          <li>
            Create a variable <code className="inline">job_title</code> to store the employee's job title.
          </li>
          <li>
            Create a variable <code className="inline">company_name</code> to store the company's name.
          </li>
        </ul>

        <Collapsible title="Hint">
          <CodeBlock
            language="python"
            codeString={`first_name = "Alice"
last_name = "Brown"`}
          />
        </Collapsible>
      </section>

      <section>
        <h2 id={`step-${getCurrentNumber()}-generate-an-email-address`}><a href={`#step-${getCurrentNumber()}-generate-an-email-address`} className="section-link">Step {getCurrentNumberAndIncrement()}: Generate an Email Address</a></h2>
        <p>Most companies provide employees with a professional email address. Rather than have each employee create their email, let's automatically generate them using string concatenation.</p>

        <ul>
          <li>
            Create a variable <code className="inline">email</code> that uses string concatenation to combine their first and last names with the company name to form an email address. For example, <code className="inline">satya.nadella@google.com</code>.
          </li>
          <li>Use the <code className="inline">.lower()</code> method to ensure that the email only contains lowercase characters.</li>
        </ul>

        <Collapsible title="Hint">
          <CodeBlock
            language="python"
            codeString={`name = "Charlie Brown"
print(name.lower())  # Outputs: "charlie brown"`}
          />
        </Collapsible>
      </section>

      <section>
        <h2 id={`step-${getCurrentNumber()}-create-an-employee-id`}><a href={`#step-${getCurrentNumber()}-create-an-employee-id`} className="section-link">Step {getCurrentNumberAndIncrement()}: Create an Employee ID</a></h2>
        <p>ID badges often include a short, unique identifier. Let's generate one using slicing or indexing.</p>

        <p>Create a variable <code className="inline">short_id</code> that consists of:</p>
        <ul>
          <li>The first two letters of <code className="inline">first_name</code></li>
          <li>The first two letters of <code className="inline">last_name</code></li>
          <li>The last two letters of <code className="inline">company_name</code></li>
        </ul>

        <Collapsible title="Hint">
          <CodeBlock
            language="python"
            codeString={`# First four characters of first_name
first_name[:4]

# Last three characters of company_name
company_name[-3:]`}
          />
        </Collapsible>
      </section>

      <section>
        <h2 id={`step-${getCurrentNumber()}-display-the-id-badge`}><a href={`#step-${getCurrentNumber()}-display-the-id-badge`} className="section-link">Step {getCurrentNumberAndIncrement()}: Display the ID Badge</a></h2>
        <p>Now, let's format everything neatly into an ID badge using Python's <code className="inline">.format()</code> method and the multiline string syntax (<code className="inline">""" """</code>). Here's an example:</p>

        <CodeBlock
          language="txt"
          codeString={`***********************
* Name: Alice Brown *
* Job: Designer *
* Company: TechCorp *
* Email: alice.brown@techcorp.com *
* ID: albrrp *
***********************`} />

        <p>Store your multiline string to a variable called <code className="inline">id_badge</code>. Finally, print out <code className="inline">id_badge</code>.</p>

        <Collapsible title="Hint">
          <CodeBlock
            language="python"
            codeString={`id_badge = '''
***********************
* Name: {} *
* Job: {} *
* Company: {} *
* Email: {} *
* ID: {} *
***********************
'''.format(first_name + " " + last_name, job_title, company_name, email, short_id)

print(id_badge)`}
          />
        </Collapsible>
      </section>

      <section>
        <h2 id={`step-${getCurrentNumber()}-formatting-output`}><a href={`#step-${getCurrentNumber()}-formatting-output`} className="section-link">Step {getCurrentNumberAndIncrement()}: Formatting Output</a></h2>
        <p>Now, let's format everything neatly into an ID badge using Python's <code className="inline">.format()</code> method and the multiline string syntax (<code className="inline">""" """</code>). Here's an example:</p>

        <CodeBlock
          language="txt"
          codeString={`***********************
* Name: Alice Brown *
* Job: Designer *
* Company: TechCorp *
* Email: alice.brown@techcorp.com *
* ID: albrrp *
***********************`} />

        <p>Store your multiline string to a variable called <code className="inline">id_badge</code>. Finally, print out <code className="inline">id_badge</code>.</p>

        <Collapsible title="Hint">
          <CodeBlock
            language="python"
            codeString={`id_badge = '''
***********************
* Name: {} *
* Job: {} *
* Company: {} *
* Email: {} *
* ID: {} *
***********************
'''.format(first_name + " " + last_name, job_title, company_name, email, short_id)

print(id_badge)`}
          />
        </Collapsible>
      </section>

      <section>
        <h2 id="wrapping-up"><a href="#wrapping-up" className="section-link">Wrapping Up</a></h2>
        <p>Congratulations! You've completed the project. You've learned how to use variables and strings to format and display information about an employee.</p>
      </section>
    </div>
  );
}

export default Project01;