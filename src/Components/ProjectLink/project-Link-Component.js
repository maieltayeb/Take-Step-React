import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./project-Link-Component.css";
// import feedback from "../../../public/img/feedback.png";
import FeedbackModel from "./../Modal/AddFeedbackModel/AddFeedbackModal";

const ProjectLink = (props) => {
  return (
    <div className="project-link-container">
      <div className="project-link-text">
        <span className="project-link-span">Project Link</span>
        <span className="project-link-Name">Name</span>
      </div>
      <div className="feedback-cobtainer">
        <div>
          <img src="./img/feedback.png" className="img-feedback" />
          <span className="feedback-text">
            Lorem Ispum dolor sign lorem ispm
          </span>
        </div>
        {/* <div className="feedback-button">
          <p className="feedback-button-p">Feedback</p>
        </div> */}

        <FeedbackModel />
      </div>
    </div>
  );
};
export default ProjectLink;
