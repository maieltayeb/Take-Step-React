import React from "react";
import axios from "axios";
import EditEducation from "../../Components/Modal/EditEducationModal/EditEducationModal";
import { useDispatch } from "react-redux";
import { deleteEducation } from "../../Redux/actions/educationActionCreator";
import "./EducationData.css";
const EducationData = props => {
  const { edu } = props;
  const { id } = edu;
  const dispatch = useDispatch();
  const handleDelete = event => {
    if (window.confirm("Are You Sure To Delete This")) {
      event.stopPropagation();
      axios
        .delete(
          `https://take-a-step-9ca1d.firebaseio.com/educationSection/${id}.json`
        )
        .then(response => {
          if (response.status === 200) dispatch(deleteEducation(id));
        })
        .catch(console.log);
    }
  };

  return (
    <div>
      <div className="EducationSection-container-body">
        <div className="EducationSection-container-body-img">
          <img
            src="/img/itilogo.png"
            style={{ "border-radius": "50%", width: "80%" }}
          />
        </div>
        <div className="EducationSection-container-body-info">
          <div className="EducationSection-container-body-info-title">
            {props.university}
          </div>
          <div className="EducationSection-container-body-info-dgree">
            {props.degree}
          </div>
          <div className="EducationSection-container-body-info-date">
            <p className="EducationSection-container-body-info-Startdate">
              {props.graduationYear}
            </p>
            {/* <p className="EducationSection-container-body-info-Startdate">
              2020
            </p> */}
          </div>
          <div className="EducationSection-container-body-info-date">
            <p className="EducationSection-container-body-info-Startdate">
              {props.grade}
            </p>
            {/* <p className="EducationSection-container-body-info-Startdate">
              2020
            </p> */}
          </div>
        </div>
        <div className="body-space"></div>
        <div className="EducationSection-container-body-icon">
          <div className="EducationSection-container-body-icon-edit">
            <EditEducation />
          </div>
          <div className="EducationSection-container-body-icon-delete">
            <i
              class="fas fa-trash-alt"
              style={{ cursor: "pointer" }}
              onClick={handleDelete}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EducationData;
