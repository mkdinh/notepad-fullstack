import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import "./Navigation.scss";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";

export class Navigation extends Component {
  handleSelect = (key, ev) => {
    let path = ev.target.name;
    this.props.history.push(path);
  };

  renderNav = () => {
    return this.props.authenticated ? (
      <Nav className="navigation" pullRight onSelect={this.handleSelect}>
        <NavItem eventKey={2} name="/users/config">
          {`Hello ${this.props.user.firstName}`}
        </NavItem>
        <NavItem eventKey={1} name="/dashboard">
          Dashboard
        </NavItem>
        <NavItem eventKey={4} name="/signout">
          Sign Out
        </NavItem>
      </Nav>
    ) : (
      <Nav pullRight onSelect={this.handleSelect}>
        <NavItem eventKey={2} name="/signup">
          Sign Up
        </NavItem>
        <NavItem eventKey={3} name="/signin">
          Sign In
        </NavItem>
      </Nav>
    );
  };

  render() {
    return (
      <Navbar className="navigation" inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand
            name="/"
            onClick={this.handleSelect.bind(this, 0, { target: { name: "/" } })}
          >
            Stickly
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>{this.renderNav()}</Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
  user: state.user,
});

export default connect(mapStateToProps)(withRouter(Navigation));
