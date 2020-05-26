import React from "react";
import { Jumbotron, Container, Button } from "reactstrap";
import "./header.css";
const Header = (props) => {
  return (
    <div>
      <Jumbotron fluid className="fluid1">
        <Container fluid>
          <h1 className="big-title">Take your step</h1>
          <p className="prag">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
          <button outline className="secondary">
            Get started
            <div className="span">
              <i id="arrow-ico" className="fa fa-arrow-right"></i>
            </div>
          </button>{" "}
        </Container>
      </Jumbotron>
      <div className="yel-dev">
        <div className="pic"></div>
      </div>
    </div>
  );
};

export default Header;
