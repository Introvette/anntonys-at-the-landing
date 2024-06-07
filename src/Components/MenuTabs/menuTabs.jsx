import React, { useState, useEffect } from "react";
import "./menuTabs.css";

const MenuTabs = () => {
  const [activeTab, setActiveTab] = useState("appetizers");
  const [isMobile, setIsMobile] = useState(null);

  const menuData = {
    appetizers: [
      {
        name: "Island Wings",
        price: "$9.99",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu justo mauris.",
      },
      {
        name: "Appetizer 2",
        price: "$8.99",
        description: "Sed non magna sit amet eros posuere tincidunt. Nunc lacinia nisi nec arcu gravida.",
      },
    ],
    salads: [
      {
        name: "Salad 1",
        price: "$7.99",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu justo mauris.",
      },
      {
        name: "Salad 2",
        price: "$6.99",
        description: "Sed non magna sit amet eros posuere tincidunt. Nunc lacinia nisi nec arcu gravida.",
      },
    ],
    sandwiches: [
      {
        name: "Sandwich 1",
        price: "$7.99",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu justo mauris.",
      },
      {
        name: "Sandwich 2",
        price: "$6.99",
        description: "Sed non magna sit amet eros posuere tincidunt. Nunc lacinia nisi nec arcu gravida.",
      },
    ],
    kids: [
      {
        name: "kids 1",
        price: "$7.99",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu justo mauris.",
      },
      {
        name: "kids 2",
        price: "$6.99",
        description: "Sed non magna sit amet eros posuere tincidunt. Nunc lacinia nisi nec arcu gravida.",
      },
    ],
    wraps: [
      {
        name: "wrap 1",
        price: "$7.99",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu justo mauris.",
      },
      {
        name: "wrap 2",
        price: "$6.99",
        description: "Sed non magna sit amet eros posuere tincidunt. Nunc lacinia nisi nec arcu gravida.",
      },
    ],
    dinners: [
      {
        name: "dinner 1",
        price: "$7.99",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu justo mauris.",
      },
      {
        name: "dinner 2",
        price: "$6.99",
        description: "Sed non magna sit amet eros posuere tincidunt. Nunc lacinia nisi nec arcu gravida.",
      },
    ],
    seafood: [
      {
        name: "seafood 1",
        price: "$7.99",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu justo mauris.",
      },
      {
        name: "seafood 2",
        price: "$6.99",
        description: "Sed non magna sit amet eros posuere tincidunt. Nunc lacinia nisi nec arcu gravida.",
      },
    ],
    sides: [
      {
        name: "side 1",
        price: "$7.99",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu justo mauris.",
      },
      {
        name: "side 2",
        price: "$6.99",
        description: "Sed non magna sit amet eros posuere tincidunt. Nunc lacinia nisi nec arcu gravida.",
      },
    ],
  };

  useEffect(() => {
    const checkScreenWidth = () => {
      const isMobileSize = window.innerWidth < 768;
      setIsMobile(isMobileSize);
      if (!isMobileSize) {
        setActiveTab("appetizers");
      } else {
        setActiveTab(null);
      }
    };

    checkScreenWidth();

    window.addEventListener("resize", checkScreenWidth);

    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(activeTab === tab ? null : tab);
  };

  return (
    <div className={`menu-tabs-container ${isMobile ? "mobile" : "desktop"}`}>
      {isMobile ? (
        <div className="mobile-tabs-wrapper">
          <input type="checkbox" id="toggle-menu" className="sr-only" />
          <label htmlFor="toggle-menu" className="toggle-menu-label">
            <span className="material-icons"></span>
          </label>
          <div className="collapsible-menu">
            {Object.keys(menuData).map((category) => (
              <div key={category}>
                <div
                  className={`tab ${activeTab === category ? "active" : ""}`}
                  onClick={() => handleTabClick(category)}
                >
                  {category}
                </div>
                {activeTab === category && (
                  <div className="menu-content">
                    {menuData[category].map((item, index) => (
                      <div key={index} className="menu-item">
                        <h3 className="item-name">{item.name}</h3>
                        <span className="item-price">{item.price}</span>
                        <p className="item-description">{item.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="desktop-tabs-wrapper">
          {Object.keys(menuData).map((category) => (
            <div
              key={category}
              className={`tab ${activeTab === category ? "active" : ""}`}
              onClick={() => handleTabClick(category)}
            >
              {category}
            </div>
          ))}
        </div>
      )}

      {activeTab && !isMobile && (
        <div className="menu-content">
          {menuData[activeTab].map((item, index) => (
            <div key={index} className="menu-item">
              <h3 className="item-name">{item.name}</h3>
              <span className="item-price">{item.price}</span>
              <p className="item-description">{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
  
  
};

export default MenuTabs;














