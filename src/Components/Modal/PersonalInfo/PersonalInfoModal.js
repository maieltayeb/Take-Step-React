import React, { useState, useEffect } from "react";
import { editOwnerUser } from "../../../Redux/actions/ownerInfoActionCreator";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  ModalFooter,
  Label,
  Input,
  FormGroup,
  Col
} from "reactstrap";

const PersonalInfoModal = props => {
  const { className } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const ownerPersonalInfo = useSelector(state => state.ownerPersonalInfo);
  const [newUser, setNewUser] = useState(ownerPersonalInfo);
  console.log(newUser);
  useEffect(() => {
    setNewUser(ownerPersonalInfo);
  }, [ownerPersonalInfo]);

  const dispatch = useDispatch();
  const userId = props.match.params.id;
  // console.log(props);
  // console.log(userId);

  const changeHandler = e => {
    //collect data
    const updatedUser = { ...newUser };
    updatedUser[e.target.name] = e.target.value;
    setNewUser(updatedUser);
    // console.log(e.target.name);
    // console.log(e.target.value);
    // console.log(updatedUser);
  };
  const submitHandler = async e => {
    e.preventDefault();
    console.log("submitted");
    //dispatch id , newUser using editOwnerUser
    dispatch(editOwnerUser(userId, newUser));
  };

  return (
    <div>
      <i className="fas fa-pencil-alt" onClick={toggle}></i>
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
          Edit Info
        </ModalHeader>
        {newUser ? (
          <Form onSubmit={submitHandler}>
            <ModalBody style={{ backgroundColor: "#f2f2f2" }}>
              <div>
                <img
                  src="/img/profilephoto.png"
                  style={{
                    width: "20%",
                    borderRadius: "50%",
                    marginLeft: "40%"
                  }}
                />
                <i
                  className="fas fa-pencil-alt"
                  style={{
                    display: "block",
                    marginLeft: "55%",
                    color: "#ebc010"
                  }}
                ></i>
                {/* <FormGroup>
              <Label for="exampleFile">upload Photo</Label>
              <Input type="file" name="file" id="exampleFile" />
            </FormGroup> */}
              </div>
              <div>
                <div>
                  <label style={{ fontSize: "13px" }}>first Name</label>
                  <br />
                  <input
                    type="text"
                    name="firstName"
                    value={newUser.firstName}
                    onChange={changeHandler}
                    style={{
                      width: "50%",
                      border: "1px solid #EBC010",
                      marginBottom: "20px"
                    }}
                  ></input>
                </div>
                <div>
                  <label style={{ fontSize: "13px" }}>last Name</label>
                  <br />
                  <input
                    type="text"
                    name="firstName"
                    value={newUser.lastName}
                    onChange={changeHandler}
                    style={{
                      width: "50%",
                      border: "1px solid #EBC010",
                      marginBottom: "20px"
                    }}
                  ></input>
                </div>
              </div>
              <br />
              <label style={{ fontSize: "13px" }}>Company Name</label>
              <br />
              <input
                type="text"
                name="companyName"
                value={newUser.companyName}
                onChange={changeHandler}
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
                name="jobTitle"
                value={newUser.jobTitle}
                onChange={changeHandler}
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
                name="location"
                value={newUser.location}
                onChange={changeHandler}
                style={{
                  width: "100%",
                  border: "1px solid #EBC010",
                  marginBottom: "20px"
                }}
              ></input>
              <br />
              <label style={{ fontSize: "13px" }}>add description:</label>
              <br />
              <textarea
                type="text"
                name="description"
                value={newUser.description}
                onChange={changeHandler}
                style={{
                  width: "100%",
                  maxHeight: "100px",
                  border: "1px solid #EBC010",
                  marginBottom: "40px"
                }}
              ></textarea>
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
                type="submit"
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
          </Form>
        ) : (
          <h4>loading...</h4>
        )}
      </Modal>
    </div>
  );
};

export default withRouter(PersonalInfoModal);
