import Collapsible from "../../components/Collapsible";
import CodeBlock from "../../components/CodeBlock";

const Project01 = () => {
  return (
    <div className="lesson-container">
      <section>
        <h1>Project: Personalized ID Badge Generator</h1>
        <p>Imagine that you are the head of employee resources at a new company. The CEO has asked you to create a program that generates a digital ID (identification) badge for an employee.
          You know that just like a business card, an ID badge contains key information about
          an employee, such as their name, job title, and email. In this project, you'll
          use variables and strings to format and display this information.
        </p>
      </section>

      <section>
        <h2>Step 1: Creating Variables</h2>
        <p>Start by defining variables to store your key details.</p>

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
last_name = "Brown"
job_title = "Designer"
company_name = "TechCorp"`}
          />
        </Collapsible>
      </section>

      <section>
        <h2>Step 2: Creating an Email Address</h2>
        <p>Most companies provide employees with a professional email address. Rather than have each employee create their email, let's automaticallygenerate them using string concatenation.</p>

        <ul>
          <li>
            Create a variable <code className="inline">email</code> that uses string concatenation to combine their first and last names with the company name to form an email address. For example, <code className="inline">satya.nadella@google.com</code>.
          </li>
          <li>Use the <code className="inline">.lower()</code> method to ensure that the email only contains lowercase characters.</li>
        </ul>

        <Collapsible title="Hint">
          <CodeBlock
            language="python"
            codeString={`email = first_name.lower() + "." + last_name.lower() + "@company.com"`}
          />
        </Collapsible>
      </section>

      <section>
        <h2>Step 3: Generating an ID</h2>
        <p>ID badges often include a short, unique identifier. Let's generate one using slicing.</p>

        <ul>
          <li>
            Create a variable <code className="inline">short_id</code> that consists of:
            <ul>
              <li>The first two letters of your <code className="inline">first_name</code></li>
              <li>The first two letters of your <code className="inline">last_name</code></li>
              <li>The last two letters of your <code className="inline">company_name</code></li>
            </ul>
          </li>
        </ul>

        <Collapsible title="Hint">
          <CodeBlock
            language="python"
            codeString={`short_id = first_name[:2] + last_name[:2] + company_name[-2:]`}
          />
        </Collapsible>
      </section>

      <section>
        <h2>Step 4: Formatting the ID Badge</h2>
        <p>
          Now, let's format everything neatly into an ID badge using Python's <code className="inline">.format()</code> method. Your final output should look something like this:
        </p>

				<CodeBlock
					language="txt"
					codeString={`***********************
* Name: Alice Brown *
* Job: Designer *
* Company: TechCorp *
* Email: alice.brown@techcorp.com *
* ID: albrrp *
***********************`}/>

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
    </div>
  );
}

export default Project01;