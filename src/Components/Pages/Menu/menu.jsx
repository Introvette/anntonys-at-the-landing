import React from "react";
import NavBar from "../../navBar/navBar";
import Socials from "../../socialMedia/socials";
import MenuTabs from "../../MenuTabs/menuTabs";
import "./menu.css";

const MenuPage = () => {
    return (
        <div>
            <div className="socials">
                <Socials />
            </div>
            <div className="nav-bar">
                <NavBar />
            </div>
            <div className="menu">
                <MenuTabs />
            </div>
        </div>
    );
};

export default MenuPage;
