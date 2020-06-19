import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./submittedTask.css";
import ProjectTitleData from "./ProjectTiteData";
import {connect} from "react-redux";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {getAllSubmitTasks} from "../../../Redux/actions/InprogressActionCreator";
const SubmittedTask =(props)=> {
const {submittedTaskLink} =props;
const dispatch = useDispatch();
useEffect(() => {
  const user = localStorage.getItem("user");
  const id = JSON.parse(user).id;
  // console.log("id from section", id);
  // const token = localStorage.getItem("token");
  axios.get(`http://localhost:4402/bussinessOwner/getSubmitTasks/${id}`, {
  })
    .then(response => {
      const projectLinks = response.data;
      // console.log("educations", educations);
      const newProjectLinks = [];
      for (const key in projectLinks) {
        newProjectLinks.push({ _id: key, ...projectLinks[key] });
      }
      dispatch(getAllSubmitTasks(newProjectLinks));
      console.log("links from react", newProjectLinks);
    })
    .catch(console.log);
}, [dispatch]);

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
                      {
                          submittedTaskLink.map(taskLink =><ProjectTitleData jobTitle={taskLink.jobTitle}/>)
                      }
         
        </div>
      </div>
    );
  }
const mapStateToProps= reduxState =>{
  return{
    submittedTaskLink:reduxState.Inprogress.submittedTaskLinks
    
  }
}

export default connect(mapStateToProps)(SubmittedTask);
