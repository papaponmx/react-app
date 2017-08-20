import React from "react";
import ReactDom from "react-dom";
import {Provider} from "react-redux"; 

import AppComponent from "./components/app.component.js";
import store from './store';
const app = document.getElementById('app');
ReactDom.render( <Provider store={store}>
	<AppComponent />
</Provider>, app);
