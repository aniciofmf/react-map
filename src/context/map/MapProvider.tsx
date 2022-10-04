import { FC, useReducer, useContext, useEffect } from "react";
import { AnySourceData, LngLatBounds, Map, Marker } from "mapbox-gl";

import { directionApi } from "../../apis";
import { MapContext } from "./MapContext";
import { MapReducer } from "./MapReducer";
import { IMapState } from "../../interfaces/Map/IMapState";
import { LocationsContext } from "../locations/LocationsContext";
import { IDirectionResponse } from "../../interfaces/Map/IDirectionResponse";

const mapInitialState: IMapState = {
	mapReady: true,
	map: undefined,
	markers: [],
};

export const MapProvider: FC<{ children: JSX.Element | JSX.Element[] }> = ({ children }) => {
	const [state, dispatch] = useReducer(MapReducer, mapInitialState);
	const { locations } = useContext(LocationsContext);

	useEffect(() => {
		const newMarkers: Marker[] = [];

		state.markers.forEach((marker: Marker) => {
			marker.remove();
		});

		for (const location of locations) {
			const [lng, lat] = location.center;
			const newMarker = new Marker().setLngLat([lng, lat]).addTo(state.map!);
			newMarkers.push(newMarker);
		}

		dispatch({ type: "setMarkers", payload: newMarkers });
	}, [locations]);

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

	const routeBetweenPoints = async (start: [number, number], end: [number, number]) => {
		const resp = await directionApi.get<IDirectionResponse>(`/${start.join(",")};${end.join(",")}`);
		const { coordinates: coords } = resp.data.routes[0].geometry;

		const bounds = new LngLatBounds(start, start);

		for (const coord of coords) {
			const newCoods: [number, number] = [coord[0], coord[1]];
			bounds.extend(newCoods);
		}

		state.map?.fitBounds(bounds, {
			padding: 100,
		});

		const sourceData: AnySourceData = {
			type: "geojson",
			data: {
				type: "FeatureCollection",
				features: [
					{
						type: "Feature",
						properties: {},
						geometry: {
							type: "LineString",
							coordinates: coords,
						},
					},
				],
			},
		};

		if (state.map?.getLayer("RouteString")) {
			state.map.removeLayer("RouteString");
			state.map.removeSource("RouteString");
		}

		state.map?.addSource("RouteString", sourceData);

		state.map?.addLayer({
			id: "RouteString",
			type: "line",
			source: "RouteString",
			layout: {
				"line-cap": "round",
				"line-join": "round",
			},
			paint: {
				"line-color": "black",
				"line-width": 3,
			},
		});
	};

	return <MapContext.Provider value={{ ...state, setMap, routeBetweenPoints }}>{children}</MapContext.Provider>;
};
