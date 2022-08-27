import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { FilterProvider } from "./hooks/FilterContext";
import { FavouriteProvider } from "./hooks/FavouriteContext";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <FilterProvider>
        <FavouriteProvider>
          <App />
        </FavouriteProvider>
      </FilterProvider>
    </Router>
  </React.StrictMode>
);
