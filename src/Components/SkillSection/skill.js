import React, { Component } from "react";
import "../EducationSection/EducationSection.css";
import { Badge } from "reactstrap";
class Skills extends Component {
  state = {};
  render() {
    return (
      <div className="EducationSection-container">
        <div className="EducationSection-container-top">
          <div className="EducationSection-container-top-h6">
            <h6>Skills</h6>
          </div>
          <div className="space"></div>
          <div className="EducationSection-container-top-icon">
            <i class="fas fa-plus"></i>{" "}
          </div>
        </div>
        <div className="EducationSection-container-body">
          <div className="EducationSection-container-body-info">
            <div>
              <Badge
                className=" m-1"
                color="light"
                style={{ padding: "10px 20px", border: "1px solid #EBC010" }}
                pill
              >
                Warning
              </Badge>
              <Badge
                className=" m-1"
                color="light"
                style={{ padding: "10px 20px", border: "1px solid #EBC010" }}
                pill
              >
                Warning
              </Badge>
              <Badge
                className=" m-1"
                color="light"
                style={{ padding: "10px 20px", border: "1px solid #EBC010" }}
                pill
              >
                Warning
              </Badge>
              <Badge
                className=" m-1"
                color="light"
                style={{ padding: "10px 20px", border: "1px solid #EBC010" }}
                pill
              >
                Warning
              </Badge>
              <Badge
                className=" m-1"
                color="light"
                style={{ padding: "10px 20px", border: "1px solid #EBC010" }}
                pill
              >
                Warning
              </Badge>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
