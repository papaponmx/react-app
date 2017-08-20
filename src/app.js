import React from "react";
import ReactDom from "react-dom";

import AppComponent from "./components/app.component.js";

const app = document.getElementById('app');
ReactDOM.render(<AppComponent />, app);
