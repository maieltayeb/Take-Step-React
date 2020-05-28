import React from "react";
import { Container, Row, Col } from "reactstrap";
// import logo from "./logo.svg";
import "./App.css";
// import Example from "./Components/Card/InProgressTaskCard/inprogresstaskcard";
import ModalLink from "./Components/Modal/AddLink/AddLink-Modal";
import AddSkill from "./Components/Modal/AddSkillModal/AddSkillModal";
import AddEducation from "./Components/Modal/AddEducationModal/AddEducation";
import ModalPost from "./Components/Modal/AddPostModel/modal";
import ModalCreateTask from "./Components/Modal/CreatTaskModal/modal";
import FeedbackModel from "./Components/Modal/AddFeedbackModel/AddFeedbackModal";

import BussinessOwnerProfile from "./Pages/BusinessOwnerProfile/bussinessowner";
import VolunteerProfile from "./Pages/VolunteerProfile/volunteerprofile";
import WelcomePage from "./Pages/WelcomePage/WelcomePage";
import OurLogin from "./Pages/LoginPage/ourLogin";
import Login from "./Pages/LoginPage/login";
import SignUp from "./Pages/SignUpPage/sign-up";
import Portflio from "./Components/Portflio/Portflio";
import OwnerProfileCard from "./Components/Card/BusinessOwnerProfileCard/OwnerProfileCard";
import NotificationDropdown from "./Components/Dropdown/NotificationDropdown";
import HomePage from "./Pages/HomePage/Home";
import HomePageOwner from "./Pages/HomePage/Home";
import HomePageVolunteer from "./Pages/HomePage/homeVolunterr";

function App() {
  return (
    <div>
      {/* <Welcome></Welcome> */}
      {/* <Example /> */}
      {/* <NotificationDropdown /> */}
      {/* <Login></Login> */}
      {/* <SignUp /> */}
      {/* <Portflio /> */}
      {/* <OwnerProfileCard /> */}
      {/* <NotificationDropdown /> */}
      {/* <OurLogin></OurLogin> */}
      {/* <HomePage></HomePage> */}
      {/* <HomePageOwner></HomePageOwner> */}
      {/* <HomePageVolunteer></HomePageVolunteer> */}

      {/* <WelcomePage></WelcomePage> */}
      {/* <HowITWork></HowITWork> */}
      {/* <Example /> */}
      {/* <HowItWorkCard></HowItWorkCard> */}
      <VolunteerProfile></VolunteerProfile>
      {/* <BussinessOwnerProfile></BussinessOwnerProfile> */}
      {/* <Footer></Footer> */}
      {/* <AddEducation /> */}
      {/* <AddSkill /> */}
      {/* <ModalLink /> */}
      {/* <AboutModal /> */}
      {/* <AddEducation />
      <AddSkill />
      <ModalLink />
      <ModalPost />
      <ModalCreateTask />
      <FeedbackModel /> */}
    </div>
  );
}

export default App;
