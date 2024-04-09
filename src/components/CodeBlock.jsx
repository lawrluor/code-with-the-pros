import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ codeString }) => {
  return (
    <SyntaxHighlighter class="syntax-highlighter" language="python" style={vscDarkPlus}>
      {codeString}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;