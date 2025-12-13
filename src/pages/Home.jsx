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
          A website for learning programming and coding created by Lawrence Luo. This is an interactive digital textbook.
          Through challenges throughout the reading, you will actively practice as you learn. This website is best used
          with a tutor next to you, guiding you step-by-step, asking the right questions, and helping you form strong
          habits.
        </p>

        <p>Content is grouped into lessons/chapters. A typical chapter includes:</p>
        <ul>
          <li><strong className="listItem">Reading:</strong> Read descriptions and code examples, one concept at a time.</li>
          <li><strong className="listItem">Code challenges:</strong> Write real code after each section in small, focused exercises.</li>
          <li><strong className="listItem">Reasoning challenges:</strong> Explain what code does or should do, predict outputs, and understand logic.</li>
          <li><strong className="listItem">Quizzes:</strong> Quick checks for key ideas and vocabulary.</li>
          <li><strong className="listItem">Projects:</strong> Longer, creative, multi-step exercises that combine skills from previous chapters and mirror real-world tasks.</li>
        </ul>

        <h2>Contents</h2>
        <Contents />
      </section>
    </div>
  );
};

export default Home;