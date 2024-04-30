import React from 'react';
import CodeBlock from '../components/CodeBlock';

const JavaPolymorphism = () => {
    return (
        <div className="lesson-container">
            <h1>Understanding Polymorphism in Java</h1>

            <section>
                <h2>What is Polymorphism?</h2>
                <p>Polymorphism is a fundamental concept in object-oriented programming that allows objects to be treated as instances of their parent class rather than their actual class. The word "polymorphism" comes from Greek, meaning "many shapes." In Java, this allows methods to perform differently based on the object that it is acting upon, which leads to two primary types: compile-time (method overloading) and runtime (method overriding) polymorphism.</p>
            </section>

            <section>
                <h2>Compile-Time Polymorphism: Method Overloading</h2>
                <p>Method overloading occurs when several methods share the same name within a class but have different parameters (type or number). It is resolved at compile time.</p>
                <CodeBlock codeString={`public class DisplayOverloader {
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
                <h2>Runtime Polymorphism: Method Overriding</h2>
                <p>Method overriding occurs when a subclass provides a specific implementation of a method already provided by one of its parent classes. This version of polymorphism is resolved at runtime.</p>
                <CodeBlock codeString={`class Animal {
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
							<CodeBlock codeString={`Animal animal = new Animal();
Animal dog = new Dog();
Animal cat = new Cat();

ArrayList<Animal> animals = new ArrayList<>();
animals.add(animal);
animals.add(dog);
animals.add(cat);`} />
							<p>In this example, all objects are declared with the type <code className="inline">Animal</code>. This approach emphasizes that <code className="inline">dog</code> and <code className="inline">cat</code> are treated purely as <code className="inline">Animal</code> objects, even though they are instances of subclasses. This method is useful for maintaining a uniform interface where the specifics of the object types are less important than the behavior defined by the superclass.</p>

							<p><strong>Example 2:</strong> Using Actual Class Types for References</p>
							<CodeBlock codeString={`Animal animal = new Animal();
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

							<CodeBlock codeString={`import java.util.ArrayList;

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
							<p>In this example, an <code className="inline">ArrayList</code> named <code className="inline">animals</code> is used to store objects of <code className="inline">Dog</code> and <code className="inline">Cat</code>, which are both subclasses of <code className="inline">Animal</code>. By iterating over this list and calling the <code className="inline">speak</code> method on each object, we invoke the overridden method specific to each subclass. This demonstrates polymorphism’s capability to use a single interface (<code className="inline">speak</code> method in <code className="inline">Animal</code>) to invoke methods specific to each object's actual class type.</p>

							<p>It would be tricky to handle this situation in a different way, as using the <code className="inline">Cat</code> data type as the looping variable, for example, would not properly describe the varying types of the  <code className="inline">Animal</code> subclasses.</p>

							<p>The same applies for simple arrays:</p>
							<CodeBlock codeString={`public class TestPolymorphism {
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
						</section>

						<section>
								<h2>The <code className="inline">final</code> Keyword and Preventing Method Overriding</h2>
								<p>In Java, the <code className="inline">final</code> keyword is a non-access modifier used for several purposes. When applied to methods, the <code className="inline">final</code> keyword prevents them from being overridden by subclasses. This can be used to "lock down" a method's behavior to ensure consistency across all instances of an object, regardless of the subclass that might extend a superclass.</p>

								<CodeBlock codeString={`class Animal {
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
