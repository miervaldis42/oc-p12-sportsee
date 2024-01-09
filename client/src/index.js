// Imports
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

// Component
import Layout from "./pages/layouts/PageLayout";
import App from "./router/App";

// Stylesheet
import "./index.scss";

// Analytics
import reportWebVitals from "./reportWebVitals";

// <root> HTML tag
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Layout>
        <App />
      </Layout>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
