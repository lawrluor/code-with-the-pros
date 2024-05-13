import React from 'react';

export default function useGetQuestions() {
	const [questions, setQuestions] = React.useState([]);

	React.useEffect(() => {
			// Define the async function within the useEffect
			const fetchData = async () => {
				try {
						const response = await fetch("https://codewiththepros-backend.onrender.com/api/data", {
								method: "GET",
								headers: {
										"Content-Type": "application/json"
								}
						});

						// Check if the request was successful
						if (response.ok) {
								const data = await response.json();  // Parse JSON data from the response
								// first question
								setQuestions(data?.questions || []);  // Set questions to state, or empty array if undefined
						} else {
								throw new Error(`HTTP error! Status: ${response.status}`);
						}
				} catch (error) {
						console.error("Error fetching data:", error);
						setQuestions([]); // Optionally reset to empty array on error
				}
		};

		fetchData();
	}, []);

	return questions;
}