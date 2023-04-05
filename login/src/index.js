import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store/reduxStore";

import "./index.css";
import App from "./App";

let isAuthorized = false;

ReactDOM.render(
   <Provider store={store}>
      <App isAuthorized={isAuthorized} />
   </Provider>
   , document.getElementById("root"));
