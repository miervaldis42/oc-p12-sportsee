// Imports
import React from "react";
import ReactDOM from "react-dom/client";

// Component
import App from "./router/App";

// Stylesheet
import "./index.scss";

// Analytics
import reportWebVitals from "./reportWebVitals";

// <root> HTML tag
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
