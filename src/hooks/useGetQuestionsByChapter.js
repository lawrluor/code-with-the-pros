import React from 'react';

export default function useGetQuestionsByChapterName(chapterName) {
	const [questions, setQuestions] = React.useState([]);
	const [loading, setLoading] = React.useState(true);

	React.useEffect(() => {
			const fetchData = async () => {
				try {
						const url = `${process.env.REACT_APP_DATABASE_URL}/api/getQuestionsByChapterName/${chapterName}`;
						console.log(url);

						const response = await fetch(`${process.env.REACT_APP_DATABASE_URL}/api/getQuestionsByChapterName/${chapterName}`, {
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
	}, [chapterName]);

	return { questions, loading };
}