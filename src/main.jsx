import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./Utils/GeneralStyles/colors.css";
import "./Utils/GeneralStyles/styles.css";
import "./Utils/GeneralStyles/fonts.css";
import "./Utils/GeneralStyles/extra-variables.css";
import "./Utils/GeneralAnimations/animations.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>
);
