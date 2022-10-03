import { ILocationState } from "../../interfaces/Locations/ILocationState";

type ActionsType = {
	type: "setUserLocation";
	payload: [number, number];
};

export const LocationsReducer = (state: ILocationState, action: ActionsType): ILocationState => {
	switch (action.type) {
		case "setUserLocation":
			return {
				...state,
				isLoading: false,
				userCoords: action.payload,
			};
		default:
			return state;
	}
};
