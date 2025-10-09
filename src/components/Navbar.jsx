import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const handleDownloadClick = () => {
    const pdfUrl = "./images/resumeJ.pdf";
    const downloadLink = document.createElement("a");
    downloadLink.href = pdfUrl;
    downloadLink.download = "AHMED IMRAN"; // Rename the downloaded file if needed
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
    <div className="Navbar d-flex justify-content-center w-100">
      <Link
        className="nav-link m-4 HOME fs-6"
        style={{ color: "#a3a1a1" }}
        to="/"
      >
        <b>HOME</b>
      </Link>
      <Link
        className="nav-link m-4 CV fs-6"
        style={{ color: "#a3a1a1" }}
        to="/CV"
      >
        <b>CV</b>
      </Link>
      <Link className="nav-link m-4 SERVICE fs-6 text-danger" to="/service">
        <b>Service</b>
      </Link>
      <Link
        className="nav-link m-4 CONTACT fs-6"
        style={{ color: "#a3a1a1" }}
        to="/Projects"
      >
        <b>Projects</b>
      </Link>
      <Link
        className="nav-link m-4 CONTACT fs-6"
        style={{ color: "#a3a1a1" }}
        to="/contact"
      >
        <b>Contact</b>
      </Link>
      <button className="BUTTONCV m-4" onClick={handleDownloadClick}>
        DOWNLOAD CV
      </button>
      <div
        style={{
          position: "absolute",
          right: "5%",
          top: "-6px",
          fontSize: "30px",
        }}
        className="ARROW text-danger"
      >
        <img src="./images/down-arrow.png" style={{ width: "20px" }} />
      </div>
    </div>
  );
}

export default Navbar;
