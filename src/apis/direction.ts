import axios from "axios";

export const directionApi = axios.create({
	baseURL: process.env.REACT_APP_MAPBOX_DIRECTION_ENDPOINT,
	params: {
		alternatives: false,
		geometries: "geojson",
		overview: "simplified",
		steps: false,
		access_token: process.env.REACT_APP_MAP_TOKEN,
	},
});
