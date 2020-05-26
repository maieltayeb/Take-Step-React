import React from "react";
import { Jumbotron, Container } from "reactstrap";
import "./howtowork.css";
// import bgimage from "../../../../public/images/Howitwork.png";
const HowITWork = (props) => {
  return (
    <Jumbotron fluid className="fluiid" style={{ position: "relative" }}>
      <Jumbotron className="black-dev">
        <Container fluid className="text-center">
          <div className="Ques-title">
            <p className="m-0 text-light"> How it work ?</p>
          </div>
          <p className="Ques-ans text-center mt-5">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt
            <br /> ut labore et dolore magna aliquyam erat, sed diam voluptua.
          </p>
        </Container>
      </Jumbotron>
    </Jumbotron>
  );
};

export default HowITWork;
