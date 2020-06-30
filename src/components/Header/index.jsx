import React from "react";
import "./Header.css";
import BlueCat from "./Images/blue-cat-150.png";

const Header = () => (
  <>
    <div className="header">
      <img className="blue" src={BlueCat} alt="blue-cat" />
    </div>
  </>
);

export default Header;
