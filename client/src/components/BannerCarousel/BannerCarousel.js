import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import bannerOne from "./images/bannerOne.jpg";
import bannerTwo from "./images/bannerTwo.jpg";
import bannerThree from "./images/bannerThree.jpg";
import "./BannerCarousel.scss";

export class BannerCarousel extends Component {
  constructor() {
    super();
  }

  render() {
    return <img alt="banner" className="banner" src={bannerThree} />;
  }
}

export default BannerCarousel;
