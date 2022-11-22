import React from "react";
import ReactDOM from "react-dom/client";
import ThemeProvider from "./global/themeProvider";
import "./index.css";
import Home from "./pages/Home";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  </React.StrictMode>
);
