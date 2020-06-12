import React, { useState,useEffect } from "react";
import { connect, useDispatch } from "react-redux";


import axios from "axios";
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
import "./post.css";
import { getUserById } from "../../Redux/actions/businessOwnerActionCreator";
import TaskDetails from './../../Pages/Task-Details/Task-Details';
const Post = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  const dispatch = useDispatch();




/********************comment part************************************************* */
  const { comments, currentUser } = props;

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
const [arrayOfUserswhohaveJobsState,setStatearrayOfUserswhohaveJobs]=useState([])

  var usersIdswhohaveJobs = [];
 for (var i = 0; i < props.jobs.length; i++) {
  usersIdswhohaveJobs.push(props.jobs[i].userId) 
}

var response;
 useEffect(()=>{
 
  async function getUsers(){
for(let j=0;j<usersIdswhohaveJobs.length;j++){
 response=await dispatch(getUserById(usersIdswhohaveJobs[j]))
 setStatearrayOfUserswhohaveJobs(prevState => ([
    ...prevState,
    response
  ]
  ));
}  }
getUsers();
 },[response,dispatch])
 let userJob= props.jobs.filter((job)=>{
    for(let i=0;i<usersIdswhohaveJobs.length;i++){

      if( job.userId==usersIdswhohaveJobs[i]){
        return job
      }
    }
    
  })
  console.log("props",props.jobs)
  console.log("usersJobsArray",userJob)
  console.log("arrayOfUserswhohaveJobs",arrayOfUserswhohaveJobsState);
   console.log("usersIdswhohaveJobsState", usersIdswhohaveJobs );
   console.log("users from redux", props.bussinessOwnerUsers);
/**********************job part******************* *************************************/
  return (
    <>
    
      <div className="postContainer shadow">
        {arrayOfUserswhohaveJobsState.map((user)=>( 
          <>  
        <div className=" pl-5 pt-3 pr-5 clearfix">
          <div style={{ display: "flex", "justify-content": "space-between" }}>
            <div>
              <img
                className="post-img  rounded-circle"
                src="./img/people.png"
              />
              <div className="username-post ml-3">
        <div className="mt-3 postOwnerNameStyle">{user.firstName}{user.lastName}</div>
                <div className="ml-0 postOwnerNameStyle">
               {user.jobTitle}
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
        <span className="">Days</span>
          </div>
          <div className=" ml-5 float-left">
            <span className="font-weight-bold ">Proposals :</span>
       <span className="">4</span>
          </div>
          <Button className=" applyBtn float-right">Apply</Button>
        </div>
        <div className="postBody pt-3 pr-5 pl-5  m-0">
          <p className="text-justify">
             {" "}
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. ….more 
            {/* {userJob.description} */}
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
          <div className=" reactToPost ml-2 mb-0 clearfix">
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
          <div className="clearfix comment-container">
            <div className=" float-left ">
              <img
                className="mt-3 post-img rounded-circle"
                src="./img/people.png"
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
          <div className="clearfix d-flex">
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
          </div>
         
          {/* <!----> */}

          {comments.length ? (
            comments.map(comment => (
              <div className="clearfix d-flex">
                <div className=" float-left ">
                  <img
                    className="post-img mt-2 rounded-circle"
                    src="./img/people.png"
                  />
                </div>
                <div className=" ml-2 float-left ">
                  <div className="p-2 mt-2 commentbody">
                    <p className=" m-1">
                      {currentUser.firstName + " " + currentUser.lastName}
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
        </> 
       ))} 
      </div>
     </>
  );
};
const mapStateToProps = reduxState => {
  return {
    currentUser: reduxState.Users.currentUser,
    jobs: reduxState.Users.jobs,
    bussinessOwnerUsers: reduxState.Users.bussinessOwnerUsers,
    comments: reduxState.Users.comments,
  
  };
};
export default connect(mapStateToProps)(Post);
