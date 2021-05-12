import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul className="nav-links">
        <Link to={"/"}>
          <li>Map</li>
        </Link>
        <Link to={"/data"}>
          <li>Data</li>
        </Link>
        <Link to={"/about"}>
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
