import { useContext } from "react";
import { LocationsContext, MapContext } from "../context/";
import { IFeature } from "../interfaces/Map/ILocationResponse";

export const SearchBarResults = () => {
	const { locations, isLoadingLocations, userCoords, emptyLocations } = useContext(LocationsContext);
	const { map, routeBetweenPoints } = useContext(MapContext);

	if (isLoadingLocations || locations.length === 0) return <></>;

	const onLocationClick = (location: IFeature) => {
		const [lng, lat] = location.center;

		map?.flyTo({
			zoom: 14,
			center: [lng, lat],
		});
	};

	const getRoutes = (location: IFeature) => {
		if (!userCoords) return;
		const [lng, lat] = location.center;

		routeBetweenPoints(userCoords, [lng, lat]);
	};

	return (
		<ul className="list-group mt-2">
			{locations.map((location: IFeature) => (
				<li key={location.id} className="list-group-item list-group-item-action" onClick={() => onLocationClick(location)}>
					<h6>{location.text}</h6>
					<p className="text-muted" style={{ fontSize: "12px" }}>
						{location.place_name}
					</p>
					<button className="btn btn-outline-primary" onClick={() => getRoutes(location)}>
						Directions
					</button>
				</li>
			))}
		</ul>
	);
};
