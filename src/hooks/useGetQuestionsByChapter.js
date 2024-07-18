import React from 'react';

export default function useGetQuestionsByChapterName(chapterName) {
	const [questions, setQuestions] = React.useState([]);
	const [loading, setLoading] = React.useState(true);
	const [error, setError] = React.useState("");

	React.useEffect(() => {
			const fetchData = async () => {
				try {
						const url = `${process.env.REACT_APP_DATABASE_URL}/api/getQuestionsByChapterName/${chapterName}`;
						const response = await fetch(url, {
								method: "GET",
								headers: {
										"Content-Type": "application/json"
								}
						});

						if (response.ok) {
								const data = await response.json();  // Parse JSON data from the response
								setQuestions(data || []);  // Set questions to state, or empty array if undefined
						} else {
								throw new Error(`HTTP error! Status: ${response.status}`);
						}
				} catch (error) {
						console.error("Error fetching data:");
						console.error(error);
						setQuestions([]); // Optionally reset to empty array on error
						setError(error.message);
				} finally {
						setLoading(false);
				}
		};

		fetchData();
	}, [chapterName]);

	return { questions, loading, error };
}