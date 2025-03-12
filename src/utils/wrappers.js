/**
 * Wraps given text in a code block with "inline" class.
 * @param {string} text The text to wrap in a code block.
 * @returns {ReactElement} A ReactElement containing the wrapped text.
 */
export const code = (text) => {
	return <code className="inline">{text}</code>
}