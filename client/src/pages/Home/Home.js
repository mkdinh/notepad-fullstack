import React, { Component } from "react";
import BannerCarousel from "../../components/BannerCarousel";
import { connect } from "react-redux";
import "./Home.scss";

export class Home extends Component {
  state = {
    about: true
  };

  componentWillMount() {
    this.shouldRenderPopup();
  }

  componentWillReceiveProps() {
    this.shouldRenderPopup();
  }

  shouldRenderPopup() {
    let { about } = this.state;
    let isIndex = this.props.history.location.pathname === "/";
    if (!isIndex && about) {
      this.setState({
        about: false
      });
    } else if (isIndex && !about) {
      this.setState({
        about: true
      });
    }
  }

  togglePopup = () => {
    if (this.state.about) {
      this.props.authenticated
        ? this.props.history.push("/dashboard")
        : this.props.history.push("/signin");
    } else {
      this.props.history.push("/");
    }
  };

  render() {
    const { about } = this.state;

    return (
      <div className="Home">
        {/* <BannerCarousel faded={!about}> */}
        {this.props.children}
        <Popup open={about} togglePopup={this.togglePopup} />
        {/* </BannerCarousel> */}
      </div>
    );
  }
}

function Popup({ open, togglePopup }) {
  return (
    <div className={`about-popup ${open ? "about-open" : "about-close"}`}>
      <h3>What is Stickly?</h3>
      <p>Stickly is the old school sticky notes on a modern web platform!</p>
      <p>
        You can <span className="action action-1">create</span>
        <span className="action action-2">edit</span>
        <span className="action action-3">delete</span> notes securely behind
        our authentication server.
      </p>

      <p>
        We also hooked up the application with a redis caching server for even<span className="action action-1">
          {" "}
          faster{" "}
        </span>note retrieval!
      </p>
      <button
        tabIndex="-1"
        className="about-toggle-button"
        onClick={togglePopup}
      >
        <i className="	glyphicon glyphicon-triangle-left" />
      </button>
    </div>
  );
}

Home.Popup = Popup;
const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
});

export default connect(mapStateToProps)(Home);
