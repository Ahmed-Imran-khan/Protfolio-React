import React from "react";
import Navbar from "./Navbar";
import "../App.css";

function Contact() {
  return (
    <div className="BODY">
      <Navbar />
      <div
        className="d-flex justify-content-center"
        style={{ padding: "5% 10%", width: "100%" }}
      >
        <div className="row text-center" style={{ padding: "15% 0%" }}>
          <a
            href="https://www.facebook.com/ahmedkhaan21/"
            className="col-sm-2 my-3"
          >
            <i
              className="fa-brands fa-facebook text-primary"
              style={{ fontSize: "100px" }}
            ></i>
          </a>
          <a href="" className="col-sm-2 my-3">
            <i
              className="fa-brands fa-whatsapp"
              style={{ fontSize: "100px", color: "green" }}
            ></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ahmed-imran-aaab03258"
            className="col-sm-2 my-3"
          >
            <i
              className="fa-brands fa-linkedin"
              style={{ fontSize: "100px" }}
            ></i>
          </a>
          <a href="" className="col-sm-2 my-3">
            <i
              className="fa-brands fa-google"
              style={{ fontSize: "100px", color: "red" }}
            ></i>
          </a>
          <a
            href="https://www.instagram.com/ahmad.imran.khan/"
            className="col-sm-2 my-3"
          >
            <i
              className="fa-brands fa-instagram"
              style={{ fontSize: "100px", color: "#ff2c52" }}
            ></i>
          </a>
          <a href="" className="col-sm-2 my-3">
            <i
              className="fa-brands fa-x-twitter"
              style={{ fontSize: "100px", color: "white" }}
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
