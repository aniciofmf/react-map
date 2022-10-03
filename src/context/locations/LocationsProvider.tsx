import { FC, useReducer } from "react";

import { ILocationState } from "../../interfaces/Locations/ILocationState";
import { LocationsContext } from "./LocationsContext";
import { LocationsReducer } from "./LocationsReducer";

const locationInitialState: ILocationState = {
	isLoading: true,
	userCoords: undefined,
};

export const LocationsProvider: FC<{ children: JSX.Element | JSX.Element[] }> = ({ children }) => {
	const [state, dispatch] = useReducer(LocationsReducer, locationInitialState);

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
