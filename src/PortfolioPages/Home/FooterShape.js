import React from 'react'
import shape from '../../images/logo.png';
import './FooterShape.css';
export default function FooterShape() {
          return (
                    <div className="footer_container">
                          <div className="footer_parent">
                                    <img src={shape} alt="no internet connection" />
                          </div>    
                    </div>
          )
}
