import React from "react";
import NavBar from "../../navBar/navBar";
import header from "./home-header.png";
import picture1 from "./2.png"
import picture2 from "./3.png"
import "./home.css";


const HomePage = () => {

    return (
        <div>
            <div className="top-corner-images">
                <img src={picture1} alt="leaves" className="top-left-image" />
                <img src={picture2} alt="leaves" className="top-right-image" />
            </div>
            <div class="header-image">
                <img src={header} alt="food"/>
            </div>
            <div className="nav-bar-home">
            <NavBar/>
            </div>
        </div>
    );
};

export default HomePage;