import { Map } from "mapbox-gl";

export interface IMapState {
	mapReady: boolean;
	map?: Map;
}
