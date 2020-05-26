import React, { Component } from "react";
import SubscribeCardsSection from "./SubscribeCardSections/subscribeCardSection";
import SubscribeCard from "../../Components/Card/SubscribeCard/subscribeCard";
import HowItWorkCard from "../../Components/Card/HowItWorkCard/howitworkcard";
import Footer from "../../Layout/Footer/footer";
// import { Row, Container, Jumbotron } from "reactstrap";
// import WelcomeNavBar from "../../Layout/Navbar/navbar";
import Header from "../../Layout/Header/header";
import Example from "../../Components/Card/InProgressTaskCard/inprogresstaskcard";
import Login from "../LoginPage/login";
import HowITWork from "../../Components/HowToWork/howtowork";

// import SubscribeCardsSection from "./SubscribeCardSections/subscribeCardSection";
import WelcomeNavBar from "../../Layout/Navbar/navbar";
import Navmai from "../../Layout/ournav";
import { Container, Row, Jumbotron } from "reactstrap";
// import Header from "../../Layout/Header/header";
import CardFrame from "../../Components/Card/CategoreyCard/CardFrame";
class WelcomePage extends Component {
  state = {};
  render() {
    return (
      <>
        <Container>
          {/* <Row> */}
          {/* <Example></Example> */}

          {/* </Row> */}
        </Container>
        <Navmai></Navmai>
        <Header></Header>
        {/* <HowITWork></HowITWork>
        <Container
          className="bg-white shadow"
          style={{ position: "absolute", top: "253px", left: "112px" }}
        >
          <Row style={{ padding: "36px 0" }}>
            <HowItWorkCard></HowItWorkCard>
          </Row>
        </Container>

        <Container>
          <div>
            <Jumbotron
              fluid
              className="bg-white"
              style={{ marginTop: "108px" }}
            >
              <Container fluid className="text-center ">
                <div
                  className="display  m-5  "
                  style={{
                    backgroundColor: " #F0F0F0",
                    border: "none"
                  }}
                >
                  <p className="m-0 text-warning"> PRICING PLANS</p>
                </div>
                <h1 className="display-5 text-center text-dark">
                  Start your plan
                </h1>
                <p className="lead text-center text-dark">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy
                  <br /> eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam
                </p>
              </Container>
            </Jumbotron>
          </div>

          <Row>
            <SubscribeCardsSection />
          </Row>
        </Container> */}
        {/* <Footer></Footer>
        <Container className="themed-container" fluid={true}>
          <Navmai />
          <Header />
          <CardFrame /> */}
        {/* <WelcomeNavBar /> */}
        {/* <SubscribeCardsSection /> */}
        {/* </Container> */}
      </>
    );
  }
}

export default WelcomePage;
