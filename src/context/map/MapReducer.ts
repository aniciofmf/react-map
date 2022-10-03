import { Map } from "mapbox-gl";

import { IMapState } from "../../interfaces/Map/IMapState";

type ActionsType = {
	type: "setMap";
	payload: Map;
};

export const MapReducer = (state: IMapState, action: ActionsType) => {
	switch (action.type) {
		case "setMap":
			return {
				...state,
				mapReady: true,
				map: action.payload,
			};

		default:
			return state;
	}
};
