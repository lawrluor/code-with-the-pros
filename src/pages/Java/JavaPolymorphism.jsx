import React from 'react';
import ProgressBar from "../../components/ProgressBar";
import CodeBlock from '../../components/CodeBlock';
import QuizQuestion from '../../components/QuizQuestion';

import useGetQuestionsByChapter from '../../hooks/useGetQuestionsByChapter';

const JavaPolymorphism = () => {
  const { questions, loading } = useGetQuestionsByChapter("JavaPolymorphism");

  return (
    <div className="lesson-container">
      <ProgressBar />

      <section>
        <h1>Understanding Polymorphism in Java</h1>
      </section>

      <section>
        <h2>What is Polymorphism?</h2>
        <p>Polymorphism is a fundamental concept in object-oriented programming that allows objects to be treated as instances of their parent class rather than their actual class. The word "polymorphism" comes from Greek, meaning "many shapes." In Java, this allows methods to perform differently based on the object that it is acting upon, which leads to two primary types: compile-time (method overloading) and runtime (method overriding) polymorphism.</p>
      </section>

      <section>
        <h2>Compile-Time Polymorphism: Method Overloading</h2>
        <p>Method overloading occurs when several methods share the same name within a class but have different parameters (type or number). It is resolved at compile time.</p>
        <CodeBlock language={"java"} codeString={`public class DisplayOverloader {
    void display(int a) {
        System.out.println("Integer: " + a);
    }

    void display(double a) {
        System.out.println("Double: " + a);
    }

    void display(String a) {
        System.out.println("String: " + a);
    }

    public static void main(String[] args) {
        DisplayOverloader obj = new DisplayOverloader();
        obj.display(500);
        obj.display(500.5);
        obj.display("Hello Polymorphism");
    }
}`} />
        <p>This example demonstrates method overloading. The <code className="inline">display</code> method is overloaded with three different parameter types, allowing the same method name to be reused for different input types. Note that this example does not include subclasses or superclasses, and refers to polymorphism as the "many shapes" that the same method can take via method overloading.</p>
      </section>

      <section>
        <h2>Dynamic Method Dispatch in Java: How Overridden Methods Are Resolved</h2>
        <p>Dynamic method dispatch is a core concept in Java's runtime polymorphism that deals with how overridden methods are resolved during program execution. This mechanism ensures that the correct version of an overridden method is called, based on the actual object's type, not the reference type. Let's explore how this works in detail.</p>

        <h3>Understanding Static and Dynamic Types</h3>
        <p>In Java, the type of reference variable (static type) and the type of the object it refers to (dynamic type) play crucial roles in method invocation, especially when methods are overridden:</p>

        <ul>
          <li><strong>Static Type:</strong> The static type of a reference is established at compile time and determines which methods can be accessed. This type is used to enforce Java's syntax rules and ensure that only methods applicable to the declared type are callable, providing a layer of type safety.</li>
          <li><strong>Dynamic Type:</strong> The dynamic type is the actual type of the object in memory, which may be the same as or a subclass of the reference's static type. The dynamic type determines which overridden method is executed when a method call occurs, utilizing Java's dynamic method dispatch.</li>
        </ul>

        <h3>Dynamic Method Dispatch Mechanism</h3>
        <p>When a method is invoked on an object, Java determines the method to execute based on the object's dynamic type. This process, known as dynamic method dispatch, allows Java to support polymorphic behaviors and method overriding, ensuring that the most specific implementation of a method is called at runtime.</p>

        <CodeBlock language={"java"} codeString={`class Animal {
    void speak() {
        System.out.println("Animal speaks");
    }
}

class Dog extends Animal {
    @Override
    void speak() {
        System.out.println("Dog barks");
    }
}

public class TestPolymorphism {
    public static void main(String[] args) {
        Animal myAnimal = new Dog(); // Upcasting
        myAnimal.speak();  // Outputs "Dog barks"
    }
}`} />

        <p>In this example:</p>
        <ul>
          <li>The <code className="inline">myAnimal</code> reference has a static type of <code className="inline">Animal</code> and a dynamic type of <code className="inline">Dog</code>.</li>
          <li>Although the static type of <code className="inline">myAnimal</code> allows it to call <code className="inline">speak</code>, the dynamic type (actual object type) determines that <code className="inline">Dog</code>'s <code className="inline">speak</code> method is executed.</li>
        </ul>

        <p>This behavior exemplifies dynamic method dispatch, where Java runtime looks at the object's actual type to determine the most specific version of an overridden method to execute. It's a fundamental aspect of Java that facilitates the use of polymorphic programming, enhancing flexibility and reusability in software design.</p>
      </section>

      <section>
        <h2>Runtime Polymorphism: Method Overriding</h2>
        <p>Method overriding occurs when a subclass provides a specific implementation of a method already provided by one of its parent classes. This version of polymorphism is resolved at runtime.</p>
        <CodeBlock language={"java"} codeString={`class Animal {
    void speak() {
        System.out.println("The animal makes a sound");
    }
}

class Dog extends Animal {
    @Override
    void speak() {
        System.out.println("The dog barks");
    }
}

public class TestPolymorphism {
    public static void main(String[] args) {
        Animal myAnimal = new Animal();
        Animal myDog = new Dog();

        myAnimal.speak();  // "The animal makes a sound"
        myDog.speak();     // "The dog barks"
    }
}`} />
        <p>In this example, the <code className="inline">speak</code> method in the <code className="inline">Dog</code> class overrides the <code className="inline">speak</code> method in the <code className="inline">Animal</code> class. Even though <code className="inline">myDog</code> is declared as type <code className="inline">Animal</code>, it calls the <code className="inline">Dog</code> class's <code className="inline">speak</code> method because it is actually an instance of <code className="inline">Dog</code>.</p>
      </section>

      <section>
        <h2>Polymorphic References</h2>
        <p>Java's polymorphism allows objects to be referenced either by their superclass type or by their actual class type. This flexibility can be beneficial depending on the context of the code and the specific requirements of the application.</p>

        <p><strong>Example 1:</strong> Using Superclass References</p>
        <CodeBlock language={"java"} codeString={`Animal animal = new Animal();
Animal dog = new Dog();
Animal cat = new Cat();

ArrayList<Animal> animals = new ArrayList<>();
animals.add(animal);
animals.add(dog);
animals.add(cat);`} />
        <p>In this example, all objects are declared with the type <code className="inline">Animal</code>. This approach emphasizes that <code className="inline">dog</code> and <code className="inline">cat</code> are treated purely as <code className="inline">Animal</code> objects, even though they are instances of subclasses. This method is useful for maintaining a uniform interface where the specifics of the object types are less important than the behavior defined by the superclass.</p>

        <p><strong>Example 2:</strong> Using Actual Class Types for References</p>
        <CodeBlock language={"java"} codeString={`Animal animal = new Animal();
Dog dog = new Dog();
Cat cat = new Cat();

ArrayList<Animal> animals = new ArrayList<>();
animals.add(animal);
animals.add(dog);
animals.add(cat);`} />
        <p>In the second example, each object is declared with its actual class type. This method provides clarity and can be advantageous when additional methods specific to the <code className="inline">Dog</code> or <code className="inline">Cat</code> classes might be called directly if not using a list. Despite the different declarations, all objects are added to an <code className="inline">ArrayList</code> of type <code className="inline">Animal</code>, showcasing the polymorphic capability of Java to treat subclass objects as instances of a superclass when added to a collection.</p>
      </section>

      <section>
        <h2>Storing Subclass Objects in Collections Using Polymorphism</h2>
        <p>Polymorphism in Java not only simplifies method invocation on different types of objects but also enables these objects to be managed collectively in data structures such as arrays or <code className="inline">ArrayList</code>s. This is particularly useful for organizing objects that share a common superclass.</p>

        <p>When subclass objects are stored in an array or <code className="inline">ArrayList</code>, each element of the collection can hold references to objects of any class that extends the specified superclass. This approach is highly efficient for operations that need to handle a variety of objects in a unified way.</p>

        <CodeBlock language={"java"} codeString={`import java.util.ArrayList;

class Animal {
    public void speak() {
        System.out.println("Some animal sound");
    }
}

class Dog extends Animal {
    @Override
    public void speak() {
        System.out.println("The dog barks");
    }
}

class Cat extends Animal {
    @Override
    public void speak() {
        System.out.println("The cat meows");
    }
}

public class TestPolymorphism {
	public static void main(String[] args) {
		Animal animal = new Animal();
		Dog dog = new Dog();
		Cat cat = new Cat();

		ArrayList<Animal> animals = new ArrayList<>();
		animals.add(animal);
		animals.add(dog);
		animals.add(cat);

		for (Animal animal : animals) {
			animal.speak();  // Outputs the specific or generic animal sound
		}
	}
}`} />
        <p>In this example, an <code className="inline">ArrayList</code> named <code className="inline">animals</code> is used to store objects of <code className="inline">Dog</code> and <code className="inline">Cat</code>, which are both subclasses of <code className="inline">Animal</code>. By iterating over this list and calling the <code className="inline">speak</code> method on each object, we invoke the overridden method specific to each subclass. This demonstrates polymorphism's capability to use a single interface (<code className="inline">speak</code> method in <code className="inline">Animal</code>) to invoke methods specific to each object's actual class type.</p>

        <p>It would be tricky to handle this situation in a different way, as using the <code className="inline">Cat</code> data type as the looping variable, for example, would not properly describe the varying types of the  <code className="inline">Animal</code> subclasses.</p>

        <p>The same applies for simple arrays:</p>
        <CodeBlock language={"java"} codeString={`public class TestPolymorphism {
	public static void main(String[] args) {
		Animal animal = new Animal();
		Dog dog = new Dog();
		Cat cat = new Cat();

		Animal[] animals = new Animal[3];
		animals[0] = animal;
		animals[1] = dog;
		animals[2] = cat;

		for (Animal animal : animals) {
			animal.speak();  // Outputs the specific or generic animal sound
		}
	}
}
`} />
        <h3>Usefulness of Polymorphic References</h3>
        <p>Let's further explore why we might write <code className="inline">Animal myDog</code> instead of <code className="inline">Dog myDog</code>. As a reminder, this pattern is known as a <em>polymorphic reference</em> where the declared type of the variable is a superclass, and the actual object type is a subclass.</p>

        <ul>
          <li><strong>Generalization:</strong> Declaring a variable as a superclass type allows the code to handle objects of any subclass of the declared type. This is useful in methods where you want to accept a wide range of object types.</li>
          <li><strong>Flexibility:</strong> Using the superclass type for variable declaration makes your program more flexible. It can easily adapt to new kinds of animals without changing much of the existing code, such as when we call <code className="inline">animal.speak()</code> across many different <code className="inline">Animal</code> subclasses.</li>
          <li><strong>Code Reusability:</strong> When methods accept or return superclass types, they can work with any subclass type, promoting reusability. This reduces redundancy and enhances the maintainability of the code.</li>
        </ul>

        <h3>The "is-a" test</h3>
        <p>The <code className="inline">is-a</code> test is a simple way of checking if an object is valid to be declared with a static type of its superclass, i.e. <code className="inline">Animal dog = new Dog();</code>. A subclass "is-a" instance of the superclass, but not the other way around.</p>
      </section>

      <section>
        <h2>The <code className="inline">final</code> Keyword and Preventing Method Overriding</h2>
        <p>In Java, the <code className="inline">final</code> keyword is a non-access modifier used for several purposes. When applied to methods, the <code className="inline">final</code> keyword prevents them from being overridden by subclasses. This can be used to "lock down" a method's behavior to ensure consistency across all instances of an object, regardless of the subclass that might extend a superclass.</p>

        <CodeBlock language={"java"} codeString={`class Animal {
	// A final method cannot be overridden by any subclasses
	public final void speak() {
		System.out.println("This animal speaks in its own special way.");
	}
}

class Dog extends Animal {
	// This would cause a compile-time error because speak() is final in the superclass
	@Override
	public void speak() {
		System.out.println("The dog barks");
	}
}`} />
        <p>In this example, attempting to override the <code className="inline">speak</code> method in the <code className="inline">Dog</code> class will result in a compile-time error because the method in the <code className="inline">Animal</code> class is declared as <code className="inline">final</code>. This ensures that all animals "speak" in the general way defined in the <code className="inline">Animal</code> class, without alteration by subclasses.</p>
        <p>Preventing method overriding can be useful for several reasons:</p>
        <ul>
          <li><strong>Security:</strong> Final methods ensure that critical functionality cannot be altered or compromised by future subclass implementations.</li>
          <li><strong>Integrity:</strong> By making a method final, you preserve the original design and behavior of the method, ensuring that certain behaviors remain unchanged throughout the class hierarchy.</li>
          <li><strong>Simplicity:</strong> Final methods reduce the complexity introduced by having multiple versions of a method across subclasses, making the codebase easier to maintain and understand.</li>
        </ul>
      </section>

      <section>
        <h2>Polymorphism at Runtime vs. Compile time</h2>
        <p>Consider the following program:</p>

        <CodeBlock language={"java"} codeString={`
class Thing {
	void doSomething() {
			System.out.println("Doing something as a Thing");
	}
}

class MoreThing extends Thing {
	@Override
	void doSomething() {
			System.out.println("Doing something more as a MoreThing");
	}

	void doMoreThing() {
			System.out.println("Doing a specific thing for MoreThing");
	}
}

public class Main {
    public static void main(String[] args) {
        // Create an array of MoreThing references, but using Thing as the reference type
        Thing[] things = new MoreThing[3];

        try {
            // This should be fine, adding a MoreThing to a MoreThing array
            things[0] = new MoreThing();
            things[0].doSomething();  // This will call MoreThing's overridden method

            // Attempting to add a Thing to a MoreThing array
            things[1] = new Thing();  // This will throw an ArrayStoreException
        } catch (ArrayStoreException e) {
            System.out.println("Caught an ArrayStoreException. You cannot add a Thing to a MoreThing array.");
        }

        // If we were able to add, this would call Thing's doSomething method
        // but since we catch the exception, let's do safe calls
        for (Thing thing : things) {
            if (thing != null) {
                thing.doSomething();  // Correctly call the method depending on the object's actual type
            }
        }
    }
}`} />

        <ul>
          <li><strong>Polymorphic Arrays:</strong> The program creates an array that can hold references of type <code className="inline">Thing</code>, but the array itself is instantiated to hold objects of type <code className="inline">MoreThing</code>. This demonstrates polymorphism, where a superclass reference (Thing) is used to refer to a subclass object (MoreThing).</li>
          <li><strong>Exception Handling:</strong> The code tries to assign a <code className="inline">Thing</code> object to an array that is explicitly designed to hold <code className="inline">MoreThing</code> objects. This mismatch results in an <code className="inline">ArrayStoreException</code>, which is caught and handled gracefully in the <code className="inline">try-catch</code> block. This section of the code shows how to handle runtime errors that occur due to type mismatches in polymorphic arrays.</li>
          <li><strong>Method Overriding:</strong> The call to <code className="inline">doSomething()</code> demonstrates method overriding, where the method that gets called is determined by the actual object's type, not the type of the reference. This is a key aspect of polymorphism.</li>
          <li><strong>Iterating Safely:</strong> The final loop safely calls <code className="inline">doSomething()</code> on each element in the array only if it is not <code className="inline">null</code>, showing a safe way to handle potentially uninitialized array slots.</li>
        </ul>

        <h2>Unpredictable Object Types using <code className="inline">Random()</code></h2>
        <p>Let's analyze the following Java program:</p>

        <CodeBlock language={"java"} codeString={`import java.util.Random;

public class RandomObjectGenerator {
    public static void main(String[] args) {
        Random random = new Random();
        Thing thing;

        // Randomly create an instance of Thing or MoreThing
        if (random.nextBoolean()) {
            thing = new MoreThing();
            System.out.println("Created a MoreThing");
        } else {
            thing = new Thing();
            System.out.println("Created a Thing");
        }

        // Attempt to call a method specific to MoreThing
        try {
            MoreThing moreThing = (MoreThing) thing; // This cast might fail at runtime
            moreThing.doMoreThings(); // This method does not exist in Thing
        } catch (ClassCastException e) {
            System.out.println("Runtime error: " + e.getMessage());
        }
    }
}`} />

        <ul>
          <li><strong>Random Object Creation:</strong> The program uses a <code className="inline">Random</code> object to decide whether to instantiate <code className="inline">Thing</code> or <code className="inline">MoreThing</code>. This introduces an element of unpredictability to the type of object <code className="inline">thing</code> refers to at runtime.</li>
          <li><strong>Type Casting:</strong> The code attempts to cast the <code className="inline">thing</code> reference to a <code className="inline">MoreThing</code> type in order to call a method that is specific to <code className="inline">MoreThing</code>. This operation is risky and can lead to a <code className="inline">ClassCastException</code> if <code className="inline">thing</code> is actually an instance of <code className="inline">Thing</code>.</li>
          <li><strong>Exception Handling:</strong> A <code className="inline">try-catch</code> block is used to handle the <code className="inline">ClassCastException</code>. This is crucial because the actual type of <code className="inline">thing</code> cannot be guaranteed without checking, given that its type is determined randomly at runtime. The exception handling provides a safety net to manage the error gracefully if the cast fails.</li>
        </ul>

        <h3>Key Concepts Illustrated</h3>
        <p>This code snippet is a practical example that highlights several key concepts in Java:</p>
        <ul>
          <li><strong>Polymorphism:</strong> The ability to treat objects of different classes through a common superclass interface.</li>
          <li><strong>Dynamic Type Checking:</strong> Java's runtime system checks before performing certain operations, like casting, which depend on the actual class type of the object.</li>
          <li><strong>Exception Handling:</strong> Using <code className="inline">try-catch</code> structures to manage runtime errors that arise from operations such as type casting.</li>
        </ul>
      </section>

      <section>
        <h2>Upcasting and Downcasting</h2>
        <p>Upcasting and downcasting are two fundamental concepts in Java's object-oriented programming that relate to how objects of subclass and superclass types are treated and manipulated. This section explains why upcasting is always safe, the potential risks of downcasting, and how both are implemented in Java programming.</p>

        <h3>What is Upcasting?</h3>
        <p>Upcasting occurs when an object of a subclass is treated as an object of its superclass. This form of casting is inherently safe and is performed implicitly by Java. It is particularly useful in polymorphism, enabling a subclass object to be accessed through a reference variable of a superclass type.</p>

        <CodeBlock language={"java"} codeString={`
class Thing {}                    // full implementation not shown
class MoreThing extends Thing {}  // full implementation not shown

MoreThing moreThing = new MoreThing();
Thing thing = moreThing;  // Upcasting is implicit and done automatically`} />

        <h3>Why is Upcasting Safe?</h3>
        <ul>
          <li><strong>Class Hierarchy:</strong> Since a subclass inherits from its superclass, it naturally includes all the features of the superclass. Therefore, a subclass object can always be treated as its superclass.</li>
          <li><strong>Guaranteed Compatibility:</strong> A subclass object can always fulfill the contract of the superclass, making it compatible for reference through a superclass type.</li>
        </ul>

        <h3>Downcasting</h3>
        <p>Downcasting, in contrast, involves casting a superclass object to a subclass type. This operation is inherently risky and requires explicit casting. In fact, attempting to downcast a superclass object to a subclass type without explicit casting will result in a compile-time error. Downcasting can lead to runtime errors if the object being cast is not actually an instance of the subclass.</p>

        <CodeBlock language={"java"} codeString={`Thing thing = new Thing(); // Superclass object
MoreThing moreThing = thing;  // Non-explicit downcasting: will cause a compile-time error
MoreThing moreThing = (MoreThing) thing;  // Downcasting, risky and may throw ClassCastException`} />

        <p>Downcasting needs to be handled with care because it assumes that the object has all the features of the subclass, which isn't always the case. An incorrect cast can result in a <code className="inline">ClassCastException</code> at runtime.</p>

        <h3>Practical Uses and Risks</h3>
        <p>Upcasting is widely used in Java for general programming where methods that operate on superclass types can seamlessly accept objects of any subclass. Downcasting, however, should be used sparingly and usually in situations where the type of the object is known and confirmed, such as after using <code className="inline">instanceof</code> to check the object's type:</p>

        <CodeBlock language={"java"} codeString={`if (thing instanceof MoreThing) {
    MoreThing moreThing = (MoreThing) thing; // Safe downcasting after checking
}`} />
      </section>

      <section>
        <h2>Static (Reference) and Dynamic Types</h2>
        <p>In Java, the type of reference variable (static type) and the type of the object it refers to (dynamic type) play crucial roles in method invocation, especially when methods are overridden:</p>

        <ul>
          <li><strong>Static Type:</strong> The static type of a reference is established at compile time and <strong>determines which methods can be accessed</strong>. This type is used to enforce Java's syntax rules and ensure that only methods that belong to or are inherited by that class are callable, providing a layer of type safety.</li>
          <li><strong>Dynamic Type:</strong> The dynamic type is the actual type of the object in memory, which may be the same as or a subclass of the reference's static type. The dynamic type determines which overridden method is executed when a method call occurs, utilizing Java's dynamic method dispatch.</li>
        </ul>

        <h3>Dynamic Method Dispatch</h3>
        <p>Dynamic method dispatch is a core concept in Java's runtime polymorphism that deals with how overridden methods are resolved during program execution. This mechanism ensures that the correct version of an overridden method is called, based on the actual object's type, not the reference type.</p>
        <p>When a method is invoked on an object, Java determines the method to execute based on the object's dynamic type. This process, known as dynamic method dispatch, allows Java to support polymorphic behaviors and method overriding, ensuring that the most specific implementation of a method is called at runtime.</p>

        <CodeBlock language={"java"} codeString={`class Animal {
		private String name;

    void speak() {
        System.out.println("Animal speaks");
    }
}

class Dog extends Animal {
    @Override
    void speak() {
        System.out.println("Dog barks");
    }

		void catch() {
		    System.out.println("Dog catches");
		}
}

public class TestPolymorphism {
    public static void main(String[] args) {
        Animal myAnimal = new Dog(); // Upcasting
        myAnimal.speak();  // Outputs "Dog barks"
		// myAnimal.catch();  // Would fail to compile because catch() is not in Animal
    }
}`} />

        <p>In this example:</p>
        <ul>
          <li>The <code className="inline">myAnimal</code> reference has a static type of <code className="inline">Animal</code> and a dynamic type of <code className="inline">Dog</code>.</li>
          <li>The static type <code className="inline">Animal</code> of <code className="inline">myAnimal</code> allows it to call the method <code className="inline">speak</code> only, since it is the only method available to the <code className="inline">Animal</code> class.</li>
          <li>Rather than actually calling the <code className="inline">speak()</code> method of <code className="inline">Animal</code>, dynamic dispatch causes the dynamic type (actual object type) <code className="inline">Dog</code>'s <code className="inline">speak</code> method, as it is the more specific and overridden method.</li>
          <li>The <code className="inline">catch()</code> method is not available in <code className="inline">Animal</code>, so it would cause a compile-time error if it were to be called.</li>
        </ul>
      </section>

      <section>
        <h2>Invariance of Java Generics and Correct Usage of Wildcards (Optional)</h2>
        <p>Java generics are a powerful feature that enhances type safety and readability. However, they also introduce the concept of invariance, which can lead to compile-time errors if not properly understood. This section explains why Java generics are invariant and how to use wildcards to work around this limitation.</p>

        <h3>Understanding Invariance in Java Generics</h3>
        <p>In Java, generics are invariant, meaning that even if a class <code className="inline">A</code> is a subtype of <code className="inline">B</code>, <code className="inline">List&lt;A&gt;</code> is not a subtype of <code className="inline">List&lt;B&gt;</code>. This rule is crucial for maintaining type safety but can be counterintuitive. For example:</p>

        <CodeBlock language={"java"} codeString={`ArrayList<Dog> dogs = new ArrayList<UnderDog>(); // Compile-time error`} />

        <p>This declaration fails because <code className="inline">List&lt;UnderDog&gt;</code> is not considered a subtype of <code className="inline">List&lt;Dog&gt;</code>, even though <code className="inline">UnderDog</code> is a subclass of <code className="inline">Dog</code>. Allowing this assignment could lead to significant type safety issues, such as:</p>

        <CodeBlock language={"java"} codeString={`ArrayList<Dog> dogs = new ArrayList<UnderDog>(); // Hypothetical legal code
dogs.add(new Dog()); // This would be legal but should not be possible because the list should only accept UnderDog instances.`}
        />

        <p>This scenario would potentially allow adding any <code className="inline">Dog</code> to a list that should only contain <code className="inline">UnderDog</code> instances, leading to runtime errors when specific <code className="inline">UnderDog</code> methods or behaviors are expected. Note that using simple arrays instead of arraylists would work in this scenario, as generics are not used.</p>

        <h3>Using Wildcards for Flexibility</h3>
        <p>To handle generics more flexibly while preserving type safety, Java offers wildcard types:</p>

        <ul>
          <li><strong>Wildcard for Reading:</strong> If you need to process elements from a list of <code className="inline">Dog</code> and all its subclasses without adding new elements, you can use an upper-bounded wildcard:</li>
        </ul>

        <CodeBlock language={"java"} codeString={`ArrayList<? extends Dog> dogs = new ArrayList<UnderDog>();`}
        />

        <p>This declaration allows <code className="inline">dogs</code> to reference a list of any subclass of <code className="inline">Dog</code>. You cannot add to this list (except for <code className="inline">null</code>), which prevents type safety violations.</p>

        <ul>
          <li><strong>Adding Elements:</strong> If adding elements is required, you should define the list with the specific type you intend to support:</li>
        </ul>

        <CodeBlock language={"java"} codeString={`ArrayList<Dog> dogs = new ArrayList<Dog>();
dogs.add(new Dog());
dogs.add(new UnderDog());`}
        />

        <p>This approach maintains type safety, ensuring that the list can hold <code className="inline">Dog</code> and any of its subclasses, and each can be added without risking a type mismatch.</p>
      </section>

      {questions && questions.length > 0 && !loading
        ?
        <section>
          <h2>Quiz</h2>
          {questions?.map((question, index) => <QuizQuestion key={index} index={index} question={question} />)}
        </section>
        :
        <section>
          <h2>Loading Quiz...</h2>
        </section>
      }


      <section>
        <h2>Exercise: Method Overriding and <code className="inline">super()</code></h2>
        <CodeBlock language={"java"} codeString={`public class Dog {
    public void act() {
        System.out.print("run ");
        eat();
    }
    public void eat() {
        System.out.print("eat ");
    }
}

public class UnderDog extends Dog {
    public void act() {
        super.act();
        System.out.print("sleep ");
    }
    public void eat() {
        super.eat();
        System.out.print("bark ");
    }
}

// In another class
Dog fido = new UnderDog();
fido.act();`} />

        <h3>Step-by-Step Execution</h3>
        <p>Here's how the method calls unfold when <code className="inline">fido.act()</code> is executed:</p>
        <ol>
          <li><strong>Call to <code className="inline">fido.act()</code>:</strong> Since <code className="inline">fido</code> is an instance of <code className="inline">UnderDog</code>, the <code className="inline">act()</code> method in <code className="inline">UnderDog</code> is invoked.</li>
          <li><strong>UnderDog's <code className="inline">act()</code> method:</strong> This method first calls <code className="inline">super.act()</code>, which refers to the <code className="inline">act()</code> method in <code className="inline">Dog</code> (the superclass).</li>
          <li><strong>Dog's <code className="inline">act()</code> method:</strong> Prints "run ", then calls <code className="inline">eat()</code>. However, due to polymorphism, <code className="inline">eat()</code> resolves to <code className="inline">UnderDog</code>'s overridden <code className="inline">eat()</code> method.</li>
          <li><strong>UnderDog's <code className="inline">eat()</code> method:</strong> This method first calls `super.eat()`, invoking <code className="inline">Dog</code>'s <code className="inline">eat()</code> method, which prints "eat ". Afterwards, <code className="inline">UnderDog</code>'s <code className="inline">eat()</code> continues and prints "bark ".</li>
          <li><strong>Completion of <code className="inline">super.act()</code>:</strong> Control returns to <code className="inline">UnderDog</code>'s <code className="inline">act()</code> method, which then prints "sleep ".</li>
        </ol>

        <h3>Final Output</h3>
        <p>Combining all the prints from the above sequence, the output on executing <code className="inline">fido.act()</code> will be:</p>
        <CodeBlock language={"java"} codeString={`run eat bark sleep `} />
      </section>

      <section>
        <h2>Private Variables in Superclasses</h2>
        <p>The <code className="inline">Point</code> class is designed to encapsulate a point in the xy-coordinate plane.</p>

        <CodeBlock language={"java"} codeString={`// Adapted from CollegeBoard
		public class Point {
    private int x;
    private int y;

    public Point() {
        x = 0;
        y = 0;
    }

    public Point(int a, int b) {
        x = a;
        y = b;
    }

    // Other methods not shown
}`}
        />

        <CodeBlock language={"java"} codeString={`public class NamedPoint extends Point {
    // Incorrect constructor, will throw an error
    public NamedPoint(int d1, int d2, String pointName) {
        x = d1;
        y = d2;
        name = pointName;
    }
}`} />
        <p>This constructor for <code className="inline">NamedPoint</code> is incorrect because it attempts to directly set private variables of the superclass.</p>

        <p>One way to fix the <code className="inline">NamedPoint</code> constructor:</p>
        <CodeBlock language={"java"} codeString={`public NamedPoint(int d1, int d2, String pointName) {
    super(d1, d2);
    name = pointName;
}`} />
      </section>

      <section>
        <h2>Projects</h2>
        <p>Completing these challenges will help you apply what you've learned about polymorphism, method overloading, and overriding in real-world programming scenarios.</p>
        <ul>
          <li className='paragraph'>
            <strong>Animal Sound Simulator:</strong> Implement a class hierarchy starting with a base class <code className="inline">Animal</code>. Create at least three subclasses (e.g., <code className="inline">Dog</code>, <code className="inline">Cat</code>, and <code className="inline">Bird</code>). Each subclass should override a <code className="inline">makeSound</code> method to emit a unique sound. Test these in a main method where polymorphism allows you to invoke the method on a collection of <code className="inline">Animal</code> objects, each declared as an <code className="inline">Animal</code> but instantiated as a specific subclass.
          </li>

          <li className='paragraph'>
            <strong>Polymorphic Calculator:</strong> Create a <code className="inline">Calculator</code> class that uses method overloading and overriding to perform basic arithmetic operations (add, subtract, multiply, divide). Start with a base class that implements each operation with two integers and then create a subclass that overrides these methods to work with doubles. Include a method that uses overloading to handle an arbitrary number of integers for addition and multiplication.
          </li>

          <li className='paragraph'>
            <strong>Shape Area Calculator:</strong> Develop a polymorphic system for calculating the area of different shapes. Create an abstract base class <code className="inline">Shape</code> with an abstract method <code className="inline">calculateArea</code>. Subclasses should include <code className="inline">Circle</code>, <code className="inline">Rectangle</code>, and <code className="inline">Triangle</code>. Each subclass should provide its own implementation for <code className="inline">calculateArea</code>. Use a main method to create an array of <code className="inline">Shape</code> objects, calculate, and print the area of each shape using a loop.
          </li>

          <li className='paragraph'>
            <strong>Interface-based Polymorphism:</strong> Create an interface <code className="inline">Switchable</code> with methods <code className="inline">turnOn</code> and <code className="inline">turnOff</code>. Implement this interface in different classes such as <code className="inline">Light</code>, <code className="inline">Fan</code>, and <code className="inline">Computer</code>. Each class should have a unique implementation of the interface methods. Demonstrate polymorphism by creating a list of <code className="inline">Switchable</code> objects, iterating through the list, and invoking the methods polymorphically.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default JavaPolymorphism;
