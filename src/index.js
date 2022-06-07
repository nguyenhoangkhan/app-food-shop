import React from "react";
import ReactDOM from "react-dom/client";
import { StoreProvider } from "./store/";
import Layout from "./Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StoreProvider>
      <Layout />
    </StoreProvider>
  </React.StrictMode>
);
