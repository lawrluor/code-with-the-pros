import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const ListsLesson = () => {
    return (
    <h3>Using the Join Method</h3>
    <p>The <code className="inline">join()</code> method is a more efficient way to concatenate multiple strings, especially when dealing with a list of string elements. It concatenates each element of the iterable (like a list or tuple) into a single string, separated by the string on which <code className="inline">join()</code> was called.</p>
    <CodeBlock language={"python"} codeString={`words = ['Hello', 'World']
sentence = ' '.join(words)
print(sentence)  # Outputs: Hello World`} />
    <p>This method is memory efficient and faster, particularly useful in loops or more complex string operations.</p>
    )
}
