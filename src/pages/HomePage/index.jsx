import React from "react";
import Front from "./Images/aw-front.png";
import Bubble from "./Images/bubble-iv.gif";
import "./HomePage.css";
import GreenCat from "./Images/green-cat.png";
import Bird from "./Images/bird200x200.gif";

function HomePage() {
  return (
    <section className="main">
      <div className="box2">
        <h2 className="hph2">COOL CHICKS AND CATS ROAM THE WORLD</h2>
        <img className="bird" src={Bird} alt="robin-bird" />
        <img className="green1" src={GreenCat} alt="green-cat" />

      </div>
      <img className="front" src={Front} alt="andy-window" />
      <div className="box3">
      <img className="bubble" src={Bubble} alt="small-bubble-animation" />
      </div>
    </section>
  );
}
export default HomePage;
