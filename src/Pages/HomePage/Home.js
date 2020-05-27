import NavProf from "./../../Layout/Navbar/profileNav";
import CreateTask from "./CreateTaskSection/createTask";
import Post from "./../../Components/post/post";
import { Container, Row, Col } from "reactstrap";
import { Component } from "react";
import React from "react";
import OurCategoeyCard from "./../../Components/Card/CategoreyCard/ourCategoryCard";
import OwnerProfileCard from "./../../Components/Card/BusinessOwnerProfileCard/OwnerProfileCard";
import Ads from "../../Components/ads/ads";
import InsideNav from "./../../Layout/Navbar/insidenav";
class HomePageOwner extends Component {
  state = {};
  render() {
    return (
      <>
        <InsideNav />

        <Container
          style={{
            maxWidth: "1500px",

            paddingRight: "50px",
            paddingLeft: "50px",
            paddingTop: "15px",
          }}
        >
          <Row
            style={{
              marginTop: "5rem",
              marginLeft: "30px",
              marginRight: "30px",

              //   "justify-content": "center",
            }}
          >
            <Col
              xs="3"
              style={
                {
                  // marginBottom: "0px",
                  // marginLeft: "30px",
                  //   "justify-content": "center",
                }
              }
            >
              <OwnerProfileCard />
            </Col>
            <Col xs="6">
              <CreateTask />
              <Post></Post>
              <Post></Post>
            </Col>
            <Col
              xs="3"
              style={
                {
                  // marginBottom: "0px",
                  // paddingLeft: "15px",
                  //   "justify-content": "center",
                }
              }
            >
              <Ads />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default HomePageOwner;
