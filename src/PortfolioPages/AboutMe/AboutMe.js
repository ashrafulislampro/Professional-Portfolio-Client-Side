import React from "react";
import photo from "../../images/ashraful11.jpg";
import "./AboutMe.css";
import Typical from "react-typical";

const AboutMe = () => {
  return (
    <div id="about" className="about_section">
      <div>
        <div className="about_text text-center">
          <h2 className="heading_text">About Me.</h2>
          <p className="text-secondary">Why Choose Me?</p>
          <div className="heading_separator">
            <div className="separator_line"></div>
            <div className="separator_blob">
              <div></div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-5">
              <img className="img" src={photo} alt="No internet connection" />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-7">
              <div className="description_role">
                <h1>
                  <Typical
                    loop={Infinity}
                    steps={[
                      "Full Stack Developer",
                      2000,
                      "MERN Stack Developer",
                      2000,
                      "Rect Native Developer",
                      2000,
                      "Part-Time Freelancer",
                      2000,
                    ]}
                  />
                </h1>
                <div className="text">
                  <p>
                    I am a highly self-motivated web developer with background
                    knowledge of MERN Stack with Redux , React Hook with a knack
                    of building applications with utmost efficiency.And also
                    learn latest topics keeping myself up-to-date with latest
                    technology.
                  </p>
                </div>
                <div className="highlighted_text py-4 mt-2">
                  <h4 style={{ color: "#3cca3c", fontWeight: "bold" }}>
                    Here are few highlights
                  </h4>
                  <ul>
                    <li>MERN Stack web developer</li>
                    <li>Interactive Front End as per the design</li>
                    <li>React and React Native</li>
                    <li>Redux or React Hook for state management</li>
                    <li>Building REST API</li>
                    <li>Managing database</li>
                  </ul>
                </div>
                <div className="">
                  <a href="#contact">
                    <button className="btn hire_btn">Hire Me</button>
                  </a>
                  <a
                    href="Ashraful-Islam-Resume.pdf"
                    download="Ashraful-Islam-Resume.pdf"
                  >
                    <button className="btn resume_btn">Get Resume</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
