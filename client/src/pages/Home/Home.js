import React, { Component } from "react";
import BannerCarousel from "../../components/BannerCarousel";
import Signin from "../Signin";
import Signup from "../Signup";
import "./Home.scss";

export class Home extends Component {
  state = {
    about: true,
    signinForm: false,
  };

  toggleAbout = () => {
    this.setState({
      about: !this.state.about,
      signinForm: !this.state.signinForm,
    });
  };

  render() {
    const { about, signinForm } = this.state;
    return (
      <div className="Home">
        <div className={`about-popup ${about ? "about-open" : "about-close"}`}>
          <h3>What is Stickly?</h3>
          <p>
            Stickly is the old school sticky notes on a modern web platform!
          </p>
          <p>
            You can <span className="action action-1">create</span>
            <span className="action action-2">edit</span>
            <span className="action action-3">delete</span> notes securely
            behind our authentication server.
          </p>

          <p>
            We also hooked up the application with a redis caching server for
            even<span className="action action-1"> faster </span>note retrieval!
          </p>
          <button className="about-toggle-button" onClick={this.toggleAbout}>
            <i className="	glyphicon glyphicon-triangle-left" />
          </button>
        </div>
        <BannerCarousel faded={signinForm} />
        {this.props.children}
      </div>
    );
  }
}

export default Home;
