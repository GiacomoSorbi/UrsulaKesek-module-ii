import React from "react";
import "./Header.css";
import BlueCat from "./Images/blue-cat-150.png";

const Header = () => (
  <>
    <div className="header">
      <img className="blue" src={BlueCat} alt="blue-cat" />
      <h1>UK PERFUMES</h1>
      <div class="box1">Box1</div>
      <div class="box2">Box2</div>
      <div class="box3">Box3</div>
      <div class="box4">Box4</div>
      <div class="box5">Box5</div>
      <div class="box6">Box6</div>

    </div>
  </>
);

export default Header;
