import React from 'react'
import Profile from './Profile'
import './Home.css';
import FooterShape from './FooterShape';
import AboutMe from '../AboutMe/AboutMe';
import Resume from '../Resume/Resume';
import Testimonial from '../Testimonial/Testimonial';
import ReviewsModal from '../Testimonial/ReviewsModal';
import Achievement from '../Achievement/Achievement';
import Contact from '../Contact/Contact';
import Project from '../Project/Project';
import Navbars from '../Navbar/Navbars';
export default function Home() {
          return (
                    <section>
                              <Navbars></Navbars>
                              <div className="home_container">
                              <Profile></Profile>
                              <FooterShape></FooterShape>
                              </div>
                              <AboutMe></AboutMe>
                              <Resume></Resume>
                              <Testimonial></Testimonial>
                              <Project></Project>
                              <Achievement></Achievement>
                              <Contact></Contact>
                              <ReviewsModal></ReviewsModal>
                    </section>
          )
}
