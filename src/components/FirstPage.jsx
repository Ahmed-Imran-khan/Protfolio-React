import React from "react";
import "../App.css";
import Navbar from "./Navbar";

function FirstPage() {

  return (
    <div className="landing-bg" style={{ minHeight: "100vh" }}>
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
                I am a Backend-focused{" "}
                <b className="text-warning">Full Stack Developer </b>
                specializing in building scalable and secure web applications
                using
                <b className="text-danger"> Node.js and NestJS </b>, with strong
                frontend expertise in
                <b className="text-danger"> React.js and Next.js.</b> I have
                hands-on experience designing RESTful APIs, implementing
                authentication systems, managing
                <b className="text-success"> MySQL </b> databases, and
                integrating frontend and backend applications seamlessly. I
                focus on writing clean, maintainable, and efficient code while
                ensuring performance optimization and smooth user experiences
                across devices. Having worked on CMS-based business websites,
                portfolio platforms, and role-based web applications, I am
                confident in handling complete project lifecycles independently
                — from architecture design to deployment. I am passionate about
                continuous learning and committed to delivering high-quality
                solutions that solve real-world problems.
              </h5>
            </div>
          </div>
          {/* image in front of grid */}
          {/* <div className="col-4 d-md-block d-none">
            <img
              src="./images/ahmedimg.png"
              alt="ahmed"
              className="img-animation"
              style={{ width: "50%" }}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
