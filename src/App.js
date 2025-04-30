import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

// Import Lessons
import { JavaInheritance, JavaObjects, JavaPolymorphism } from './pages/Java';
import { Booleans, CaesarCipher, Conditionals, Dictionaries, ForLoops, Functions, Input, Intro, Lists, PassByReference, PigLatin, Project00, Project01, Project02A, Project02B, Project03, Project04B, Project05, Project06, Project07, Strings, Variables, WhileLoops } from './pages/Python';

import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Page404 from './pages/Page404';
import TopNav from './components/TopNav';

function App() {
  const projects = [
    { name: 'Project 00', path: '/project00', component: Project00 },
    { name: 'Project 01', path: '/project01', component: Project01 },
    { name: 'Project 02A', path: '/Project02A', component: Project02A },
    { name: 'Project 02B', path: '/Project02B', component: Project02B },
    { name: 'Project 03', path: '/Project03', component: Project03 },
    { name: 'Project 04B', path: '/Project04B', component: Project04B },
    { name: 'Project 05', path: '/Project05', component: Project05 },
    { name: 'Project 06', path: '/Project06', component: Project06 },
    { name: 'Project 07', path: '/Project07', component: Project07 },
  ];

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
          <Route path="/caesarCipher" element={<CaesarCipher />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/dictionaries" element={<Dictionaries />} />
          <Route path="/passByReference" element={<PassByReference />} />
          <Route path="/javaObjects" element={<JavaObjects />} />
          <Route path="/javaInheritance" element={<JavaInheritance />} />
          <Route path="/javaPolymorphism" element={<JavaPolymorphism />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
