const apiConfig = {
	// Backend base URL, this could be local or deployed
	baseUrl: "http://<backend-ip>:<backend-port>",

	// Define API endpoints
	endpoints: {
		login: "/api/login",
		signup: "/api/signup",
		fetchData: "/api/fetch-data",
		updateUser: "/api/update-user",
	},

	// Any common headers you want to send with requests
	headers: {
		"Content-Type": "application/json",
		Authorization: "Bearer <your-token-here>" // Optional if you're using tokens
	}
};

export default apiConfig;