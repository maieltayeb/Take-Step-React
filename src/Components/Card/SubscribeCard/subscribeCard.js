import React, { Component } from "react";
// import styles from './subcribeCard.module.css';
import "./subscribeCard.css";
import { Col, Container } from "reactstrap";
class SubscribeCard extends Component {
  render() {
    let btnClasses = [];
    let classes = [];
    if (this.props.type === "Plus") {
      classes.push("subscribeCard-card");
      classes.push("subscribeCard-middleCard");

      btnClasses.push("subscribeCardbtnMiddle");
      //  btnClasses.push('subscribeCardbtn');
    } else {
      classes.push("subscribeCard-card");
      btnClasses.push("subscribeCardbtn");
    }

    return (
      <Col>
        <Container
          style={{ width: "83%", padding: " 0px 33px" }}
          className={classes.join(" ")}
        >
          <div className="subscribeCard-top">
            <h3>{this.props.type}</h3>
            <h1>{this.props.price} $</h1>
            {/* <p>per month</p> */}
          </div>
          <hr />
          <div className="subscribeCard-middle">
            {this.props.advatages.map(ad => {
              return (
                <div className="subscribeCard-imgTitle">
                  <i
                    class="fas fa-bolt"
                    style={{ color: "#EBC010", paddingRight: "10px" }}
                  ></i>
                  {ad}
                </div>
              );
            })}
          </div>
          <div className="subscribeCard-bottom">
            <button className={btnClasses.join(" ")}>
              Select plan &#8594;
            </button>
          </div>
        </Container>
      </Col>
    );
  }
}

export default SubscribeCard;
