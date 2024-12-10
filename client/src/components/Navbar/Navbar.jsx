
import React, { useContext, useState } from "react";
import "./Navbar.css";

import { Link, useNavigate } from "react-router-dom";
// import { storeContext } from "../../context/StoreContext";
import { storeContext } from "../../context/StoreContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

  faCartShopping,
  faListCheck,
  faSignOut,
  faUser,
} from "@fortawesome/free-solid-svg-icons";


const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(storeContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <div className="navbar">
      {/* <Link to='/'><img className='logo' src={assets.logo} alt="" /></Link> */}
      <h1 className="logo">
        <span>Foodie</span>Express
      </h1>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={`${menu === "home" ? "act" : ""}`}
        >
          home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={`${menu === "menu" ? "act" : ""}`}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mob-app")}
          className={`${menu === "mob-app" ? "act" : ""}`}
        >
          mobile app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact")}
          className={`${menu === "contact" ? "act" : ""}`}
        >
          contact us
        </a>
      </ul>
      <div className="navbar-right">
    
        <Link to="/cart" className="navbar-search-icon">
          {/* <img src={assets.basket_icon} alt="" /> */}
          <FontAwesomeIcon className="icon" icon={faCartShopping} />
          <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
        </Link>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>sign in</button>
        ) : (
          <div className="right">
            <div onClick={() => navigate("/myorders")}>
              <FontAwesomeIcon className="icon"icon={faListCheck}/>
            </div>

            <div className="navbar-profile">
              {/* <img src={assets.profile_icon} alt="" /> */}
              <FontAwesomeIcon className="icon" icon={faUser} />
              <ul className="navbar-profile-dropdown">
                {/* <li onClick={() => navigate("/myorders")}>
                
                  <FontAwesomeIcon icon={faBagShopping} /> <p>Orders</p>
                </li>
                <hr /> */}
                <li onClick={logout}>
               
                  <FontAwesomeIcon icon={faSignOut} /> <p>Logout</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
