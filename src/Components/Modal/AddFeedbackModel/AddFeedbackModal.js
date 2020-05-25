import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Form,Label, Input } from 'reactstrap';
import   "./AddFeedbackModal.css"
const FeedbackModel = (props) => {
  const {
    buttonLabel,
    modalShap,
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div >
      <Button  style={{marginLeft:"6px",
       backgroundColor:"#0E0D0D",borderRadius:"58px",height:"48px",width:"138px",fontSize:"20px",fontFamily:"tahoma"}} onClick={toggle}>Create Post</Button>
      <Modal  isOpen={modal} toggle={toggle} className="feedback-modalShap">
        <ModalHeader  className="feedback-headerModal"style={{paddingLeft:"170px"}} toggle={toggle}>Add Feedback</ModalHeader>
        <ModalBody className="feedback-bodyModal">
   <Form>
     <Label>Rate Task :</Label>
        <br />
        <i className="fas fa-star feedback-icon" style={{marginLeft:"80px"}}></i>
        <i className="fas fa-star feedback-icon"></i>
        <i className="fas fa-star feedback-icon"></i>
        <i className="fas fa-star feedback-icon"></i>
        <i className="fas fa-star feedback-icon"></i>
        <br />  <br />
        <Label>Comment :</Label>
        <Input type="textarea"  placeholder="write your feedback" Rows="4" />

   </Form>
      


        </ModalBody>
        <ModalFooter className="feedback-bodyModal">
          <Button className=" mr-0 feedback-cancelModal"
           onClick={toggle}>Cancel</Button>
          <Button className=" ml-2 mr-1 feedback-addModal" onClick={toggle}>Add</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default FeedbackModel ;