import React from "react";
import NavBar from "../../navBar/navBar";
import construction from "./under-construction.png"; 
import "./about.css";

const AboutPage = () => {
  return (
    <>
      <NavBar />
      <div className="centered-content">
        <img src={construction} alt="Page Under Construction" className="centered-image" />
      </div>
    </>
  );
};

export default AboutPage;
