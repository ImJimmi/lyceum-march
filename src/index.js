import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import Slides from "./Slides";
import reportWebVitals from "./reportWebVitals";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/night.css";
import "reveal.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <React.StrictMode>
            <Slides />
        </React.StrictMode>
    </BrowserRouter>
);

reportWebVitals();
