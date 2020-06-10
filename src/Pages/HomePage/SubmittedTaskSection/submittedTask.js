import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./submittedTask.css";
class SubmittedTask extends Component {
  render() {
    return (
      <div className="SubmittedTask-container">
        <div className="SubmittedTask-container-top">
          <h6>Tasks Submitted</h6>
        </div>
        <div className="SubmittedTask-container-body"  style={{
                      overflow: "auto",
                      height: "14rem",
                      backgroundColor: "#F8F8F4"
                    }}>
          <div className="SubmittedTask-container-body-pro">
            <NavLink to="/jobDetails">project-title</NavLink>
          </div>
          <div className="SubmittedTask-container-body-pro">
            <NavLink to="/jobDetails">project-title</NavLink>
          </div>
          <div className="SubmittedTask-container-body-pro">
            <NavLink to="/jobDetails">project-title</NavLink>
          </div>
          <div className="SubmittedTask-container-body-pro">
            <NavLink to="/jobDetails">project-title</NavLink>
          </div>
          <div className="SubmittedTask-container-body-pro">
            <NavLink to="/jobDetails">project-title</NavLink>
          </div>

        </div>
      </div>
    );
  }
}

export default SubmittedTask;
