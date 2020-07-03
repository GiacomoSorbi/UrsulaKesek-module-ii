import React from "react";
import Front from "./Images/aw-front.png";
import Bubble from "./Images/bubble-iv.gif";
import "./HomePage.css";
import { NavLink} from "react-router-dom";

function HomePage() {
  return (
    <section className="main">
      <div className="box2">
        <h2>Cabinet Of Curiosities </h2>
        <hr className="new1"/>
        <div className="perfOne">
          <p className="fl">Floral</p>
          <NavLink className="floral" to="/floral">
            A
           </NavLink>
           <NavLink className="floral" to="/floral">
            B
            </NavLink>
            <NavLink className="floral" to="/floral">
            C
            </NavLink>
        </div>
        <div className="perfTwo">
        <p className="fr">Fresh</p>

          <NavLink className="fresh" to="/fresh">
           D
          </NavLink>
          <NavLink className="fresh" to="/fresh">
           E
          </NavLink>
          <NavLink className="fresh" to="/fresh">
           F
          </NavLink>
        </div>
        <div className="perfThree">
        <p className="or">Oriental</p>
          <NavLink className="orient" to="/oriental">
            G
          </NavLink>
          <NavLink className="orient" to="/oriental">
            H
          </NavLink>
          <NavLink className="orient" to="/oriental">
            J
          </NavLink>
        </div>
        <div className="perfFour">
        <p className="wo">Woody</p>
          <NavLink className="woody" to="/woody">
            K
          </NavLink>
          <NavLink className="woody" to="/woody">
            L
          </NavLink>
          <NavLink className="woody" to="/woody">
            M
          </NavLink>


        </div>
      </div>
      <img className="front" src={Front} alt="andy-window" />
      <div className="box3">
      <img className="bubble" src={Bubble} alt="small-bubble-animation" />
      </div>
    </section>
  );
}
export default HomePage;
