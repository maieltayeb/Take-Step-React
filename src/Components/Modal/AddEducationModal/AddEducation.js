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
              <Label for="exampleEmail">University</Label>
              <Input
                type="university"
                name="university"
                placeholder="Ex: oxford university"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Degree</Label>
              <Input type="degree" placeholder="Ex: Bachelor's" />
            </FormGroup>

            <FormGroup>
              <Label for="exampleDate">Graduation Date</Label>
              <Input
                type="date"
                name="date"
                id="exampleDate"
                placeholder="date placeholder"
              />
            </FormGroup>

            <FormGroup>
              <Label for="gradeSelect">Grade</Label>
              <Input type="select" name="select" id="gradeSelect">
                <option>Excellent</option>
                <option>Very good</option>
                <option>Good</option>
                <option>Fair</option>
              </Input>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter style={{ width: "936px" }}>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AddEducation;
