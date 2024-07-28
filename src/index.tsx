import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/app";
import { GlobalStyles } from "./components/app/styles";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.Fragment>
    <GlobalStyles />
    <App />
  </React.Fragment>
);
