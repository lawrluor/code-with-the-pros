import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ codeString, language }) => {
  return (
    <SyntaxHighlighter class="syntax-highlighter" language={language} style={vscDarkPlus}>
      {codeString}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;