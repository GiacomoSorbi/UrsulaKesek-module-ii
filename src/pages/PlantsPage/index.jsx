import React from "react";
import "./PlantsPage.css";
import { NavLink } from "react-router-dom";
const PlantsPage = () => (
  <main className="plpg">
    <h2>
      {" "}
      Some of the plants and <span>minerals</span> used in perfume creation
    </h2>
    <h3>Links to plant details:currently go to homepage.(no plants yet!)</h3>
    <section className="plantsec">
      <article className="plaa">
        A-J
        <ol>
          <li>
            <NavLink className="plant" to="/">
              Amyris
            </NavLink>
          </li>
          <li>
            <NavLink className="plant" to="/">
              Bergamot
            </NavLink>
          </li>
          <li>
            <NavLink className="plant" to="/">
              Citron
            </NavLink>
          </li>
          <li>
            <NavLink className="plant" to="/">
              Clary Sage
            </NavLink>
          </li>
          <li>
            <NavLink className="plant" to="/">
              Frangipani
            </NavLink>
          </li>
          <li>
            <NavLink className="plant" to="/">
              Frankincense
            </NavLink>
          </li>
          <li>
            <NavLink className="plant" to="/">
              Heliotrope
            </NavLink>
          </li>
          <li>
            <NavLink className="plant" to="/">
              Jasmine
            </NavLink>
          </li>
        </ol>
      </article>
      <article className="plab">
        K-O
        <ol>
          <li>
            <NavLink className="plant" to="/">
              Labdanum
            </NavLink>
          </li>
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
        </ol>
      </article>
      <article className="plac">
        P-Z
        <ol>
          <li>
            <NavLink className="plant" to="/">
              Patchouli
            </NavLink>
          </li>
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
