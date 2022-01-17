import React from 'react';
import './Project.css';
const ProjectDetails = (props) => {
          const {imgUrl, name, linkUrl} = props.data;
          const handleProject = projectLink =>{
              window.open(projectLink);
          }
          return (
            <div onClick={() => handleProject(linkUrl)} style={{cursor: 'pointer'}} className="d-flex justify-content-center">
            <div className="card shadow card_container">
            <img className="img" style={{height: '14rem'}} src={imgUrl} alt="" />
              <div className="card-body">
                <p className="card-text title text-center">
                {name}
                </p>
              </div>
            </div>
            </div>
          );
};

export default ProjectDetails;