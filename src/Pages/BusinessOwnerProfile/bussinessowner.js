import React from "react";
import { Toast, ToastBody, ToastHeader, Container, Row, Col } from "reactstrap";
import InsideNav from "../../Layout/Navbar/insidenav";
import PersonalInfo from "../../Components/UpperSectionProfile/upperSection-Profile-Info";

import TaskProfile from "../../Components/Task/taskprofile";
const BussinessOwnerProfile = props => {
  return (
    <div>
      <InsideNav></InsideNav>
      <PersonalInfo></PersonalInfo>
      <Container>
        <div className="d-inline-block rounded mt-4 ">
          <Toast style={{ maxWidth: "837px" }}>
            <ToastHeader
              className="p-3 text-warning"
              style={{ backgroundColor: "#494848" }}
            >
              My Posts
            </ToastHeader>
            <ToastBody className="p-0">
              <TaskProfile></TaskProfile>
              <TaskProfile></TaskProfile>
            </ToastBody>
          </Toast>
        </div>
      </Container>
    </div>
  );
};

export default BussinessOwnerProfile;
