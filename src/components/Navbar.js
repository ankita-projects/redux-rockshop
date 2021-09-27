import React from "react";
import { NavLink  } from "react-router-dom";
import { AddShoppingCart } from "@material-ui/icons";
import logo from "../images/logo.jpg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <ul className="navbar__list">
            <NavLink  className="navbar__logo" to="/">
              <img className="logo" src={logo} alt="logo" />
            </NavLink >
            <li className="navbar__list__item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/product">Product</NavLink>
            </li>
            <li>
              <NavLink to="/cart">
                <i className="material-icons">
                  <AddShoppingCart />
                </i>
              </NavLink>
            </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
