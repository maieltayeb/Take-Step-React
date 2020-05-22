import React from "react";
import { Jumbotron, Container } from "reactstrap";
import "./howtowork.css";
// import bgimage from "../../../../public/images/Howitwork.png";
const HowITWork = (props) => {
  return (
    <div>
      <Jumbotron fluid className="fluid">
        <Jumbotron className="black">
          <Container fluid>
            <div className="display-3">
              <p id="p"> How it work ?</p>
            </div>
            <p className="lead">
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </Container>
        </Jumbotron>
      </Jumbotron>
    </div>
  );
};

export default HowITWork;
