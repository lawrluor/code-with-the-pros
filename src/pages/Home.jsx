import Contents from './Contents';
import './Home.css';

const Home = () => {
  return (
    <div className="lesson-container">
      <section className="homeIntro">
        <h1>Code With The Pros</h1>

        <p className="homeLead">
          A website for learning programming and coding created by Lawrence Luo. This is an interactive digital textbook.
          Through challenges throughout the reading, you will actively practice as you learn. This website is best used
          with a tutor next to you, guiding you step-by-step, asking the right questions, and helping you form strong
          habits.
        </p>

        <div className="homeColumns">
          <div className="homeColumn">
            <h2>What To Expect</h2>
            <p>Content is grouped into lessons/chapters. A typical chapter includes:</p>
            <h4>Reading</h4>
            <p>Read descriptions and code examples, one concept at a time.</p>
            <h4>Code challenges</h4>
            <p>Write real code after each section in small, focused exercises.</p>
            <h4>Reasoning challenges</h4>
            <p>Explain what code does or should do, predict outputs, and trace logic to build understanding.</p>
            <h4>Quizzes</h4>
            <p>Quick checks for key ideas and vocabulary.</p>
            <h4>Projects</h4>
            <p>Longer, creative, multi-step exercises that combine skills from previous chapters and mirror real-world tasks.</p>
          </div>
        </div>

        <h2>Contents</h2>
        <Contents />
      </section>
    </div>
  );
};

export default Home;