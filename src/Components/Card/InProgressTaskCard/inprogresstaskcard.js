import React from "react";
import { Toast, ToastBody, ToastHeader, Col, Row, Button } from "reactstrap";
import ModalLink from "../../Modal/AddLink/AddLink-Modal";

const InProgressTaskCard = props => {
  return (
    <div>
      <Row className="mr-0">
        <Col>
          <div className="p-3 my-2 rounded">
            <Toast>
              <ToastHeader>In-Progress</ToastHeader>
              <ToastBody>
                <div className="p-1 my-2 rounded bg-docs-transparent-grid">
                  <Toast>
                    <Row className="p-2">
                      <Col sm={9}>
                        {" "}
                        <ToastHeader className="p-1">Task Title</ToastHeader>
                      </Col>
                      <ModalLink></ModalLink>
                    </Row>
                    {/* <ToastBody className=" bg-success m-3  rounded">
                      <Row>
                        {" "}
                        <Col>Done</Col>
                        <Col>
                          0 days
                          <img className="w-25 ml-3" src="/img/ok.png" />
                        </Col>
                      </Row>
                    </ToastBody> */}
                    <ToastBody className=" bg-warning m-3  rounded">
                      <Row>
                        {" "}
                        <Col>Rest Of Time </Col>
                        <Col>
                          5 days
                          <img
                            className=" ml-3"
                            src="/img/sand watch.png"
                            style={{ width: "18%" }}
                          />
                        </Col>
                      </Row>
                    </ToastBody>
                    <ToastBody className=" bg-danger m-3 rounded">
                      <Row>
                        {" "}
                        <Col>DeadLine</Col>
                        <Col>
                          27/5
                          <img className="w-25 ml-4" src="/img/schedule.png" />
                        </Col>
                      </Row>
                    </ToastBody>
                  </Toast>
                  <Toast>
                    <Row className="p-2">
                      <Col sm={9}>
                        {" "}
                        <ToastHeader className="p-1">Task Title</ToastHeader>
                      </Col>
                      <ModalLink></ModalLink>
                    </Row>
                    <ToastBody className=" bg-warning m-3  rounded">
                      <Row>
                        {" "}
                        <Col>Rest Of Time</Col>
                        <Col>
                          5 days
                          <img
                            className=" ml-3"
                            src="/img/sand watch.png"
                            style={{ width: "18%" }}
                          />
                        </Col>
                      </Row>
                    </ToastBody>
                    <ToastBody className=" bg-danger m-3  rounded">
                      <Row>
                        {" "}
                        <Col>DeadLine</Col>
                        <Col>
                          27/5{" "}
                          <img className="w-25 ml-4" src="/img/schedule.png" />
                        </Col>
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
              <ToastHeader>Missed Tasks</ToastHeader>
              <ToastBody>
                <div className="p-1 my-2 rounded bg-docs-transparent-grid">
                  <Toast>
                    <ToastHeader>Task Title</ToastHeader>
                    <ToastBody outline color="danger" className=" m-3 ">
                      <Row>
                        {" "}
                        <Col className="text-danger">
                          <img
                            className=" mr-3"
                            src="/img/warning.png"
                            style={{ width: "8%" }}
                          />
                          you didnt upload this task
                        </Col>
                      </Row>
                    </ToastBody>
                  </Toast>

                  <Toast>
                    <ToastHeader>Task Title</ToastHeader>
                    <ToastBody outline color="danger" className=" m-3">
                      <Row>
                        {" "}
                        <Col className="text-danger">
                          <img
                            className=" mr-3"
                            src="/img/warning.png"
                            style={{ width: "8%" }}
                          />
                          you didnt upload this task
                        </Col>
                      </Row>
                    </ToastBody>
                  </Toast>

                  <Toast>
                    <ToastHeader>Task Title</ToastHeader>
                    <ToastBody outline color="danger" className=" m-3">
                      <Row>
                        {" "}
                        <Col className="text-danger">
                          <img
                            className=" mr-3"
                            src="/img/warning.png"
                            style={{ width: "8%" }}
                          />
                          you didnt upload this task
                        </Col>
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

export default InProgressTaskCard;
