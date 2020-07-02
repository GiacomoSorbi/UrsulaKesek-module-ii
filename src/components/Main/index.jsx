import React from "react";
import "./Main.css";
import Front from "./Images/aw-front.png";

const Main = () => (
  <section className="main">
    <div className="box2">
      <div className="perfOne">
      <p>Floral</p>
      </div>
      <div className="perfTwo">
      <p>Fresh</p>
      </div>
      <div className="perfThree">
      <p>Oriental</p>
      </div>
      <div className="perfFour">
      <p>Woody</p>
      </div>
      </div>
    <img className="front" src={Front} alt="andy-window" />
    <div className="box3"></div>
  </section>
);
export default Main;
