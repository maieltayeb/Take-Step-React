import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input
} from "reactstrap";

const PersonalInfoModal = props => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <i class="fas fa-pencil-alt" onClick={toggle}></i>
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
          Edit Personal Info
        </ModalHeader>
        <ModalBody style={{ backgroundColor: "#f2f2f2" }}>
          <div>
            <img
              src="./img/profilephoto.png"
              style={{
                width: "20%",
                borderRadius: "50%",
                marginLeft: "40%"
              }}
            />
            <i
              class="fas fa-pencil-alt"
              style={{ display: "block", marginLeft: "55%", color: "#ebc010" }}
            ></i>
            {/* <FormGroup>
              <Label for="exampleFile">upload Photo</Label>
              <Input type="file" name="file" id="exampleFile" />
            </FormGroup> */}
          </div>
          <label style={{ fontSize: "13px" }}>Username</label>
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
          <label style={{ fontSize: "13px" }}>Company Name</label>
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
          <label style={{ fontSize: "13px" }}>Job title</label>
          <br />
          <input
            type="text"
            style={{
              width: "100%",
              border: "1px solid #EBC010",
              marginBottom: "20px"
            }}
          ></input>
          <br /> <label style={{ fontSize: "13px" }}>Location</label>
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
          <label style={{ fontSize: "13px" }}>add description:</label>
          <br />
          <input
            type="text"
            style={{
              width: "100%",
              height: "100px",
              border: "1px solid #EBC010",
              marginBottom: "40px"
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

export default PersonalInfoModal;
