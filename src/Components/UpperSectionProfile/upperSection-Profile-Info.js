import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";
import "./upperSection-Profile-Info.css";
import PersonalInfoModal from "../Modal/PersonalInfo/PersonalInfoModal";
import { useSelector } from "react-redux";
// import { getOwnerUserById } from "../../Redux/actions/ownerInfoActionCreator";
// import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
// import profilephoto from "./assets/profilephoto.png";
// import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
const PersonalInfo = props => {
  const ownerUser = useSelector(state => state.ownerPersonalInfo);
  console.log(ownerUser.email);
  return (
    <div>
      <Container>
        <div className="upper-container">
          <Row>
            <Col lg="8">
              <div className="first-profile-info">
                <div className="upper-info">
                  <div className="profile-photo">
                    <img
                      src="./img/profilephoto.png"
                      className="img"
                      alt="personal pic"
                    />
                    <div className="edit-icon">
                      <PersonalInfoModal />
                    </div>
                  </div>

                  <div className="username-location">
                    <span>{ownerUser.jobTitle} </span>
                    <br />
                    <span className="map-icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </span>
                    <span className="location">{ownerUser.location}</span>
                  </div>
                </div>

                <div className="job">
                  <p className="job-title">
                    {ownerUser.firstName} {ownerUser.lastName}{" "}
                  </p>
                  <p className="job-description">{ownerUser.description}</p>
                </div>
              </div>
            </Col>
            <Col lg="4">
              <div className="col-profile-setting">
                <div className="profile-setting">
                  <p>Profile Setting</p>
                </div>
                <div className="loctaion">
                  <h6>Location</h6>
                  <p>Cairo</p>
                </div>
                <div className="languages">
                  <h6>languages</h6>
                  <p>English</p>
                </div>
                <div className="profile-link">
                  <p>ProfileLink</p>
                </div>
                <div className="link">
                  <p>http://www.nameproject.com</p>
                </div>
                <div className="copylink">
                  <p>CopyLink</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default withRouter(PersonalInfo);
