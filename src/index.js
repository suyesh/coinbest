import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "tabler-react/dist/Tabler.css";
import "./assets/css/index.css";
import App from "./App";
import * as serviceWorker from "./lib/serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.register();
