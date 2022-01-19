import React from "react";

const TestimonialCard = (props) => {
  const { name, title, description, imageUrl, date } = props.review;

  return (
    <div className="d-flex justify-content-center">
      <div className="card shadow card_container">
          <h6 className="text-center pt-3">{date}</h6>
        <div className="card-body">
          <p className="card-text pt-4">
            {description}
          </p>
        </div>
        <div className="d-flex justify-content-around pb-2">
        <img src={imageUrl} style={{width: '50px', borderRadius: '50%'}}alt="no internet connection" />
        <div>
                  <h6>{name}</h6>
                  <h6>{title}</h6>
        </div>
        </div>
      </div>
      </div>
  );
};

export default TestimonialCard;
