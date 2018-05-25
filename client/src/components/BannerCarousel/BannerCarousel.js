import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import bannerOne from "./images/bannerOne.jpg";
import bannerTwo from "./images/bannerTwo.jpg";
import bannerThree from "./images/bannerThree.jpg";
import "./BannerCarousel.scss";
import { withRouter } from "react-router-dom";

export class BannerCarousel extends Component {
  state = {
    faded: false,
    lightened: false
  };

  componentWillMount() {
    this.applyFilter();
  }

  componentWillReceiveProps() {
    this.applyFilter();
  }

  applyFilter = () => {
    let path = this.props.history.location.pathname;

    if (["/"].includes(path)) {
      this.setState({ faded: false, lightened: false });
    } else if (["/signin", "/signup"].includes(path)) {
      this.setState({ faded: true, lightened: false });
    } else {
      this.setState({ faded: false, lightened: true });
    }
  };

  render() {
    let { faded, lightened } = this.state;
    let { children } = this.props;

    return (
      <div
        style={{ background: `url(${bannerThree})` }}
        className="banner-container"
      >
        <div
          className={`filter 
          ${faded ? "faded" : ""} 
          ${lightened ? "lightened" : ""}`}
        />
        {/* <img alt="banner" className="banner" src={bannerThree} /> */}
        {children}
      </div>
    );
  }
}

export default withRouter(BannerCarousel);
