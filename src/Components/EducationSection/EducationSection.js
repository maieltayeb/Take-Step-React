import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import Axios from "axios";
import "./EducationSection.css";
import AddEducation from "../Modal/AddEducationModal/AddEducation";
import EducationData from "./EducationData";
// import { GET_EDU } from "../../Redux/actionTypes";
import { getAllEducation } from "../../Redux/actions/educationActionCreator";
import { useDispatch } from "react-redux";

const EducationSection = props => {
  // const { edus } = props;
  console.log(props.educations);
  const { educations } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    Axios.get("https://take-a-step-9ca1d.firebaseio.com/educationSection.json")
      .then(response => {
        const educations = response.data;
        const newEducations = [];
        for (const key in educations) {
          newEducations.push({ id: key, ...educations[key] });
        }
        dispatch(getAllEducation(newEducations));

        console.log(newEducations);
      })
      .catch(console.log);
  }, [dispatch]);
  console.log("component", educations);
  return (
    <div className="EducationSection-container mt-4">
      <div className="EducationSection-container-top">
        <div className="EducationSection-container-top-h6">
          <h6>Education</h6>
        </div>
        <div className="space"></div>
        <div className="EducationSection-container-top-icon">
          {/* <i class="fas fa-plus"></i>{" "} */}

          <AddEducation></AddEducation>
        </div>
      </div>
      {educations.length ? (
        educations.map(edu => <EducationData key={edu.id} {...edu} edu={edu} />)
      ) : (
        <div>No items added yet</div>
      )}
      {/* <EducationData /> */}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    educations: state.educations
  };
};

export default connect(mapStateToProps)(EducationSection);
