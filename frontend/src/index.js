import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

export const baseURL = "https://contacts-application-api.onrender.com";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
