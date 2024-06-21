import React from "react";
import NavBar from "../../navBar/navBar";
import pdfFile from "./catering.pdf";
import "./catering.css"; 

const CateringPage = () => {

  const handleDownload = () => {
    window.open(pdfFile, "_blank");
  };

  return (
    <div>
      <NavBar />
      <div className="page-content">
        <div>
          <h1>Download Our Catering Menu</h1>
          <button className="catering-btn" onClick={handleDownload}>Download PDF</button>
        </div>
      </div>
    </div>
  );
};

export default CateringPage;

