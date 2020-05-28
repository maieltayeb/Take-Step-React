import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const AboutModal = props => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <i class="fas fa-plus" onClick={toggle}></i>

      <Modal
        isOpen={modal}
        toggle={toggle}
        className={className}
        style={{ marginLeft: "320px" }}
      >
        <ModalHeader
          toggle={toggle}
          className="text-center rounded-top"
          style={{
            paddingLeft: "210px",
            backgroundColor: "#494848",
            color: "#ebc010",
            paddingLeft: "320px"
          }}
        >
          Descripe yourself
        </ModalHeader>
        <ModalBody style={{ backgroundColor: "#f2f2f2" }}>
          <label style={{ fontSize: "13px" }}>add description:</label>
          <br />
          <input
            type="text"
            style={{
              width: "100%",
              height: "200px",
              border: "1px solid #EBC010",
              marginBottom: "40px"
            }}
          ></input>
          {/* <br />
          <label style={{ fontSize: "13px" }}>leave your comment:</label>
          <br />
          <input
            type="text"
            style={{
              width: "100%",
              border: "1px solid #EBC010",
              marginBottom: "20px"
            }}
          ></input> */}
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

export default AboutModal;
