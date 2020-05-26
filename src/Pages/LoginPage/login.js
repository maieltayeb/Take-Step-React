import React from "react";
import {
  Button,
  Card,
  CardTitle,
  Form,
  FormGroup,
  Col,
  Input
} from "reactstrap";
import "./login.css";

const Login = props => {
  return (
    <React.Fragment>
      <div>
        <Card className="card-border" style={{ borderRadius: "50px" }}>
          <CardTitle className="title">Login</CardTitle>
          <Form>
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
            <p style={{ "margin-top": "50px 0", "margin-left": "100px" }}>
              Forgot your password?
            </p>
            <Button
              className="btn"
              style={{
                backgroundColor: "#EBC010",
                borderColor: "#EBC010",
                color: "#0e0d0d"
              }}
            >
              Login{" "}
            </Button>
            <Button
              className="btnn"
              style={{
                backgroundColor: "#0e0d0d"
              }}
            >
              Sign Up{" "}
            </Button>
          </Form>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default Login;
