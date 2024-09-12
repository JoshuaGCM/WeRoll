import axios from "axios";

export const fetchImagesFromUnsplash = (query) => {
	const ACCESS_KEY = "YOUR_UNSPLASH_ACCESS_KEY";
	return axios.get("https://api.unsplash.com/search/photos", {
		params: { query: event, per_page: 10 },
		headers: {
			Authorization: `Client-ID ${"tIZ5tV2JZ1s2H28pS309PCgAYYJwRk7PgxPof14wW6Y"}`,
		},
	});
};
