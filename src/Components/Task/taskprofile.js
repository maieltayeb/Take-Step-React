import React, { useState, useEffect } from "react";
import { Input } from "reactstrap";
import "./taskprofile.css";
import JobProfile from "./jobProfile";
import { connect } from "react-redux";
import profilePic from "../../profileImage/profilephoto.png";

const TaskProfile = props => {
  const { jobs, currentUser } = props;
  const [jobsCurrentUserState, setStateJobsCurrentUser] = useState([]);

  useEffect(() => {
    let jobsCurrentUser = jobs.filter(
      job => job.userId === props.currentUser.id
    );
    setStateJobsCurrentUser(jobsCurrentUser);
  }, [jobs]);
  // console.log(jobsCurrentUserState, "jobs");

  return (
    <>
      {jobsCurrentUserState.length ? (
        jobsCurrentUserState.map(item => (
          <div className="profile-postContainer m-4 rounded">
            <JobProfile job={item}></JobProfile>

            <div className="profile-postCommentBody shadow-sm p-4 mb-4 bg-white">
              <div className=" profile-reactToPost ml-2 clearfix">
                {/* <div className=" ml-3 float-left">
                  <span>Like</span>
                  <span>
                    <i className=" ml-3  mb-3 fas fa-thumbs-up"></i>
                  </span>
                </div> */}
                <div className="float-left">
                  <span>
                    <i class=" m-1  mr-2 fas fa-comment-alt"></i>
                  </span>
                  <span>Comment</span>
                </div>
              </div>
              <div className="clearfix d-flex">
                <div className=" float-left ">
                  {currentUser.imgUrl ? (
                    <img
                      src={"http://localhost:4402/" + currentUser.imgUrl}
                      className="post-img  rounded-circle"
                      alt="server pic"
                      style={{ marginTop: "10px" }}
                    />
                  ) : (
                    <img
                      src={profilePic}
                      // src={profilePic}
                      className=" img rounded-circle"
                      alt="personal pic"
                      style={{ marginTop: "10px" }}
                    />
                  )}
                  {/* <img className=" img rounded-circle" src="/img/people.png" /> */}
                </div>
                <div className=" ml-2 float-left ">
                  <Input
                    placeholder="Add your comment"
                    className="mt-3 profile-commentArea"
                    style={{
                      width: "550px",
                      border: " 1px solid #ebc010",
                      borderRadius: "50px"
                    }}
                  ></Input>
                </div>
              </div>
              <div className="clearfix d-flex">
                <div className=" float-left ">
                  <img
                    className="img mt-2 rounded-circle"
                    src="/img/people.png"
                  />
                </div>
                <div className=" ml-2 float-left ">
                  <div className="p-2 mt-2 profile-commentbody">
                    <p className=" m-1">Aya Rabea</p>
                    <p className=" m-1 small">My comment here...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="profile-postCommentBody  p-4 mb-4">No Jobs to show</div>
      )}
    </>
  );
};
const mapStateToProps = reduxState => {
  return {
    currentUser: reduxState.Users.currentUser,
    jobs: reduxState.Users.jobs
  };
};

export default connect(mapStateToProps)(TaskProfile);
