import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navBar.css";
import logo from "./logo.png";
import Socials from "../socialMedia/socials";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleBackButtonClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="navbar-container">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="anntonys" />
        </a>
      </div>
      <div className="nav-menu">
        <NavLink exact to="/" ActiveClassName="active-link">
          Home
        </NavLink>
        <NavLink to="/menu" activeClassName="active-link">
          Menu
        </NavLink>
        <NavLink to="/about" activeClassName="active-link">
          About
        </NavLink>
        <NavLink to="/catering" activeClassName="active-link">
          Catering
        </NavLink>
        <NavLink to="/contact" activeClassName="active-link">
          Contact Us
        </NavLink>
      </div>
      <Socials />
      {isMenuOpen ? (
        <div className="mobile-menu">
          <div className="back-button" onClick={handleBackButtonClick}>
            <i className="fas fa-arrow-left"></i> Back
          </div>
          <Link to="/" onClick={handleBackButtonClick}>
            Home
          </Link>
          <Link to="/menu" onClick={handleBackButtonClick}>
            Menu
          </Link>
          <Link to="/about" onClick={handleBackButtonClick}>
            About
          </Link>
          <Link to="/catering" onClick={handleBackButtonClick}>
            Catering
          </Link>
          <Link to="/contact" onClick={handleBackButtonClick}>
            Contact Us
          </Link>
        </div>
      ) : (
        <div className="mobile-menu-toggle" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
      )}
    </div>
  );
};

export default NavBar;
