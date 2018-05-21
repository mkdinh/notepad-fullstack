import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import "./Navigation.scss";
import { withRouter, Link } from "react-router-dom";

export class Navigation extends Component {
  constructor() {
    super();
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(key, ev) {
    let path = ev.target.name;
    this.props.history.push(path);
  }

  renderNav = () => {
    return this.props.authenticated ? (
      <Nav pullRight onSelect={this.handleSelect}>
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

export default withRouter(Navigation);
