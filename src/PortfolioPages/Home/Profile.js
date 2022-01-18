import React from "react";
import "./Profile.css";
import Typical from "react-typical";
const Profile = () => {
  return (
    <section id="home" className="profile_container">
      <div className="profile_parent">
        <div className="profile_details">
          <div className="colz">
            <div className="colz_icon">
              <a href="https://www.facebook.com/profile.php?id=100052327922373">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/ashraful-islam-7a7a3620a">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/ashrafulislam1659">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://github.com/ashrafulislampro">
                <i className="fab fa-github-square"></i>
              </a>
            </div>
          </div>

          <div className="profile_details_name">
            <span className="primary-text">
              Hello, I'm{" "}
              <span className="highlighted-text ms-1"> Ashraful Islam</span>
            </span>
          </div>
          <div className="profile_details_role">
            <span className="primary-text">
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "MERN Stack Developer",
                    2000,
                    "Full Stack Developer",
                    2000,
                    "Freelancer",
                    2000,
                    "React Native Developer",
                    2000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with frontend and backend
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <a href="#contact">
            <button  className="btn primary-btn">Hire Me</button>
            </a>
            <a href="Ashraful-Islam-Resume.pdf" download="Ashraful-Islam-Resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile_picture">
           <div className="profile_picture_background">
              
           </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
