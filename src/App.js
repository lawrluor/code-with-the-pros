import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

// Import Lessons
import { JavaInheritance, JavaObjects, JavaPolymorphism } from './pages/Java';
import { Booleans, Conditionals, Dictionaries, ForLoops, Functions, Input, Intro, Lists, PassByReference, PigLatin, Strings, Variables, WhileLoops } from './pages/Python';
import { ReactActivity } from './pages/React/ReactActivity';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Page404 from './pages/Page404';
import TopNav from './components/TopNav';

import { projects } from './pages/Python/projects';

function App() {

  return (
    <Router>
      <div className="App">
        <TopNav />

        <Routes>
          {projects.map((project) => (
            <Route key={project.name} path={project.path} element={<project.component />} />
          ))}

          <Route path="/" element={<Home />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/strings" element={<Strings />} />
          <Route path="/input" element={<Input />} />
          <Route path="/variables" element={<Variables />} />
          <Route path="/conditionals" element={<Conditionals />} />
          <Route path="/pigLatin" element={<PigLatin />} />
          <Route path="/booleans" element={<Booleans />} />
          <Route path="/functions" element={<Functions />} />
          <Route path="/whileLoops" element={<WhileLoops />} />
          <Route path="/forLoops" element={<ForLoops />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/dictionaries" element={<Dictionaries />} />
          <Route path="/passByReference" element={<PassByReference />} />
          <Route path="/javaObjects" element={<JavaObjects />} />
          <Route path="/javaInheritance" element={<JavaInheritance />} />
          <Route path="/javaPolymorphism" element={<JavaPolymorphism />} />
          <Route path="/reactActivity" element={<ReactActivity />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
