import React from "react";

const DeliverySmCard = ({ image, title}) => {
    return (
        <>
        <div className=" lg:hidden bg-white shadow rounded-md w-20 md:w-56">
          <div className="w-full h-24">
            <img
              src={image}
              alt="Pizza"
              className="w-full w-full rounded-t-md"
            />
          </div>
    
          <div>
            <h3 className="text-sm my-1 text-base font-light">{title}</h3>
          </div>
        </div>
        </>
      );
};

const DeliveryLgCard = ({image, title}) => {
    return (
        <>
        <div className="hidden lg:block w-64 h-58">
          <div className="w-full h-full">
            <img
              src={image}
              alt="Pizza"
              className="w-full w-full object-cover rounded-md shadow-lg"
            />
          </div>
    
          <div>
            <h3 className="text-xl my-1 font-medium">{title}</h3>
          </div>
        </div>
        </>
      );

}
const DeliveryFoodCategory = (props) => {
  return (
    <>
    <DeliverySmCard {...props} />
    <DeliveryLgCard {...props}/>
    </>
  );
};

export default DeliveryFoodCategory;
