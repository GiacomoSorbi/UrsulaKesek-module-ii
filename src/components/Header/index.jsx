import React from "react";
import "./Header.css";
import GreenCat from "./Images/green-cat.png";
import pb75 from "./Images/pb75.png";
const Header = () => (
  <>
    <div className="header">
      <img className="green" src={GreenCat} alt="green-cat" />
      <h1>UK PERFUMES</h1>
      <div className="box1">
      <p className="exotic">Travel places through scents</p>
      <img className="pb75" src={pb75} alt="small-squat-perfume-bottle" />
      </div>
    </div>
  </>
);

export default Header;
