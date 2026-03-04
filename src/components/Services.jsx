import React from "react";
import Navbar from "./Navbar";
import "../App.css";

function Services() {
  return (
    <div className="BODY">
      <Navbar />
      <div className="BODY position-absolute" style={{ zIndex: "-1" }}>
        <div className="d-flex flex-wrap justify-content-around">
          <div className="card m-5 cardHt" style={{ width: "12rem" }}>
            <i
              className="fa-brands fa-html5 text-center card-icon"
              style={{ fontSize: "200px", color: "#ff5b00" }}
            ></i>
            <div className="card-body">
              <p className="card-text">
                <b className="text-danger">HTML</b> is the standard markup
                language used for creating the structure and content of web
                pages.
              </p>
            </div>
          </div>
          <div className="card m-5  cardJ" style={{ width: "12rem" }}>
            <i
              className="fa-brands fa-js text-center card-icon"
              style={{ fontSize: "200px", color: "yellow" }}
            ></i>
            <div className="card-body">
              <p className="card-text">
                <b className="text-danger">JavaScript</b> is a versatile
                programming language used to add interactivity and dynamic
                behavior to websites.
              </p>
            </div>
          </div>
          <div className="card m-5  cardC" style={{ width: "12rem" }}>
            <i
              className="fa-brands fa-css3-alt text-center card-icon"
              style={{ fontSize: "200px", color: "#347efa" }}
            ></i>
            <div className="card-body">
              <p className="card-text">
                <b className="text-danger">CSS</b> is a stylesheet language that
                controls the presentation and layout of web pages, allowing you
                to style HTML elements.
              </p>
            </div>
          </div>
          <div className="card m-5  cardR" style={{ width: "12rem" }}>
            <i
              className="fa-brands fa-react text-center card-icon"
              style={{ fontSize: "180px", color: "lightblue" }}
            ></i>
            <div className="card-body">
              <p className="card-text">
                <b className="text-danger">React</b> is a JavaScript library for
                building user interfaces, focusing on creating reusable UI
                components and efficiently updating the user interface when data
                changes.
              </p>
            </div>
          </div>
          <div className="card m-5  cardNext" style={{ width: "12rem" }}>
            <img
              src="./images/nextjs.png"
              className="card-img-top"
              style={{ backgroundColor: "#87c4e7" }}
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                <b className="text-danger">Next.js </b>is an open-source web
                development framework built on top of React, a JavaScript
                library for building user interfaces extending structured and
                optimized environment for creating fast, full-stack web
                applications.
              </p>
            </div>
          </div>
          <div
            className="card m-5  cardS"
            style={{ width: "12rem", overflow: "hidden" }}
          >
            <i
              className="fa-brands fa-sass text-center card-icon"
              style={{ fontSize: "200px", color: "pink" }}
            ></i>
            <div className="card-body">
              <p className="card-text">
                <b className="text-danger">SASS</b> is a CSS preprocessor that
                extends CSS with features like variables, nesting, and functions
                to streamline and enhance stylesheet development.
              </p>
            </div>
          </div>
          <div
            className="card m-5  cardS"
            style={{ width: "12rem", overflow: "hidden" }}
          >
            <img
              src="./images/tailwind.png"
              className="card-img-top"
              style={{ backgroundColor: "rgba(0, 5, 12, 0.918)" }}
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                <b className="text-danger">Tailwind</b> is a utility-first CSS
                framework that allows developers to rapidly build modern
                websites and user interfaces by applying pre-defined utility
                classes directly within HTML.
              </p>
            </div>
          </div>
          <div className="card m-5  cardB" style={{ width: "12rem" }}>
            <i
              className="fa-brands fa-bootstrap text-center card-icon"
              style={{ fontSize: "170px", color: "purple" }}
            ></i>
            <div className="card-body">
              <p className="card-text">
                <b className="text-danger">Bootstrap</b> is a front-end
                framework that provides pre-designed UI components and
                responsive layout tools to simplify web development.
              </p>
            </div>
          </div>
          <div className="card m-5  cardG" style={{ width: "12rem" }}>
            <i
              className="fa-brands fa-github text-center card-icon"
              style={{ fontSize: "180px", color: "black" }}
            ></i>
            <div className="card-body">
              <p className="card-text">
                <b className="text-danger">GitHub</b> is a web-based platform it
                provides features like code repository hosting, issue tracking,
                pull requests, and collaboration tools, making it a central hub
                for developers to work together on code.
              </p>
            </div>
          </div>
          <div className="card m-5  cardA" style={{ width: "12rem" }}>
            <img src="./images/api.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                An <b className="text-danger">API</b> is a set of rules and
                protocols that allow different software applications to
                communicate and interact with each other.
              </p>
            </div>
          </div>
          <div className="card m-5  cardH" style={{ width: "12rem" }}>
            <i
              className="fa-solid fa-window-maximize text-center card-icon"
              style={{ fontSize: "180px", color: "#19b2ff" }}
            ></i>
            <div className="card-body">
              <p className="card-text">
                <b className="text-danger">Firebase </b> a language feature, can
                affect the order of variable and function access within Firebase
                functions or applications, as it does in any JavaScript
                environment. Understanding hoisting is crucial for writing
                dependable Firebase code.
              </p>
            </div>
          </div>
          <div className="card m-5  cardD" style={{ width: "12rem" }}>
            <i
              className="fa-solid fa-database text-center text-success card-icon"
              style={{ fontSize: "180px" }}
            ></i>
            <div className="card-body">
              <p className="card-text">
                <b className="text-danger">MySQL </b>, essential for database
                management in applications and server environments, involve a
                fundamental understanding of how components are accessed and
                executed within the database.
              </p>
            </div>
          </div>
          <div
            className="card m-5  cardN"
            style={{ width: "12rem", overflow: "hidden" }}
          >
            <i
              className="fa-brands fa-node text-center card-icon"
              style={{ fontSize: "180px", color: "lightgreen" }}
            ></i>
            <div className="card-body">
              <p className="card-text">
                <b className="text-danger">NODE </b>These services are known for
                their high performance and scalability, leveraging non-blocking
                I/O and an event-driven architecture to handle numerous
                concurrent connections efficiently
              </p>
            </div>
          </div>
          <div className="card m-5 cardNest" style={{ width: "12rem" }}>
            <img src="./images/nestjs.png" className="bg" alt="..." />
            <div className="card-body">
              <p className="card-text">
                <b className="text-danger">NestJS</b> is progressive, server-side Node.js web framework for building efficient, scalable, and enterprise-grade applications using modern JavaScript and TypeScript. It provides an out-of-the-box application architecture inspired by Angular.
              </p>
            </div>
          </div>
          <div
            className="card m-5  cardJQ"
            style={{ width: "12rem", overflow: "hidden" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="180"
              height="180"
              viewBox="0 0 128 128"
            >
              <path
                fill="#0868AC"
                d="M9.625 32.181C-1.404 48.032-.031 68.657 8.394 85.501c.2.404.41.801.617 1.198l.394.759l.246.437l.439.786c.262.461.53.92.804 1.379l.459.756c.304.491.615.976.933 1.46l.398.614c.439.655.888 1.309 1.352 1.951l.039.05l.228.308c.401.553.814 1.099 1.232 1.639l.464.59c.373.469.752.935 1.138 1.399l.435.52a75.27 75.27 0 0 0 1.586 1.812l.033.033l.061.068a80.44 80.44 0 0 0 1.612 1.699l.517.521c.423.426.853.845 1.287 1.262l.527.5c.58.547 1.166 1.083 1.764 1.607l.028.022l.307.262c.527.456 1.063.909 1.603 1.353l.664.529c.441.354.887.702 1.336 1.044l.714.543c.496.365.995.724 1.499 1.075l.546.387l.15.107c.478.329.967.646 1.456.963l.63.42c.75.474 1.51.943 2.279 1.396l.63.355c.565.326 1.134.646 1.71.959c.312.168.632.327.946.488c.407.213.811.429 1.225.636l.283.137l.501.242c.641.306 1.287.607 1.94.897l.41.184a66.92 66.92 0 0 0 2.263.941l.551.217c.704.271 1.418.539 2.135.791l.268.093c.787.275 1.581.53 2.381.779l.575.172c.814.245 1.619.538 2.458.693c53.339 9.727 68.833-32.053 68.833-32.053c-13.013 16.953-36.111 21.425-57.996 16.446c-.829-.187-1.633-.446-2.442-.685l-.609-.185a72.498 72.498 0 0 1-2.352-.765l-.323-.117a72.245 72.245 0 0 1-2.074-.769l-.582-.229c-.752-.297-1.5-.607-2.239-.931l-.447-.198a92.857 92.857 0 0 1-1.889-.879l-.546-.262c-.491-.239-.977-.493-1.461-.743c-.324-.171-.654-.332-.975-.51a58.591 58.591 0 0 1-1.751-.982l-.591-.33a81.221 81.221 0 0 1-2.28-1.397l-.615-.41a59.283 59.283 0 0 1-1.623-1.079l-.522-.367a89.287 89.287 0 0 1-1.534-1.109l-.679-.514a64.473 64.473 0 0 1-1.384-1.082l-.617-.495a82.693 82.693 0 0 1-1.724-1.453l-.189-.159a83.466 83.466 0 0 1-1.812-1.647l-.511-.491c-.441-.42-.875-.843-1.302-1.277l-.51-.509a70.541 70.541 0 0 1-1.598-1.69l-.079-.084a67.39 67.39 0 0 1-1.621-1.844l-.424-.504a70.602 70.602 0 0 1-1.167-1.442l-.427-.532a78.406 78.406 0 0 1-1.347-1.794c-12.15-16.574-16.516-39.432-6.805-58.204m25.629-2.434c-7.977 11.478-7.543 26.844-1.321 38.983a50.581 50.581 0 0 0 3.528 5.889c1.195 1.713 2.52 3.751 4.106 5.127a48.111 48.111 0 0 0 1.79 1.858l.472.465a51.69 51.69 0 0 0 1.828 1.698l.074.064l.018.018a55.268 55.268 0 0 0 2.135 1.767l.485.378a54.08 54.08 0 0 0 2.233 1.631l.065.049c.336.232.678.448 1.019.672l.483.319c.544.349 1.095.689 1.655 1.015l.235.136c.483.278.972.552 1.463.818l.521.271c.339.177.678.358 1.023.53l.155.07c.703.346 1.412.68 2.136.995l.472.194c.579.246 1.164.486 1.75.71l.75.275c.533.198 1.068.378 1.607.559l.727.233c.767.238 1.525.539 2.324.672c41.183 6.823 50.691-24.886 50.691-24.886c-8.57 12.343-25.168 18.233-42.879 13.635a50.376 50.376 0 0 1-2.333-.674l-.701-.227a45.423 45.423 0 0 1-1.631-.562l-.736-.274a56.418 56.418 0 0 1-1.756-.708l-.473-.2a47.728 47.728 0 0 1-2.148-.999c-.363-.177-.72-.364-1.078-.548l-.622-.32a44.502 44.502 0 0 1-1.363-.77l-.326-.185a47.844 47.844 0 0 1-1.651-1.008l-.498-.332a61.759 61.759 0 0 1-1.069-.707a57.456 57.456 0 0 1-2.226-1.628l-.501-.395c-7.752-6.12-13.898-14.486-16.819-23.971c-3.062-9.836-2.402-20.878 2.903-29.84m22.278-.775c-4.702 6.92-5.164 15.514-1.901 23.156c3.441 8.113 10.491 14.476 18.72 17.495c.339.125.679.237 1.022.354l.451.143c.485.152.966.329 1.467.424c22.74 4.394 28.908-11.669 30.549-14.034c-5.402 7.779-14.482 9.646-25.623 6.942c-.88-.213-1.847-.531-2.695-.832a33.242 33.242 0 0 1-3.201-1.329a33.215 33.215 0 0 1-5.612-3.424c-9.969-7.565-16.162-21.994-9.657-33.745"
              />
            </svg>
            <div className="card-body">
              <p className="card-text">
                <b className="text-danger">Jqurey </b>involve the use of jQuery,
                a fast and lightweight JavaScript library, to simplify tasks
                such as HTML document traversal, event handling, and animation
                on the client side.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
