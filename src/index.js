import React from "react";
import ReactDOM from "react-dom/client";
import Slides from "./Slides";
import reportWebVitals from "./reportWebVitals";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/night.css";
import "reveal.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Slides />
    </React.StrictMode>
);

reportWebVitals();
