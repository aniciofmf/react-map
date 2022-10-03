import { useContext, ChangeEvent, useRef } from "react";

import { LocationsContext } from "../context/locations/LocationsContext";

const DEBOUNCE_TIME_MS = 500;

export const SearchBar = () => {
	const { searchLocations } = useContext(LocationsContext);
	const debounceRef = useRef<NodeJS.Timeout>();

	const searchChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (debounceRef.current) {
			clearTimeout(debounceRef.current);
		}

		debounceRef.current = setTimeout(async () => {
			await searchLocations(event.target.value);
		}, DEBOUNCE_TIME_MS);
	};

	return (
		<div className="search-container">
			<input type="text" className="form-control" placeholder="Search a Location..." onChange={searchChange} />
		</div>
	);
};