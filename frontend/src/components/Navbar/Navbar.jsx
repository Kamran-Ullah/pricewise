import React, { useContext, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { IoBag } from "react-icons/io5";
import { IoLogOutSharp } from "react-icons/io5";
import "./Navbar.css";
import { assets } from "../../assets/assets.js";
import { Link, useNavigate } from "react-router-dom";
import { storeContext } from "../../context/storeContext.jsx";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");

  const { token, setToken } = useContext(storeContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <>
      <div className="navbar">
        <Link to="/">
          <img className="logo" src={assets.logo1} alt="" />
        </Link>
        <ul className="navbar-menu">
          <Link
            to="/"
            onClick={() => setMenu("Home")}
            className={menu === "Home" ? "active" : ""}
          >
            Home
          </Link>
          <a
            href="#category-display"
            onClick={() => setMenu("Shop")}
            className={menu === "Shop" ? "active" : ""}
          >
            Shop
          </a>

          <a
            href="#testimonials"
            onClick={() => setMenu("Testimonial")}
            className={menu === "Testimonial" ? "active" : ""}
          >
            Testimonial
          </a>

          <Link
            to="/about"
            onClick={() => setMenu("About Us")}
            className={menu === "About Us" ? "active" : ""}
            id="about"
          >
            About Us
          </Link>

          <Link
            to="/contact"
            onClick={() => setMenu("Contuct Us")}
            className={menu === "Contuct Us" ? "active" : ""}
            id="contact"
          >
            Contact Us
          </Link>
        </ul>
        <div className="navbar-right ">
          <div className="search">
            <input type="text" placeholder="Search for products" />
            <img src={assets.search_icon} alt="" />
          </div>
          {token ? (
            <div className="navbar-search-icon">
              {/* <img src={assets.basket_icon} alt="" /> */}

              <FaHeart className="add" />
              <div className="dot"></div>
            </div>
          ) : (
            ""
          )}

          {!token ? (
            <button onClick={() => setShowLogin(true)}>Sign In</button>
          ) : (
            <div className="navbar-profile">
              {/* <img src={assets.profile_icon} alt="" /> */}
              <ImProfile className="profile" />
              <ul className="nav-profile-dropdown">
                <li>
                  {/* <img src={assets.bag_icon} alt="" /> */}
                  <IoBag />
                  <p>Orders</p>
                </li>
                <hr />
                <li onClick={logout}>
                  {" "}
                  {/* <img src={assets.logout_icon} alt="" /> */}
                  <IoLogOutSharp />
                  <p>Logout</p>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      {/* <div className="search-bar">
        <input type="text" placeholder="Search for products" />
        <img src={assets.search_icon} alt="" />
      </div> */}
    </>
  );
};

export default Navbar;
