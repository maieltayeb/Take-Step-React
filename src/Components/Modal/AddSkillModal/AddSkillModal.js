import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";
import "./AddSkillModal.css";
import { useDispatch, useSelector, connect } from "react-redux";
import {
  DeletSkills,
  getSkillsInSec,
  AddSkills,
} from "../../../Redux/actions/userSkillCreator";

const AddSkill = (props) => {
  const { className, state } = props;
  console.log(state);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const dispatch = useDispatch();
  const userSkills = useSelector((state) => state.Skills);
  const [newSkills, setNewSkill] = useState(userSkills);
  console.log(newSkills);
  useEffect(() => {
    setNewSkill(userSkills);
  }, [userSkills]);
  const user = localStorage.getItem("user");
  const volunteerId = JSON.parse(user).id;

  console.log(newSkills);
  // console.log(userId);
  const changeHandler = (e) => {
    const updatedUser = { ...newSkills };
    updatedUser[e.target.name] = e.target.value;
    setNewSkill(updatedUser);
  };
  const KeyUpHandler = (event) => {
    const { key } = event;
    if (key == "Enter") {
      const skillName = event.target.value;
      dispatch(AddSkills({ skillName, volunteerId }));
      console.log(newSkills);
    }
    // setNewSkill(updatedSkill);
  };
  const deleteHandler = async (id) => {
    dispatch(DeletSkills(volunteerId, id));
  };
  const submitHandler = async (e) => {
    // e.preventDefault();
    console.log("submitted");
    //dispatch id , newUser using editOwnerUser
    // dispatch(editOwnerUser(userId, newUser));
    return false;
  };
  return (
    <div>
      <i class="fas fa-plus" onClick={toggle}></i>
      <Modal
        onSubmit={(event) => event.preventDefault()}
        className="modalShapSkill"
        isOpen={modal}
        toggle={toggle}
        className={className}
        style={{ marginLeft: "320px" }}
      >
        <ModalHeader
          className="headerModalSkill"
          toggle={toggle}
          style={{ paddingLeft: "320px" }}
        >
          Add Skill
        </ModalHeader>
        <ModalBody className="bodyModalSkill">
          <div className="">
            <form className="mb-3">
              {/* <Input placeholder="Skill (ex:Photoshop)" type="text" className=""  ></Input> */}
              <div class="input-group">
                <Input
                  name="skillName"
                  class="form-control py-2 border-right-0 border"
                  type="text"
                  placeholder="Skill (ex:Photoshop)"
                  onKeyUp={KeyUpHandler}
                  value={newSkills.skillName}
                  onChange={changeHandler}
                >
                  <div class="input-group-append">
                    <div class="input-group-text">
                      <i class="fa fa-search"></i>
                    </div>
                  </div>
                </Input>
              </div>
              <p class="ml-0 small text-secondary">
                You can add more than one skill
              </p>
            </form>
            <div class=" mt-2 d-inline">
              {state.length ? (
                state.map((obj) => {
                  return (
                    <React.Fragment>
                      <span class=" para mr-2 ">
                        {obj.skillName}
                        <i
                          onClick={() => deleteHandler(obj._id)}
                          class="pl-2 fas fa-times"
                        ></i>
                      </span>
                    </React.Fragment>
                  );
                })
              ) : (
                <div>No item added yet </div>
              )}
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            className="skill-button"
            color="primary"
            onClick={toggle}
            style={{
              backgroundColor: "white",
              borderRadius: "20px",
              border: "1px solid #EBC010",
              color: "black",
              width: "100px",
            }}
          >
            Cancel
          </Button>{" "}
          <Button
            className="skill-button"
            color="secondary"
            onClick={submitHandler}
            onKeyUp={(event) => event.preventDefault()}
            onSubmit={(event) => event.preventDefault()}
            style={{
              backgroundColor: "#494848",
              borderRadius: "20px",
              color: "#EBC010",
              width: "100px",
            }}
          >
            Add
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    state: state.Skills,
  };
};
export default connect(mapStateToProps)(AddSkill);
