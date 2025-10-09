import React from "react";
import "../App.css";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import Loader from "./Loader";

function FirstPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="BODY" style={{ minHeight: "100vh" }}>
      <Navbar />
      {/* heading and myimage */}
      <div className="container" style={{ padding: "6.5% 0%" }}>
        {/* heading in grid */}
        <div className="row w-100">
          <div className="col-12 col-md-8 GRID" style={{ marginTop: "5%" }}>
            <div className="typing-text">
              <span className="textPara">HI,</span>
              <h1 className="textPara">
                I AM AHMED IMRAN,
                <span className="text-danger"> WEBSITE DEVELOPER </span> <br />
              </h1>
              <h5 className="textPara my-5">
                Passionate Web Developer with hands-on experience in modern
                frontend development using
                <b className="text-danger"> React.js javascript</b> and advanced{" "}
                <b className="text-danger"> Next.js </b>features. Proficient in
                full-stack implementation with
                <b className="text-success"> Node.js,</b> Express.js and
                <b className="text-warning"> MySQL </b>
                having applied these skills to build and deploy multiple
                projects. Seeking to leverage comprehensive skills in responsive
                design and application architecture to deliver high-quality web
                solutions.
              </h5>
            </div>
          </div>
          {/* image in front of grid */}
          <div className="col-4 d-md-block d-none">
            <img
              src="./images/ahmedimg.png"
              alt="ahmed"
              className="img-animation"
              style={{ width: "50%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
