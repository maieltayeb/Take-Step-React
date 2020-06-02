import React,{Component} from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Col,
  Row
} from "reactstrap";
import "./signup.css";
import InsideNav from "../../Layout/Navbar/insidenav";
const SignUp = props => {
  return (
    <>
      <InsideNav></InsideNav>
      <Container>
        <Form
          className="border-warning  p-5"
          style={{
            width: "50%",
            margin: "110px auto",
            border: "1px solid",
            borderRadius: "1.5rem"
          }}
        >
          <h3 className="text-center m-3 mb-5"> Sign Up</h3>
          <FormGroup className="input-icons">
            <i class="fa fa-envelope icon text-warning"></i>
            <Input
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
                  type="text"
                  name="zip"
                  id="exampleZip"
                  placeholder="FirsttName"
                  style={{ paddingLeft: "3rem" }}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup className="input-icons">
                <i class="fas fa-user icon text-warning"></i>
                <Input
                  type="text"
                  name="zip"
                  id="exampleZip"
                  placeholder="LastName"
                  style={{ paddingLeft: "3rem" }}
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup className="input-icons">
            <i class="fas fa-lock icon text-warning"></i>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Create a Password"
              style={{ paddingLeft: "3rem" }}
            />
          </FormGroup>{" "}
          <FormGroup row>
            <Col>
              <Input type="select" name="select" id="exampleSelect">
                <option>Egypt</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </Col>
          </FormGroup>
          <p className="text-center">I want to work as a :</p>
          <Button
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
            className=" bg-warning border-warning text-dark"
            style={{
              margin: "20px ",

              padding: ".7rem 2rem"
            }}
          >
            Volunteer
          </Button>
          <div style={{ display: "inline-block", "text-align": "center" }}>
            <img width="20%" className="mr-3" src="./img/visa.png" />
            <span>Or</span>
            <img width="20%" className="ml-3" src="./img/mastercard.png" />
          </div>
          <FormGroup className="input-icons">
            <i class="far fa-credit-card icon text-primary"></i>
            <Input
              type="Number"
              name="email"
              id="exampleEmail"
              placeholder="Card-num"
              className="input-field"
              style={{ paddingLeft: "3rem" }}
            />
          </FormGroup>{" "}
          <FormGroup className="input-icons">
            {/* <i class="fa fa-envelope icon text-warning"></i> */}
            <Input
              type="date"
              name="email"
              id="exampleEmail"
              value="Expire-Date"
              className="input-field"
              // style={{ paddingLeft: "3rem" }}
            />
          </FormGroup>{" "}
          <FormGroup className="input-icons">
            <i class="fa fa-envelope icon text-warning"></i>
            <Input
              type="Number"
              name="email"
              id="exampleEmail"
              placeholder="Secret-num"
              className="input-field"
              style={{ paddingLeft: "3rem" }}
            />
          </FormGroup>{" "}
          <FormGroup className="input-icons">
            <i class="fas fa-phone-alt icon text-secondary"></i>

            <Input
              type="Number"
              name="email"
              id="exampleEmail"
              placeholder="Phone"
              className="input-field"
              style={{ paddingLeft: "3rem" }}
            />
          </FormGroup>{" "}
          <FormGroup className="input-icons">
            <i class="fas fa-money-bill-wave icon text-success"></i>

            <Input
              type="Number"
              name="email"
              id="exampleEmail"
              placeholder="Total"
              className="input-field"
              style={{ paddingLeft: "3rem" }}
            />
          </FormGroup>{" "}
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
          <p className="text-center">
            Already have an account? <a href="">Log in !</a>{" "}
          </p>
        </Form>
      </Container>
    </>
  );
};

// export default SignUp;
