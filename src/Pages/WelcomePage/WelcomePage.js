import React, { Component } from "react";

import SubscribeCardsSection from "./SubscribeCardSections/subscribeCardSection";
import WelcomeNavBar from "../../Layout/Navbar/navbar";
import Navmai from "../../Layout/ournav";
import { Container, Row } from "reactstrap";
import Header from "../../Layout/Header/header";
import CardFrame from "../../Components/Card/CategoreyCard/CardFrame";
class WelcomePage extends Component {
  state = {};
  render() {
    return (
      <Container className="themed-container" fluid={true}>
        <Navmai />
        <Header />
        <CardFrame />
        {/* <WelcomeNavBar /> */}
        {/* <SubscribeCardsSection /> */}
      </Container>
    );
  }
}

export default WelcomePage;
