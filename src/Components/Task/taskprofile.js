import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "./taskprofile.css";
const TaskProfile = props => {
  return (
    <>
      <div className="profile-postContainer m-4 rounded">
        <div className=" pl-5 p-3  clearfix">
          <p className="ml-0 mt-3  profile-postOwnerNameStyle float-left">
            Front End Developer
          </p>
        </div>
        <div className=" ml-5  clearfix">
          <div className=" float-left">
            <span className=" font-weight-bold">Time : </span>
            <span className=""> 3 Days</span>
          </div>
          <div className=" ml-5 float-left">
            <span className="font-weight-bold ">Proposals :</span>
            <span className=""> 4</span>
          </div>
        </div>
        <div className="profile-postBody">
          <p className="p-5 m-0  text-justify">
            {" "}
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. ….more
          </p>
        </div>
        <div className=" profile-reactToPost clearfix">
          <div className=" ml-5 float-left">
            <span className="mt-2 mr-2">4</span>
            <span>
              <i class=" mb-3 fas fa-thumbs-up"></i>
            </span>
            {/* <img  className="mb-3" src="./img/smallLike.png"/> */}
          </div>
          <div className=" ml-5 float-left">
            <span className="mt-2 mr-2">5</span>
            <span>
              <i class=" mb-3 fas fa-comment-alt"></i>
            </span>
            {/* <img className=" d-inline mb-2"  src="./img/smallcomment.png"/> */}
          </div>
        </div>
        <div className="profile-postCommentBody shadow-sm p-4 mb-4 bg-white">
          <div className=" profile-reactToPost ml-2 clearfix">
            <div className=" ml-3 float-left">
              <span>Like</span>
              <span>
                <i class=" ml-3  mb-3 fas fa-thumbs-up"></i>
              </span>
              {/* <img className="mb-3" src="./img/like.png"/> */}
            </div>
            <div className=" ml-4 float-left">
              <span>Comment</span>
              <span>
                <i class=" ml-3  mb-3 fas fa-comment-alt"></i>
              </span>
              {/* <img className="mb-2 d-inline"  src="./img/comment.png"/> */}
            </div>
          </div>
          <div className="clearfix d-flex">
            <div className=" float-left ">
              <img className=" img rounded-circle" src="./img/people.png" />
            </div>
            <div className=" ml-2 float-left ">
              <Input
                placeholder="Add your comment"
                className="mt-3 profile-commentArea"
              ></Input>
            </div>
          </div>
          <div className="clearfix d-flex">
            <div className=" float-left ">
              <img className="img mt-2 rounded-circle" src="./img/people.png" />
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
    </>
  );
};

export default TaskProfile;
