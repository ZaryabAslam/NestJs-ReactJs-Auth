import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2500,
    // cssEase: "linear"
  };
  return (
    <Slider {...settings}>
      {" "}
      <div className="single-slide">
        <img
          src="https://mangojourneys.com/en/wp-content/uploads/2015/05/1920x700-bigstock-View-Of-Angkor-Thom-Temple-Und-723731741.jpg"
          alt=""
        />
      </div>
      <div className="single-slide">
        <img
          src="https://mangojourneys.com/en/wp-content/uploads/2015/05/1920x700-bigstock-Sunset-in-Cambodia-at-the-seas-18498470.jpg"
          alt=""
        />
      </div>
      <div className="single-slide">
        <img
          src="https://mangojourneys.com/en/wp-content/uploads/2015/05/1920x700-bigstock-Floating-Village-And-Rock-Isla-38224351.jpg"
          alt=""
        />
      </div>
      <div className="single-slide">
        <img
          src="https://mangojourneys.com/en/wp-content/uploads/2015/05/1920x700-bigstock-LUANG-PRABANG-DEC-Night-Ma-56523128.jpg"
          alt=""
        />
      </div>
      <div className="single-slide">
        <img src="https://www.w3schools.com/howto/img_nature_wide.jpg" alt="" />
      </div>
      <div className="single-slide">
        <img src="https://www.w3schools.com/howto/img_nature_wide.jpg" alt="" />
      </div>
    </Slider>
  );
}
