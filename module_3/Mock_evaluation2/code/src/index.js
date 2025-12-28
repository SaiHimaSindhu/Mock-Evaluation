import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";          // path must be correct

const root = ReactDOM.createRoot(document.getElementById("root")); // id="root" in index.html

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
