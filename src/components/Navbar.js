import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <h1 className="nav-heading">
        <Link to="/home">
          The<span>Cocktail</span>DB
        </Link>
      </h1>
      <ul className="nav-list">
        <li className="nav-list-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-list-item">
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
