import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
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
  getAllUsers,
  getAllCountries
} from "./Redux/actions/businessOwnerActionCreator";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllCountries());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Switch>
        //anonymous user
        <Route path="/signUp" component={SignUp} />
        <Route path="/logIn" component={Login} />
        <Route path="/wlcomePage" exact component={WelcomePage} />
        {/* <Redirect from="/" exact to="/wlcomePage" /> */}
        //business owner user
        <Route path="/home" component={HomePageOwner} />
        <Route path="/profile/:id" component={BussinessOwnerProfile} />
        <Route path="/jobDetails" component={TaskSubmittedFrame} />
        //volnteer user
        {/* <Route path="/home" component={HomePageVolunteer} />
        <Route path="/profile" component={VolunteerProfile} />
        <Route path="/taskDetails" component={TaskDetails} /> */}
        // both users
        <Redirect from="/" exact to="home" />
        {/* <Redirect from="logOut" to="wlcomePage" /> */}
      </Switch>
    </React.Fragment>
  );
}

export default App;
