import React, { useState, useEffect, useRef } from "react";
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
  const aboutRef = useRef(null);

  useEffect(() => {
    const calculateNewLeftPosition = (scrollY, windowWidth, aboutTop, aboutBottom, boatWidth) => {
      if (scrollY < aboutTop) {

        return windowWidth;
      } else if (scrollY >= aboutTop && scrollY < aboutBottom) {

        const progress = (scrollY - aboutTop) / (aboutBottom - aboutTop);
        return windowWidth - (progress * ((windowWidth - boatWidth) / 2)) - boatWidth;
      } else {

        const progress = (scrollY - aboutBottom) / (document.documentElement.scrollHeight - aboutBottom - window.innerHeight);
        return (windowWidth / 2 - (progress * (windowWidth / 2))) - boatWidth;
      }
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowWidth = window.innerWidth;
      const aboutTop = aboutRef.current.offsetTop - window.innerHeight / 2;
      const aboutBottom = aboutTop + aboutRef.current.clientHeight;
      const boatWidth = isMobile ? 250 : 450;

      const newLeftPosition = calculateNewLeftPosition(currentScrollY, windowWidth, aboutTop, aboutBottom, boatWidth);

      requestAnimationFrame(() => {
        setImageLeft(newLeftPosition);
      });
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setImageLeft(window.innerWidth);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

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
        <div className="about-container" ref={aboutRef}>
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








      










