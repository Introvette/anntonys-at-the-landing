import React from "react";
import "./socials.css";
import instagram from "./1.png";
import facebook from "./2.png";
import { Link } from "react-router-dom";

const Socials = () => {
    return (
        <div className="socials-container">
            <p>Follow us on Instagram and Facebook!</p>
            <Link to="https://www.instagram.com/anntonysatthelanding/" target="_blank"><img src={instagram} alt="Instagram" /></Link>
            <Link to="https://www.facebook.com/people/Anntonys-Original/100065016852456/" target="_blank"><img src={facebook} alt="Facebook" /></Link>
        </div>
    );
};

export default Socials;



