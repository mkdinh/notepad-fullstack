import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";
import { AUTH_USER } from "./utils/actions/types";
import { authToken } from "./utils/actions/authActions";
import store from "./store";
import { Provider } from "react-redux";

// check if authentication token is in user's local storage
// allow persistent login
const token = localStorage.getItem("authToken");

if (token) store.dispatch(authToken(token));
// store.dispatch({
//   type: AUTH_USER
// });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
