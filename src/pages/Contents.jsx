import { Link } from 'react-router-dom';
import { projects } from './Python/projects';
import './Contents.css';

const Contents = () => {
  return (
    <nav className="contents">
      <h3>Python: Intro Topics</h3>
      <ul className="contentsList">
        <li><Link to="/intro">Intro</Link></li>
        <li><Link to="/strings">Strings</Link></li>
        <li><Link to="/variables">Variables</Link></li>
        <li><Link to="/input">Input</Link></li>
        <li><Link to="/conditionals">Conditionals</Link></li>
        <li><Link to="/booleans">Booleans</Link></li>
        <li><Link to="/functions">Functions</Link></li>
        <li><Link to="/whileLoops">While Loops</Link></li>
        <li><Link to="/forLoops">For Loops</Link></li>
        <li><Link to="/lists">Lists</Link></li>
        <li><Link to="/dictionaries">Dictionaries</Link></li>
      </ul>

      <h3>Python: Intermediate Topics</h3>
      <ul className="contentsList">
        <li>
          <Link to="/passByReference">Pass By Reference</Link>
        </li>
      </ul>

      <h3>Python: Projects</h3>
      <ul className="contentsList">
        {projects.map((project) => (
          <li key={project.path}>
            <Link to={project.path}>{project.name} ({project.topic})</Link>
          </li>
        ))}
      </ul>

      <h3>Java</h3>
      <ul className="contentsList">
        <li><Link to="/javaObjects">Objects</Link></li>
        <li><Link to="/javaInheritance">Inheritance</Link></li>
        <li><Link to="/javaPolymorphism">Polymorphism</Link></li>
      </ul>
    </nav>
  );
};

export default Contents;