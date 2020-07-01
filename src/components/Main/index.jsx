import React from "react";
import "./Main.css";
import Front from "./Images/aw-front.png";

const Main = () => (
  <div className="main">
    <div className="box2">Box2</div>
    <img className="front" src={Front} alt="andy-window" />
    <div className="box3">Box3</div>
  </div>
);
export default Main;
