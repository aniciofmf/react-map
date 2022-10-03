import { useContext } from "react";
import { LocationsContext } from "../context/locations/LocationsContext";
import { IFeature } from "../interfaces/Map/ILocationResponse";

export const SearchBarResults = () => {
	const { locations, isLoadingLocations } = useContext(LocationsContext);

	if (isLoadingLocations || locations.length === 0) return <></>;

	return (
		<ul className="list-group mt-2">
			{locations.map((location: IFeature) => (
				<li key={location.id} className="list-group-item list-group-item-action">
					<h6>{location.text}</h6>
					<p className="text-muted" style={{ fontSize: "12px" }}>
						{location.place_name}
					</p>
					<button className="btn btn-outline-primary">Go to Location</button>
				</li>
			))}
		</ul>
	);
};
