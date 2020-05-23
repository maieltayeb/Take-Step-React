import React from "react";
import { Card, CardText, CardBody, Col } from "reactstrap";
import "./howitworkcard.css";
const HowItWorkCard = props => {
  return (
    <>
      <Col>
        <Card>
          <img width="100%" src="/img/find.svg" alt="Card image cap" />
          <CardBody>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>
      </Col>
      <Col>
        <Card>
          <img width="100%" src="/img/hire.svg" alt="Card image cap" />
          <CardBody>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>
      </Col>
      <Col>
        <Card>
          <img width="100%" src="/img/work.svg" alt="Card image cap" />
          <CardBody>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>
      </Col>
      <Col>
        <Card>
          <img width="100%" src="/img/pay.svg" alt="Card image cap" />
          <CardBody>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};
export default HowItWorkCard;
