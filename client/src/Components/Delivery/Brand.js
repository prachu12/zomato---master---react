import React from "react";
import Slider from "react-slick";

// components
import { NextArrow, PrevArrow } from "../CarousalArrow";

const Brand = (props) => {
  const logos = [
    "https://b.zmtcdn.com/data/brand_creatives/logos/c37b450dacb06430cc02d6c1ca82a448_1617984339.png",
    "https://b.zmtcdn.com/data/brand_creatives/logos/ea27b8179a3d59c157dd4df0ee2c3821_1617984370.png",
    "https://b.zmtcdn.com/data/brand_creatives/logos/58914e20f68fc3e4874b3eab0f5c4ec0_1584453757.png",
    "https://b.zmtcdn.com/data/brand_creatives/logos/76cee521f3905f01a515d71881ff70ae_1630687191.png",
    "https://b.zmtcdn.com/data/brand_creatives/logos/6743c2bf4409654a14320694e6e2f88a_1617984416.png",
    "https://b.zmtcdn.com/data/brand_creatives/logos/2f03f8299adfedcc5b038433b948e11a_1584120081.png",
    "https://b.zmtcdn.com/data/brand_creatives/logos/eeb8a7423bd42e739b72876506d9c87e_1594960767.png",
    "https://b.zmtcdn.com/data/brand_creatives/logos/ba3f71d2a72e2ab5dcdd6dfd708be77d_1506152234.png",
    "https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png",

  ];
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="my-5 mb-32">
      <Slider {...settings}>
        {logos.map((logo) => (
          <div className="w-32 h-48 mx-10 bg-white shadow">
            <img
              src={logo}
              alt="brand"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Brand;
