import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Signin, Signout, Signup, Dashboard } from "../pages";
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
              <Route exact path="/" component={Home} />
              <Route path="/signup" component={Signup} />
              <Route path="/signin" component={Signin} />
              <Route path="/signout" component={Signout} />
              <Route path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

// export default hot(module)(App);
export default App;
