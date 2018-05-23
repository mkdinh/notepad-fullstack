import React, { Component } from "react";
import BannerCarousel from "../../components/BannerCarousel";
import "./Home.scss";

export class Home extends Component {
  constructor() {
    super();
  }

  componentDidMount() {}

  render() {
    return (
      <div className="Home">
        <div className="home-popup">
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
        </div>
        <BannerCarousel />
      </div>
    );
  }
}

export default Home;
