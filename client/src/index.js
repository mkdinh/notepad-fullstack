import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";
import { AUTH_USER } from "./utils/actions/types";
import { authToken } from "./utils/actions/authActions";
import store from "./store";
import { Provider } from "react-redux";
import registerServiceWorker from "./registerServiceWorker";
// check if authentication token is in user's local storage
// allow persistent login
const token = localStorage.getItem("authToken");

if (token) {
  store.dispatch({ type: AUTH_USER, payload: {} });
  store.dispatch(authToken(token));
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);

registerServiceWorker();
