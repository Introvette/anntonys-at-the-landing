import React from "react";
import NavBar from "../../navBar/navBar";
import pdfFile from "./catering.pdf";
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CateringPage;
