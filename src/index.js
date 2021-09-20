import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { FavoritesContextProvider } from "./for user/AddToFavorite";
import { BaketsContextProvider } from "./for user/AddToBasket";
ReactDOM.render(
  <BaketsContextProvider>
    <FavoritesContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FavoritesContextProvider>
  </BaketsContextProvider>,
  document.getElementById("root")
);
