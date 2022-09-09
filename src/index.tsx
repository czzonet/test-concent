import React from "react";
import ReactDom from "react-dom";

import "./css/global.css";

import App from "./App";
import { initStore } from "./store/index";

initStore();

ReactDom.render(<App></App>, document.getElementById("app"));
