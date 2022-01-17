import React from 'react';
import './Certificate.css';
const Certificate = (props) => {
          const {imgUrl} = props.data;
          return (
                    <div className="col-sm-12 col-md-6 col-lg-4 certificate_container">
                              <img className="shadow image"  src={imgUrl} alt="Certificate Coming Soon" />
                    </div>
          );
};

export default Certificate;