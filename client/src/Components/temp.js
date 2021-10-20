import React from "react";
import { useLocation } from "react-router";

const Temp = () => {
    const loc = useLocation();
    return (<div>Hello, this is a temp!!!!</div>)
};

export default Temp;