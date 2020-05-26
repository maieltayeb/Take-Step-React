import React from "react";
import {
  Button,
  Card,
  CardTitle,
  Form,
  InputGroup,
  Col,
  Input,
  Row,
  InputGroupAddon,
  InputGroupText,
  FormGroup
} from "reactstrap";
import FontAwesomeIcon from "@fortawesome/fontawesome-free";
import "./sign-up.css";
import "../LoginPage/login.css";

const SignUp = props => {
  return (
    <React.Fragment>
      <div>
        <div className="card-border" style={{ borderRadius: "50px" }}>
          <div className="title card-title">Sign Up</div>
          <Form>
            <Row form style={{ marginLeft: "45px" }}>
              <Col md={6}>
                <FormGroup>
                  <Input
                    className="card-border input-style input-bg-style "
                    bsSize="lg"
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="First Name"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup style={{ marginLeft: "-43px", marginRight: "52px" }}>
                  <Input
                    className="card-border input-style input-bg-style"
                    bsSize="lg"
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="Last Name"
                  />
                </FormGroup>
              </Col>
            </Row>
            <InputGroup row>
              <Col sm={12}>
                <Input
                  className="card-border input-style input-bg-style"
                  bsSize="lg"
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="Email or Username"
                />
              </Col>
            </InputGroup>

            <InputGroup row>
              <Col sm={12}>
                <Input
                  className="card-border input-style input-bg-style"
                  bsSize="lg"
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="Password "
                />
              </Col>
            </InputGroup>
            <InputGroup row>
              <Col sm={12}>
                <Input
                  className="card-border input-style input-bg-style"
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
            </InputGroup>
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
              <div className="or">
                <b>Or</b>
              </div>
              <img className="payment-img" src="./img/mastercard.png" />
            </div>
          </Form>
          <InputGroup row>
            <Col sm={12}>
              <Input
                className="card-border input-style input-bg-style"
                style={{ backgroundColor: "#f8f9fa" }}
                bsSize="lg"
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Crad-num"
              />
            </Col>
          </InputGroup>
          <InputGroup row>
            <Col sm={12}>
              <Input
                className="card-border input-style input-bg-style"
                style={{ backgroundColor: "#f8f9fa" }}
                bsSize="lg"
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Expire-Date "
              />
            </Col>
          </InputGroup>
          <InputGroup row>
            <Col sm={12}>
              <Input
                className="card-border input-style input-bg-style"
                style={{ backgroundColor: "#f8f9fa" }}
                bsSize="lg"
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Secret num "
              />
            </Col>
          </InputGroup>
          <InputGroup row>
            <Col sm={12}>
              <Input
                className="card-border input-style input-bg-style"
                style={{ backgroundColor: "#f8f9fa" }}
                bsSize="lg"
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Phone"
              />
            </Col>
          </InputGroup>
          <InputGroup row>
            <Col sm={12}>
              <Input
                className="card-border input-style input-bg-style"
                style={{ backgroundColor: "#f8f9fa" }}
                bsSize="lg"
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Total"
              />
            </Col>
          </InputGroup>
          {/* <InputGroup>
            <Col sm={12}>
              <InputGroupAddon addonType="prepend">
                <i class="fas fa-caret-down"></i>
              </InputGroupAddon>
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
          </InputGroup> */}

          {/* <InputGroup>
            <Col sm={12}>
              <Input
                className="card-border input-style"
                bsSize="lg"
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Total"
              />
              <InputGroupAddon addonType="append">
                <InputGroupText>
                  <i class="fas fa-caret-down"></i>
                </InputGroupText>
              </InputGroupAddon>
            </Col>
          </InputGroup> */}
          <Button
            className="step-btn-form"
            style={{
              backgroundColor: "#0e0d0d",
              width: "250px",
              height: "55px",
              borderRadius: "5rem",
              display: "block"
            }}
          >
            Create My Account{" "}
          </Button>
          <div className="signup-text">
            <strong>
              Already have an account? <a href="#">Login</a>{" "}
            </strong>{" "}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignUp;
