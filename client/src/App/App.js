import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Signout, Dashboard } from "../pages";
import { SigninForm, SignupForm } from "../components/Form";
import Navigation from "../components/Navigation";
import "./App.scss";

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <div>
            <Switch>
              <Route exact path="/(signin|signup)?" component={HomeSubRoutes} />
              <Route path="/signout" component={Signout} />
              <Route path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export function HomeSubRoutes(props) {
  return (
    <Home {...props}>
      <Route path="/signup" component={SignupForm} />
      <Route path="/signin" component={SigninForm} />
    </Home>
  );
}

export default App;
