import React from "react";
import { useParams } from "react-router";

//Components
import Delivery from "./Delivery";
import Dining from "./Dining";
import NightLife from "./NightLife";

const Master = () => {
    const { type } = useParams();

    return (
    <>
    <div className="m-5">
    {type === "delivery" && <Delivery />}
    {type === "dining" && <Dining />}
    {type === "night" && <NightLife />}
    </div>
    </>
    );
};

export default Master;