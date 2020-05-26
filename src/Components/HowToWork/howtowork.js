import React from "react";
import { Jumbotron, Container,Row } from "reactstrap";
import "./howtowork.css";
// import bgimage from "../../../../public/images/Howitwork.png";
import HowItWorkCard from './../Card/HowItWorkCard/howitworkcard';
const HowITWork = props => {
  return (
    <div style={{ position: "relative" }}>
      <Jumbotron fluid className="fluiid" style={{ borderRadius:"0px" }}>
        <Jumbotron className="black " style={{borderRadius:"0px" }}>
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
      <Container
          className="bg-white shadow"
          style={{ position: "absolute", top: "253px", left: "271px" ,width:"60%"}}
        >
          <Row style={{ padding: "36px 0" }}>
            <HowItWorkCard></HowItWorkCard>
          </Row>
        </Container>
    </div>
  );
};

export default HowITWork;
