import ProgressBar from '../components/ProgressBar';
import Contents from './Contents';
import './Home.css';

const Home = () => {
  return (
    <div className="lesson-container">
      <ProgressBar />
      <section className="homeIntro">
        <h1>Code With The Pros</h1>

        <p>
          This website is an interactive digital textbook for learning programming and coding created by Lawrence Luo.
          It is designed to be used with a tutor next to you, guiding you through the reading and helping you practice
          the embedded exercises.
        </p>

        {/* <p>Content is grouped into lessons/chapters. A typical chapter includes:</p>
        <ul>
          <li><strong className="listItem">Reading:</strong> Read descriptions and code examples, one concept at a time.</li>
          <li><strong className="listItem">Code challenges:</strong> Write real code after each section in small, focused exercises.</li>
          <li><strong className="listItem">Reasoning challenges:</strong> Explain what code does or should do, predict outputs, and understand logic.</li>
          <li><strong className="listItem">Quizzes:</strong> Quick checks for key ideas and vocabulary.</li>
          <li><strong className="listItem">Projects:</strong> Longer, creative, multi-step exercises that combine skills from previous chapters and mirror real-world tasks.</li>
        </ul> */}

        <Contents />
      </section>
    </div>
  );
};

export default Home;