import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

//import { editOwnerUser } from "../../../Redux/actions/educationActionCreator";

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
import "./EditEducationModal.css";

const EditEducation = props => {
  const { buttonLabel, className } = props;
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  // const educations = useSelector(state => state.educations);

  // const [newUser, setNewUser] = useState(educations);

  // useEffect(() => {
  //   setNewUser(newUser);
  // }, [newUser]);
  // console.log("hhhhh", newUser);
  // const dispatch = useDispatch();
  // const userId = props.match.params.id;

  // const changeHandler = e => {
  //   const updatedUser = { ...newUser };
  //   updatedUser[e.target.name] = e.target.value;
  //   setNewUser(updatedUser);
  // };
  // const submitHandler = async e => {
  //   e.preventDefault();
  //   console.log("submitted");

  //   dispatch(editOwnerUser(userId, newUser));
  //   console.log("id", userId);
  // };

  return (
    <div>
      <i
        class=" d-inline-block p-10 fas fa-pen text-warning"
        onClick={toggle}
        style={{ cursor: "pointer" }}
      ></i>
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

        <Form>
          <ModalBody style={{ width: "720px", backgroundColor: "#f2f2f2" }}>
            <FormGroup>
              <Label className="lab-size" for="exampleEmail">
                University
              </Label>
              <Input
                className="input-border"
                type="university"
                name="university"
                placeholder="Ex: oxford university"
                name="university"
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Degree</Label>
              <Input
                className="input-border"
                type="degree"
                name="degree"
                placeholder="Ex: Bachelor's"
                // value={newUser.degree}
                // onChange={changeHandler}
                // value={newUser.degree}
                // onChange={changeHandler}
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
              type="submit"
              style={{
                backgroundColor: "#494848",
                borderRadius: "20px",
                color: "#EBC010",
                width: "100px"
              }}
              onClick={toggle}
            >
              Add
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  );
};

export default withRouter(EditEducation);

// const educations = useSelector(state => state.educations);
// const [newEdu, setNewEdu] = useState(educations);

// useEffect(() => {
//   setNewEdu(educations);
// }, [educations]);

// const dispatch = useDispatch();
// const educationId = props.matcid;
// console.log(props);
// console.log(userId);

// const changeHandler = e => {
//   const updatedEducation = { ...newEdu };
//   updatedEducation[e.target.name] = e.target.value;
//   setNewEdu(updatedEducation);
// };

// const submitHandler = async e => {
//   e.preventDefault();
//   console.log("submitted");

//   dispatch(editEducation(educationId, newEdu));
// };
