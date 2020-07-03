import React from "react";
import Front from "./Images/aw-front.png";
import "./HomePage.css";
import { NavLink} from "react-router-dom";

function HomePage() {
  return (
    <section className="main">
      <div className="box2">
        <h2>Scent Families </h2>
        <div className="perfOne">
          <NavLink className="floral" to="/floral">
           Floral
           </NavLink>
        </div>

        <div className="perfTwo">
          <NavLink className="fresh" to="/fresh">
            Fresh
          </NavLink>
        </div>
        <div className="perfThree">
          <NavLink className="orient" to="/oriental">
            Oriental
          </NavLink>
        </div>
        <div className="perfFour">
          <NavLink className="woody" to="/woody">
            Woody
          </NavLink>
        </div>
      </div>
      <img className="front" src={Front} alt="andy-window" />
      <div className="box3"></div>
    </section>
  );
}
export default HomePage;
