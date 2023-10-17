"use client"
import Image from "next/image";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1
      
    };
    return (
      <div className=" container">
   <h1 className="mt-10 mb-10 text-center text-4xl font-sans font-bold underline">Our Promotions</h1>
        <Slider {...settings}>
          
          <div >
          <img src="promo1.webp"/>
           <img src = "/promow1.webp"/>
          </div>
          <div >
           <img src = "/promom2.webp"/>
           <img src="/promow1.webp"/>

          </div>
          
        </Slider>
      </div>
    );
  }
}