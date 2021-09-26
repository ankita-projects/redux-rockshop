import React from "react";
import { BrowserRouter, Link} from "react-router-dom";
import { AddShoppingCart } from "@material-ui/icons";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
     
        <ul className="navbar__list">
        <BrowserRouter>
          <Link  className="navbar__logo" to="/">
            Shopping
          </Link>
        </BrowserRouter>
          <BrowserRouter>
            <li className= "navbar__list__item">
              <Link to="/">Home</Link>
            </li>
          </BrowserRouter>
          <BrowserRouter>
          <li>
            <Link to="/product">Products</Link>
          </li>
          </BrowserRouter>
          <BrowserRouter>
          <li>
            <Link to="/cart">
              <i className="material-icons"><AddShoppingCart /></i>
            </Link>
          </li>
          </BrowserRouter>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
