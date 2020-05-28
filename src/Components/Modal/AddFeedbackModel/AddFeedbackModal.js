import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Label,
  Input
} from "reactstrap";
import "./AddFeedbackModal.css";
import "../../ProjectLink/project-Link-Component.css";
const FeedbackModel = props => {
  const { buttonLabel, modalShap } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      {/* <Button  style={{marginLeft:"6px",
       backgroundColor:"#0E0D0D",borderRadius:"58px",height:"48px",width:"138px",fontSize:"20px",fontFamily:"tahoma"}}  >Create Post</Button> */}
      <div className="feedback-button" onClick={toggle}>
        <p className="feedback-button-p">Feedback</p>
      </div>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className="feedback-modalShap"
        style={{ marginLeft: "320px" }}
      >
        <ModalHeader
          className="feedback-headerModal"
          style={{ paddingLeft: "170px", paddingLeft: "315px" }}
          toggle={toggle}
        >
          Add Feedback
        </ModalHeader>
        <ModalBody className="feedback-bodyModal">
          <Form>
            <Label>Rate Task :</Label>
            <br />
            <i
              className="fas fa-star feedback-icon"
              style={{ marginLeft: "80px" }}
            ></i>
            <i className="fas fa-star feedback-icon"></i>
            <i className="fas fa-star feedback-icon"></i>
            <i className="fas fa-star feedback-icon"></i>
            <i className="fas fa-star feedback-icon"></i>
            <br /> <br />
            <Label>Comment :</Label>
            <Input type="textarea" placeholder="write your feedback" Rows="4" />
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={toggle}
            style={{
              backgroundColor: "white",
              borderRadius: "20px",
              border: "1px solid #EBC010",
              color: "black",
              width: "100px"
            }}
          >
            Cancel
          </Button>{" "}
          <Button
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
      </Modal>
    </div>
  );
};

export default FeedbackModel;
