import React from "react";
import "./Header.css";
import BlueCat from "./Images/blue-cat-150.png";
import pb75 from "./Images/pb75.png";

const Header = () => (
  <>
    <div className="header">
      <img className="blue" src={BlueCat} alt="blue-cat" />
      <h1>UK PERFUMES</h1>
      <div className="box1">
      <p className="exotic">Travel to exotic places through scents</p>
      <img className="pb75" src={pb75} alt="small-squat-perfume-bottle" />
      </div>
    </div>
  </>
);

export default Header;
