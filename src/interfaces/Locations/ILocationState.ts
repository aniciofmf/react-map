import { IFeature } from "../Map/ILocationResponse";

export interface ILocationState {
	isLoading: boolean;
	isLoadingLocations: boolean;
	userCoords?: [number, number];
	locations: IFeature[];
}
