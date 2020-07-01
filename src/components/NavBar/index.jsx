import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import clubs from "./Images/clubs1.png";
const NavBar = () => (
  <nav>
    <ul>
    <img className="clubs" src={clubs} alt="blue-cat" />
      <li>
        <Link className="home" to="/" >
          Home
        </Link>
        <img className="clubs" src={clubs} alt="blue-cat" />
      </li>
      <li>
        <Link className="shop" to="/shop">
          Shop
        </Link>
        <img className="clubs" src={clubs} alt="blue-cat" />
      </li>
      <li>
        <Link className="plants" to="/plants">
          Plants
        </Link>
        <img className="clubs" src={clubs} alt="blue-cat" />
      </li>
      <li>
        <Link className="about" to="/about">
          About
        </Link>
        <img className="clubs" src={clubs} alt="blue-cat" />
      </li>
    </ul>
  </nav>
);

export default NavBar;
