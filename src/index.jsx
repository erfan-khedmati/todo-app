// Polyfill for global
window.global = window;

import React from "react";
import ReacDOM from "react-dom/client";
import App from "./App";

const root = ReacDOM.createRoot(document.getElementById("root"));
root.render(<App />);
