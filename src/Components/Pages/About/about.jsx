import React from "react";
import NavBar from "../../navBar/navBar";
import Footer from "../../Footer/footer";
// import construction from "./under-construction.png";
import "./about.css";

const AboutPage = () => {
  return (
    <div>
      <NavBar />
      <div className="centered-content">
        <section id="about">
          <h1>About Us</h1>
          <br />

          <p>
            Welcome to Anntony's at the Landing, where a legacy of flavor and
            tradition continues to thrive. Since 1984, Anntony's has been a
            cornerstone of Charlotte, NC, renowned as the city's first
            rotisserie chicken restaurant. It was here that our famous All
            Purpose Island Sauce was first created, a recipe that has since
            garnered recognition across North Carolina and beyond.
          </p>
          <br />
          <p>
            Today, we proudly carry on this rich tradition from our new location
            in Sherrills Ford, NC. Since opening on April 10th, 2024, Anntony's
            at the Landing has embraced a refreshed menu and modernized
            operations, while staying true to the quality and flavors that have
            made us a beloved name. Our commitment to excellence means we
            continue to use the same cherished Anntony's products that our loyal
            customers have come to know and love.
          </p>
          <br />
          <p>
            Join us at Anntony's at the Landing for an unforgettable dining
            experience where history, quality, and exceptional taste come
            together.
          </p>
        </section>
        <br />
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
