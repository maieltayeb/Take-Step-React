import React from "react";
import { Toast, ToastBody, ToastHeader, Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import InProgressTaskCard from "../../Components/Card/InProgressTaskCard/inprogresstaskcard";
import TaskProfile from "../../Components/Task/taskprofile";
import SubmittedTask from "../HomePage/SubmittedTaskSection/submittedTask";
import InsideNav from "../../Layout/Navbar/insidenav";
import EducationSection from "../../Components/EducationSection/EducationSection";
import Portflio from "../../Components/Portflio/Portflio";
import SkillSection from "../../Components/SkillSection/SkillSec";
import PersonalInfo from "../../Components/UpperSectionProfile/upperSection-Profile-Info";
import ProfileNavbar from "../../Layout/Navbar/profileNavbar";
const Profile = props => {
  console.log("currentTasks",props.currentTasks)
  return (
    <div>
      {/* <InsideNav></InsideNav> */}
      <ProfileNavbar></ProfileNavbar>
      {/* <NavProf></NavProf> */}
      <PersonalInfo></PersonalInfo>
      <Container>
        <Row>
          {props.currentUser.paymentData && (
            <>
              <Col>
                <div className="d-inline-block rounded mt-4 ">
                  <Toast style={{ maxWidth: "837px" }}>
                    <ToastHeader
                      className="p-3 text-warning"
                      style={{ backgroundColor: "#494848" }}
                    >
                      My Jobs
                    </ToastHeader>
                    <ToastBody className="p-0">
                      <TaskProfile></TaskProfile>
                    </ToastBody>
                  </Toast>
                </div>
              </Col>
              <Col>
                <SubmittedTask></SubmittedTask>
              </Col>
            </>
          )}

          {!props.currentUser.paymentData && (
            <>
              <EducationSection></EducationSection>
              {/* <Skills></Skills> */}
              <SkillSection></SkillSection>
              <div className="d-inline-block p-3 my-2 rounded ">
                <Toast style={{ maxWidth: "837px" }}>
                  <ToastHeader
                    className="p-3 text-warning"
                    style={{ backgroundColor: "#494848" }}
                  >
                    Portflio
                    {/* <i
                  class="fas fa-angle-down"
                  style={{ fontSize: "25px" }}
                ></i>{" "} */}
                  </ToastHeader>
                  <ToastBody style={{ backgroundColor: "#f8f8f4" }}>
                    <Portflio></Portflio>
                  </ToastBody>
                </Toast>
              </div>
              <div className="d-inline-block p-3 my-2 rounded ">
                <Toast style={{ maxWidth: "837px" }}>
                  <ToastHeader
                    className="p-3 text-warning"
                    style={{ backgroundColor: "#494848" }}
                  >
                    Progress
                  </ToastHeader>
                  <ToastBody
                    className="p-0"
                    style={{
                      overflow: "auto",
                      height: "24rem",
                      backgroundColor: "#F8F8F4"
                    }}
                  >
                    <InProgressTaskCard ></InProgressTaskCard>
                  </ToastBody>
                </Toast>
              </div>
            </>
          )}
        </Row>
      </Container>
    </div>
  );
};
const mapStateToProps = reduxState => {
  return {
    currentUser: reduxState.Users.currentUser,
    currentTasks:reduxState
  };
};
export default connect(mapStateToProps)(Profile);
