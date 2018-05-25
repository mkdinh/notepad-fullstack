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
  Button
} from "react-bootstrap";
import { connect } from "react-redux";
import { signupUser } from "../../../utils/actions/authActions";
import { Fade } from "react-bootstrap";
import "./Signup.scss";

export class Signup extends Component {
  state = {
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    error: "",
    visible: false
  };

  componentDidMount() {
    setTimeout(this.setState.bind(this, { visible: true }), 0);
  }

  handleChange = ev => {
    let { name, value } = ev.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async ev => {
    ev.preventDefault();
    // check to make sure that user input email and pasword
    let validInputs = this.handleValidation();
    if (validInputs) {
      // sign up user
      try {
        const res = await this.props.signupUser(validInputs);
        this.props.history.push("/dashboard");
      } catch (err) {
        console.dir(err);
        this.setState({ error: err.response.data.message });
      }
    }
  };

  handleValidation = () => {
    const { visible, error, ...inputs } = this.state;
    for (let field in inputs) {
      if (!inputs[field]) {
        let fieldName = field.split(/(?=[A-Z])/).join(" ");
        this.setState({ error: `Missing ${fieldName} field` });
        return false;
      }
    }

    if (inputs.password.length < 6) {
      this.setState({
        error: "Password field need to be greater than or equal to 6 characters"
      });
      return false;
    }

    if (inputs.password !== inputs.confirmPassword) {
      this.setState({
        error: "Password and comfirm password must match"
      });
      return false;
    }

    return inputs;
  };

  renderAlert = () => {
    return (
      this.state.error && (
        <div className="input-error alert alert-danger">{this.state.error}</div>
      )
    );
  };

  render() {
    const {
      email,
      password,
      confirmPassword,
      firstName,
      lastName,
      visible,
      error
    } = this.state;

    return (
      <Fade in={visible}>
        <Grid className={`Signup ${error ? "error" : ""}`} key={0}>
          <Row>
            <PageHeader className="signup-header">Signup</PageHeader>
          </Row>
          <Row>
            <form onSubmit={this.handleSubmit} className="signup-form">
              <Col xs={12} md={6}>
                <FormGroup>
                  <ControlLabel>Email</ControlLabel>
                  <FormControl
                    onChange={this.handleChange}
                    type="text"
                    value={email}
                    name="email"
                  />
                </FormGroup>

                <FormGroup>
                  <ControlLabel>Password</ControlLabel>
                  <FormControl
                    onChange={this.handleChange}
                    name="password"
                    value={password}
                    type="password"
                  />
                </FormGroup>

                <FormGroup>
                  <ControlLabel>Confirm Password</ControlLabel>
                  <FormControl
                    onChange={this.handleChange}
                    name="confirmPassword"
                    type="password"
                    value={confirmPassword}
                  />
                </FormGroup>
              </Col>
              <Col xs={12} md={6}>
                <FormGroup>
                  <ControlLabel>First Name</ControlLabel>
                  <FormControl
                    onChange={this.handleChange}
                    name="firstName"
                    value={firstName}
                  />
                </FormGroup>

                <FormGroup>
                  <ControlLabel>Last Name</ControlLabel>
                  <FormControl
                    onChange={this.handleChange}
                    name="lastName"
                    value={lastName}
                  />
                </FormGroup>

                <FormGroup className="button-wrapper">
                  {this.renderAlert()}
                  <Button
                    onSubmit={this.handleSubmit}
                    bsStyle="primary"
                    bsSize="large"
                    type="submit"
                  >
                    Submit
                  </Button>
                </FormGroup>
              </Col>
            </form>
            <Col xs={0} md={3} />
          </Row>
        </Grid>
      </Fade>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
});

export default connect(mapStateToProps, { signupUser })(Signup);
