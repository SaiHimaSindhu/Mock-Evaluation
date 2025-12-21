import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PostsProvider } from "./context/PostsContext";
import { ThemeProvider } from "./context/ThemeContext";
import "./styles/theme.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <PostsProvider>
      <App />
    </PostsProvider>
  </ThemeProvider>
);
