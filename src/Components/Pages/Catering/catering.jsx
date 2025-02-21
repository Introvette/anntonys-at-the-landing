import React from "react";
import NavBar from "../../navBar/navBar";
import pdfFile from "./Anntonys-Catering.pdf";
import Footer from "../../Footer/footer";
import "./catering.css";

const CateringPage = () => {
  const handleDownload = () => {
    window.open(pdfFile, "_blank");
  };

  return (
    <div className="main-container">
      <NavBar />
      <div className="page-content">
        <div>
          <h1>Download Our Catering Menu</h1>
          <button className="catering-btn" onClick={handleDownload}>
            Download PDF
          </button>
          <br></br>
          <a href="https://www.ezcater.com/catering/pvt/anntonys-at-the-landing-3"><h1>Order Catering Online Through EzCater</h1></a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CateringPage;
