import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <h4>Contact Us</h4>
        <p>4491 Slanting Bride Road, Sherrills Ford, NC, 28673</p>
        <p>Phone: (828) 478 - 5944</p>
        <p>Email: anntonysatthelanding@gmail.com</p>
      </div>

      <div>
        <a
          href="https://www.instagram.com/anntonysatthelanding/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          href="https://www.facebook.com/people/Anntonys-Original/100065016852456/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a href="/policy" target="_blank" rel="noopener noreferrer">
          Privacy Policy & Terms of Conditions
        </a>
      </div>
    </footer>
  );
};

export default Footer;
