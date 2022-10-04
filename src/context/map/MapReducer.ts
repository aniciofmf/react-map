import { Map, Marker } from "mapbox-gl";

import { IMapState } from "../../interfaces/Map/IMapState";

type ActionsType =
	| {
			type: "setMap";
			payload: Map;
	  }
	| { type: "setMarkers"; payload: Marker[] };

export const MapReducer = (state: IMapState, action: ActionsType) => {
	switch (action.type) {
		case "setMap":
			return {
				...state,
				mapReady: true,
				map: action.payload,
			};
		case "setMarkers":
			return {
				...state,
				markers: action.payload,
			};

		default:
			return state;
	}
};
