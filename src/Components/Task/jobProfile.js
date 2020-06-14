import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";

import { getAllComments } from "../../Redux/actions/commentActionCreator";
import { addComments } from "../../Redux/actions/commentActionCreator";

import {
  Button,
  Dropdown,
  Input,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import "./taskprofile.css";
import { getUserById } from "../../Redux/actions/businessOwnerActionCreator";
const JobProfile = props => {
  const { currentUser, job } = props;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <>
      <div className=" pl-5 pt-3 pr-5 clearfix">
        <div style={{ display: "flex", "justify-content": "space-between" }}>
          <div>
            <img className="post-img  rounded-circle" src="./img/people.png" />
            <div className="username-post ml-3">
              <div className="mt-3 postOwnerNameStyle">
                {currentUser && currentUser.firstName}
                &nbsp;&nbsp;
                {currentUser && currentUser.lastName}
              </div>
              <div className="ml-0 postOwnerNameStyle">
                {currentUser && currentUser.jobTitle}
              </div>
            </div>
          </div>

          <Dropdown
            isOpen={dropdownOpen}
            toggle={toggle}
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <DropdownToggle style={{ background: "none", border: "none" }}>
              <div className="post-ortions">...</div>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Edit</DropdownItem>
              <DropdownItem>Delete</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>

      <div
        className=" ml-5  clearfix mt-3 d-flex"
        style={{ justifyContent: "space-between" }}
      >
        <div className=" float-left">
          <span className=" font-weight-bold">Time : </span>
          <span className="">
            {job && job.timeDurationNumber}&nbsp;&nbsp;
            {job && job.timeDurationType}
          </span>
        </div>
        <div className=" ml-5 float-left">
          <span className="font-weight-bold ">Proposals :</span>
          <span className="">&nbsp;{job && job.proposals}</span>
        </div>
      </div>
      <div className="postBody pt-3 pr-5 pl-5  m-0">
        <p className="text-justify">{job && job.description}</p>
      </div>

      <div className=" reactToPost clearfix">
        <div className=" ml-4 float-left">
          <span className="mt-2 mr-2">5</span>
          <span>
            <i class=" mb-3 fas fa-comment-alt"></i>
          </span>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = reduxState => {
  return {
    currentUser: reduxState.Users.currentUser
  };
};
export default connect(mapStateToProps)(JobProfile);
