import CodeBlock from '../../components/CodeBlock';
import ProgressBar from '../../components/ProgressBar';

const JavaObjects = () => {
  return (
    <div className="lesson-container">
      <ProgressBar />

      <section>
        <h1>Objects and Classes</h1>
      </section>

      <section>
        <h2>Understanding the .equals() Method</h2>
        <p>The <code>.equals()</code> method in Java is a fundamental part of object comparison and is defined in the <code>Object</code> class, the root of the class hierarchy. This section explains how <code>.equals()</code> is used to compare object contents, its distinction from '==' operator, and its behavior in context with both object and primitive types.</p>

        <h3>What is .equals()?</h3>
        <p>The <code>.equals()</code> method is used to check logical equality between two objects, determining whether they represent the same data even if they are different instances. Unlike the '==' operator, which checks for reference equality, <code>.equals()</code> can be overridden in any class to check for equivalence based on the class's specific criteria.</p>

        <CodeBlock language={"java"} codeString={`class Book {
    private String isbn;

    public Book(String isbn) {
        this.isbn = isbn;
    }

    @Override
    public boolean equals(Book otherBook) {
			return isbn.equals(book.isbn);
    }
}

Book book1 = new Book("123456");
Book book2 = new Book("123456");
boolean areEqual = book1.equals(book2); // true`} />

        <h3>Why Use .equals() Over '=='?</h3>
        <ul>
          <li><strong>Content Equality:</strong> <code>.equals()</code> can be customized to compare the actual content or relevant fields of an object, facilitating accurate comparisons in logical terms.</li>
          <li><strong>Flexibility:</strong> Since <code>.equals()</code> can be overridden, developers can define what equality means for their objects, based on the business or application context.</li>
        </ul>

        <h3>Using .equals() with Primitive Types</h3>
        <p>Primitive types in Java cannot use the <code>.equals()</code> method directly because they are not objects. However, their corresponding wrapper classes (like <code>Integer</code>, <code>Double</code>) provide <code>.equals()</code> methods that allow for object-based comparisons of primitive values.</p>

        <CodeBlock language={"java"} codeString={`Integer x = 10;
Integer y = 10;
boolean areEqual = x.equals(y); // true`} />

        <p>Using <code>.equals()</code> on wrapper classes is particularly useful when dealing with collections or generics, where object equality is necessary. It is crucial, however, to ensure objects are not null to avoid a <code>NullPointerException</code>.</p>

        <h3>Practical Uses and Cautions</h3>
        <p>Using <code>.equals()</code> is standard practice in Java for comparing objects, especially when dealing with collections, data manipulation, and user-defined types where logical equality needs to be evaluated based on the state of objects.</p>

        <h3>(Optional) A more general <code className="inline">.equals()</code> example</h3>
        <CodeBlock language={"java"} codeString={`// More general equals method that simply takes an Object as a paramter rather than a Book
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;  // this is literally the same object
        if (obj == null || getClass() != obj.getClass()) return false;  // other object is null or of a different class
        Book book = (Book) obj;
        return isbn.equals(book.isbn);
    }`} />
      </section>

      <section>
        <h2>Understanding Null References in Java</h2>
        <p>In Java, object reference variables can hold two types of values:</p>
        <ul>
          <li>A reference to an object (i.e., the memory address where the object is stored).</li>
          <li>The value <code>null</code>, indicating that the variable does not reference any object.</li>
        </ul>
        <p>Using <code>null</code> is common in scenarios such as:</p>
        <ul>
          <li>Initializing variables when no object has yet been created.</li>
          <li>Clearing references to enable garbage collection of objects no longer needed.</li>
          <li>As a return value or marker to indicate the absence of objects.</li>
        </ul>

        <p>In Java, the <code>null</code> keyword is used to denote the absence of a reference to any object. It can be assigned to any reference type variable to indicate that the variable currently does not point to any object in memory. This section explores how <code>null</code> is used in Java, its significance, and the common pitfalls associated with its usage.</p>

        <h3>Assigning Null to Object References</h3>
        <p>When you declare a reference variable in Java, you can initialize it to reference an object or you can explicitly set it to <code>null</code>. Here is an example:</p>

        <CodeBlock codeString={`Car car1 = null;`}
        />

        <p>This statement declares a variable <code>car1</code> of type <code>Car</code> and initializes it to <code>null</code>. This means that <code>car1</code> does not point to any object. The variable is essentially "empty."</p>

        <h3>Potential Issues with Null References</h3>
        <p>While <code>null</code> is useful, it must be used carefully. Accessing methods or properties of a <code>null</code> reference leads to a <code>NullPointerException</code> (NPE), a common error in Java applications. Here is what happens if you try to invoke a method on a <code>null</code> reference:</p>

        <CodeBlock codeString={`Car car1 = null;
		car1.drive();  // This will throw a NullPointerException`}
        />

        <p>Attempting to call <code>drive()</code> on <code>car1</code> will result in a <code>NullPointerException</code> because <code>car1</code> is <code>null</code> and does not reference any object that has a <code>drive</code> method.</p>

        <h3>Best Practices</h3>
        <p>To avoid <code>NullPointerException</code>, always check if a reference variable is <code>null</code> before invoking any methods on it:</p>

        <CodeBlock codeString={`if (car1 != null) {
				car1.drive();
		} else {
				System.out.println("No car to drive!");
		}`}
        />

        <p>This simple check ensures that the <code>drive</code> method is called only when <code>car1</code> actually references an object, thus preventing any potential <code>NullPointerException</code>.</p>

        <h3>Conclusion</h3>
        <p>Understanding the use of <code>null</code> in Java is essential for writing robust and error-free code. Proper management of null references can help in maintaining clean, efficient, and bug-free code, especially in large applications where objects are frequently created and destroyed.</p>
      </section>
    </div>
  )
}

export default JavaObjects;