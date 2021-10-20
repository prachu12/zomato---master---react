import React, { useState } from "react";

//componenets
import DeliveryCarousal from "./DeliveryCarousal";
import Brand from "./Brand";
import RestaurantCard from "../RestaurantCard";

const Delivery = () => {

  const {restaurantList, setRestaurantList} = useState([
    {
      _id: "123456",
      photos: [
        "https://b.zmtcdn.com/data/pictures/chains/0/19555660/5bade76798a2eeba65a62789287808a8.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
      ],
      name: "Cake Mountain",
      cuisine: ["Bakery", "Deserts"],
      averageCost:150,
      isPro: true,
      isOff: 50, 
      durationOfdelivery: 33,
      restaurantReviewValue: 3.9,
    },
    {
      _id: "123456-2",
      photos: [
        "https://b.zmtcdn.com/data/pictures/chains/1/102881/04e1cd573a0a157dc7af2aa348f51be2_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
      ],
      name: "Burger King",
      cuisine: ["Burger", "Fast Food", "Beverages"],
      averageCost:150,
      isPro: true,
      isOff: 60, 
      durationOfdelivery: 57,
      restaurantReviewValue: 4.2,
    },
    {
      _id: "123456-3",
      photos: [
        "https://b.zmtcdn.com/data/pictures/1/19737661/9b5cf8ea938de0e2e5e0ef4cbf1765f3.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
      ],
      name: "Kunwar Sa Momos",
      cuisine: ["Momos","Beverages","Chinese"],
      averageCost:150,
      isPro: true,
      isOff: 20, 
      durationOfdelivery: 40,
      restaurantReviewValue: 4,
    },
    

  ]);
  return (
    <>
    <DeliveryCarousal />
    {/* <Brand /> */}
    <div className="flex justify-between flex-wrap">
      {/* {restaurantList.map((restaurant)=>(
        <RestaurantCard {...restaurant} key={restaurant._id} />
      ))} */}
    </div>
    </>
  );
};

export default Delivery;
