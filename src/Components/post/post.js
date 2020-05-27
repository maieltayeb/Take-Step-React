import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "./post.css";
const Post = props => {
  return (
    <>
      <div className="postContainer">
        <div className=" pl-5 pt-5 pr-5 clearfix">
          <p className="ml-0 mt-5  postOwnerNameStyle float-left">
            Front End Developer
          </p>
          <Button className=" applyBtn float-right">Apply</Button>
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
        <div className="postBody">
          <p className="p-5 m-0  text-justify">
            {" "}
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. ….more
          </p>
        </div>
        <div className=" reactToPost clearfix">
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
        <div className="postCommentBody shadow-sm p-4 mb-8 bg-white">
          <div className=" reactToPost ml-2 clearfix">
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
          <div className="clearfix">
            <div className=" float-left ">
              <img className=" img rounded-circle" src="./img/people.png" />
            </div>
            <div className=" ml-2 float-left ">
              <Input
                placeholder="Add your comment"
                className="mt-3 commentArea"
              ></Input>
            </div>
          </div>
          <div className="clearfix">
            <div className=" float-left ">
              <img className="img mt-2 rounded-circle" src="./img/people.png" />
            </div>
            <div className=" ml-2 float-left ">
              <div className="p-2 mt-2 commentbody">
                <p className=" m-1">Aya Rabea</p>
                <p className=" m-1 small">My comment here...</p>
              </div>
            </div>
          </div>
          <div className="clearfix">
            <div className=" float-left ">
              <img className="img mt-2 rounded-circle" src="./img/people.png" />
            </div>
            <div className=" ml-2 float-left ">
              <div className="p-2 mt-2 commentbody">
                <p className=" m-1">Aya Rabea</p>
                <p className=" m-1 small">My comment here...</p>
              </div>
            </div>
          </div>
          <div className="clearfix">
            <div className=" float-left ">
              <img className="img mt-2 rounded-circle" src="./img/people.png" />
            </div>
            <div className=" ml-2 float-left ">
              <div className="p-2 mt-2 commentbody">
                <p className=" m-1">Aya Rabea</p>
                <p className=" m-1 small">My comment here...</p>
              </div>
            </div>
          </div>
          <div className="clearfix">
            <div className=" float-left ">
              <img className="img mt-2 rounded-circle" src="./img/people.png" />
            </div>
            <div className=" ml-2 float-left ">
              <div className="p-2 mt-2 commentbody">
                <p className=" m-1">Aya Rabea</p>
                <p className=" m-1 small">My comment here...</p>
              </div>
            </div>
          </div>
          <div className="clearfix">
            <div className=" float-left ">
              <img className="img mt-2 rounded-circle" src="./img/people.png" />
            </div>
            <div className=" ml-2 float-left ">
              <div className="p-2 mt-2 commentbody">
                <p className=" m-1">Aya Rabea</p>
                <p className=" m-1 small">My comment here...</p>
              </div>
            </div>
          </div>
          <div className="clearfix">
            <div className=" float-left ">
              <img className="img mt-2 rounded-circle" src="./img/people.png" />
            </div>
            <div className=" ml-2 float-left ">
              <div className="p-2 mt-2 commentbody">
                <p className=" m-1">Aya Rabea</p>
                <p className=" m-1 small">My comment here...</p>
              </div>
            </div>
          </div>
          <div className="clearfix">
            <div className=" float-left ">
              <img className="img mt-2 rounded-circle" src="./img/people.png" />
            </div>
            <div className=" ml-2 float-left ">
              <div className="p-2 mt-2 commentbody">
                <p className=" m-1">Aya Rabea</p>
                <p className=" m-1 small">My comment here...</p>
              </div>
            </div>
          </div>
          <div className="clearfix">
            <div className=" float-left ">
              <img className="img mt-2 rounded-circle" src="./img/people.png" />
            </div>
            <div className=" ml-2 float-left ">
              <div className="p-2 mt-2 commentbody">
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
export default Post;
