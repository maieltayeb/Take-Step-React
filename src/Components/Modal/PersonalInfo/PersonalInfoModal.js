import React, { useState, useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { editbussinessOwner } from "../../../Redux/actions/businessOwnerActionCreator";
import { volunteeredit } from "../../../Redux/actions/volunteerActionCreator";
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
  const [state, setState] = useState({
    firstName: props.currentUser.firstName,
    lastName: props.currentUser.lastName,
    companyName: props.currentUser.companyName,
    description: props.currentUser.description,
    countryName: props.currentUser.country.countryName,
    jobTitle: props.currentUser.jobTitle,
    email: props.currentUser.email,
    countryId: props.currentUser.country._id
  });
  const dispatch = useDispatch();
  // const userId = props.match.params.id;
  useEffect(() => {
    setState(state);
  }, [props.currentUser]);

  const changeHandler = e => {
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const submitHandler = async e => {
    e.preventDefault();
    console.log("submitted");
    let bussinesslogin = props.users.filter(function(user) {
      return user.email == props.currentUser.email;
    });
    //  debugger;
    if (bussinesslogin.length == 0) {
      await dispatch(volunteeredit(props.currentUser.id, state));
    } else {
      await dispatch(editbussinessOwner(props.currentUser.id, state));
    }

    console.log(state);
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
            <label style={{ fontSize: "13px" }}>first name</label>
            <br />
            <input
              type="text"
              name="firstName"
              value={state.firstName}
              onChange={changeHandler}
              style={{
                width: "100%",
                border: "1px solid #EBC010",
                marginBottom: "20px"
              }}
            ></input>
            <br />
            <label style={{ fontSize: "13px" }}>last name</label>
            <br />
            <input
              type="text"
              name="lastName"
              value={state.lastName}
              onChange={changeHandler}
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
              name="companyName"
              value={state.companyName}
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
              value={state.jobTitle}
              onChange={changeHandler}
              style={{
                width: "100%",
                border: "1px solid #EBC010",
                marginBottom: "20px"
              }}
            ></input>
            <br /> <label style={{ fontSize: "13px" }}>Location</label>
            <br />
            <FormGroup row>
              <Col>
                <Input
                  type="select"
                  name="country"
                  id="exampleSelect"
                  onChange={changeHandler}
                  style={{
                    border: "1px solid #EBC010"
                  }}
                >
                  {props.countries.map(
                    item =>
                      item.countryName == state.countryName && (
                        <option defaultValue key={item._id} value={item._id}>
                          {item.countryName}
                        </option>
                      )
                  )}
                  {props.countries.map(
                    item =>
                      item.countryName !== state.countryName && (
                        <option key={item._id} value={item._id}>
                          {item.countryName}
                        </option>
                      )
                  )}
                </Input>
              </Col>
            </FormGroup>
            {/* <input
                type="text"
                name="countryName"
                value={state.countryName}
                onChange={changeHandler}
                style={{
                  width: "100%",
                  border: "1px solid #EBC010",
                  marginBottom: "20px"
                }}
              ></input> */}
            <br />
            <label style={{ fontSize: "13px" }}>add description:</label>
            <br />
            <textarea
              type="text"
              name="description"
              value={state.description}
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
      </Modal>
    </div>
  );
};
const mapStateToProps = reduxState => {
  return {
    users: reduxState.Users.users,
    currentUser: reduxState.Users.currentUser,
    countries: reduxState.Users.countries
  };
};

export default connect(mapStateToProps)(withRouter(PersonalInfoModal));
