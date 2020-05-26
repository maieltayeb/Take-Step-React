import React, { Component } from "react";
import "./subsribeCardsSections.css";
import SubscribeCard from "../../../Components/Card/SubscribeCard/subscribeCard";

class SubscribeCardsSection extends Component {
  state = {
    SubscribeTypes: [
      {
        type: "Free",
        Price: "0.00",
        advatages: [
          "Untill 10 FreeTask ",
          "Proposals Filtering",
          "enjoy with Free Try",
          "enjoy with Free Try",
          "enjoy with Free Try",
          "enjoy with Free Try"
        ]
      },
      {
        type: "Plus",
        Price: "199.00",
        advatages: [
          "Untill 50 FreeTask ",
          "Proposals Filtering",
          "enjoy with Plus Try",
          "enjoy with Free Try",
          "enjoy with Free Try",
          "enjoy with Free Try"
        ]
      },
      {
        type: "Premium",
        Price: "500.00",
        advatages: [
          "Untill 100 FreeTask ",
          "Proposals Filtering",
          "enjoy with Pre Try",
          "enjoy with Free Try",
          "enjoy with Free Try",
          "enjoy with Free Try"
        ]
      }
    ]
  };
  render() {
    return (
      <>
        {/* <div className="containerdiv"> */}
        {this.state.SubscribeTypes.map(subCard => {
          return (
            <SubscribeCard
              type={subCard.type}
              price={subCard.Price}
              advatages={subCard.advatages}
            />
          );
        })}
        {/* </div> */}
      </>
    );
  }
}

export default SubscribeCardsSection;
