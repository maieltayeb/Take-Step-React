import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import axios from "axios";
import { getAllComments } from "../../Redux/actions/commentActionCreator";
import { addComments } from "../../Redux/actions/commentActionCreator";
import { Input } from "reactstrap";
import "./post.css";
import Job from "./job";
import { getUserById } from "../../Redux/actions/businessOwnerActionCreator";

const Post = props => {
  const { search } = props;
  let { comments, currentUser, jobs, bussinessOwnerUsers } = props;
  const dispatch = useDispatch();
  const [stateJobs, setStateJobs] = useState([]);
  /********************comment part************************************************* */

  const initialFieldValues = {
    // comment:[{body:""}  ]
    body: ""
  };
  let [values, setValues] = useState(initialFieldValues);
  const handleInputChange = e => {
    var { name, value } = e.target;

    setValues({
      ...values,
      [name]: value
    });
  };

  console.log("comments from props", comments);
  useEffect(() => {
    // const id=users.currentUser.id
    // const token = localStorage.getItem("token");
    axios
      .get(`https://take-a-step-9ca1d.firebaseio.com/comment.json`)
      .then(response => {
        const comments = response.data;
        console.log("halaaaaaaaaaaaaa", comments);

        const newComment = [];
        for (const key in comments) {
          newComment.push({ id: key, ...comments[key] });
        }
        console.log("newcomment", newComment);
        dispatch(getAllComments(newComment));
        newComment.map(comment => {
          console.log("comment body heeeeeeeeeeeeeeeeeee", comment.body);
        });
        // console.log("newcomment body", newComment[0].body);
      })
      .catch(console.log);
  }, [dispatch]);

  const handleKeyUp = async event => {
    const { key } = event;
    const newComment = {
      body: values.body
    };
    if (key === "Enter") {
      const response = await axios.post(
        "https://take-a-step-9ca1d.firebaseio.com/comment.json",
        newComment
      );
      const { data } = response;
      if (response.status === 200) props.dispatch(addComments(newComment));
      setValues({ body: "" });
    }
  };

  /********************comment part************************************************* */

  /**********************job part******************* */

  useEffect(() => {
    let userIds = jobs.map(job => job.userId);
    userIds = [...new Set(userIds)];
    userIds.forEach(userId => dispatch(getUserById(userId)));
  }, [jobs, dispatch]);
  useEffect(() => {
    setStateJobs(jobs);
    if (search !== "") {
      jobs = jobs.filter(job =>
        job.description.toLowerCase().includes(search.toLowerCase())
      );
      setStateJobs(jobs);
    }
    console.log("jobs", jobs);
  }, [search, jobs]);
  console.log("statjobs", stateJobs);

  return (
    <>
      {stateJobs
        .slice(0)
        .reverse()
        .map(job => {
          const user = bussinessOwnerUsers.find(u => u.id === job.userId);
          return (
            <>
              <div className="postContainer shadow">
                <Job user={user} job={job}></Job>

                <div className="postCommentBody shadow-sm p-4 mb-8 bg-white">
                  <div className=" reactToPost ml-2 mb-0 clearfix">
                    {/* <div className=" ml-3 float-left">
                      <span>Like</span>
                      <span>
                        <i class=" ml-3  mb-3 fas fa-thumbs-up"></i>
                      </span>
                    </div> */}
                    <div className="float-left">
                      <span>
                        <i class=" m-1  mr-2 fas fa-comment-alt"></i>
                      </span>
                      <span>Comment</span>
                    </div>
                  </div>
                  <div className="clearfix comment-container">
                    <div className=" float-left ">
                      <img
                        className="mt-3 post-img rounded-circle"
                        src="./img/developer.jpg"
                      />
                    </div>
                    <div className=" ml-2 float-left ">
                      <Input
                        placeholder="Add your comment"
                        className="mt-3 commentArea"
                        name="body"
                        value={values.body}
                        onChange={handleInputChange}
                        onKeyUp={handleKeyUp}
                        style={{
                          width: " 474px",
                          border: " 1px solid #ebc010",
                          "border-radius": " 50px"
                        }}
                      ></Input>
                    </div>
                  </div>
                  {/* <div className="clearfix d-flex">
                    <div className=" float-left ">
                      <img
                        className="post-img mt-2 rounded-circle"
                        src="./img/people.png"
                      />
                    </div>
                    <div className=" ml-2 float-left ">
                      <div className="p-2 mt-2 commentbody">
                        <p className=" m-1">Aya Rabea</p>
                        <p className=" m-1 small">My comment here...</p>
                      </div>
                    </div>
                  </div> */}

                  {comments.length ? (
                    comments.map(comment => (
                      <div className="clearfix d-flex">
                        <div className=" float-left ">
                          <img
                            className="post-img mt-2 rounded-circle"
                            src="./img/developer.jpg"
                          />
                        </div>
                        <div className=" ml-2 float-left ">
                          <div className="p-2 mt-2 commentbody">
                            <p className=" m-1">
                              {currentUser.firstName +
                                " " +
                                currentUser.lastName}
                            </p>
                            <p className=" m-1 small">{comment.body} </p>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="ml-3 mt-3">Add Your Education Here..</div>
                  )}
                </div>
              </div>
            </>
          );
        })}
    </>
  );
};
const mapStateToProps = reduxState => {
  return {
    currentUser: reduxState.Users.currentUser,
    jobs: reduxState.Users.jobs,
    bussinessOwnerUsers: reduxState.Users.bussinessOwnerUsers,
    comments: reduxState.Users.comments
  };
};
export default connect(mapStateToProps)(Post);
