import React from "react";
import ReactDOM from "react-dom/client";
import { Map } from "./Map";

if (!navigator.geolocation) {
	throw new Error("Your browser has no GPS Capabilities");
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<Map />
	</React.StrictMode>
);
