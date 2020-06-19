import React, { Component } from "react";
import "./Portflio.css";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";

import axios from "axios";
import { FaStar } from "react-icons/fa";
import { getFeedbacksById } from "../../Redux/actions/FeedbackActionCreator";

class Portflio extends Component {
  state = {
    AllData: [],
    rating: 0,
    index: 0,
    activeCards: [],
  };

  async componentDidMount() {
    const user = localStorage.getItem("user");
    const volunteerId = JSON.parse(user).id;
    debugger;
    const arr = [];
    const feedData = await axios.get(
      `https://take-a-step-9ca1d.firebaseio.com/Feedback/${volunteerId}.json`
    );
    if (feedData.data) {
      const feedbackArray = Object.keys(feedData.data).map((key) => ({
        id: String(key),
        details: feedData.data[key],
      }));
      this.setState({ AllData: feedbackArray });
      console.log(feedbackArray[0]);
      const d = feedbackArray[0];
      arr.push(feedbackArray[0]);
      arr.push(feedbackArray[1]);

      this.setState({ activeCards: arr });
      // setActiveCards(activeCards.push(feedbackArray[1]));
      console.log(this.state.activeCards);
    }
  }

  //   console.log("/////////////////", feedback);
  //   useEffect(() => {
  //     setActiveCards(activeCards.push(feedback[0]));
  //     setActiveCards(activeCards.push(feedback[1]));
  //     console.log(activeCards);
  //   }, []);
  handleNext = () => {
    debugger;
    const arr = [];
    let index;
    if (this.state.index < this.state.AllData.length - 1) {
      index = this.state.index + 1;
      this.setState({ index });
      this.setState({ activeCards: [] });
      arr.push(this.state.AllData[index]);
      index = this.state.index + 2;

      this.setState({ index });
      arr.push(this.state.AllData[index]);
      this.setState({ activeCards: arr });
    }

    console.log(this.state.activeCards);
  };
  handlePrev = () => {
    debugger;
    const arr = [];
    let index;
    if (this.state.index > 0) {
      index = this.state.index - 1;
      this.setState({ index });
      this.setState({ activeCards: [] });
      arr.push(this.state.AllData[index]);
      index = this.state.index - 2;

      this.setState({ index });
      arr.push(this.state.AllData[index]);
      this.setState({ activeCards: arr });
    }

    console.log(this.state.activeCards);
  };
  handleClick = (link) => {
    window.open(link);
  };
  render() {
    return (
      <div className="Portflio-container">
        <div className="Portflio-items">
          {this.state.AllData.length ? (
            <i
              onClick={() => this.handlePrev()}
              style={{ marginTop: "20%", color: "#888888" }}
              class="fas fa-chevron-left fa-2x"
            ></i>
          ) : (
            <div></div>
          )}
          {this.state.AllData.length ? (
            this.state.activeCards.map((d) => {
              return (
                <div className="Portflio-item">
                  <div>
                    <img
                      className="Portflio-item-img"
                      top
                      width="100%"
                      src="/img/watch.jpg"
                      alt="Card image cap"
                    />
                  </div>
                  <div
                    onClick={() => this.handleClick(d.details.link)}
                    className="Portflio-item-title"
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                  >
                    {d.details.taskTitle}
                  </div>
                  <div style={{ marginLeft: "80px" }}>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label>
                          <input
                            type="radio"
                            name="rating"
                            value={d.details.rating}
                            //   onClick={() => setRating(ratingValue)}
                          />
                          <FaStar
                            className="star"
                            size={20}
                            color={
                              ratingValue <= d.details.rating
                                ? "#ebc010"
                                : "#888888"
                            }
                          />
                        </label>
                      );
                    })}
                  </div>
                </div>
              );
            })
          ) : (
            <div> No Tasks or Feedbacks yet </div>
          )}
          {this.state.AllData.length ? (
            <i
              onClick={() => this.handleNext()}
              style={{ marginTop: "20%", color: "#888888" }}
              class="fas fa-chevron-right fa-2x"
            ></i>
          ) : (
            <div></div>
          )}
        </div>
        {/* <div className="Portflio-title">
          {" "}
          See More
          <i
            class="fas fa-chevron-right mt-1"
            style={{ paddingLeft: "5px" }}
          ></i>
        </div> */}
      </div>
    );
  }
}
const mapStateToProps = (State) => {
  return {
    feedback: State.Feedback,
  };
};
export default connect(mapStateToProps)(Portflio);
