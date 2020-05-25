import React from "react";
import {
  Button,
  Card,
  CardTitle,
  Form,
  FormGroup,
  Col,
  Input,
  Row,
  InputGroupAddon,
  InputGroup,
  InputGroupText
} from "reactstrap";
import FontAwesomeIcon from "@fortawesome/fontawesome-free";
import "./sign-up.css";
import "../LoginPage/login.css";

const SignUp = props => {
  return (
    <React.Fragment>
      <div>
        <Card className="card-border" style={{ borderRadius: "50px" }}>
          <CardTitle className="title">Sign Up</CardTitle>
          <Form>
            <Row form style={{ marginLeft: "34px" }}>
              <Col md={6}>
                <FormGroup>
                  <Input
                    className="card-border input-style"
                    bsSize="lg"
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="First Name"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup style={{ marginLeft: "-40px", marginRight: "39px" }}>
                  <Input
                    className="card-border input-style"
                    bsSize="lg"
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="Last Name"
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup row>
              <Col sm={12}>
                <Input
                  className="card-border input-style"
                  bsSize="lg"
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="Email or Username"
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col sm={12}>
                <Input
                  className="card-border input-style"
                  style={{ backgroundColor: "#f8f9fa" }}
                  bsSize="lg"
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="Password "
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={12}>
                <Input
                  className="card-border input-style"
                  style={{ backgroundColor: "#f8f9fa" }}
                  bsSize="lg"
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="Egypt "
                  class="fas fa-chevron-right"
                />
                {/* <span className="input-group-text">
                  <FontAwesomeIcon icon={faUser} />
                </span> */}
                {/* <InputGroupAddon className="input-group-text append">
                  <i class="fas fa-chevron-right mt-1"></i>
                </InputGroupAddon> */}
              </Col>
            </FormGroup>
            <div
              className="signup-text"
              style={{
                marginTop: "40px"
              }}
            >
              <strong>Join Us As</strong>{" "}
            </div>
            <div className="row-comtainer">
              <Button
                className="rect-btn"
                style={{
                  backgroundColor: "#f8f9fa"
                }}
              >
                Business Owner{" "}
              </Button>
              <Button
                className="rect-btn"
                style={{
                  backgroundColor: "#EBC010"
                }}
              >
                Volunteer{" "}
              </Button>
            </div>
            <div className="row-comtainer">
              <img className="payment-img" src="./img/visa.png" />
              <p className="signup-text or">
                <strong>Or</strong>
              </p>
              <img className="payment-img" src="./img/mastercard.png" />
            </div>
          </Form>
          <FormGroup row>
            <Col sm={12}>
              <Input
                className="card-border input-style"
                style={{ backgroundColor: "#f8f9fa" }}
                bsSize="lg"
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Crad-num"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={12}>
              <Input
                className="card-border input-style"
                style={{ backgroundColor: "#f8f9fa" }}
                bsSize="lg"
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Expire-Date "
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={12}>
              <Input
                className="card-border input-style"
                style={{ backgroundColor: "#f8f9fa" }}
                bsSize="lg"
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Secret num "
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={12}>
              <Input
                className="card-border input-style"
                style={{ backgroundColor: "#f8f9fa" }}
                bsSize="lg"
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Phone"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={12}>
              <Input
                className="card-border input-style"
                style={{ backgroundColor: "#f8f9fa" }}
                bsSize="lg"
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Total"
              />
            </Col>
          </FormGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>@</InputGroupText>
            </InputGroupAddon>
            <Input placeholder="username" />
          </InputGroup>
          <Button
            className="btn"
            style={{
              backgroundColor: "#0e0d0d",
              width: "250px",
              height: "55px"
            }}
          >
            Create My Account{" "}
          </Button>
          <div className="signup-text">
            <strong>
              Already have an account? <a href="#">Login</a>{" "}
            </strong>{" "}
          </div>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default SignUp;
