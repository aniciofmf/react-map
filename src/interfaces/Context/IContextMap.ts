import { Map } from "mapbox-gl";

export interface IContextMap {
	mapReady: boolean;
	map?: Map;
	setMap: (map: Map) => void;
}
