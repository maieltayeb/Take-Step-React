import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, connect } from "react-redux";
import "./App.css";
import BussinessOwnerProfile from "./Pages/BusinessOwnerProfile/bussinessowner";
import VolunteerProfile from "./Pages/VolunteerProfile/volunteerprofile";
import WelcomePage from "./Pages/WelcomePage/WelcomePage";
import Login from "./Pages/LoginPage/login";
import SignUp from "./Pages/SignUpPage/sighnup";
import HomePageOwner from "./Pages/HomePage/Home";
import HomePageVolunteer from "./Pages/HomePage/homeVolunterr";
import TaskDetails from "./Pages/Task-Details/Task-Details";
import TaskSubmittedFrame from "./Pages/TaskSubmit/task-submitted-frame";
import ProjectLink from "./Components/ProjectLink/project-Link-Component";
import {
  getAllUsersBussinessOwner,
  getAllCountries
} from "./Redux/actions/businessOwnerActionCreator";
// import { getAllVolunteers } from "./Redux/actions/volunteerActionCreator";
function App(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsersBussinessOwner());
    dispatch(getAllCountries());
  }, [dispatch]);
  //  let currentuserJson = localStorage.getItem("user");

  //   let currentUser = JSON.parse(currentuserJson);
  let profileName;
  // debugger;

  // if (props.currentUser.paymentData) {
  //   profileName = BussinessOwnerProfile;
  // } else {
  //   profileName = VolunteerProfile;
  // }
  return (
    <React.Fragment>
      <Switch>
        //anonymous user
        <Route path="/signUp" component={SignUp} />
        <Route path="/logIn" component={Login} />
        <Route path="/wlcomePage" exact component={WelcomePage} />
        {/* <Redirect from="/" exact to="/wlcomePage" /> */}
        //profile
        {/* <Route path="/profile/:id" component={profileName} /> */}
        {/* {props.currentUser.paymentData ? (
          ) : (
          )} */}
        <Route path="/BussinessProfile/:id" component={BussinessOwnerProfile} />
        <Route path="/VolunteerProfile/:id" component={VolunteerProfile} />
        <Route path="/jobDetails" component={TaskSubmittedFrame} />
        //home
        <Route path="/home" component={HomePageOwner} />
        {/* <Route path="/home" component={HomePageVolunteer} />
        <Route path="/taskDetails" component={TaskDetails} /> */}
        // both users
        <Redirect from="/" exact to="home" />
        {/* <Redirect from="logOut" to="wlcomePage" /> */}
      </Switch>
    </React.Fragment>
  );
}
const mapStateToProps = reduxState => {
  return {
    currentUser: reduxState.Users.currentUser
  };
};
export default connect(mapStateToProps)(App);
