import React from "react";
import "./style.css";
import Slider from "react-slick";
import home from "./home.jpg";

export default function Slide() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };
  return (
    <div>
      <Slider className="sl" {...settings}>
        <div>
          <img src={home} className="App-logo" alt="home" />
        </div>
        <div>
          <img src={home} className="App-logo" alt="home" />
        </div>
        <div>
          <img src={home} className="App-logo" alt="home" />
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}
