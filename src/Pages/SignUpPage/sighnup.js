import React, { useState, useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  getAllCountries,
  getAllUsers
} from "../../Redux/actions/businessOwnerActionCreator";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Container,
  Col,
  Row
} from "reactstrap";
import { Link } from "react-router-dom";
import "./signup.css";
import InsideNav from "../../Layout/Navbar/insidenav";
import { Signup } from "../../Redux/actions/businessOwnerActionCreator";
const SignUp = props => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [state, setState] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    country: 0,
    isBussines: false,
    paymentData: {
      cardNum: 0,
      expireDate: new Date("July 21, 1983"),
      phone: 0,
      total: 0,
      secretNum: 0
    }
  });
  useEffect(() => {
    dispatch(getAllCountries());
    dispatch(getAllUsers());
  }, [dispatch]);
  // console.log("props", props.mystate.countries);
  const handleClick = e => {
    // console.log(e.target.textContent);
    if (e.target.textContent === "Bussiness Owner") {
      setState(prevState => ({
        ...prevState,
        isBussines: true
      }));
      // console.log(state.isBussines);
    } else {
      setState(prevState => ({
        ...prevState,
        isBussines: false
      }));
      // console.log(state.isBussines);
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    // let newState = { ...state };
    // let allData = JSON.parse(JSON.stringify(newState));
    // console.log("all", allData);

    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(Signup(state));
    // history.push("/logIn");
    // console.log(state.email);
    // console.log(state.password);
    // console.log(state.firstName);
    // console.log(state.lastName);
  };
  return (
    <>
      <InsideNav></InsideNav>
      <Container>
        <Form
          onSubmit={handleSubmit}
          className="border-warning  p-5"
          style={{
            marginLeft: "4rem ",
            backgroundColor: "#F2F2F2",
            padding: ".7rem 1rem"
          }}
        >
          <h3 className="text-center m-3 mb-5"> Sign Up</h3>
          <FormGroup className="input-icons">
            <i class="fa fa-envelope icon text-warning"></i>
            <Input
              onChange={handleChange}
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Email"
              className="input-field"
              style={{ paddingLeft: "3rem" }}
            />
          </FormGroup>{" "}
          <Row>
            <Col md={6}>
              <FormGroup className="input-icons">
                <i class="fas fa-user icon text-warning"></i>
                <Input
                  onChange={handleChange}
                  type="text"
                  name="firstName"
                  placeholder="FirsttName"
                  style={{ paddingLeft: "3rem" }}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup className="input-icons">
                <i class="fas fa-user icon text-warning"></i>
                <Input
                  onChange={handleChange}
                  type="text"
                  name="lastName"
                  placeholder="LastName"
                  style={{ paddingLeft: "3rem" }}
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup className="input-icons">
            <i class="fas fa-lock icon text-warning"></i>
            <Input
              onChange={handleChange}
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Create a Password"
              style={{ paddingLeft: "3rem" }}
            />
          </FormGroup>{" "}
          <FormGroup row>
            <Col>
              <Input
                type="select"
                name="country"
                id="exampleSelect"
                onChange={handleChange}
              >
                /////////////////////
                {props.countries.map(item => (
                  <option key={item.id} value={item.id}>
                    {item.en}
                  </option>
                ))}
              </Input>
            </Col>
          </FormGroup>
          <p className="text-center">I want to work as a :</p>
          <Button
            onClick={handleClick}
            className="  border-warning text-dark "
            style={{
              marginLeft: "4rem ",
              backgroundColor: "#F2F2F2",
              padding: ".7rem 1rem"
            }}
          >
            Bussiness Owner
          </Button>
          <Button
            onClick={handleClick}
            className="  border-warning text-dark"
            style={{
              margin: "20px ",

              padding: ".7rem 2rem"
            }}
          >
            Volunteer
          </Button>
          {state.isBussines && (
            <>
              <div style={{ display: "inline-block", "text-align": "center" }}>
                <img width="20%" className="mr-3" src="./img/visa.png" />
                <span>Or</span>
                <img width="20%" className="ml-3" src="./img/mastercard.png" />
              </div>
              <FormGroup className="input-icons">
                <i class="far fa-credit-card icon text-primary"></i>
                <Input
                  onChange={handleChange}
                  type="Number"
                  name="cardNum"
                  id="exampleEmail"
                  placeholder="Card-num"
                  className="input-field"
                  style={{ paddingLeft: "3rem" }}
                />
              </FormGroup>
              <FormGroup className="input-icons">
                {/* <i class="fa fa-envelope icon text-warning"></i> */}
                <Input
                  onChange={handleChange}
                  type="date"
                  name="expireDate"
                  id="exampleEmail"
                  value="Expire-Date"
                  className="input-field"
                  // style={{ paddingLeft: "3rem" }}
                />
              </FormGroup>
              <FormGroup className="input-icons">
                <i class="fa fa-envelope icon text-warning"></i>
                <Input
                  type="Number"
                  name="secretNum"
                  id="exampleEmail"
                  placeholder="Secret-num"
                  className="input-field"
                  style={{ paddingLeft: "3rem" }}
                />
              </FormGroup>
              <FormGroup className="input-icons">
                <i class="fas fa-money-bill-wave icon text-success"></i>

                <Input
                  onChange={handleChange}
                  type="Number"
                  // name="total"
                  id="total"
                  placeholder="Total"
                  className="input-field"
                  style={{ paddingLeft: "3rem" }}
                />
              </FormGroup>
              <FormGroup className="input-icons">
                <i class="fas fa-phone-alt icon text-secondary"></i>

                <Input
                  onChange={handleChange}
                  type="Number"
                  // name="phone"
                  id="phone"
                  placeholder="Phone"
                  className="input-field"
                  style={{ paddingLeft: "3rem" }}
                />
              </FormGroup>
            </>
          )}
          <Button
            className="d-block bg-dark border-dark"
            style={{
              margin: "20px auto",
              borderRadius: "1.5rem",
              padding: ".7rem 2.5rem"
            }}
          >
            Create new Account
          </Button>
          <div className="text-center">
            <span className="text-center">Already have an account? </span>
            <Link to="/logIn" className="d-inline-block p-1">
              Log in !
            </Link>
          </div>
        </Form>
      </Container>
    </>
  );
};
const mapStateToProps = reduxState => {
  return {
    users: reduxState.bussinessOwnerUsers.users,
    countries: reduxState.bussinessOwnerUsers.countries
    // mystate: reduxState.bussinessOwnerUsers
  };
};
export default connect(mapStateToProps)(SignUp);
