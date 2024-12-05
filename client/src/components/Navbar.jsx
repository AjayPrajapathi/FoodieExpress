import React, { useState } from "react";
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

const [menu,setMenu]=useState("home")

  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />

      <ul className="navbar-menu">
        <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""} >Home</li>
        <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</li>
        <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-app</li>
        <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact us</li>
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
