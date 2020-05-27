import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";
import "./task-submitted-frame.css";
import ProjectLink from "../../Components/ProjectLink/project-Link-Component";
import InsideNav from "../../Layout/Navbar/insidenav";

const TaskSubmittedFrame = props => {
  return (
    <div>
      <InsideNav />
      <div className="container-submit-task ">
        <div className="task-submitted-title ">
          <p className="task-submitted-title-p">Tasks Submited</p>
        </div>
        <div className="poject-title ">
          <div className="project-title-container">
            <p className="project-title-container-p">Project-Title</p>
          </div>
          <div className="project-description">
            <p className="project-description-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            </p>
          </div>
          <ProjectLink />
          <ProjectLink />
          <ProjectLink />
          <ProjectLink />
        </div>
        <div className="poject-title ">
          <div className="project-title-container">
            <p className="project-title-container-p">Project-Title</p>
          </div>
          <div className="project-description">
            <p className="project-description-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            </p>
          </div>
          <ProjectLink />
          <ProjectLink />
          <ProjectLink />
          <ProjectLink />
        </div>
      </div>
    </div>
  );
};
export default TaskSubmittedFrame;
