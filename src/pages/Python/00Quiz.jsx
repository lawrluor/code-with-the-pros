import React, { useEffect } from 'react';
import QuizQuestion from '../../components/QuizQuestion';

import useGetQuestionsByChapter from '../../hooks/useGetQuestionsByChapter';

const Quiz00 = () => {
  const { questions, loading } = useGetQuestionsByChapter("00Intro.py");

  useEffect(() => {
		console.log(questions);
 }, [questions])

	return (
		<div className="lesson-container">
			<section>
			{questions && questions.length > 0 && !loading
				?
				<section>
						<h2>Quiz</h2>
						{questions?.map((question, index) => <QuizQuestion key={index} index={index} question={question} />)}
				</section>
				:
				<section>
						<h2>Loading Quiz...</h2>
				</section>
				}
			</section>
		</div>
	);
}

export default Quiz00;
