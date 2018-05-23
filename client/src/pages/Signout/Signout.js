import React, { Component } from "react";
import { signoutUser } from "../../utils/actions/authActions";
import { connect } from "react-redux";
export class Signout extends Component {
  componentWillMount() {
    // automatically signout user upon visiting this page
    this.props.signoutUser();
  }

  render() {
    return (
      <div>
        <h1>Signout Page</h1>
      </div>
    );
  }
}

export default connect(null, { signoutUser })(Signout);
