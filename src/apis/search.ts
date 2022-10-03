import axios from "axios";

const LIMIT = 10;
const LANG = "en";

export const searchApi = axios.create({
	baseURL: process.env.REACT_APP_MAPBOX_PLACES_ENDPOINT,
	params: {
		limit: LIMIT,
		language: LANG,
		access_token: process.env.REACT_APP_MAP_TOKEN,
	},
});
