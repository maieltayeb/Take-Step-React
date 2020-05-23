import React from "react";
import { Container, Row, Col } from "reactstrap";
// import logo from "./logo.svg";
import "./App.css";
import Welcome from "./Pages/WelcomePage/welcome";
import Footer from "./Layout/Footer/footer";
import HowItWorkCard from "./Components/Card/HowItWorkCard/howitworkcard";
import HowITWork from "./Components/HowToWork/howtowork";

function App() {
  return (
    <>
      {/* <Footer></Footer>
      <HowItWorkCard></HowItWorkCard> */}
      <Container>
        <Row>
          <HowITWork></HowITWork>
          {/* <HowItWorkCard></HowItWorkCard> */}

          {/* <Footer></Footer> */}
        </Row>
      </Container>
    </>
  );
}

export default App;
