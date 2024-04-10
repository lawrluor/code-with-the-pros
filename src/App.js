import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import PythonInput from './pages/02PythonInput';
import IfElse from './pages/03IfElse';
import Booleans from './pages/04Booleans';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          {/* Navigation Links */}
          <ul>
            <li>
              <Link to="/input">PythonInput</Link>
            </li>
            <li>
              <Link to="/ifelse">IfElse</Link>
            </li>
            <li>
              <Link to="/booleans">Booleans</Link>
            </li>
          </ul>
        </nav>

        {/* New Route Configuration for React Router v6 */}
        <Routes>
          <Route path="/ifelse" element={<IfElse />} />
          <Route path="/input" element={<PythonInput />} />
          <Route path="/booleans" element={<Booleans />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
