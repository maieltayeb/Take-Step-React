import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalLink = props => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className} style={{}}>
        <ModalHeader
          toggle={toggle}
          className="text-center"
          style={{
            paddingLeft: "210px",
            backgroundColor: "#EBC010",
            color: "black"
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
        <ModalBody>
          <label style={{ fontSize: "13px" }}>add your link:</label>
          <br />
          <input
            type="text"
            style={{
              width: "100%",
              border: "1px solid #EBC010",
              marginBottom: "20px"
            }}
          ></input>
          <br />
          <label style={{ fontSize: "13px" }}>leave your comment:</label>
          <br />
          <input
            type="text"
            style={{
              width: "100%",
              border: "1px solid #EBC010",
              marginBottom: "20px"
            }}
          ></input>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={toggle}
            style={{
              backgroundColor: "white",
              borderRadius: "20px",
              border: "1px solid #EBC010",
              color: "black"
            }}
          >
            submit
          </Button>{" "}
          <Button
            color="secondary"
            onClick={toggle}
            style={{
              backgroundColor: "black",
              borderRadius: "20px",
              color: "#EBC010"
            }}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalLink;
