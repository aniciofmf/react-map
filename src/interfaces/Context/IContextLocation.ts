import { IFeature } from "../Map/ILocationResponse";
export interface IContextLocation {
	isLoading: boolean;
	userCoords?: [number, number];
	searchLocations: (query: string) => Promise<IFeature[]>;
}
