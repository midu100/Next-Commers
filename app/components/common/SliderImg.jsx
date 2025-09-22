'use client'
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import product from "@/public/all1.png";
import product2 from "@/public/all2.png";
import product3 from "@/public/aall3.png";
import Image from "next/image";

// Dummy image URLs (change to your actual image paths)

function SliderImg({ proMainImg, proSubImg }) {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const images = [product,product2,product3,product];

  // Main big image settings
  const mainSettings = {
    asNavFor: nav2,
    ref: (slider) => setNav1(slider),
    arrows: false,
    fade: true,
  };

  // Thumbnail settings
  const thumbSettings = {
    asNavFor: nav1,
    ref: (slider) => setNav2(slider),
    slidesToShow: 4,
    swipeToSlide: true,
    focusOnSelect: true,
    vertical: true,
  };

  return (
    <div className="flex justify-center items-center gap-4">
      {/* Thumbnails */}
      <div className="w-24">
        <Slider {...thumbSettings}>
          {images.map((img, i) => (
            <div key={i} className="p-1">
              <Image
                src={img}
                alt={`thumb-${i}`}
                className="w-full h-auto border rounded"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Main Image */}
      <div className="w-80">
        <Slider {...mainSettings}>
          {images.map((img, i) => (
            <div key={i}>
              <Image
                src={img}
                alt={`main-${i}`}
                className="w-full h-auto rounded-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SliderImg;
