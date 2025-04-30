import React from 'react';

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="lesson-container">
      <section>
        <h1>Code With The Pros</h1>

        <nav>
          <h3>Python: Intro Topics</h3>
          <ul>
            <li><Link to="/intro">Intro</Link></li>
            <li><Link to="/project00">Project 00</Link></li>
            <li><Link to="/strings">Strings</Link></li>
            <li><Link to="/project01">Project 01</Link></li>
            <li><Link to="/variables">Variables</Link></li>
            <li><Link to="/input">Input</Link></li>
            <li><Link to="/Project02B">Project 02B</Link></li>
            <li><Link to="/Project02A">Project 02A</Link></li>
            <li><Link to="/Project03">Project 03</Link></li>
            <li><Link to="/conditionals">Conditionals</Link></li>
            <li><Link to="/pigLatin">Pig Latin</Link></li>
            <li><Link to="/booleans">Booleans</Link></li>
            <li><Link to="/Project04B">Project 04B</Link></li>
            <li><Link to="/functions">Functions</Link></li>
            <li><Link to="/Project05">Project 05</Link></li>
            <li><Link to="/whileLoops">While Loops</Link></li>
            <li><Link to="/Project06">Project 06</Link></li>
            <li><Link to="/forLoops">For Loops</Link></li>
            <li><Link to="/Project07">Project 07</Link></li>
            <li><Link to="/caesarCipher">Caesar Cipher</Link></li>
            <li><Link to="/lists">Lists</Link></li>
            <li><Link to="/dictionaries">Dictionaries</Link></li>
          </ul>

          <h3>Python: Intermediate Topics</h3>
          <ul>
            <li>
              <Link to="/passByReference">Pass By Reference</Link>
            </li>
          </ul>

          <h3>Java</h3>
          <ul>
            <li><Link to="/javaObjects">Objects</Link></li>
            <li><Link to="/javaInheritance">Inheritance</Link></li>
            <li><Link to="/javaPolymorphism">Polymorphism</Link></li>
          </ul>
        </nav>

      </section>
    </div>
  );
};

export default Home;