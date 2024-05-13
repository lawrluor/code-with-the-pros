import React from 'react';

export default function useGetQuestionsByChapter(chapterId) {
	const [questions, setQuestions] = React.useState([]);
	const [loading, setLoading] = React.useState(true);

	React.useEffect(() => {
			const fetchData = async () => {
				try {
						const response = await fetch(`${process.env.REACT_APP_DATABASE_URL}/api/getQuestionsByChapter/${chapterId}`, {
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
				}
				setLoading(false);
		};

		fetchData();
	}, [chapterId]);

	return { questions, loading };
}