import React, { Component, useEffect, useState } from "react";
import "./skillSec.css";
import {
  getUserSkills,
  getCollecSkills,
} from "../../Redux/actions/userSkillCreator";
import { useDispatch, useSelector, connect } from "react-redux";
import { withRouter } from "react-router-dom";
import AddSkill from "../Modal/AddSkillModal/AddSkillModal";
const SkillSection = (props) => {
  const { state } = props;
  const dispatch = useDispatch();
  const user = localStorage.getItem("user");
  const userId = JSON.parse(user).id;
  const usersillData = useSelector((state) => state.Skills);

  useEffect(() => {
    dispatch(getUserSkills(userId));
  }, [dispatch]);
  console.log(usersillData);
  return (
    <div className="skillSection-container mt-4">
      <div className="skillSection-container-top">
        <div className="skillSection-container-top-h6">
          <h6>Skills</h6>
        </div>
        <div className="skillSection-container-top-icon">
          {/* <i class="fas fa-pencil-alt"></i>{" "} */}
          <AddSkill></AddSkill>
        </div>
      </div>
      <div className="skillSection-container-body">
        <div className="skillSection-container-body-info">
          <div className="skillSection-container-body-info-title">
            Your skills
          </div>
          <div className="skillSection-devs">
            {state.length ? (
              state.map((obj) => {
                return (
                  <React.Fragment>
                    <span className="dev">{obj.skillName}</span>
                  </React.Fragment>
                );
              })
            ) : (
              <div>No item added yet </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    state: state.Skills,
  };
};
export default connect(mapStateToProps)(SkillSection);
