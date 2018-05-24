import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import bannerOne from "./images/bannerOne.jpg";
import bannerTwo from "./images/bannerTwo.jpg";
import bannerThree from "./images/bannerThree.jpg";
import "./BannerCarousel.scss";

export class BannerCarousel extends Component {
  render() {
    let { faded } = this.props;
    return (
      <div className={`banner-container ${faded ? "faded" : ""}`}>
        <img alt="banner" className="banner" src={bannerThree} />
      </div>
    );
  }
}

export default BannerCarousel;
