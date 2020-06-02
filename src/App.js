import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import ModalLink from "./Components/Modal/AddLink/AddLink-Modal";
import AddSkill from "./Components/Modal/AddSkillModal/AddSkillModal";
import AddEducation from "./Components/Modal/AddEducationModal/AddEducation";
import ModalPost from "./Components/Modal/AddPostModel/modal";
import ModalCreateTask from "./Components/Modal/CreatTaskModal/modal";
import FeedbackModel from "./Components/Modal/AddFeedbackModel/AddFeedbackModal";
import Post from "./Components/post/post";

import BussinessOwnerProfile from "./Pages/BusinessOwnerProfile/bussinessowner";
import VolunteerProfile from "./Pages/VolunteerProfile/volunteerprofile";
import WelcomePage from "./Pages/WelcomePage/WelcomePage";
import Login from "./Pages/LoginPage/login";
import SignUp from "./Pages/SignUpPage/sighnup";
import Portflio from "./Components/Portflio/Portflio";
import OwnerProfileCard from "./Components/Card/BusinessOwnerProfileCard/OwnerProfileCard";
import NotificationDropdown from "./Components/Dropdown/NotificationDropdown";
import HomePage from "./Pages/HomePage/Home";
import HomePageOwner from "./Pages/HomePage/Home";
import HomePageVolunteer from "./Pages/HomePage/homeVolunterr";
import TaskDetails from "./Pages/Task-Details/Task-Details";
import TaskSubmittedFrame from "./Pages/TaskSubmit/task-submitted-frame";
import ProjectLink from "./Components/ProjectLink/project-Link-Component";
function App() {
  return (
    <React.Fragment>
      {/* <Post /> */}
      {/* <Welcome></Welcome> */}
      {/* <Example /> */}
      {/* <NotificationDropdown /> */}
      {/* <Login></Login> */}
      {/* <Portflio /> */}
      {/* <OwnerProfileCard /> */}
      {/* <NotificationDropdown /> */}
      {/* <HomePage></HomePage> */}
      {/* <HomePageOwner></HomePageOwner> */}
      {/* <HomePageVolunteer></HomePageVolunteer> */}
      {/* <TaskSubmittedFrame /> */}

      {/* <WelcomePage></WelcomePage> */}
      {/* <HowITWork></HowITWork> */}
      {/* <HowItWorkCard></HowItWorkCard> */}
      {/* <VolunteerProfile></VolunteerProfile> */}
      {/* <BussinessOwnerProfile></BussinessOwnerProfile> */}
      {/* <SignUp /> */}
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
      {/* <TaskDetails /> */}
      {/* <TaskSubmittedFrame /> */}
      {/* <ProjectLink></ProjectLink> */}
      <Switch>
        //anonymous user
        <Route path="/signUp" component={SignUp} />
        <Route path="/logIn" component={Login} />
        <Route path="/wlcomePage" exact component={WelcomePage} />
        <Redirect from="/" exact to="/wlcomePage" />
        //business owner user
        {/* <Route path="/home" component={HomePageOwner} />
        <Route path="/profile" component={BussinessOwnerProfile} />
        <Route path="/jobDetails" component={TaskSubmittedFrame} /> */}
        //volnteer user
        {/* <Route path="/home" component={HomePageVolunteer} />
        <Route path="/profile" component={VolunteerProfile} />
        <Route path="/taskDetails" component={TaskDetails} />
        // both users
        <Redirect from="/" exact to="home" /> */}
      </Switch>
    </React.Fragment>
  );
}

export default App;
