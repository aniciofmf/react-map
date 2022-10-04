import { Map } from "mapbox-gl";

export interface IContextMap {
	mapReady: boolean;
	map?: Map;
	setMap: (map: Map) => void;
	routeBetweenPoints: (start: [number, number], end: [number, number]) => void;
}
