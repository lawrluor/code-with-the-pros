import React from 'react';
import CodeBlock from './CodeBlock';

import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';


export default function QuizQuestion ({ index, question, answer }) {
	const [isVisible, setIsVisible] = React.useState(false);

	// const renderers = {
	// 	code: ({language, value}) => {
	// 		return <CodeBlock language={language} children={value} />
	// 	}
	// };

	return (
		<div className="quizQuestion">
			<hr />
			<h3>Question {index + 1}</h3>
			<ReactMarkdown
        children={question}
        components={{
          code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <CodeBlock language={match[1]} codeString={String(children).replace(/\n$/, '')} />
            ) : (
              <code className="inline">{String(children).replace(/\n$/, '')}</code>
            )
          }
        }}
      />			<button onClick={() => setIsVisible(!isVisible)}>{isVisible ? 'Hide Answer' : 'Show Answer'}</button>
			{isVisible && <>
				<h3>Answer</h3>
				<ReactMarkdown
        children={answer}
        components={{
          code({node, inline, className, children, ...props}) {
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
      />			</>}
		</div>
	)
}