import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import "./AddEducation.css";

const AddEducation = (props) => {
  const { buttonLabel, className } = props;
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}></Button>
      <Modal
        style={{ width: "720px" }}
        className="modal-structure"
        isOpen={modal}
        toggle={toggle}
        className={className}
      >
        <ModalHeader className="modal-structure-header" toggle={toggle}>
          Add Education
        </ModalHeader>
        <ModalBody style={{ width: "936px" }}>
          <Form>
            <FormGroup>
              <Label className="lab-size" for="exampleEmail">
                University
              </Label>
              <Input
                className="input-border"
                type="university"
                name="university"
                placeholder="Ex: oxford university"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Degree</Label>
              <Input
                className="input-border"
                type="degree"
                placeholder="Ex: Bachelor's"
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleDate">Graduation Date</Label>
              <Input
                className="input-border"
                type="date"
                name="date"
                id="exampleDate"
                placeholder="date placeholder"
              />
            </FormGroup>

            <FormGroup>
              <Label for="gradeSelect">Grade</Label>
              <Input
                className="input-border"
                type="select"
                name="select"
                id="gradeSelect"
              >
                <option>Excellent</option>
                <option>Very good</option>
                <option>Good</option>
                <option>Fair</option>
              </Input>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter style={{ width: "936px" }}>
          <Button id="cancel-btn" onClick={toggle}>
            Cancel
          </Button>{" "}
          <Button id="add-btn" onClick={toggle}>
            Add
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AddEducation;
