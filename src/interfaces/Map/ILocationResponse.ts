export interface ILocationResponse {
	type: string;
	query: string[];
	features: IFeature[];
	attribution: string;
}

export interface IFeature {
	id: string;
	type: FeatureType;
	place_type: PlaceType[];
	relevance: number;
	properties: Properties;
	text_en: string;
	place_name_en: string;
	text: string;
	place_name: string;
	center: number[];
	geometry: Geometry;
	context: Context[];
}

interface Context {
	id: string;
	wikidata?: string;
	text_en: string;
	text: string;
}

interface Geometry {
	coordinates: number[];
	type: GeometryType;
}

interface Properties {
	foursquare: string;
	landmark: boolean;
	address: string;
	category: string;
	wikidata?: string;
}

enum FeatureType {
	Feature = "Feature",
}

enum GeometryType {
	Point = "Point",
}

enum PlaceType {
	Poi = "poi",
}
