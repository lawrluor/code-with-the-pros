import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Import Lessons
import { Intro, Strings, Input, PigLatin, IfElse, Booleans, Functions, WhileLoops, ForLoops, CaesarCipher, Lists, Dictionaries, PassByReference } from './pages/Python';
import { JavaObjects, JavaInheritance, JavaPolymorphism } from './pages/Java';

function App() {
  return (
    <Router>
      <div className="App">
        <nav style={{ display: 'none' }}>
          {/* Navigation Links */}
          <ul>
            <h4>Beginner Topics</h4>
            <li><Link to="/intro">Intro</Link></li>
            <li><Link to="/strings">Strings</Link></li>
            <li><Link to="/input">Input</Link></li>
            <li><Link to="/pigLatin">Pig Latin</Link></li>
            <li><Link to="/ifelse">Conditionals</Link></li>
            <li><Link to="/booleans">Booleans</Link></li>
            <li><Link to="/functions">Functions</Link></li>
            <li><Link to="/whileLoops">While Loops</Link></li>
            <li><Link to="/forLoops">For Loops</Link></li>
            <li><Link to="/caesarCipher">Caesar Cipher</Link></li>
            <li><Link to="/lists">Lists</Link></li>
            <li><Link to="/dictionaries">Dictionaries</Link></li>

            <h4>Intermediate Topics</h4>
            <li>
              <Link to="/passByReference">Pass By Reference</Link>
            </li>

            <h4>Java</h4>
            <li><Link to="/javaObjects">Objects</Link></li>
            <li><Link to="/javaInheritance">Inheritance</Link></li>
            <li><Link to="/javaPolymorphism">Polymorphism</Link></li>
          </ul>
        </nav>

        {/* New Route Configuration for React Router v6 */}
        <Routes>
          <Route path="/intro" element={<Intro />} />
          <Route path="/strings" element={<Strings />} />
          <Route path="/input" element={<Input />} />
          <Route path="/pigLatin" element={<PigLatin />} />
          <Route path="/conditionals" element={<IfElse />} />
          <Route path="/booleans" element={<Booleans />} />
          <Route path="/functions" element={<Functions />} />
          <Route path="/whileLoops" element={<WhileLoops />} />
          <Route path="/forLoops" element={<ForLoops />} />
          <Route path="/caesarCipher" element={<CaesarCipher />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/dictionaries" element={<Dictionaries />} />
          <Route path="/passByReference" element={<PassByReference />} />
          <Route path="/javaObjects" element={<JavaObjects />} />
          <Route path="/javaInheritance" element={<JavaInheritance />} />
          <Route path="/javaPolymorphism" element={<JavaPolymorphism />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
