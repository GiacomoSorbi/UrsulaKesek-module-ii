import React from "react";
import "./PlantDisplay.css";
import PlantSection1 from "../PlantSection1";
import plants  from "../constants";

const PlantDisplay = () => (
  <section className="display">
    <h1 className="dis"> Plant Directory</h1>
    <PlantSection1 plants ={plants}/>
  </section>
);
export default PlantDisplay;
