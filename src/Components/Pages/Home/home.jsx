import React, { useState, useEffect, useRef } from "react";
import NavBar from "../../navBar/navBar";

import boat from "./boat.png";
import anntonys from "./anntonyslanding.png";
import ben from "./ben.png";
import john from "./john.jpg";
import pamela from "./pamela.jpg";
import "./home.css";
// import ContactForm from "../../contactForm/contactForm";
import Footer from "../../Footer/footer";

const HomePage = () => {
  const [imageLeft, setImageLeft] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const aboutRef = useRef(null);
  const anntonysRef = useRef(null);
  const [cards] = useState([
    {
      id: 1,
      image: pamela,
      title: "",
      artist: "Pamela DeMarche & Neal Davenport",
      datetime: "Saturday, September 7th, 2024 6PM-9PM",
    },
    {
      id: 2,
      image: ben,
      title: "",
      artist: "Ben Gatlin",
      datetime: "Friday, September 13th, 2024 5PM-8PM",
    },
    {
      id: 3,
      image: john,
      title: "",
      artist: "John G. Franklin",
      datetime: "Friday, September 20th, 2024 6PM-9PM",
    },
  ]);

  useEffect(() => {
    const calculateNewLeftPosition = (
      scrollY,
      windowWidth,
      aboutTop,
      aboutBottom,
      boatWidth,
      anntonysWidth
    ) => {
      const middleScreen = windowWidth / 2;

      const anntonysPosition =
        anntonysRef.current.getBoundingClientRect().left + anntonysWidth / 2;

      const stopPosition = anntonysPosition - boatWidth / 2;

      if (scrollY < aboutTop) {
        return windowWidth;
      } else if (scrollY >= aboutTop && scrollY <= aboutBottom) {
        const progress = (scrollY - aboutTop) / (aboutBottom - aboutTop);
        const newPosition =
          middleScreen -
          boatWidth / 2 -
          progress * (middleScreen - stopPosition);

        const maxLeftPosition = middleScreen - boatWidth / 2;
        return Math.min(newPosition, maxLeftPosition);
      } else {
        return stopPosition;
      }
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowWidth = window.innerWidth;
      const aboutTop = aboutRef.current.offsetTop - window.innerHeight / 3;
      const aboutBottom = aboutTop + aboutRef.current.clientHeight;
      const boatWidth = isMobile ? 250 : 450;
      const anntonysWidth = anntonysRef.current.clientWidth;

      const newLeftPosition = calculateNewLeftPosition(
        currentScrollY,
        windowWidth,
        aboutTop,
        aboutBottom,
        boatWidth,
        anntonysWidth
      );

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
      <div className="nav-bar-home">
        <NavBar />
      </div>
      <div className="page-content">
        <div className="about-container" ref={aboutRef}>
          <h1>Welcome to</h1>
          <img
            ref={anntonysRef}
            src={anntonys}
            alt="restaurant name only logo"
          />
          <div className="image-container">
            <img
              src={boat}
              alt="boat"
              className="animated-image"
              style={{ left: `${imageLeft}px` }}
            />
          </div>
          <div className="about-text">
            <p>
              Welcome to Anntony's at the Landing, where Caribbean zest meets
              Southern charm on the shores of Lake Norman. Enjoy our healthy
              rotisserie options enhanced with Anntony's signature Island Sauce,
              and soak in the great vibes with weekend music. Whether arriving
              by car or boat, you'll relish our unique flavors and welcoming
              atmosphere.
            </p>
          </div>
          <div className="entertainment-sched">
            <h1>Live Music Schedule</h1>
            <div className="dynamic-cards">
              {cards.map((card) => (
                <div className="card" key={card.id}>
                  <img className="card-image" src={card.image} alt="Artist" />
                  <div className="artist-info">
                    <h3>{card.title}</h3>
                    <h2>{card.artist}</h2>
                    <p>{card.datetime}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="side-by-side-containers">
          <div className="contact-container-home">{/* <ContactForm /> */}</div>
          <div className="sauce-container"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
