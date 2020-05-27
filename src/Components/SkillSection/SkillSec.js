import React, { Component } from "react";
import "./skillSec.css";

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
            <i class="fas fa-pencil-alt"></i>{" "}
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
