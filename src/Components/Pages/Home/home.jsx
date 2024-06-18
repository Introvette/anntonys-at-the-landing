import React, { useState, useEffect } from "react";
import NavBar from "../../navBar/navBar";
import header from "./home-header.png";
import picture1 from "./2.png";
import picture2 from "./3.png";
import boat from "./boat.png";
import "./home.css";
import ContactForm from "../../contactForm/contactForm";

const HomePage = () => {
  const [imageLeft, setImageLeft] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const calculateNewLeftPosition = (scrollY) => {
    const windowWidth = window.innerWidth;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = scrollY / maxScroll;

    if (scrollPercentage < 0.3) {
      // Move from right to center
      return windowWidth - (scrollPercentage / 0.3 * (windowWidth / 2));
    } else if (scrollPercentage < 0.6) {
      // Stay in the center
      return windowWidth / 2;
    } else {
      // Move from center to left
      return windowWidth / 2 - ((scrollPercentage - 0.6) / 0.4 * (windowWidth / 2));
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const newLeftPosition = calculateNewLeftPosition(currentScrollY);

      requestAnimationFrame(() => {
        setImageLeft(newLeftPosition);
      });
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setImageLeft(window.innerWidth); // Reset position on resize
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className="top-corner-images">
        <img src={picture1} alt="leaves" className="top-left-image" />
        <img src={picture2} alt="leaves" className="top-right-image" />
      </div>
      <div className="header-image">
        <img src={header} alt="food" />
      </div>
      <div className="nav-bar-home">
        <NavBar />
      </div>
      <div className="page-content">
        <div className="about-container">
          <h2>Welcome to</h2>
          <h1>Anntony's at the Landing</h1>
          <div className="image-container">
            <img
              src={boat}
              alt="boat"
              className="animated-image"
              style={{ left: `${imageLeft}px` }}
            />
          </div>
        </div>
        <div className="sauce-container"></div>
        <div className="contact-container">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default HomePage;



      










