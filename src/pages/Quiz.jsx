import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import QuizQuestion from '../components/QuizQuestion';
import useGetQuestionsByChapter from '../hooks/useGetQuestionsByChapter';
import ProgressBar from '../components/ProgressBar';

const Quiz = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name');

  const { questions, loading, error } = useGetQuestionsByChapter(name);

  useEffect(() => {
    console.log(questions);
  }, [questions])

  return (
    <div className="lesson-container">
      {loading ? <h2>Loading Quiz...</h2> :
        (error || questions.length < 1) ? <h2>Error occurred: Quiz may not exist</h2> :
          <>
            <ProgressBar />

            <h2>Quiz</h2>

            <section id="quiz-questions">
              {questions?.map((question, index) =>
                <QuizQuestion key={index} index={index} question={question} />
              )}
            </section>
          </>
      }
    </div>
  );
}

export default Quiz;
