import React from "react";
import { Jumbotron, Container } from "reactstrap";
import "./howtowork.css";
// import bgimage from "../../../../public/images/Howitwork.png";
const HowITWork = props => {
  return (
    <div>
      <Jumbotron fluid className="fluiid" style={{ position: "relative" }}>
        <Jumbotron className="black ">
          <Container fluid className="text-center">
            <div className="display">
              <p className="m-0 text-light"> How it work ?</p>
            </div>
            <p className="leed text-center mt-5">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt
              <br /> ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </Container>
        </Jumbotron>
      </Jumbotron>
    </div>
  );
};

export default HowITWork;
