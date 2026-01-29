import React from 'react';
import CodeBlock from './CodeBlock';
import Collapsible from './Collapsible';

import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import { generateQuestion } from '../api/functions';

export default function QuizQuestion({ index, question, onAnswer, onComplete }) {
  const { question: questionText, answer } = question;
  const [additionalQuestions] = React.useState([]);
  const [isVisible, setIsVisible] = React.useState(false);
  // const [loading, setLoading] = React.useState(false);
  const [hasAnswered, setHasAnswered] = React.useState(false);

  const handleShowAnswer = () => {
    setIsVisible(!isVisible);
    if (!hasAnswered && !isVisible) {
      setHasAnswered(true);
      onAnswer?.(answer);
    }
  };

  // const appendQuestion = async (id) => {
  //   setLoading(true);
  //   let result = await generateQuestion(additionalQuestions, id);
  //   setAdditionalQuestions(result);
  //   setLoading(false);
  // };

  return (
    <div className="quiz-question">
      <hr />
      <h3>Question {index + 1}</h3>
      <ReactMarkdown
        children={questionText}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <CodeBlock language={match[1]} codeString={String(children).replace(/\n$/, '')} />
            ) : (
              <code className="inline">{String(children).replace(/\n$/, '')}</code>
            )
          }
        }}
      />

      <Collapsible onClick={handleShowAnswer} title={"Answer"} />

      {isVisible && (
        <>
          <h4>Answer</h4>
          <ReactMarkdown
            children={answer}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={dark}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              }
            }}
          />
        </>
      )}

      {/* {loading ? <button className="disabled" disabled>Loading question...</button> : <button onClick={() => appendQuestion(id)}>Give me a similar question</button>} */}

      {additionalQuestions && additionalQuestions.map((question, index) => (
        <QuizQuestion
          key={index}
          index={index}
          question={question}
          onAnswer={onAnswer}
          onComplete={onComplete}
        />
      ))}
    </div>
  );
}