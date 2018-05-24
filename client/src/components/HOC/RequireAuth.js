import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export default ComposedComponent => {
  class RequireAuth extends Component {
    static contextTypes = {
      router: PropTypes.object,
      children: PropTypes.array
    };

    componentWillMount() {
      this.isAuthenticated(this.props);
    }

    componentWillUpdate(nextProps) {
      this.isAuthenticated(nextProps);
    }

    isAuthenticated = props => {
      if (!props.authenticated) return this.context.router.history.push("/");
    };

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    authenticated: state.auth.authenticated
  });

  return connect(mapStateToProps)(RequireAuth);
};
