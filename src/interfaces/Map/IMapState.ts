import { Map, Marker } from "mapbox-gl";

export interface IMapState {
	mapReady: boolean;
	map?: Map;
	markers: Marker[];
}
