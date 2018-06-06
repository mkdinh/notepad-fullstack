import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Signout, Dashboard } from "../pages";
import { RequireAuth } from "../components/HOC";
import { SigninForm, SignupForm } from "../components/Form";
import Navigation from "../components/Navigation";
import BannerCarousel from "../components/BannerCarousel";
import "./App.scss";

export class App extends Component {
  render() {
    return (
      <Router>
        <BannerCarousel>
          <Navigation />
          <div className="App-content">
            <Switch>
              <Route exact path="/(signin|signup)?" component={HomeSubRoutes} />
              <Route path="/signout" component={RequireAuth(Signout)} />
              <Route path="/dashboard" component={RequireAuth(Dashboard)} />
            </Switch>
          </div>
        </BannerCarousel>
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
