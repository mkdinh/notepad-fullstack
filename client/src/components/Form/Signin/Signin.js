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
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signinUser } from "../../../utils/actions/authActions";
import { Fade } from "react-bootstrap";
import "./Signin.scss";

export class Signin extends Component {
  state = {
    email: "",
    password: "",
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

  handleExit = (a, b) => {
    console.log(a, b);
  };

  handleSubmit = async ev => {
    ev.preventDefault();
    const { email, password } = this.state;
    // check to make sure that user input email and pasword
    if (!email || !password)
      return this.setState({ error: "Missing email or password field" });
    // sign in user
    try {
      const res = await this.props.signinUser({ email, password });
      this.props.history.push("/dashboard");
    } catch (err) {
      this.setState({ error: "Incorrect email and password" });
    }
  };

  renderAlert = () => {
    return (
      this.state.error && (
        <div className="input-error alert alert-danger">{this.state.error}</div>
      )
    );
  };

  render() {
    const { email, password, visible } = this.state;
    return (
      <Fade in={visible}>
        <Grid className="Signin" key={0}>
          <Row>
            <PageHeader className="signin-header">Signin</PageHeader>
          </Row>
          <Row>
            <Col xs={0} md={3} />
            <Col xs={12} md={6}>
              <form onSubmit={this.handleSubmit} className="signin-form">
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
                  <FormControl.Feedback />
                </FormGroup>
                <p>
                  Don't have an account? <Link to="/signup">Sign Up Here!</Link>
                </p>

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
              </form>
            </Col>
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

export default connect(mapStateToProps, { signinUser })(Signin);
