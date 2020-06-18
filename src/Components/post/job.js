import React, { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { getAllComments } from "../../Redux/actions/commentActionCreator";
import { addComments } from "../../Redux/actions/commentActionCreator";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import "./post.css";
import {
  getUserById,
  DeleteJob,
  EditJob
} from "../../Redux/actions/businessOwnerActionCreator";
import { addTask } from "../../Redux/actions/volunteerActionCreator";
import {
  getTaskById,
  AddTasksToVol
} from "./../../Redux/actions/InprogressActionCreator";

const Job = props => {
  const dispatch = useDispatch();
  const { currentUser, jobs, bussinessOwnerUsers, state } = props;
  /******** edit modal***** */
  const [modal, setModal] = useState(false);
  const togglemodal = () => setModal(!modal);
  const [stateModal, setStateModal] = useState({
    jobTitle: props.job.jobTitle,
    proposals: props.job.proposals,
    timeDurationNumber: props.job.timeDurationNumber,
    // timeDurationType: "Days",
    description: props.job.description,
    userId: props.currentUser.id,
    enabled: true,
    tasks: []
  });
  /********modal***** */

  const user = localStorage.getItem("user");
  const volunteerId = JSON.parse(user).id;
  const [applyButton, setStateApplyButton] = useState(props.job.enabled);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  useEffect(() => {
    let userIds = jobs.map(job => job.userId);
    userIds = [...new Set(userIds)];
    userIds.forEach(userId => dispatch(getUserById(userId)));
  }, [jobs, dispatch]);

  const handleClick = taskID => {
    console.log(taskID);

    setStateApplyButton(!applyButton);

    dispatch(AddTasksToVol(volunteerId, taskID));
    // }
  };

  /************handel delete job**************** */
  const handelDeleteJob = () => {
    if (currentUser.id === props.job.userId) {
      dispatch(DeleteJob(props.job.id));
    } else {
      alert("you can't delete this job");
    }
  };
  /************handel delete job**************** */
  /*************handel edit job************** */
  const handelEditJob = () => {
    if (currentUser.id === props.job.userId) {
      togglemodal();
    } else {
      alert("you can't Edit this job");
    }
  };

  /*************handel modal  job************** */
  const handleSubmit = e => {
    e.preventDefault();
    console.log("id", props.job.id);
    if (currentUser.id === props.job.userId) {
      dispatch(EditJob(stateModal, props.job.id));
    } else {
      alert("you can't Edit this job");
    }
  };
  /*************handel modal change ************* */
  const handleChange = e => {
    const { name, value } = e.target;
    setStateModal(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  if (props.job.comments) {
    return (
      <>
        <div className=" pl-5 pt-3 pr-5 clearfix">
          <div style={{ display: "flex", "justify-content": "space-between" }}>
            <div>
              <img
                className="post-img  rounded-circle"
                src="./img/developer.jpg"
              />
              <div className="username-post ml-3">
                <div className="mt-3 postOwnerNameStyle">
                  {props.user && props.user.firstName}
                  &nbsp;&nbsp;
                  {props.user && props.user.lastName}
                </div>
                <div className="ml-0 postOwnerNameStyle">
                  {props.user && props.user.jobTitle}
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
                <DropdownItem onClick={handelEditJob}> Edit </DropdownItem>

                <Modal
                  className="modalShap"
                  isOpen={modal}
                  toggle={togglemodal}
                  style={{ marginLeft: "320px" }}
                >
                  <ModalHeader
                    className="headerModal"
                    toggle={togglemodal}
                    style={{ paddingLeft: "320px" }}
                  >
                    Edit Job
                  </ModalHeader>

                  <ModalBody className="bodyModal">
                    <div>
                      <img
                        src="./img/profilephoto.png"
                        alt="userimg"
                        style={{
                          width: "10%",
                          borderRadius: "50%",
                          marginRight: "20px"
                        }}
                      />
                      <a>
                        {props.currentUser.firstName}
                        &nbsp;&nbsp;
                        {props.currentUser.lastName}
                      </a>
                    </div>
                    <div style={{ marginLeft: "60px", marginTop: "20px" }}>
                      <Form
                        style={{ width: "100%" }}
                        onSubmit={handleSubmit}
                        id="form"
                      >
                        {/* <FormGroup row>
          <Label for="jobTitle">Job Title &nbsp;&nbsp;&nbsp;:</Label>
          <Col sm={10}>
            <Input
              type="text"
              name="jobTitle"
              placeholder="write task title "
              onChange={handleChange}
            />
          </Col>
        </FormGroup> */}

                        <FormGroup row className="m-3">
                          <Label for="jobTitle">Job title &nbsp;&nbsp;:</Label>
                          <Col sm={10} className="mb-3">
                            <Input
                              type="text"
                              name="jobTitle"
                              id="jobTitle"
                              onChange={handleChange}
                              value={stateModal.jobTitle}
                            />
                          </Col>
                          <Label for="Proposals">Proposals &nbsp;&nbsp;:</Label>
                          <Col sm={4}>
                            <Input
                              type="number"
                              name="proposals"
                              id="Proposals"
                              placeholder="Proposals num "
                              min="5"
                              max="15"
                              onChange={handleChange}
                              value={stateModal.proposals}
                            />
                          </Col>
                          <Label for="Time">Task Deadline:</Label>
                          <Col sm={4}>
                            <Input
                              // type="number"
                              name="timeDurationNumber"
                              id="Time"
                              type="date"
                              // value="0"
                              value={stateModal.timeDurationNumber}
                              onChange={handleChange}
                            ></Input>
                          </Col>
                          <Col style={{ paddingRight: "28px" }}>
                            {/* <Input
              type="select"
              name="timeDurationType"
              id="exampleSelect"
              onChange={handleChange}
            >
              {props.timeDurationTypes.map(item => (
                <option key={item.id} value={item.durationType}>
                  {item.durationType}
                </option>
              ))}
            </Input> */}
                          </Col>
                        </FormGroup>

                        <FormGroup row>
                          <Label for="Description">Description :</Label>
                          <Col sm={10}>
                            <Input
                              type="textarea"
                              name="description"
                              id="Description"
                              onChange={handleChange}
                              value={stateModal.description}
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup row>
                          <Label for="exampleFile">File /Image :</Label>
                          <Col sm={10}>
                            <Input
                              type="file"
                              name="file"
                              id="exampleFile"
                              onChange={handleChange}
                            />
                          </Col>
                        </FormGroup>
                      </Form>
                    </div>
                  </ModalBody>
                  <ModalFooter
                    className=" bodyModal"
                    style={{ backgroundColor: "white" }}
                  >
                    <Button
                      className=" mr-0 cancelModal"
                      onClick={togglemodal}
                      style={{ color: "#ebc010", backgroundColor: "#494848" }}
                    >
                      Cancel
                    </Button>
                    <Button
                      className=" ml-2 mr-1 addModal"
                      onClick={togglemodal}
                      type="submit"
                      form="form"
                      // onSubmit={handleSubmit}
                      style={{ color: "#ebc010", backgroundColor: "#494848" }}
                    >
                      edit
                    </Button>
                  </ModalFooter>
                </Modal>

                <DropdownItem onClick={handelDeleteJob}>Delete</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>

          <div
            className=" ml-5  clearfix mt-3 d-flex"
            style={{ justifyContent: "space-between" }}
          >
            <div className=" float-left">
              <span className=" font-weight-bold">Deadline : </span>
              <span className="">
                {props.job && props.job.timeDurationNumber}&nbsp;&nbsp;
                {props.job && props.job.timeDurationType}
              </span>
            </div>
            <div className=" ml-5 float-left">
              <span className="font-weight-bold ">Proposals :</span>
              <span className="">&nbsp;{props.job && props.job.proposals}</span>
            </div>
            {!applyButton ? (
              <Button
                style={{ backgroundColor: "#6c757d" }}
                disabled
                className=" applyBtn float-right"
                onClick={() => handleClick(props.job.id)}
              >
                Applied
              </Button>
            ) : (
              <Button
                className=" applyBtn float-right"
                onClick={() => handleClick(props.job.id)}
              >
                Apply
              </Button>
            )}
          </div>
        </div>
        <div className=" postBody  pr-5 pl-5  m-0">
          <span className=" font-weight-bold">job Title : </span>
          <span className="">{props.job && props.job.jobTitle}</span>
        </div>
        <div className="postBody pt-3 pr-5 pl-5  m-0">
          <p className="text-justify">{props.job && props.job.description}</p>
        </div>

        <div className=" reactToPost clearfix">
          {/* <div className=" ml-5 float-left">
                <span className="mt-2 mr-2">4</span>
                <span>
                  <i class=" mb-3 fas fa-thumbs-up"></i>
                </span>
                {/* <img  className="mb-3" src="./img/smallLike.png"/> */}
          {/* </div>  */}
          <div className=" ml-4 float-left">
            <span className="mt-2 mr-2">
              {Object.keys(props.job.comments).length}
            </span>
            <span>
              <i class=" mb-3 fas fa-comment-alt"></i>
            </span>
            {/* <img className=" d-inline mb-2"  src="./img/smallcomment.png"/> */}
          </div>
        </div>
      </>
    );
  } else {
    // return (
    //   <>
    //     <div className=" pl-5 pt-3 pr-5 clearfix">
    //       <div style={{ display: "flex", "justify-content": "space-between" }}>
    //         <div>
    //           <img className="post-img  rounded-circle" src="./img/people.png" />
    //           <div className="username-post ml-3">
    //             <div className="mt-3 postOwnerNameStyle">
    //               {props.user && props.user.firstName}
    //               &nbsp;&nbsp;
    //               {props.user && props.user.lastName}
    //             </div>
    //             <div className="ml-0 postOwnerNameStyle">
    //               {props.user && props.user.jobTitle}
    //             </div>
    //           </div>
    //         </div>

    //         <Dropdown
    //           isOpen={dropdownOpen}
    //           toggle={toggle}
    //           style={{ display: "flex", justifyContent: "flex-end" }}
    //         >
    //           <DropdownToggle style={{ background: "none", border: "none" }}>
    //             <div className="post-ortions">...</div>
    //           </DropdownToggle>
    //           <DropdownMenu>
    //             <DropdownItem>Edit</DropdownItem>
    //             <DropdownItem>Delete</DropdownItem>
    //           </DropdownMenu>
    //         </Dropdown>
    //       </div>
    //     </div>

    //     <div
    //       className=" ml-5  clearfix mt-3 d-flex"
    //       style={{ justifyContent: "space-between" }}
    //     >
    //       <div className=" float-left">
    //         <span className=" font-weight-bold">Deadline : </span>
    //         <span className="">
    //           {props.job && props.job.timeDurationNumber}&nbsp;&nbsp;
    //           {props.job && props.job.timeDurationType}
    //         </span>
    //       </div>
    //       <div className=" ml-5 float-left">
    //         <span className="font-weight-bold ">Proposals :</span>
    //         <span className="">&nbsp;{props.job && props.job.proposals}</span>
    //       </div>
    //       {!applyButton ? (
    //         <Button
    //           style={{ backgroundColor: "#6c757d" }}
    //           disabled
    //           className=" applyBtn float-right"
    //           onClick={() => handleClick(props.job.id)}
    //         >
    //           Applied
    //         </Button>
    //       ) : (
    //         <Button
    //           className=" applyBtn float-right"
    //           onClick={() => handleClick(props.job.id)}
    //         >
    //           Apply
    //         </Button>
    //       )}
    //     </div>
    //     <div className="postBody pt-3 pr-5 pl-5  m-0">
    //       <p className="text-justify">{props.job && props.job.description}</p>
    //     </div>

    //     <div className=" reactToPost clearfix">
    //       {/* <div className=" ml-5 float-left">
    //               <span className="mt-2 mr-2">4</span>
    //               <span>
    //                 <i class=" mb-3 fas fa-thumbs-up"></i>
    //               </span>
    //               {/* <img  className="mb-3" src="./img/smallLike.png"/> */}
    //       {/* </div>  */}
    //       <div className=" ml-4 float-left">
    //       <span className="mt-2 mr-2">0</span>
    //         <span>
    //           <i class=" mb-3 fas fa-comment-alt"></i>
    //         </span>
    //         {/* <img className=" d-inline mb-2"  src="./img/smallcomment.png"/> */}
    //       </div>
    //     </div>
    //   </>
    // );

    /////////////////////////////////////////////////////
    return (
      <>
        <div className=" pl-5 pt-3 pr-5 clearfix">
          <div style={{ display: "flex", "justify-content": "space-between" }}>
            <div>
              <img
                className="post-img  rounded-circle"
                src="./img/people.png"
              />
              <div className="username-post ml-3">
                <div className="mt-3 postOwnerNameStyle">
                  {props.user && props.user.firstName}
                  &nbsp;&nbsp;
                  {props.user && props.user.lastName}
                </div>
                <div className="ml-0 postOwnerNameStyle">
                  {props.user && props.user.jobTitle}
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
                <DropdownItem onClick={togglemodal}> Edit </DropdownItem>

                <Modal
                  className="modalShap"
                  isOpen={modal}
                  toggle={togglemodal}
                  style={{ marginLeft: "320px" }}
                >
                  <ModalHeader
                    className="headerModal"
                    toggle={togglemodal}
                    style={{ paddingLeft: "320px" }}
                  >
                    Edit Job
                  </ModalHeader>

                  <ModalBody className="bodyModal">
                    <div>
                      <img
                        src="./img/profilephoto.png"
                        alt="userimg"
                        style={{
                          width: "10%",
                          borderRadius: "50%",
                          marginRight: "20px"
                        }}
                      />
                      <a>
                        {props.currentUser.firstName}
                        &nbsp;&nbsp;
                        {props.currentUser.lastName}
                      </a>
                    </div>
                    <div style={{ marginLeft: "60px", marginTop: "20px" }}>
                      <Form
                        style={{ width: "100%" }}
                        onSubmit={handleSubmit}
                        id="form"
                      >
                        {/* <FormGroup row>
        <Label for="jobTitle">Job Title &nbsp;&nbsp;&nbsp;:</Label>
        <Col sm={10}>
          <Input
            type="text"
            name="jobTitle"
            placeholder="write task title "
            onChange={handleChange}
          />
        </Col>
      </FormGroup> */}

                        <FormGroup row>
                          {/* <Label for="jobTitle">Job title &nbsp;&nbsp;:</Label>
        <Col sm={10}>
          <Input
            type="text"
            name="jobTitle"
            id="jobTitle"
            onChange={handleChange}
          />
        </Col> */}
                          <Label for="Proposals">Proposals &nbsp;&nbsp;:</Label>
                          <Col sm={4}>
                            <Input
                              type="number"
                              name="proposals"
                              id="Proposals"
                              placeholder="Proposals num "
                              min="5"
                              max="15"
                              onChange={handleChange}
                              value={props.job.proposals}
                            />
                          </Col>
                          <Label for="Time">Task Deadline:</Label>
                          <Col sm={4}>
                            <Input
                              // type="number"
                              name="timeDurationNumber"
                              id="Time"
                              type="date"
                              // value="0"
                              // min="1"
                              value={props.job.timeDurationNumber}
                              onChange={handleChange}
                            ></Input>
                          </Col>
                          <Col style={{ paddingRight: "28px" }}>
                            {/* <Input
            type="select"
            name="timeDurationType"
            id="exampleSelect"
            onChange={handleChange}
          >
            {props.timeDurationTypes.map(item => (
              <option key={item.id} value={item.durationType}>
                {item.durationType}
              </option>
            ))}
          </Input> */}
                          </Col>
                        </FormGroup>

                        <FormGroup row>
                          <Label for="Description">Description :</Label>
                          <Col sm={10}>
                            <Input
                              type="textarea"
                              name="description"
                              id="Description"
                              onChange={handleChange}
                              value={props.job.description}
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup row>
                          <Label for="exampleFile">File /Image :</Label>
                          <Col sm={10}>
                            <Input
                              type="file"
                              name="file"
                              id="exampleFile"
                              onChange={handleChange}
                            />
                          </Col>
                        </FormGroup>
                        <Button
                          className=" mr-0 cancelModal"
                          onClick={togglemodal}
                          style={{
                            color: "#ebc010",
                            backgroundColor: "#494848"
                          }}
                        >
                          Cancel
                        </Button>
                        <Button
                          className=" ml-2 mr-1 addModal"
                          // onClick={toggle}
                          type="submit"
                          form="form"
                          // onSubmit={handleSubmit}
                          style={{
                            color: "#ebc010",
                            backgroundColor: "#494848"
                          }}
                        >
                          edit
                        </Button>
                      </Form>
                    </div>
                  </ModalBody>
                  <ModalFooter
                    className=" bodyModal"
                    style={{ backgroundColor: "white" }}
                  ></ModalFooter>
                </Modal>

                <DropdownItem onClick={handelDeleteJob}>Delete</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>

        <div
          className=" ml-5  clearfix mt-3 d-flex"
          style={{ justifyContent: "space-between" }}
        >
          <div className=" float-left">
            <span className=" font-weight-bold">Deadline : </span>
            <span className="">
              {props.job && props.job.timeDurationNumber}&nbsp;&nbsp;
              {props.job && props.job.timeDurationType}
            </span>
          </div>
          <div className=" ml-5 float-left">
            <span className="font-weight-bold ">Proposals :</span>
            <span className="">&nbsp;{props.job && props.job.proposals}</span>
          </div>
          {!applyButton ? (
            <Button
              style={{ backgroundColor: "#6c757d" }}
              disabled
              className=" applyBtn float-right"
              onClick={() => handleClick(props.job.id)}
            >
              Applied
            </Button>
          ) : (
            <Button
              className=" applyBtn float-right"
              onClick={() => handleClick(props.job.id)}
            >
              Apply
            </Button>
          )}
        </div>
        <div className="postBody pt-3 pr-5 pl-5  m-0">
          <p className="text-justify">{props.job && props.job.description}</p>
        </div>

        <div className=" reactToPost clearfix">
          {/* <div className=" ml-5 float-left">
              <span className="mt-2 mr-2">4</span>
              <span>
                <i class=" mb-3 fas fa-thumbs-up"></i>
              </span>
              {/* <img  className="mb-3" src="./img/smallLike.png"/> */}
          {/* </div>  */}
          <div className=" ml-4 float-left">
            <span className="mt-2 mr-2">0</span>
            <span>
              <i class=" mb-3 fas fa-comment-alt"></i>
            </span>
            {/* <img className=" d-inline mb-2"  src="./img/smallcomment.png"/> */}
          </div>
        </div>
      </>
    );
  }
};

const mapStateToProps = reduxState => {
  return {
    currentUser: reduxState.Users.currentUser,
    jobs: reduxState.Users.jobs,
    bussinessOwnerUsers: reduxState.Users.bussinessOwnerUsers,

    state: reduxState.Inprogress.newTask
  };
};
export default connect(mapStateToProps)(Job);
