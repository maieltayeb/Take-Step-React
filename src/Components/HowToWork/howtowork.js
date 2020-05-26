import React from "react";
import { Jumbotron, Container } from "reactstrap";
import "./howtowork.css";
// import bgimage from "../../../../public/images/Howitwork.png";
const HowITWork = (props) => {
  return (
    <Jumbotron fluid className="fluid">
      <Jumbotron className="black">
        <Container fluid>
          <div className="Ques-title">
            <p id="p" className="ml-0">
              {" "}
              How it work ?
            </p>
          </div>
          <p className="Ques-answer">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </Container>
      </Jumbotron>
    </Jumbotron>
  );
};

export default HowITWork;
