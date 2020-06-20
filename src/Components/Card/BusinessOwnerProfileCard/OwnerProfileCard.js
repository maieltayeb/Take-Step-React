import React from "react";
import "./OwnerProfileCard.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import profilePic from "../../../profileImage/profilephoto.png";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";

const OwnerProfileCard = props => {
  const user = localStorage.getItem("user");
  const volunteerId = JSON.parse(user).id;
  const { users } = props;
  console.log("users", users);
  const hanldeClick = () => {
    console.log(props);
    props.history.push(`/profile/${volunteerId}`);
  };
  return (
    <div style={{ position: "fixed", width: "250px", marginBottom: "200px" }}>
      <Card
        className="owner-card-container owner-card-border"
        style={{ marginTop: "30px" }}
      >
        <Card className="owner-inner-card">
          {users.currentUser.imgUrl ? (
            <CardImg
              top
              width="100%"
              className="mt-4 rounded-circle owner-card-img"
              src={"http://localhost:4402/" + users.currentUser.imgUrl}
              //src="./img/developer.jpg"
              alt="Card image cap"
            />
          ) : (
            <CardImg
              top
              width="100%"
              className="mt-4 rounded-circle owner-card-img"
              src={profilePic}
              //src="./img/developer.jpg"
              alt="Card image cap"
            />
          )}
          {/* <CardImg
          top
          width="100%"
          className="mt-4 rounded-circle owner-card-img"
          src="./img/developer.jpg"
          alt="Card image cap"
        /> */}
          <CardBody>
            <CardTitle
              onClick={() => {
                hanldeClick();
              }}
              style={{ cursor: "pointer", textDecoration: "underline" }}
              className="owner-card-upper-text"
            >
              {" "}
              <strong>
                {users.currentUser.firstName + " " + users.currentUser.lastName}
              </strong>{" "}
            </CardTitle>
            <CardSubtitle className="owner-card-upper-text">
              {users.firstName}
            </CardSubtitle>
          </CardBody>
        </Card>
        <CardBody className="owner-card-lower-text">
          <CardSubtitle>All Jobs</CardSubtitle>
          <CardSubtitle>{users.jobs.length}</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};
const mapStateToProps = state => ({
  users: state.Users
});

export default withRouter(connect(mapStateToProps)(OwnerProfileCard));
