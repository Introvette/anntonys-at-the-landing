import React from "react";
import "./socials.css";
import instagram from "./1.png";
import facebook from "./2.png";

const Socials = () => {
    return (
        <div className="socials-container">
            <p>Follow us on Instagram and Facebook!</p>
            <img src={instagram} alt="Instagram" />
            <img src={facebook} alt="Facebook" />
        </div>
    );
};

export default Socials;



