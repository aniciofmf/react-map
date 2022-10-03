import { useState, useEffect } from "react";

export const useGeolocation = () => {
	const [longitude, setLng] = useState<number>(0);
	const [latitude, setLat] = useState<number>(0);

	const onPosition = (position: GeolocationPosition) => {
		setLng(position.coords.longitude);
		setLat(position.coords.latitude);
	};
	useEffect(() => {
		navigator.geolocation.getCurrentPosition(onPosition);
	}, []);

	return [longitude, latitude];
};
