import { setup } from "goober";
import { shouldForwardProp } from 'goober/should-forward-prop';
import { createElement } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./app";

setup(createElement, undefined, undefined, shouldForwardProp((prop) => prop[0] !== '$'));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
