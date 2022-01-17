import React from "react";

const WorkHistory = () => {
  return (
            <div>
            <h4 className="resume-heading">Work History</h4>
    <div id="work" className="resume_screen_container">
      <div className="experience_container">
        <div className="resume_heading">
          <div className="resume_main_heading">
            <div className="heading_bullet"></div>
            <span>Technology</span>
            <div className="heading_date">2022-Present</div>
          </div>
          <div className="resume_sub_heading">
            <span>MERN Stack Developer</span>
          </div>
          <div className="resume_heading_description">
            <span></span>
          </div>
        </div>
        <div className="experience_description">
          <span className="resume_description_text">
            Currently Working as MERN Stack web developer and also an
            online instructor in my area.
          </span>
          <br />
        </div>
        <div className="experience_description">
          <span className="resume_description_text">
            Developed an e-commerce website for client with the dashboard for
            managing the products, managing reviews, users, payment etc.
          </span>
          <br />
          <span className="resume_description_text">
            Integrated the web app with backend services to create new user
            onboarding application with dynamic form content.
          </span>
          <br />
          <span className="resume_description_text">
            I stretch my mental capacity to develope UI as per the given design.
          </span>
          <br />
        </div>
      </div>
    </div>
    </div>
  );
};

export default WorkHistory;
