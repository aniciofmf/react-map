import { FC, useReducer, useEffect } from "react";

import { searchApi } from "../../apis";
import { ILocationState } from "../../interfaces/Locations/ILocationState";
import { LocationsContext } from "./LocationsContext";
import { LocationsReducer } from "./LocationsReducer";
import { useGeolocation } from "../../hooks/useGeolocation";
import { ILocationResponse, IFeature } from "../../interfaces/Map/ILocationResponse";

const locationInitialState: ILocationState = {
	isLoading: true,
	isLoadingLocations: false,
	userCoords: undefined,
	locations: [],
};

export const LocationsProvider: FC<{ children: JSX.Element | JSX.Element[] }> = ({ children }) => {
	const [state, dispatch] = useReducer(LocationsReducer, locationInitialState);
	const [longitude, latitude] = useGeolocation();

	useEffect(() => {
		dispatch({
			type: "setUserLocation",
			payload: [longitude, latitude],
		});
	}, [longitude, latitude]);

	const searchLocations = async (query: string): Promise<IFeature[]> => {
		if (query.length === 0) return [];

		dispatch({
			type: "setLoadingLocations",
		});

		const resp = await searchApi.get<ILocationResponse>(`${query}.json`, {
			params: {
				proximity: state.userCoords!.join(","),
			},
		});

		dispatch({
			type: "setLocations",
			payload: resp.data.features,
		});

		return resp.data.features;
	};

	return (
		<LocationsContext.Provider
			value={{
				...state,
				searchLocations,
			}}
		>
			{children}
		</LocationsContext.Provider>
	);
};
