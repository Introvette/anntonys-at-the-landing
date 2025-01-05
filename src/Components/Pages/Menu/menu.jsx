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
            <a
              rel="noreferrer"
              target="_blank"
              href="https://order.toasttab.com/online/anntonys-at-the-landing-4491-slanting-bridge-road?diningOption=takeout&rwg_token=AJKvS9UmVF2kYkaCYheQiubUgNyWbXsWJbzSMtQyFgml3EBXVX3ey27ntGhR1GIOhyaUuzw1X4FNIwxHa6vUPdRYIY8_3k5Ydg%3D%3D"
            >
              Order Online
            </a>
          </button>
               <button className="order-online">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://drive.google.com/file/d/1UI6EPuDNzdbt-4UbovcLku0ZgERw2Ydw/view?usp=sharing"
            >
              Download Menu
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
