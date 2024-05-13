import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Input from './pages/Python/02Input';
import IfElse from './pages/Python/03IfElse';
import Booleans from './pages/Python/04Booleans';
import WhileLoops from './pages/Python/06WhileLoops';
import ForLoops from './pages/Python/07ForLoops';
import CaesarCipher from './pages/Python/07P_CaesarCipher';
import PassByReference from './pages/Python/20PassByReference';

import JavaObjects from './pages/Java/JavaObjects';
import JavaInheritance from './pages/Java/JavaInheritance';
import JavaPolymorphism from './pages/Java/JavaPolymorphism';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          {/* Navigation Links */}
          <ul>
            <h4>Beginner Topics</h4>
            <li>
              <Link to="/input">Input</Link>
            </li>
            <li>
              <Link to="/ifelse">Conditionals</Link>
            </li>
            <li>
              <Link to="/booleans">Booleans</Link>
            </li>
            <li>
              <Link to="/whileLoops">While Loops</Link>
            </li>
            <li>
              <Link to="/forLoops">For Loops</Link>
            </li>
            <li>
              <Link to="/caesarCipher">Caesar Cipher</Link>
            </li>

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
          <Route path="/input" element={<Input />} />
          <Route path="/conditionals" element={<IfElse />} />
          <Route path="/booleans" element={<Booleans />} />
          <Route path="/whileLoops" element={<WhileLoops />} />
          <Route path="/forLoops" element={<ForLoops />} />
          <Route path="/caesarCipher" element={<CaesarCipher />} />
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
