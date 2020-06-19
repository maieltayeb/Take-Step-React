import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./submittedTask.css";
const ProjectTitleData =props=> {
const{jobTitle}=props
    return (

          <div className="SubmittedTask-container-body-pro">
            <NavLink to="/jobDetails">{jobTitle}</NavLink>
          </div>
       
    );
  }

export default ProjectTitleData;
