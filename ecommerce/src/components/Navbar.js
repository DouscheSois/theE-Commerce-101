import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="nav-links" to="/">
        Home
      </Link>
      <Link className="nav-links" to="/about">
        About
      </Link>
    </div>
  );
};

export default Navbar;
