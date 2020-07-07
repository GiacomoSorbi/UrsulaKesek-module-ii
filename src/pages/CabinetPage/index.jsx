import React from "react";
import { NavLink } from "react-router-dom";
import "./Cabinet.css";
import fragranceWheel from "./Images/fragrance-wheel.png";

const CabinetPage = () => (
  <>
    <section className="aroma">
      <main className="box2">
        <h2>Cabinet Of Curiosities </h2>
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
          <NavLink className="orient" to="/oriental">
            K
          </NavLink>
        </div>
        <div className="perfFour">
          <p className="wo">Woody</p>
          <NavLink className="woody" to="/woody">
            L
          </NavLink>
          <NavLink className="woody" to="/woody">
            M
          </NavLink>
          <NavLink className="woody" to="/woody">
            N
          </NavLink>
          <NavLink className="woody" to="/woody">
            P
          </NavLink>
        </div>
      </main>
      <aside classname="wheel">
        <img className="sntwl" src={fragranceWheel} alt="perfume-chart" />
      </aside>
    </section>
  </>
);

export default CabinetPage;
