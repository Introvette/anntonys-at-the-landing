import React, { useState, useEffect, useRef } from "react";
import "./menuTabs.css";

const MenuTabs = () => {
  const [activeTab, setActiveTab] = useState("appetizers");
  const [isMobile, setIsMobile] = useState(null);
  const [startX, setStartX] = useState(null);
  const [isMenuTouched, setIsMenuTouched] = useState(false);
  const menuRef = useRef(null);

  const menuData = {
    appetizers: [
      {
        name: "Jamaican Patties (1)",
        price: "$3.25",
        description: "A savory hand pie with your filling choice of beef, chicken, or veggies.",
      },
      {
        name: "Chicken Salad Plate",
        price: "$7.50",
        description: "Shredded rotisserie chicken, carrots, and green onions. Served with crackers.",
      },
      {
        name: "Island Wings",
        price: "6 Count - $8.50 | 12 Count - 12.95",
        description: "Island | Mild Jerk | Spicy Jerk | BBQ (All flats or drums +$1)",
      },
      {
        name: "Southern Style Salmon Cake (1)",
        price: "$9.50",
        description: "Southern fried salmon cake made with salmon, sweet peppers, and green onions.",
      },
      {
        name: "Calypso Crab Cake (1)",
        price: "$12.99",
        description: "Southern fried crab cake made with real crab meat, sweet peppers, and green onions.",
      },
      {
        name: "Tropical Shrimp (8)",
        price: "$15.00",
        description: "Fried or grilled shrimp served with our Caribbean Aioli.",
      },
      {
        name: "Succulent Ribs (4)",
        price: "$11.95",
        description: "Island | Mild Jerk | Spicy Jerk | BBQ",
      },
    ],
    salads: [
      {
        name: "House Salad",
        price: "$7.95",
        description: "Mixed baby lettuce, sweet peppers, red onion, and tomato. Your choice of Caribbean Aioli or Balsamic Vinaigrette dressing.",
      },
      {
        name: "Add protein",
        price: "$6.25",
        description: "Boneless chicken breast, Cuban roast pork, chicken salad, or salmon cake.",
      },
      {
        name: "Calypso Crab Cake Salad",
        price: "$20.90",
        description: ""
      },
    ],
    sandwiches: [
      {
        name: "Handhelds",
        price: "$13.95",
        description: "Protein, lettuce, red onion, tomato, and our homemade Caribbean Aioli on toasted hamburger buns",
      },
      {
        name: "Grilled Chicken Sandwich",
        price: " ",
        description: " ",
      },
      {
        name: "Roast Pork Sandwich",
        price: " ",
        description: " ",
      },
      {
        name: "Bahama Burger",
        price: " ",
        description: "Fresh char grilled to perfection beef burger patty with cheese, and a sweet pressed plantain",
      },
      {
        name: "Salmon Cake Sandwich",
        price: " ",
        description: " ",
      },
      {
        name: "Chicken Salad Sandwich",
        price: " ",
        description: " ",
      },
      {
        name: "Fried Fish Sandwich",
        price: " ",
        description: " ",
      },
      {
        name: "Crabcake Sandwich",
        price: "+$7.50",
        description: " ",
      },
      {
        name: "Grilled Chicken Sandwich",
        price: " ",
        description: " ",
      },
    ],
    kids: [
      {
        name: "Kids Meals",
        price: "$8.99",
        description: "Served with one side and a drink",
      },
      {
        name: "Veggie Plate",
        price: "",
        description: "Choice of two sides",
      },
      {
        name: "Wings (4)",
        price: "",
        description: "",
      },
      {
        name: "Ribs (3)",
        price: "",
        description: "",
      },
      {
        name: "Grilled Cheese",
        price: "",
        description: "",
      },
      {
        name: "Chicken Tenders (3)",
        price: "",
        description: "",
      },
      {
        name: "Tropical Shrimp (4)",
        price: "",
        description: "",
      },
    ],
    wraps: [
      {
        name: "Grilled Chicken Wrap",
        price: "13.95",
        description: "Sautéed red onions, sweet peppers and grilled chicken in our Anntony's Island sauce wrapped in a Caribbean style flat bread.",
      },
      {
        name: "Roast Pork Wrap",
        price: "$13.95",
        description: "Sautéed red onions, sweet peppers and grilled chicken in our Anntony's Island sauce wrapped in a Caribbean style flat bread.",
      },
    ],
    'rotisserie and grill': [
      {
        name: "Tony's Caribbean Dinners",
        price: "$16.99",
        description: "Served with two sides of your choice.",
      },
      {
        name: "1/4 White Chicken",
        price: "",
        description: "",
      },
      {
        name: "1/4 Dark Chicken",
        price: "",
        description: "",
      },
      {
        name: "Pork Chop",
        price: "",
        description: "",
      },
      {
        name: "Succulent Ribs",
        price: "",
        description: "",
      },
      {
        name: "Duo Sampler Plate",
        price: "$25.95",
        description: "Choice of two meats",
      },
      {
        name: "Trio Sampler Plate",
        price: "$30.95",
        description: "Choice of three meats",
      },

    ],
    seafood: [
      {
        name: "Seafood Platters",
        price: "$20.95",
        description: "Served with two sides of your choice.",
      },
      {
        name: "Apollo's Flounder Basket",
        price: "",
        description: "Breaded and deep fried flounder fillets.",
      },
      {
        name: "Aunty Pam's Fish Dinner",
        price: "",
        description: "Breaded and deep fried white fish fillets.",
      },
      {
        name: "Southern Style Salmon Cakes",
        price: "",
        description: "Southern fried salmon cakes made with salmon, sweet peppers, and green onions.",
      },
      {
        name: "Calypso Crab Cakes",
        price: "$26.45",
        description: "Southern fried crab cakes made with real crab meat, sweet peppers, and green onions.",
      },
      {
        name: "Salmon Stuffed Flounder",
        price: "",
        description: "Broiled flounder fillets stuffed with shredded salmon, and served with our homemade Caribbean Aoli.",
      },
      {
        name: "Antigua Stuffed Flounder",
        price: "$26.45",
        description: "Broiled flounder fillets stuffed with real crab meat, and served with our homemade Caribbean Aoli.",
      },
    ],
    sides: [
      {
        name: "Individual Sides",
        price: "$4.25",
        description: "",
      },
      {
        name: "Veggie Plate",
        price: "$11.95",
        description: "Choice of three side items.",
      },
      {
        name: "Callaloo Greens",
        price: "",
        description: "",
      },
      {
        name: "Calypso Rice",
        price: "",
        description: "",
      },
      {
        name: "Potato Salad",
        price: "",
        description: "",
      },
      {
        name: "Black Beans",
        price: "",
        description: "",
      },
      {
        name: "Cabbage",
        price: "",
        description: "",
      },
      {
        name: "Rasta Pasta",
        price: "",
        description: "",
      },
      {
        name: "Cole Slaw",
        price: "",
        description: "",
      },
      {
        name: "Plantains",
        price: "",
        description: "",
      },
      {
        name: "Seasoned Fries",
        price: "",
        description: "",
      },
      {
        name: "Mac and Cheese",
        price: "",
        description: "",
      },
      {
        name: "Rice and Peas",
        price: "",
        description: "",
      },
      {
        name: "Veggie of the Day",
        price: "",
        description: "",
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
    if (menuRef.current) {
      const tabContent = menuRef.current.querySelector(`.${tab}`);
      if (tabContent) {
        tabContent.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleMenuTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleMenuTouchMove = (e) => {
    const movedX = Math.abs(e.touches[0].clientX - startX);
    if (movedX > 10) { // Adjust the threshold as needed
      setIsMenuTouched(true);
    }
  };

  const handleMenuTouchEnd = () => {
    setIsMenuTouched(false);
    setStartX(null);
  };

  const handleTabClickWithTouch = (tab) => {
    if (!isMenuTouched) {
      setActiveTab(activeTab === tab ? null : tab);
      if (menuRef.current) {
        const tabContent = menuRef.current.querySelector(`.${tab}`);
        if (tabContent) {
          tabContent.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <div className={`menu-tabs-container ${isMobile ? "mobile" : "desktop"}`}>
      {isMobile ? (
        <div
          className="mobile-tabs-wrapper"
          onTouchStart={handleMenuTouchStart}
          onTouchMove={handleMenuTouchMove}
          onTouchEnd={handleMenuTouchEnd}
        >
          <input type="checkbox" id="toggle-menu" className="sr-only" />
          <label htmlFor="toggle-menu" className="toggle-menu-label">
            <span className="material-icons"></span>
          </label>
          <div className="collapsible-menu">
            {Object.keys(menuData).map((category) => (
              <div key={category}>
                <div
                  className={`tab ${activeTab === category ? "active" : ""}`}
                  onClick={() => handleTabClickWithTouch(category)}
                >
                  {category}
                </div>
                {activeTab === category && (
                  <div className="menu-content" ref={menuRef}>
                    {menuData[category].map((item, index) => (
                      <div key={index} className={`menu-item ${category}`}>
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
            <div key={index} className={`menu-item ${activeTab}`}>
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