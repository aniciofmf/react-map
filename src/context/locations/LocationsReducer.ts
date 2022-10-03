import { ILocationState } from "../../interfaces/Locations/ILocationState";
import { IFeature } from "../../interfaces/Map/ILocationResponse";

type ActionsType =
	| {
			type: "setUserLocation";
			payload: [number, number];
	  }
	| { type: "setLoadingLocations" }
	| { type: "setLocations"; payload: IFeature[] };

export const LocationsReducer = (state: ILocationState, action: ActionsType): ILocationState => {
	switch (action.type) {
		case "setUserLocation":
			return {
				...state,
				isLoading: false,
				userCoords: action.payload,
			};
		case "setLoadingLocations":
			return {
				...state,
				isLoadingLocations: true,
				locations: [],
			};
		case "setLocations":
			return {
				...state,
				isLoadingLocations: false,
				locations: action.payload,
			};
		default:
			return state;
	}
};
