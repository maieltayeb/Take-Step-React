import React, { useState } from "react";
import { connect, useDispatch} from "react-redux";
import {addSubmitTaskLink} from "../../../Redux/actions/InprogressActionCreator";
import axios from "axios";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Col
} from "reactstrap";

const ModalLink = props => {
  const { buttonLabel, className,state,jobId,currentUser,bussinessOwnerId,jobTitle} = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  console.log("Hii",bussinessOwnerId);
  /////////////////////////////////////////////////
  const initialFieldValues = {
    bussinessOwnerId:bussinessOwnerId,
    jobId:jobId,
    jobTitle:jobTitle,
    volunteerId:currentUser.id,
    taskLink:"",
    VolunteerComment:""
  };
  let [values, setValues] = useState(initialFieldValues);
  const handleInputChange =  e => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };  
console.log("id",jobId)
const handleSubmit = async e => {
  e.preventDefault();
  const newLink = {
    bussinessOwnerId:bussinessOwnerId,
    volunteerId:currentUser.id,
    jobId:jobId,
    jobTitle:jobTitle,
    taskLink:values.taskLink,
    VolunteerComment:values.VolunteerComment
  };
  console.log("newLink",newLink)
const response = await axios.post("http://localhost:4402/bussinessOwner/addSubmitTasks",newLink,{
  // headers:{
  //     'authorization':token
  // }
});
const { data } = response;
console.log("response",response)
if (response.status === 200) {
  console.log("respone",response.data.newLink)
  props.dispatch(addSubmitTaskLink(response.data.newLink));
  setValues({
    taskLink:"",
    VolunteerComment:""
  });
}
}










  return (
    // state.map(ele=>ele.details.id)
    <div>
      <Button
        onClick={toggle}
        style={{ background: "none", border: "none", outline: "none" }}
      >
        <Col className="pl-1">
          <i class="fas fa-upload text-danger"></i>
        </Col>
      </Button>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className={className}
        style={{ marginLeft: "320px" }}
      >
        <ModalHeader
          toggle={toggle}
          className="text-center"
          style={{
            paddingLeft: "210px",
            backgroundColor: "#494848",
            color: "#ebc010",
            paddingLeft: "320px"
          }}
        >
          Add Link
        </ModalHeader>
        {/* <div style={{ height: "50px", backgroundColor: "#494848" }}>
          <p
            className=" text-center"
            style={{ color: "#EBC010", paddingTop: "12px" }}
          >
            add link
          </p>
          <button type="button" className="close" autoCorrect="close">
            <span aria-hidden="true">x</span>
          </button>
        </div> */}
        <Form autoComplete="off" onSubmit={handleSubmit} >
        <ModalBody style={{ backgroundColor: "#f2f2f2" }}>
          <label style={{ fontSize: "13px" }}>add your link:</label>
          <br />
          <input
            type="text"
            style={{
              width: "100%",
              border: "1px solid #EBC010",
              marginBottom: "20px",
             
            }}
            name="taskLink"
            value={values.taskLink}
            onChange={handleInputChange}
          ></input>
          <br />
          <label style={{ fontSize: "13px" }}>leave your comment:</label>
          <br />
          <textarea
            type="text"
            style={{
              width: "100%",
              border: "1px solid #EBC010",
              marginBottom: "20px"
            }}
            name="VolunteerComment"
            value={values.VolunteerComment}
            onChange={handleInputChange}
          ></textarea>
        </ModalBody>

        <ModalFooter>
          <Button
            color="primary"
            onClick={toggle}
            style={{
              backgroundColor: "white",
              borderRadius: "20px",
              border: "1px solid #EBC010",
              color: "#494848",
              width: "100px"
            }}
          >
            Cancel
          </Button>{" "}
          <Button
            type="submit"
            color="secondary"
            onClick={toggle}
            style={{
              backgroundColor: "#494848",
              borderRadius: "20px",
              color: "#EBC010",
              width: "100px"
            }}
          >
            Add
          </Button>
        </ModalFooter>
        </Form>
      </Modal>
    </div>
  );
};
const mapStateToProps = reduxState => {
  return {
    currentUser: reduxState.Users.currentUser
  }
}

export default connect(mapStateToProps)(ModalLink);
