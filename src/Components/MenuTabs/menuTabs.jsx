import React, { useState } from "react";
import "./menuTabs.css";

const MenuTabs = () => {
    const [activeTab, setActiveTab] = useState("appetizers");

    const handleTabClick = (tab) => {
        if (activeTab === tab) {
            setActiveTab(""); 
        } else {
            setActiveTab(tab);
        }
    };

    return (
        <div className="menu-tabs-container">
            <div
                className={`tab ${activeTab === "appetizers" ? "active" : ""}`}
                onClick={() => handleTabClick("appetizers")}
            >
                Appetizers
            </div>
            <div
                className={`tab ${activeTab === "salads" ? "active" : ""}`}
                onClick={() => handleTabClick("salads")}
            >
                Salads
            </div>
            <div
                className={`tab ${activeTab === "sandwiches" ? "active" : ""}`}
                onClick={() => handleTabClick("sandwiches")}
            >
                Sandwiches
            </div>
            <div
                className={`tab ${activeTab === "sides" ? "active" : ""}`}
                onClick={() => handleTabClick("sides")}
            >
                Sides
            </div>
            <div
                className={`tab ${activeTab === "kids" ? "active" : ""}`}
                onClick={() => handleTabClick("kids")}
            >
                Kids Meals
            </div>
            <div
                className={`tab ${activeTab === "dinners" ? "active" : ""}`}
                onClick={() => handleTabClick("dinners")}
            >
                Caribbean Dinners
            </div>
            <div
                className={`tab ${activeTab === "seafood" ? "active" : ""}`}
                onClick={() => handleTabClick("seafood")}
            >
                Seafood
            </div>

            <div className="content">
                {activeTab === "appetizers" && (
                    <div className="app-menu-content active">
                        <div className="menu-item">
                            <h3 className="item-name">Island Wings</h3>
                            <span className="item-price">$9.99</span>
                            <p className="item-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Fusce eu justo mauris.
                            </p>
                        </div>
                        <div className="menu-item">
                            <h3 className="item-name">Appetizer 2</h3>
                            <span className="item-price">$8.99</span>
                            <p className="item-description">
                                Sed non magna sit amet eros posuere tincidunt. Nunc
                                lacinia nisi nec arcu gravida.
                            </p>
                        </div>
                    </div>
                )}

                {activeTab === "salads" && (
                    <div className="salads-menu-content active">
                        <div className="menu-item">
                            <h3 className="item-name">Salad 1</h3>
                            <span className="item-price">$7.99</span>
                            <p className="item-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Fusce eu justo mauris.
                            </p>
                        </div>
                        <div className="menu-item">
                            <h3 className="item-name">Salad 2</h3>
                            <span className="item-price">$6.99</span>
                            <p className="item-description">
                                Sed non magna sit amet eros posuere tincidunt. Nunc
                                lacinia nisi nec arcu gravida.
                            </p>
                        </div>
                    </div>
                )}

                {activeTab === "sandwiches" && (
                    <div className="sand-menu-content active">
                        <div className="menu-item">
                            <h3 className="item-name">Sandwich 1</h3>
                            <span className="item-price">$9.99</span>
                            <p className="item-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Fusce eu justo mauris.
                            </p>
                        </div>
                        <div className="menu-item">
                            <h3 className="item-name">Sandwich 2</h3>
                            <span className="item-price">$8.99</span>
                            <p className="item-description">
                                Sed non magna sit amet eros posuere tincidunt. Nunc
                                lacinia nisi nec arcu gravida.
                            </p>
                        </div>
                    </div>
                )}

                {activeTab === "sides" && (
                    <div className="sides-menu-content active">
                        <div className="menu-item">
                            <h3 className="item-name">Side 1</h3>
                            <span className="item-price">$3.99</span>
                            <p className="item-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Fusce eu justo mauris.
                            </p>
                        </div>
                        <div className="menu-item">
                            <h3 className="item-name">Side 2</h3>
                            <span className="item-price">$2.99</span>
                            <p className="item-description">
                                Sed non magna sit amet eros posuere tincidunt. Nunc
                                lacinia nisi nec arcu gravida.
                            </p>
                        </div>
                    </div>
                )}

                {activeTab === "kids" && (
                    <div className="kids-menu-content active">
                        <div className="menu-item">
                            <h3 className="item-name">Kids Meal 1</h3>
                            <span className="item-price">$5.99</span>
                            <p className="item-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Fusce eu justo mauris.
                            </p>
                        </div>
                        <div className="menu-item">
                            <h3 className="item-name">Kids Meal 2</h3>
                            <span className="item-price">$4.99</span>
                            <p className="item-description">
                                Sed non magna sit amet eros posuere tincidunt. Nunc
                                lacinia nisi nec arcu gravida.
                            </p>
                        </div>
                    </div>
                )}

                {activeTab === "dinners" && (
                    <div className="dinners-menu-content active">
                        <div className="menu-item">
                            <h3 className="item-name">Dinner 1</h3>
                            <span className="item-price">$12.99</span>
                            <p className="item-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Fusce eu justo mauris.
                            </p>
                        </div>
                        <div className="menu-item">
                            <h3 className="item-name">Dinner 2</h3>
                            <span className="item-price">$11.99</span>
                            <p className="item-description">
                                Sed non magna sit amet eros posuere tincidunt. Nunc
                                lacinia nisi nec arcu gravida.
                            </p>
                        </div>
                    </div>
                )}

                {activeTab === "seafood" && (
                    <div className="seafood-menu-content active">
                        <div className="menu-item">
                            <h3 className="item-name">Seafood Platter 1</h3>
                            <span className="item-price">$14.99</span>
                            <p className="item-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Fusce eu justo mauris.
                            </p>
                        </div>
                        <div className="menu-item">
                            <h3 className="item-name">Seafood Platter 2</h3>
                            <span className="item-price">$13.99</span>
                            <p className="item-description">
                                Sed non magna sit amet eros posuere tincidunt. Nunc
                                lacinia nisi nec arcu gravida.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MenuTabs;



