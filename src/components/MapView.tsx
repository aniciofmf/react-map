import { useContext, useRef, useLayoutEffect } from "react";
import { Map } from "mapbox-gl";

import { LocationsContext, MapContext } from "../context";
import { Loading } from "./Loading";

export const MapView = () => {
	const { isLoading, userCoords } = useContext(LocationsContext);
	const { setMap } = useContext(MapContext);
	const mapRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		if (!isLoading) {
			const map = new Map({
				container: mapRef.current!,
				style: "mapbox://styles/mapbox/streets-v11",
				center: userCoords,
				zoom: 14,
				projection: { name: "globe" },
			});

			setMap(map);
		}
	}, [isLoading, userCoords]);

	if (isLoading) {
		return <Loading />;
	}

	return <div ref={mapRef} style={{ height: "100vh", width: "100vw", position: "fixed", top: 0, left: 0 }}></div>;
};
