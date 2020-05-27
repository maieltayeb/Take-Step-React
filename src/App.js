import React from "react";
import { Container, Row, Col } from "reactstrap";
// import logo from "./logo.svg";
import "./App.css";
// import Example from "./Components/Card/InProgressTaskCard/inprogresstaskcard";

import VolunteerProfile from "./Pages/VolunteerProfile/volunteerprofile";
import WelcomePage from "./Pages/WelcomePage/WelcomePage";
import Login from "./Pages/LoginPage/login";
import OurLogin from "./Pages/LoginPage/ourLogin";
import HomePageOwner from "./Pages/HomePage/Home";
import HomePageVolunteer from "./Pages/HomePage/homeVolunterr";

function App() {
  return (
    <div>
      {/* <Welcome></Welcome> */}
      {/* <Example /> */}
      {/* <Login></Login> */}
      {/* <OurLogin></OurLogin> */}
      {/* <HomePageOwner></HomePageOwner> */}
      <HomePageVolunteer></HomePageVolunteer>

      {/* <WelcomePage></WelcomePage> */}
      {/* <HowITWork></HowITWork> */}
      {/* <Example /> */}
      {/* <HowItWorkCard></HowItWorkCard> */}
      {/* <VolunteerProfile></VolunteerProfile> */}
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
