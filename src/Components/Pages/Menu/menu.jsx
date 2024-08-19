import React from "react";
import NavBar from "../../navBar/navBar";
import MenuTabs from "../../MenuTabs/menuTabs";
import Footer from "../../Footer/footer";
import "./menu.css";

const MenuPage = () => {
  return (
    <div>
      <div className="nav-bar">
        <NavBar />
      </div>

      <div className="menu">
        <div className="online-order-link">
          <button className="order-online">
            {" "}
            <a
              target="_blank"
              href="https://food.google.com/chooseprovider?restaurantId=/g/11y3l19byq&g2lbs=AOHF13mTK3JA_xXQeywPnD7FDtdh4Ak4e0zReLaIdexuWlN0ptNxzh_8tZFgbM6FqT4BohsAnF7MRmZQIugt1GiXGgozmqZprmIRGXp9m2QdkJYWEef6-JlT6nxxMiSNwps-34ziGXR_&hl=en-US&gl=us&cs=1&ssta=1&fo_m=MfohQo559jFvMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=bLe2Zp60MPGewN4PrIqJ0A0&ei=bLe2Zp60MPGewN4PrIqJ0A0&fo_s=OA&opi=89978449&foub=mcpp&sa=X&ved=2ahUKEwiemt_CmOmHAxVxD9AFHSxFAtoQjYwDKAB6BAg7EAI&sei=CWdS7KUJ5l2SEURP4rblqCx3&utm_campaign&utm_source=search"
            >
              Order Online
            </a>
          </button>
        </div>
        <MenuTabs />
      </div>
      <Footer />
    </div>
  );
};

export default MenuPage;
