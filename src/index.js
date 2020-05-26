import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

// import WelcomeNavBar from "./Layout/Navbar/navbar";
// import ModalPost from "./Components/Modal/AddPostModel/modal";
// import AddSkill from "./Components/Modal/AddSkillModal/AddSkillModal";
// import Post from "./Components/post/post";
//---------------------------nada--------------------------//

// import Login from "./Pages/LoginPage/login";
// import Portflio from "./Components/Portflio/Portflio";
// import OwnerProfileCard from "./Components/Card/BusinessOwnerProfileCard/OwnerProfileCard";
// import SignUp from "./Pages/SignUpPage/sign-up";
//---------------------------nada--------------------------//

// import EducationSection from './Components/EducationSection/EducationSection';
// import Header from "./Layout/Header/header";
//  import WelcomeNavBar from "./Layout/Navbar/navbar";
// import ModalPost from "./Components/Modal/AddPostModel/modal";
// import Post from './Components/post/post';

// import WelcomePage from "./Pages/WelcomePage/WelcomePage";

//---------------------------Mai--------------------------//
// import ModalCreateTask from './Components/Modal/CreatTaskModal/modal';
// import FeedbackModel from "./Components/Modal/AddFeedbackModel/AddFeedbackModal";
//import EducationSection from './Components/EducationSection/EducationSection';
// import CreateTask from './Pages/HomePage/CreateTaskSection/createTask';
//----------------------------------Mai------------------------//
//----------------------------------Malak start------------------------//
import Navmai from "./Layout/ournav";
import AddEducation from "./Components/Modal/AddEducationModal/AddEducation";

// import HowITWork from "./Components/HowToWork/howtowork";
import Header from "./Layout/Header/header";
//----------------------------------Malak End------------------------//

// import AddSkill from "./Components/Modal/AddSkillModal/AddSkillModal";
// import Post from "./Components/post/post";

// import { Form } from "reactstrap";
import SkillSection from "./Components/SkillSection/SkillSec";

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/****************Mai***********************/}
    {/* <FeedbackModel /> */}
    {/* <EducationSection /> */}
    {/* <ModalCreateTask /> */}
    {/* <CreateTask  /> */}

    {/****************Mai***********************/}

    {/****************Malak start***********************/}

    {/* <WelcomeNavBar /> */}
    {/* <Navmai /> */}
    {/* <Header /> */}
    {/* <AddEducation /> */}
    <SkillSection />
    {/****************Malak end***********************/}

    {/* <Login /> */}
    {/* <Portflio /> */}
    {/* <OwnerProfileCard /> */}
    {/* <SignUp /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
