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
  Input
} from "reactstrap";
import "./AddEducation.css";

const AddEducation = props => {
  const { buttonLabel, className } = props;
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button className="bg-skill rounded-circle w-2 h-2" onClick={toggle}>
        <i class="d-inline-block p-10 fas fa-plus text-warning"></i>
        {/* <i class=" d-inline-block p-10 fas fa-pen text-warning"></i> */}
      </Button>
      <Modal
        style={{ width: "720px" }}
        className="modal-structure"
        isOpen={modal}
        toggle={toggle}
        className={className}
        style={{ marginLeft: "320px" }}
      >
        <ModalHeader
          className="modal-structure-header"
          toggle={toggle}
          style={{ paddingLeft: "310px" }}
        >
          Add Education
        </ModalHeader>
        <ModalBody style={{ width: "720px", backgroundColor: "#f2f2f2" }}>
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

export default AddEducation;
