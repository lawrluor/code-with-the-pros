export const generateQuestion = async (currentQuestions, id) => {
	try {
		const response = await fetch(`https://codewiththepros-backend.onrender.com/api/getQuestion/${id}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		});

		if (response.ok) {
			const data = await response.json();
			console.log(data);
			let temp = currentQuestions.concat(JSON.parse(data.message));  // convert JSON serialized string to Question object
			return temp;
		} else {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
	} catch (error) {
		console.error("Error fetching data:", error);
		alert("Error fetching question!");
	}

	return currentQuestions;  // return unaltered questions array if error
}
