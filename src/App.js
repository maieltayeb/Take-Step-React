import React from "react";
import { Container, Row, Col } from "reactstrap";
// import logo from "./logo.svg";
import "./App.css";
// import Example from "./Components/Card/InProgressTaskCard/inprogresstaskcard";
import BussinessOwnerProfile from "./Pages/BusinessOwnerProfile/bussinessowner";
import VolunteerProfile from "./Pages/VolunteerProfile/volunteerprofile";
import WelcomePage from "./Pages/WelcomePage/WelcomePage";
import Login from "./Pages/LoginPage/login";
import OurLogin from "./Pages/LoginPage/ourLogin";
import SignUp from "./Pages/SignUpPage/sign-up";

function App() {
  return (
    <div>
      {/* <Welcome></Welcome> */}
      {/* <Example /> */}
      {/* <Login></Login> */}
      {/* <SignUp></SignUp> */}
      {/* <OurLogin></OurLogin> */}
      {/* <WelcomePage></WelcomePage> */}
      {/* <HowITWork></HowITWork> */}
      {/* <Example /> */}
      {/* <HowItWorkCard></HowItWorkCard> */}
      {/* <VolunteerProfile></VolunteerProfile> */}
      <BussinessOwnerProfile></BussinessOwnerProfile>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
