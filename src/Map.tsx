import { LocationsProvider } from "./context";
import mapboxgl from "mapbox-gl";

import { MapProvider } from "./context/map/MapProvider";
import { Home } from "./screens/";

import "./index.css";

mapboxgl.accessToken = process.env.REACT_APP_MAP_TOKEN as string;

export const Map = () => {
	return (
		<LocationsProvider>
			<MapProvider>
				<Home />
			</MapProvider>
		</LocationsProvider>
	);
};
