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
import OurCategoeyCard from "../../Components/Card/CategoreyCard/ourCategoryCard";
class WelcomePage extends Component {
  state = {};
  render() {
    return (
      <>
        <Navmai />

        <Header />

        {/** ************************************/}

        <Container>
          <h3 className="text-center mt-5">All Categories</h3>
          <Row
            style={{
              marginTop: "47px",
              "margin-left": "14px",
              "justify-content": "center"
            }}
          >
            <OurCategoeyCard />
          </Row>
          <Row
            style={{
              marginTop: "47px",
              "margin-left": "14px",
              "justify-content": "center"
            }}
            className="mb-5"
          >
            <OurCategoeyCard />
          </Row>
        </Container>

        <HowITWork></HowITWork>
        {/*/////////////////mariaaaaaaaaaaam*/}

        {/*/////////////////mariaaaaaaaaaaam*/}
        {/*/////////////////mariaaaaaaaaaaam*/}
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
        </Container>
        {/*/////////////////mariaaaaaaaaaaam*/}
        {/*/////////////////mai*/}
        {/* <Row>
 <SubscribeCard />
 <SubscribeCard />
 <SubscribeCard />
 </Row> */}

        <SubscribeCardsSection />

        {/*/////////////////mai*/}
        {/*/////////////////mariaaaaaaaaaaam*/}
        <Footer></Footer>
        {/*/////////////////mariaaaaaaaaaaam*/}
      </>
    );
  }
}

export default WelcomePage;
