import React from "react";
import "../styles/Navbar.css";
import { assets } from "../assets/assets";
import {
  faBasketShopping,
  faCake,
  fas,
  faSearch,
} from "@fortawesome/free-solid-svg-icons"; // Solid icons
import { fab } from "@fortawesome/free-brands-svg-icons"; // Brand icons

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />

      <ul className="navbar-menu">
        <li>Home</li>
        <li>Menu</li>
        <li>Mobile-app</li>
        <li>Contact us</li>
      </ul>

      <div className="navbar-right">
        {/* <FontAwesomeIcon icon={}/> */}
        <FontAwesomeIcon icon={faSearch} className="text-xl text-green-500" />
        <div className="navbar-search-icon">
          <FontAwesomeIcon icon={faBasketShopping} />
          <div className="dot"></div>
        </div>
        <button>sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
