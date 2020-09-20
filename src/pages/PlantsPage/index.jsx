import React from "react";
import "./PlantsPage.css";
import { NavLink } from "react-router-dom";

const PlantsPage = () => (
  <main className="plpg">
    <h2>
      {" "}
      Some of the plants and <span>minerals</span> used in perfume creation
    </h2>
    <h3>Links to plant details:work in progress.A-L in place.M-Z go to homepage</h3>
    <section className="plantsec">
      <article className="plaa">
        A-L
        <ol>
          <li>
            <NavLink className="plant" to="/plantdisplay">
              Amyris
            </NavLink>
          </li>
          <li>
            <NavLink className="plant" to="/plantdisplay">
              Bergamot
            </NavLink>
          </li>
          <li>
            <NavLink className="plant" to="/plantdisplay">
              Citron
            </NavLink>
          </li>
          <li>
            <NavLink className="plant" to="/plantdisplay">
              Clary Sage
            </NavLink>
          </li>
          <li>
            <NavLink className="plant" to="/plantdisplay">
              Frangipani
            </NavLink>
          </li>
          <li>
            <NavLink className="plant" to="/plantdisplay">
              Frankincense
            </NavLink>
          </li>
          <li>
            <NavLink className="plant" to="/plantdisplay">
              Heliotrope
            </NavLink>
          </li>
          <li>
            <NavLink className="plant" to="/plantdisplay">
              Jasmine
            </NavLink>
          </li>
          <li>
            <NavLink className="plant" to="/plantdisplay">
              Labdanum
            </NavLink>
          </li>
        </ol>
      </article>
      <article className="plab">
        M-P
        <ol>
          <li>
            <NavLink className="plant" to="/">
              Monoi
            </NavLink>
          </li>
          <li>
            <NavLink className="plant" to="/">
              Muguet
            </NavLink>
          </li>
          <li>
            <NavLink className="plant" to="/">
              Narcissus
            </NavLink>
          </li>
          <li>
            <NavLink className="plant" to="/">
              Neroli
            </NavLink>
          </li>
          <li>
            <NavLink className="plant" to="/">
              Oakmoss
            </NavLink>
          </li>
          <li>
            <NavLink className="plant" to="/">
              Opopanaz
            </NavLink>
          </li>
          <li>
            <NavLink className="plant" to="/">
              Osmanthus
            </NavLink>
          </li>
          <li>
            <NavLink className="plant" to="/">
              Oud
            </NavLink>
          </li>
          <li>
            <NavLink className="plant" to="/">
              Patchouli
            </NavLink>
          </li>
        </ol>
      </article>
      <article className="plac">
        Q-Z
        <ol>
          <li>
            <NavLink className="plant" to="/">
              Rose
            </NavLink>
          </li>
          <li>
            <NavLink className="plant" to="/">
              Sandalwood
            </NavLink>
          </li>
          <li>
            <NavLink className="plant" to="/">
              Vanilla
            </NavLink>
          </li>
          <li>
            <NavLink className="plant" to="/">
              Vetiver
            </NavLink>
          </li>
          <li>
            <NavLink className="plant" to="/">
              Ylang-Ylang
            </NavLink>
          </li>
        </ol>
      </article>
    </section>
  </main>
);
export default PlantsPage;
