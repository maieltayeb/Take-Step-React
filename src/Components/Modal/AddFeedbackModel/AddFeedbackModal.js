import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
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
      <Modal  isOpen={modal} toggle={toggle} className={modalShap}>
        <ModalHeader  className="headerModal" toggle={toggle}>Add Feedback</ModalHeader>
        <ModalBody className="bodyModal">
       

        </ModalBody>
        <ModalFooter className=" bodyModal">
          <Button className=" mr-0 cancelModal"
           onClick={toggle}>Cancel</Button>
          <Button className=" ml-2 mr-1 addModal" onClick={toggle}>Add</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default FeedbackModel ;