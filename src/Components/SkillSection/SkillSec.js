import React, { Component } from "react";
import "./skillSec.css";
<<<<<<< HEAD
import AddSkill  from "../Modal/AddSkillModal/AddSkillModal";
=======
import AddSkill from "./../Modal/AddSkillModal/AddSkillModal";
>>>>>>> 43bde5a484c1324421e8b129b44b20dd97d956b1
class SkillSection extends Component {
  state = {};
  render() {
    return (
      <div className="skillSection-container mt-4">
        <div className="skillSection-container-top">
          <div className="skillSection-container-top-h6">
            <h6>Skills</h6>
          </div>
          <div className="skillSection-container-top-icon">
            {/* <i class="fas fa-pencil-alt"></i>{" "} */}
<<<<<<< HEAD
            <AddSkill ></AddSkill>
=======
            <AddSkill />
>>>>>>> 43bde5a484c1324421e8b129b44b20dd97d956b1
          </div>
        </div>
        <div className="skillSection-container-body">
          <div className="skillSection-container-body-info">
            <div className="skillSection-container-body-info-title">
              Information technology Instituit
            </div>
            <div className="skillSection-devs">
              <span className="dev">skill name</span>
              <span className="dev">skill name</span>
              <span className="dev">skill name</span>
            </div>
            <div className="skillSection-container-body-info-title">
              Information technology Instituit
            </div>
            <div className="skillSection-devs">
              <span className="dev">skill name</span>
              <span className="dev">skill name</span>
              <span className="dev">skill name</span>
            </div>
          </div>
          {/* <div className="body-space"></div>
          <div className="skillSection-container-body-icon">
            <div className="skillSection-container-body-icon-edit">
              <i class="fas fa-pencil-alt"></i>
            </div>
            <div className="skillSection-container-body-icon-delete">
              <i class="fas fa-trash-alt"></i>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default SkillSection;
