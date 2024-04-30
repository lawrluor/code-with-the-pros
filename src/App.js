import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Input from './pages/02Input';
import IfElse from './pages/03IfElse';
import Booleans from './pages/04Booleans';
import ForLoops from './pages/07ForLoops';
import WhileLoops from './pages/06WhileLoops';
import ReferenceTypes from './pages/09ReferenceTypes';
import JavaPolymorphism from './pages/JavaPolymorphism';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          {/* Navigation Links */}
          <ul>
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
              <Link to="/referenceTypes">Reference Types</Link>
            </li>
            <li>
              <Link to="/javaPolymorphism">Java Polymorphism</Link>
            </li>
          </ul>
        </nav>

        {/* New Route Configuration for React Router v6 */}
        <Routes>
          <Route path="/input" element={<Input />} />
          <Route path="/conditionals" element={<IfElse />} />
          <Route path="/booleans" element={<Booleans />} />
          <Route path="/whileLoops" element={<WhileLoops />} />
          <Route path="/forLoops" element={<ForLoops />} />
          <Route path="/referenceTypes" element={<ReferenceTypes />} />
          <Route path="/javaPolymorphism" element={<JavaPolymorphism />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
