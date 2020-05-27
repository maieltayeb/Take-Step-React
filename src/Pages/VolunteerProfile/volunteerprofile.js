import React from "react";
import { Toast, ToastBody, ToastHeader } from "reactstrap";
import InProgressTaskCard from "../../Components/Card/InProgressTaskCard/inprogresstaskcard";
import Navmai from "../../Layout/ournav";
import InsideNav from "../../Layout/Navbar/insidenav";
import EducationSection from "../../Components/EducationSection/EducationSection";
import Portflio from "../../Components/Portflio/Portflio";
import Skills from "../../Components/SkillSection/skill";
import InfoSection from "../../Components/infosection/infosection";
const VolunteerProfile = props => {
  return (
    <div>
      <InsideNav></InsideNav>
      <InfoSection></InfoSection>
      <EducationSection></EducationSection>
      <Skills></Skills>
      {/* <div className="d-inline-block p-3 my-2 rounded ">
        <Toast style={{ maxWidth: "837px" }}>
          <ToastHeader
            className="p-3 text-warning"
            style={{ backgroundColor: "#494848" }}
          >
            Progress
          </ToastHeader>
          <ToastBody>
            <Portflio></Portflio>
          </ToastBody>
        </Toast>
      </div> */}
      <div className="d-inline-block p-3 my-2 rounded ">
        <Toast style={{ maxWidth: "837px" }}>
          <ToastHeader
            className="p-3 text-warning"
            style={{ backgroundColor: "#494848" }}
          >
            Progress
          </ToastHeader>
          <ToastBody>
            <InProgressTaskCard></InProgressTaskCard>
          </ToastBody>
        </Toast>
      </div>
    </div>
  );
};

export default VolunteerProfile;
