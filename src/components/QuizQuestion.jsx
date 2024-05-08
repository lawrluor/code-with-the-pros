import React from 'react';

export default function QuizQuestion ({ question, answer }) {
	const [isVisible, setIsVisible] = React.useState(false);

	return (
		<div className="quizQuestion">
			<hr />
			<h3>Question</h3>
			{question}
			<button onClick={() => setIsVisible(!isVisible)}>{isVisible ? 'Hide Answer' : 'Show Answer'}</button>
			{isVisible && <>
				<h3>Answer</h3>
				{answer}
			</>}
		</div>
	)
}