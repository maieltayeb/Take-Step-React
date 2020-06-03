import React, { useState } from "react";
import {
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

import "./modal.css";
import CreateTask from "../../../Pages/HomePage/CreateTaskSection/createTask";
const ModalCreateTask = props => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      {/* <CreateTask onClick={toggle}></CreateTask> */}

      <p onClick={toggle}> What's your Task ?</p>

      <Modal
        className="modalShap"
        isOpen={modal}
        toggle={toggle}
        style={{ marginLeft: "320px" }}
      >
        <ModalHeader
          className="headerModal"
          toggle={toggle}
          style={{ paddingLeft: "320px" }}
        >
          Create Task
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
            <a>username</a>
          </div>
          <div style={{ marginLeft: "60px", marginTop: "20px" }}>
            <Form style={{ width: "100%" }}>
              <FormGroup row>
                <Label for="TaskTitle">Task Title &nbsp;&nbsp;&nbsp;:</Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="TaskTitle"
                    id="TaskTitle"
                    placeholder="write task title "
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="Proposals">Proposals &nbsp;&nbsp;:</Label>
                <Col sm={4}>
                  <Input
                    type="number"
                    name="Proposals"
                    id="Proposals"
                    placeholder="Proposals num "
                    min="1"
                    max="20"
                  />
                </Col>
                <Label for="Time">Task Duration:</Label>
                <Col sm={2}>
                  <Input
                    type="number"
                    name="Time"
                    id="Time"
                    min="1"
                    max="20"
                  ></Input>
                </Col>
                <Label for="Time">Days</Label>
              </FormGroup>

              <FormGroup row>
                <Label for="Description">Description :</Label>
                <Col sm={10}>
                  <Input type="textarea" name="text" id="Description" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleFile">File /Image :</Label>
                <Col sm={10}>
                  <Input type="file" name="file" id="exampleFile" />
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
            onClick={toggle}
            style={{ color: "#ebc010", backgroundColor: "#494848" }}
          >
            Cancel
          </Button>
          <Button
            className=" ml-2 mr-1 addModal"
            onClick={toggle}
            style={{ color: "#ebc010", backgroundColor: "#494848" }}
          >
            Add
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalCreateTask;
