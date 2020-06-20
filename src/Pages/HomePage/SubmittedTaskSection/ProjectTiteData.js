import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./submittedTask.css";
const ProjectTitleData =props=> {
const{jobTitle,item}=props
console.log("ya rab",item)
if(item.tasks){
    return (
        <>
      {
          <div className="SubmittedTask-container-body-pro">
            <NavLink to="/jobDetails">{item.jobTitle}</NavLink>
          </div>
      }
  
      </>
    );
}else{
    return (
        <>
      {
      
          <div className="">
        
            {/* <NavLink to="/jobDetails">{item.jobTitle}</NavLink> */}
        
          </div>
      }
      </>
    );
}
        
  }

export default ProjectTitleData;
