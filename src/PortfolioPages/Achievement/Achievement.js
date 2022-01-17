import React from "react";
import Certificate from "./Certificate";
const achievementData =[
  {
    id: 1,
    imgUrl: 'https://i.ibb.co/dK55yHr/cert-1162-22780620.jpg',
   
  },
  {
    id: 2,
    imgUrl: 'https://i.ibb.co/0cbbPZ9/cert-1165-22780620.jpg',
   
  },
  {
    id: 3,
    imgUrl: 'https://i.ibb.co/jrxXMfr/cert-1023-22780620.jpg',
   
  },
  {
    id: 4,
    imgUrl: 'https://i.ibb.co/cwD3X1t/cert-1014-22780620.jpg',
   
  },
  {
    id: 5,
    imgUrl: 'https://i.ibb.co/bz9tQ6N/cert-22780620-1024.png',
   
  },
  {
    id: 6,
    imgUrl: 'Certificate Coming Soon',
  }  
]
const Achievement = () => {
  return (
    <section id="achievement" className="achievement_section">
      <div className="achievement_parent">
        <div className="achievement_heading text-center">
          <h2 className="heading_text">Achievement</h2>
          <p className="text-secondary">This is my Academic Certificate</p>
          <div className="heading_separator">
            <div className="separator_line"></div>
            <div className="separator_blob">
              <div></div>
            </div>
          </div>
        </div>
          <div className="container">
              <div className="row d-flex justify-content-center">
                {achievementData.map(data => <Certificate data={data} key={data.id}></Certificate>)}
              </div>
          </div>
      </div>
    </section>
  );
};

export default Achievement;
