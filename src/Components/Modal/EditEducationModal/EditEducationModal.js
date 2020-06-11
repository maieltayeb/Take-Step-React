import React, { useState, useEffect } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";

import { withRouter } from "react-router-dom";

import { editEducation } from "../../../Redux/actions/educationActionCreator";
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
  const { buttonLabel, className, eduId, educations } = props;
  console.log("eduId", eduId);
  const [modal, setModal] = useState(false);
  // const { educations } = props;
  // console.log("education from edit", educations[0].degree);
  const toggle = () => setModal(!modal);
  const [selectedEducation, setSelectedEducation] = useState(
    educations.find(education => education._id === eduId)
  );

  const dispatch = useDispatch();
  // const userId = props.match.params.id;
  // useEffect(() => {
  //   setState(state);
  // }, [props.educations]);

  const changeHandler = e => {
    const { name, value } = e.target;
    setSelectedEducation(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const submitHandler = async e => {
    e.preventDefault();
    console.log("submitted");

    await dispatch(editEducation(selectedEducation.id, selectedEducation));
  };
  // const educations = useSelector(state => state.educations);

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

        <Form onSubmit={submitHandler}>
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
                // placeholder="Ex: Bachelor's"
                value={selectedEducation.degree}
                onChange={changeHandler}
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
                name="graduationYear"
                id="exampleDate"
                placeholder="date placeholder"
                value={selectedEducation.graduationYear}
                onChange={changeHandler}
              />
            </FormGroup>

            <FormGroup>
              <Label for="gradeSelect">Grade</Label>
              <Input
                className="input-border"
                type="select"
                name="grade"
                id="gradeSelect"
                value={selectedEducation.grade}
                onChange={changeHandler}
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
const mapStateToProps = reduxstate => {
  return {
    educations: reduxstate.educations
  };
};
export default connect(mapStateToProps)(withRouter(EditEducation));

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
