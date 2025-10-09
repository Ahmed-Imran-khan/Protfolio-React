import React from "react";
import Navbar from "./Navbar";
import "../App.css";

function CV() {
  return (
    <div className="BODY">
      <Navbar />
      <div
        className="d-flex justify-content-center"
        style={{ padding: "5% 10%", width: "100%" }}
      >
        <table style={{ width: "100%" }} className="table">
          <tr className="border  ">
            <th className="border  p-3 text-light text-center">Name</th>
            <th className="border  p-3 text-light text-center">
              Qualification
            </th>
            <th className="border  p-3 text-light text-center">Languages</th>
            <th className="border  p-3 text-light text-center">Expertise</th>
          </tr>
          <tr>
            <td className="border  p-3 text-center">
              <b>Ahmed Imran Khan </b>
              <br />
              (Website Developer)
            </td>
            <td className="border  p-3">
              <b>MATRIC</b> - Ch.Rehmat boys high school - 86% Marks
              <br />
              <b>INTERMEDIATE</b> - Punjab Group Of Colleges (ICS) - 81% Marks{" "}
              <br />
              <b>GRADUATION</b>- Lahore Leads University (BSCS) - 3.62 CGPA
            </td>
            <td className="border  p-3">
              HTML / CSS
              <br />
              JAVASCRIPT <br />
              BOOTSTRAP / TAILWIND <br />
              JQUREY <br />
              REACT.JS / REDUX <br />
              NEXT.JS <br />
              Node.js / Express <br />
              SQL
            </td>
            <td className="border  p-3">
              <b>1-</b>Static & Dynamic WebPages <br />
              <b>2-</b>PSD into Responsive Webpages <br />
              <b>3-</b>Webpages with React.js & Redux
              <br />
              <b>4-</b>Coding with Html, Css, Js, Bootstrap, <br />
              Jqurey, Sass <br />
              <b>5-</b>API integration <br />
              <b>6-</b>Version Control with GITHUB <br />
              <b>7-</b>Firebase Hoisting
            </td>
          </tr>
          <tr className="border">
            <th className="border  p-3 text-light text-center" colSpan={4}>
              Experience
            </th>
          </tr>
          <tr>
            <td className="border  p-4" colSpan={4}>
              <b className="text-light">
                OCTALOGISTICS SOFTWARE CO. (2023 - 2024)
              </b>
              <br />I had the opportunity to work at OctaLogistics, a dynamic
              and innovative software house, where I dedicated one year to
              honing my skills and contributing to various projects. -I possess
              a strong command of front-end web development technologies,
              including HTML, CSS, JavaScript, and various frameworks and
              libraries. This enables me to create responsive and interactive
              websites that enhance user experience.
            </td>
          </tr>
          <tr>
            <td className="border  p-4" colSpan={4}>
              <b className="text-light">
                CYBER ZEUS FRONTEND WEB DEVELOPER( March 2024 - Feb 2025)
              </b>
              <br />
              Responsibilities: Implementing responsive design tech to optimize
              user experience across various devices and screen sizes .
              Collaborated with UL/UX designers to translate wireframes &
              mockups into intractive web interface. Integrated Charts & Graphs
              to display data. Participated in agile development processess,
              including planning, daily stand-ups, and retrospectives.
            </td>
          </tr>
          <tr className="border  ">
            <th className="border  p-3 text-light text-center" colSpan={2}>
              Computer Skills
            </th>
            <th className="border  p-3 text-light text-center" colSpan={2}>
              Projects
            </th>
          </tr>
          <tr>
            <td className="border  p-4 text-center" colSpan={2}>
              <b>1-</b>ADOBE ILLUSTRATOR <br />
              <b>2-</b>MS OFFICE <br />
              <b>3-</b>LOGO DESIGNING <br />
              <b>4-</b>Video Editing
            </td>
            <td className="border  p-4 text-center" colSpan={2}>
              Developed numerous projects focused on frontend technologies
              (HTML, CSS, JS, React.js), converting PSD designs into functional
              web pages.
              <br />
              &#128279; https://islamic-web-react-2b32f.web.app/ <br />
              &#128279; https://khan-medical-store-4b988.web.app/
            </td>
          </tr>
          <tr className="border">
            <th className="border  p-3 text-light text-center" colSpan={4}>
              Certification
            </th>
          </tr>
          <tr>
            <td className="border  p-4" colSpan={4}>
              <b className="text-light">Agile Product Development (Aug 2025)</b>
              <br />I successfully completed the Agile Product Development
              certification at Takhleeq Incubator, deeply understanding how to
              transform ideas into market-ready products with speed and
              precision. The program emphasized maximizing ROI by prioritizing
              high-value features and fostering cross-functional collaboration.
              My skills are now honed to accelerate innovation and ensure
              products meet dynamic user needs.
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default CV;
