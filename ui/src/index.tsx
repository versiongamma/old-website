import { setup } from "goober";
import React, { createElement } from "react";
import ReactDOM from "react-dom/client";
import App from "./app";

setup(createElement);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
