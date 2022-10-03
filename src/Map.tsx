import { LocationsProvider } from "./context/locations/";

export const Map = () => {
	return (
		<LocationsProvider>
			<span></span>
		</LocationsProvider>
	);
};
