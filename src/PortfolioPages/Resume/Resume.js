import React, { useState } from "react";
import "./Resume.css";
import program from "../../images/flowchart.png";
import interest from "../../images/interest-rate.png";
import education from "../../images/mortarboard.png";
import work from "../../images/work-history.png";
import Interest from "./Interest";
import Skill from "./Skill";
import WorkHistory from "./WorkHistory";
import Education from "./Education";
const Resume = () => {
  const [tab, setTab] = useState("skill");
  return (
    <section id="resume" className="resume_section">
      <div className="resume_container">
        <div className="resume_header text-center">
          <h2 className="heading_text">Resume</h2>
          <p className="text-secondary">My Formal Bio Details</p>
          <div className="heading_separator">
            <div className="separator_line"></div>
            <div className="separator_blob">
              <div></div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col col-lg-4 col-md-12 col-sm-12 ">
              <div className="resume_bullets">
                <div className="bullet_container">
                  <div className="bullets_icons"></div>
                  <div className="bullets">
                    <div onClick={() => setTab("skill")} className="bullet">
                      <img className="img_icon" src={program} alt="" />
                      <span className="bullet_label">Programming Skills</span>
                    </div>
                    <div
                      onClick={() => setTab("education")}
                      className="bullet "
                    >
                      <img className="img_icon" src={education} alt="" />
                      <span className="bullet_label">Education</span>
                    </div>
                    <div onClick={() => setTab("work")} className="bullet">
                      <img className="img_icon" src={work} alt="" />
                      <span className="bullet_label ">Work History</span>
                    </div>
                    <div onClick={() => setTab("interest")} className="bullet">
                      <img className="img_icon" src={interest} alt="" />
                      <span className="bullet_label">Interest</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-lg-7 col-md-12 col-sm-12">
              <div className="resume_details">
                {tab === "interest" && <Interest></Interest>}
                {tab === "work" && <WorkHistory></WorkHistory>}
                {tab === "education" && <Education></Education>}
                {tab === "skill" && <Skill></Skill>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
