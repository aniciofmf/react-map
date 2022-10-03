import { IFeature } from "../Map/ILocationResponse";

export interface IContextLocation {
	isLoading: boolean;
	userCoords?: [number, number];
	locations: IFeature[];
	isLoadingLocations: boolean;
	searchLocations: (query: string) => Promise<IFeature[]>;
	emptyLocations: () => void;
}
