import React from "react";
import "./OwnerProfileCard.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";

const OwnerProfileCard = props => {
  return (
    <Card className="owner-card-container owner-card-border">
      <Card className="owner-inner-card">
        <CardImg
          top
          width="100%"
          className="mt-4 rounded-circle owner-card-img"
          src="./img/people.png"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle className="owner-card-upper-text">
            {" "}
            <strong>username</strong>{" "}
          </CardTitle>
          <CardSubtitle className="owner-card-upper-text">
            Job Title
          </CardSubtitle>
        </CardBody>
      </Card>
      <CardBody className="owner-card-lower-text">
        <CardSubtitle>Proposals</CardSubtitle>
        <CardSubtitle>4</CardSubtitle>
      </CardBody>
      <CardBody className="owner-card-lower-text">
        <CardSubtitle>All Tasks</CardSubtitle>
        <CardSubtitle>10</CardSubtitle>
      </CardBody>
    </Card>
  );
};
export default OwnerProfileCard;
