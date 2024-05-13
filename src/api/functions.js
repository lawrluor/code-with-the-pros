// USER FACING
export const generateQuestion = async (currentQuestions, id) => {
	try {
		const response = await fetch(`${process.env.REACT_APP_DATABASE_URL}/api/getQuestion/${id}`, {
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
		console.error("Error fetching data");
		console.error(error);
		alert("Error fetching question!");
	}

	return currentQuestions;  // return unaltered questions array if error
}

// ADMIN ONLY
export const deleteQuestion = async (id) => {
	try {
		const response = await fetch(`${process.env.REACT_APP_DATABASE_URL}/api/deleteQuestion/${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json"
			}
		});

		if (response.ok) {
			const data = await response.json();
			console.log(data);
			alert("Successfully deleted question!");
		} else {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
	} catch (error) {
		console.error("Error deleting question:");
		console.error(error);
		alert("Error deleting question!:", error);
	}
}

// ADMIN ONLY
export const editQuestion = async (id, question) => {
	try {
		const response = await fetch(`${process.env.REACT_APP_DATABASE_URL}/api/editQuestion/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(question)
		});

		if (response.ok) {
			const data = await response.json();
			console.log(data);
			alert("Successfully edited question!");
		} else {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
	} catch(error) {
		console.error("Error editing question:");
		console.error(error);
		alert("Error editing question", error)
	}
}
