import React from "react";
import Slider from "react-slick";


//component
import DeliveryFoodCategory from "./DeliveryFoodCategory";
import { NextArrow,PrevArrow } from "../CarousalArrow";

const DeliveryCarousal = () => {
  const categories = [{
      image : "https://b.zmtcdn.com/data/o2_assets/9428a39fba2a97f7470b8f3f26af86af1632716606.png",
      title : "Paneer"
  },
  {
      image : "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
      title : "Pizza"
  },
  {
      image : "https://b.zmtcdn.com/data/o2_assets/3d902eb4bb267efea010ade87bcb1f3f1632716698.png",
      title : "Chaat"
  },
  {
      image : "https://b.zmtcdn.com/data/o2_assets/adbe5236974520ecba7cb9f47e4c92011632716658.png",
      title : "Chicken"
  },
  {
      image : "https://b.zmtcdn.com/data/o2_assets/c5e4cebfd8a8b44f9d4f8bc8741008991632716603.png",
      title : "Ker Sangri"
  },
  {
      image : "https://b.zmtcdn.com/data/o2_assets/c5f679b7ce4d7cf0b08f120e77d22e2d1632716660.png",
      title : "Dal"
  },
  {
      image : "https://b.zmtcdn.com/data/o2_assets/e61347d2b01cfae669530bd4b8e778e41632716577.png",
      title : "Rolls"
  },
  {
      image : "https://b.zmtcdn.com/data/o2_assets/cb671a6a34533e31523855c3cc109c531632716600.png",
      title : "Gatte"
  },
  {
      image : "https://b.zmtcdn.com/data/o2_assets/b78083afb63995c7e0a676d01dcc164d1632716549.png",
      title : "Thali"
  },
  {
      image : "https://b.zmtcdn.com/data/o2_assets/dff007e05e2f72a4abc0772c7a8cd0951632716697.png",
      title : "Burger"
  },
  {
      image : "https://b.zmtcdn.com/data/o2_assets/9694b563c793ea7bddf49f619dd4b7751632716697.png",
      title : "Cake"
  },
  {
      image : "https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png",
      title : "Paratha"
  }

];
const settings = {
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
};
  return (
    <>
    <h1 className="text-xl mb-4 font-semibold">Inspiration for your first order</h1>
    <div className="lg:hidden flex gap-2 flex-wrap">
      {
        categories.map((food) => (
          <DeliveryFoodCategory {...food} />

        ))
      }
    </div>
    <div className="hidden lg:block">
      <Slider {...settings}>
        {categories.map((food) => (
          <DeliveryFoodCategory {...food}/>
        ))}
      </Slider>
    </div>
    </>
  );
};

export default DeliveryCarousal;
