import { Container, Row, Col } from "reactstrap";
import { React } from "react";
import HowItWorkCard from "../../Components/Card/HowItWorkCard/howitworkcard";
import Footer from "../../Layout/Footer/footer";
const Welcome = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <HowItWorkCard></HowItWorkCard>
          </Col>
          <Col>
            <HowItWorkCard></HowItWorkCard>
          </Col>
          <Col>
            <HowItWorkCard></HowItWorkCard>
          </Col>
          <Footer></Footer>
        </Row>
      </Container>
    </div>
  );
};

export default Welcome;
