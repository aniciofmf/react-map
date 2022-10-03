import { useContext } from "react";
import { MapContext, LocationsContext } from "../context";

export const BtnResetLocation = () => {
	const { map, mapReady } = useContext(MapContext);
	const { userCoords } = useContext(LocationsContext);

	const onClick = () => {
		map?.flyTo({
			zoom: 14,
			center: userCoords,
		});
	};

	return mapReady && userCoords ? (
		<button
			className="btn btn-primary"
			onClick={onClick}
			style={{
				position: "fixed",
				top: "20px",
				right: "20px",
				zIndex: 999,
			}}
		>
			Reset Location
		</button>
	) : null;
};
