import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { StoreContext } from "../contextAPI/store";

const Navbar = () => {
  const [cart, setCart] = useContext(StoreContext);
  return (
    <div className="navbar">
      <Link className="nav-links" to="/">
        <i className="fas fa-home"></i> Home
      </Link>
      <Link className="nav-links" to="/about">
        <i className="fas fa-users"></i> Team
      </Link>
      <Link className="nav-links" to="/shopping-cart">
        <i className="fas fa-shopping-cart"></i> Cart ({cart.length})
      </Link>
    </div>
  );
};

export default Navbar;
