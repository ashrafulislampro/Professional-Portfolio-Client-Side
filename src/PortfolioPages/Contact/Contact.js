import React, { useState } from "react";
import "./Contact.css";
import { useForm } from "react-hook-form";
import ScrollToTop from "react-scroll-to-top";
import emailjs from "emailjs-com";
import email from "../../images/email.png";
import phone from "../../images/phone-call.png";
import pin from "../../images/pin.png";
import {Bounce} from 'react-reveal';

const Contact = () => {
  const [status, setStatus] = useState(false);
  const {
    register,
    formState: { errors },
  } = useForm();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_88gnsxk",
        "template_lqvju9b",
        e.target,
        "user_4AQpCSOztDQhPAlu5M9AF"
      )
      .then((res) => {
        if (res.status === 200) {
          setStatus(res.status);
          document.getElementById("user_name").value = "";
          document.getElementById("user_email").value = "";
          document.getElementById("user_msg").value = "";
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <section id="contact" className="contact_section">
      <div className="contact_parent">
        <h3 className="heading_text text-center">Contact Me</h3>
        <p className="text-secondary text-center">How to connect with me</p>
        <div className="heading_separator">
          <div className="separator_line"></div>
          <div className="separator_blob">
            <div></div>
          </div>
        </div>
        <div className="container">
        <Bounce>
          <div className="row">
            <div className="col-sm-12 col-md-5 col-lg-4">
            
              <div className="address_container">
                <div className="address">
                  <div className="icon">
                    <img style={{ width: "30px" }} src={pin} alt="" />
                  </div>
                  <div>
                    <h6 className="fw-bold">Address</h6>
                    <p>123 6th Shibpur Sadar</p>
                    <p>Shipbur, Narsingdi, Bangladesh</p>
                  </div>
                </div>
                <div className="email">
                  <div className="icon">
                    <img style={{ width: "30px" }} src={email} alt="" />
                  </div>
                  <div>
                    <h6 className="fw-bold">Email</h6>
                    <p>ashrafulislam1659@gmail.com</p>
                    <p>ashrafulislama8795948@gmail.com</p>
                  </div>
                </div>
                <div className="phone">
                  <div className="icon">
                    <img style={{ width: "30px" }} src={phone} alt="" />
                  </div>
                  <div>
                    <h6 className="fw-bold">Phone</h6>
                    <p>+880 1303960837</p>
                  </div>
                </div>

                <div className="d-flex icon pb-2">
                  <a href="https://www.facebook.com/profile.php?id=100052327922373">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/ashraful-islam-7a7a3620a">
                    <i className="fab fa-linkedin ps-3"></i>
                  </a>
                  <a href="https://www.instagram.com/ashrafulislam1659">
                    <i className="fab fa-instagram ps-3"></i>
                  </a>
                  <a href="https://www.youtube.com/">
                    <i className="fab fa-youtube-square ps-3"></i>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="col-sm-12 col-md-7 col-lg-8 form_details">
            
                {status && (
                  <p
                    className="text-center"
                    style={{
                      color: "green",
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    Your Information Send Successfully
                  </p>
                )}
                <form className="pt-4" onSubmit={handleFormSubmit}>
                  <input
                    type="text"
                    name="name"
                    id="user_name"
                    required
                    {...register("name", { required: true })}
                    placeholder="Enter Your Name"
                    className="form-control"
                  />
                  {errors.name && (
                    <span style={{ color: "red" }}>This field is required</span>
                  )}
                  <br />
                  <input
                    type="email"
                    name="user_email"
                    id="user_email"
                    required
                    {...register("email", { required: true })}
                    placeholder="Enter Your Email"
                    className="form-control"
                  />
                  {errors.email && (
                    <span style={{ color: "red" }}>This field is required</span>
                  )}
                  <br />
                  <textarea
                    rows="5"
                    name="message"
                    id="user_msg"
                    required
                    {...register("message", { required: true })}
                    placeholder="Description"
                    className="form-control"
                  />
                  {errors.description && (
                    <span style={{ color: "red" }}>This field is required</span>
                  )}
                  <br />
                  <input
                    type="submit"
                    value="Send"
                    className="btn btn_primary"
                  />
                </form>
                
            </div>
          </div>
          </Bounce>
        </div>
      </div>

      <footer className="text-secondary text-center pt-5">
        <p> &copy; {new Date().getFullYear()} copyright all right reserved</p>
      </footer>
      <ScrollToTop smooth />
    </section>
  );
};

export default Contact;
