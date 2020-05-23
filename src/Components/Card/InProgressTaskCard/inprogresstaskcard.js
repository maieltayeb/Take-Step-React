import React from "react";
import { Toast, ToastBody, ToastHeader, Col, Row } from "reactstrap";

const Example = props => {
  return (
    <div>
      <Row>
        <Col>
          <div className="p-3 my-2 rounded">
            <Toast>
              <ToastHeader>In-Progress</ToastHeader>
              <ToastBody>
                <div className="p-3 my-2 rounded bg-docs-transparent-grid">
                  <Toast>
                    <ToastHeader>Task Title</ToastHeader>
                    <ToastBody className=" bg-success m-3  rounded">
                      <Row>
                        {" "}
                        <Col>Done</Col>
                        <Col>
                          0 days
                          <i className="fas fa-check-circle"></i>
                        </Col>
                      </Row>
                    </ToastBody>
                    <ToastBody className=" bg-warning m-3  rounded">
                      <Row>
                        {" "}
                        <Col>Rest Of Time</Col>
                        <Col>5 days</Col>
                      </Row>
                    </ToastBody>
                    <ToastBody className=" bg-danger m-3 rounded">
                      <Row>
                        {" "}
                        <Col>DeadLine</Col>
                        <Col>27/5</Col>
                      </Row>
                    </ToastBody>
                  </Toast>
                  <Toast>
                    <ToastHeader>Task Title</ToastHeader>
                    <ToastBody
                      outline
                      color="danger"
                      className="border border-danger m-3  rounded"
                    >
                      <Row>
                        {" "}
                        <Col className="text-danger">you didnt upload task</Col>
                      </Row>
                    </ToastBody>
                    <ToastBody className=" bg-warning m-3  rounded">
                      <Row>
                        {" "}
                        <Col>Rest Of Time</Col>
                        <Col>5 days</Col>
                      </Row>
                    </ToastBody>
                    <ToastBody className=" bg-danger m-3  rounded">
                      <Row>
                        {" "}
                        <Col>DeadLine</Col>
                        <Col>27/5</Col>
                      </Row>
                    </ToastBody>
                  </Toast>
                </div>
              </ToastBody>
            </Toast>
          </div>
        </Col>

        <Col>
          <div className="p-3 my-2 rounded">
            <Toast>
              <ToastHeader>In-Progress</ToastHeader>
              <ToastBody>
                <div className="p-3 my-2 rounded bg-docs-transparent-grid">
                  <Toast>
                    <ToastHeader>Task Title</ToastHeader>
                    <ToastBody className=" bg-success m-3  rounded">
                      <Row>
                        {" "}
                        <Col>Done</Col>
                        <Col>
                          0 days
                          <i className="fas fa-check-circle"></i>
                        </Col>
                      </Row>
                    </ToastBody>
                    <ToastBody className=" bg-warning m-3  rounded">
                      <Row>
                        {" "}
                        <Col>Rest Of Time</Col>
                        <Col>5 days</Col>
                      </Row>
                    </ToastBody>
                    <ToastBody className=" bg-danger m-3 rounded">
                      <Row>
                        {" "}
                        <Col>DeadLine</Col>
                        <Col>27/5</Col>
                      </Row>
                    </ToastBody>
                  </Toast>
                  <Toast>
                    <ToastHeader>Task Title</ToastHeader>
                    <ToastBody
                      outline
                      color="danger"
                      className="border border-danger m-3  rounded"
                    >
                      <Row>
                        {" "}
                        <Col className="text-danger">you didnt upload task</Col>
                      </Row>
                    </ToastBody>
                    <ToastBody className=" bg-warning m-3  rounded">
                      <Row>
                        {" "}
                        <Col>Rest Of Time</Col>
                        <Col>5 days</Col>
                      </Row>
                    </ToastBody>
                    <ToastBody className=" bg-danger m-3  rounded">
                      <Row>
                        {" "}
                        <Col>DeadLine</Col>
                        <Col>27/5</Col>
                      </Row>
                    </ToastBody>
                  </Toast>
                </div>
              </ToastBody>
            </Toast>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Example;
