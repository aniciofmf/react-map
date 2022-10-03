import { FC, useReducer } from "react";
import { Map, Marker } from "mapbox-gl";

import { MapContext } from "./MapContext";
import { MapReducer } from "./MapReducer";
import { IMapState } from "../../interfaces/Map/IMapState";

const mapInitialState: IMapState = {
	mapReady: true,
	map: undefined,
};

export const MapProvider: FC<{ children: JSX.Element | JSX.Element[] }> = ({ children }) => {
	const [state, dispatch] = useReducer(MapReducer, mapInitialState);

	const setMap = (map: Map) => {
		new Marker({
			color: "#61DAFB",
		})
			.setLngLat(map.getCenter())
			.addTo(map);

		dispatch({
			type: "setMap",
			payload: map,
		});
	};

	return <MapContext.Provider value={{ ...state, setMap }}>{children}</MapContext.Provider>;
};
