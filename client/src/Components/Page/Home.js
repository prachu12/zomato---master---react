import React from "react";
import { useParams } from "react-router";

//components
import Delivery from "../Delivery";
import Dining from "../Dining";
import NightLife from "../NightLife";

const Home = () => {
    const {type} = useParams();
    return (
        <>
        <div className="my-5">
            {type === "delivery" && <Delivery />}
            {type === "dining" && <Dining />}
            {type === "night" && <NightLife />}
        </div>
        </>
    )
};

export default Home;