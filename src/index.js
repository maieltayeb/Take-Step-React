import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./Layout/Header/header";
import WelcomeNavBar from "./Layout/Navbar/navbar";
import ModalPost from "./Components/Modal/AddPostModel/modal";
import AddSkill from "./Components/Modal/AddSkillModal/AddSkillModal";
import Post from "./Components/post/post";
import Login from "./Pages/LoginPage/login";
import Portflio from "./Components/Portflio/Portflio";
import OwnerProfileCard from "./Components/Card/BusinessOwnerProfileCard/OwnerProfileCard";
import SignUp from "./Pages/SignUpPage/sign-up";
// import EducationSection from './Components/EducationSection/EducationSection';
// import CreateTask from './Pages/HomePage/CreateTaskSection/createTask';
ReactDOM.render(
  <React.StrictMode>
    {/* <WelcomeNavBar />
  <Header/>
  <AddSkill/>
  <ModalPost/>
  <Post/> */}

    {/* <App /> */}
    {/* <App /> */}

    {/* <CreateTask  /> */}
    {/* <WelcomeNavBar />
    <ModalPost />
    <Post/> */}
    {/* <EducationSection />  */}

    {/* <App /> */}
    {/* <App /> */}
    {/* <Header/> */}

    {/* <Login /> */}
    {/* <Portflio /> */}
    {/* <OwnerProfileCard /> */}
    <SignUp />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
