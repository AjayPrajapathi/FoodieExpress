import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="logo">
        <span>Foodie</span>Express
      </h1>
      <h3 className="admin-panel">Admin Panel</h3>
    </div>
  );
};

export default Navbar;
