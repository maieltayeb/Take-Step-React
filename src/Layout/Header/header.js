import React from "react";
import { Jumbotron, Container, Button } from "reactstrap";
import "./header.css";
const Header = (props) => {
  return (
    <div>
      <Jumbotron fluid className="fluid1 mb-0">
        <Container fluid>
          <h1 className="display-4">Take your step</h1>
          <p className="leead1">
            This is a modified jumbotron that occupies the
            <br />
            entire horizontal space of its parent.
          </p>
          <button outline className="secondary">
            Get started
            <div className="span">
              <i id="arrow-ico" className="fa fa-arrow-right"></i>
            </div>
          </button>{" "}
          <div className="yel-dev">
            <div className="pic"></div>
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Header;
