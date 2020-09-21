import React from "react";
import "./PlantsPage.css";
import { NavLink } from "react-router-dom";

const PlantsPage = () => (
  <main className="plpg">
    <h2>
      {" "}
      Some of the plants and <span>minerals</span> used in perfume creation
    </h2>
    <h3>Click on any plant name to get some details</h3>
    <section className="plantsec">
      <article className="plaa">
        A-L
        <ol>
          <li>
            <NavLink className="plant" to="/plantdisplay1">
              Amyris
            </NavLink>
          </li>
          <li>
            <NavLink className="plant" to="/plantdisplay1">
              Bergamot
            </NavLink>
          </li>
          <li>
            <NavLink className="plant" to="/plantdisplay1">
              Citron
            </NavLink>
          </li>
          <li>
            <NavLink className="plant" to="/plantdisplay1">
              Clary Sage
            </NavLink>
          </li>
          <li>
            <NavLink className="plant" to="/plantdisplay1">
              Frangipani
            </NavLink>
          </li>
          <li>
            <NavLink className="plant" to="/plantdisplay1">
              Frankincense
            </NavLink>
          </li>
          <li>
            <NavLink className="plant" to="/plantdisplay1">
              Heliotrope
            </NavLink>
          </li>
          <li>
            <NavLink className="plant" to="/plantdisplay1">
              Jasmine
            </NavLink>
          </li>
          <li>
            <NavLink className="plant" to="/plantdisplay1">
              Labdanum
            </NavLink>
          </li>
        </ol>
      </article>
      <article className="plab">
        M-P
        <ol>
          <li>
            <NavLink className="plant" to="/plantdisplay2">
              Monoi
            </NavLink>
          </li>
          <li>
            <NavLink className="plant" to="/plantdisplay2">
              Muguet
            </NavLink>
          </li>
          <li>
            <NavLink className="plant" to="/plantdisplay2">
              Narcissus
            </NavLink>
          </li>
          <li>
            <NavLink className="plant" to="/plantdisplay2">
              Neroli
            </NavLink>
          </li>
          <li>
            <NavLink className="plant" to="/plantdisplay2">
              Oakmoss
            </NavLink>
          </li>
          <li>
            <NavLink className="plant" to="/plantdisplay2">
              Opopanaz
            </NavLink>
          </li>
          <li>
            <NavLink className="plant" to="/plantdisplay2">
              Osmanthus
            </NavLink>
          </li>
          <li>
            <NavLink className="plant" to="/plantdisplay2">
              Oud
            </NavLink>
          </li>
          <li>
            <NavLink className="plant" to="/plantdisplay2">
              Patchouli
            </NavLink>
          </li>
        </ol>
      </article>
      <article className="plac">
        Q-Z
        <ol>
          <li>
            <NavLink className="plant" to="/plantdisplay3">
              Rose
            </NavLink>
          </li>
          <li>
            <NavLink className="plant" to="/plantdisplay3">
              Sandalwood
            </NavLink>
          </li>
          <li>
            <NavLink className="plant" to="plantdisplay3/">
              Vanilla
            </NavLink>
          </li>
          <li>
            <NavLink className="plant" to="/plantdisplay3">
              Vetiver
            </NavLink>
          </li>
          <li>
            <NavLink className="plant" to="/plantdisplay3">
              Ylang-Ylang
            </NavLink>
          </li>
        </ol>
      </article>
    </section>
  </main>
);
export default PlantsPage;
