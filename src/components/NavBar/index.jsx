import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => (
  <nav>
    <ul>
      <li>
        <Link className="home" to="/" >
          Home
        </Link>
      </li>
      <li>
        <Link className="shop" to="/shop">
          Shop
        </Link>
      </li>
      <li>
        <Link className="plants" to="/plants">
          Plants
        </Link>
      </li>
      <li>
        <Link className="about" to="/about">
          About
        </Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
