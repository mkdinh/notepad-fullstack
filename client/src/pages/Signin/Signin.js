import React, { Component } from "react";
import {
  Grid,
  Col,
  Row,
  Clearfix,
  PageHeader,
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
} from "react-bootstrap";

import "./Signin.scss";

export class Signin extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleChange(ev) {
    let { name, value } = ev.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <Grid className="Signin">
        <Row>
          <PageHeader className="signin-header">Signin</PageHeader>
        </Row>
        <Row>
          <Col xs={0} md={3} />
          <Col xs={12} md={6}>
            <form className="signin-form">
              <FormGroup>
                <ControlLabel>Email</ControlLabel>
                <FormControl type="text" name="email" />
                <FormControl.Feedback />
              </FormGroup>

              <FormGroup>
                <ControlLabel>Password</ControlLabel>
                <FormControl name="password" type="password" />
                <FormControl.Feedback />
              </FormGroup>

              <FormGroup className="button-wrapper">
                <Button bsStyle="primary" bsSize="large" action="submit">
                  Login
                </Button>
              </FormGroup>
            </form>
          </Col>
          <Col xs={0} md={3} />
        </Row>
      </Grid>
    );
  }
}

export default Signin;
