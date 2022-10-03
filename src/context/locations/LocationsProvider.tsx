import { FC, useReducer, useEffect } from "react";

import { ILocationState } from "../../interfaces/Locations/ILocationState";
import { LocationsContext } from "./LocationsContext";
import { LocationsReducer } from "./LocationsReducer";
import { useGeolocation } from "../../hooks/useGeolocation";

const locationInitialState: ILocationState = {
	isLoading: true,
	userCoords: undefined,
};

export const LocationsProvider: FC<{ children: JSX.Element | JSX.Element[] }> = ({ children }) => {
	const [state, dispatch] = useReducer(LocationsReducer, locationInitialState);
	const [longitude, latitude] = useGeolocation();

	useEffect(() => {
		dispatch({
			type: "setUserLocation",
			payload: [longitude, latitude],
		});
	});
	return (
		<LocationsContext.Provider
			value={{
				...state,
			}}
		>
			{children}
		</LocationsContext.Provider>
	);
};
