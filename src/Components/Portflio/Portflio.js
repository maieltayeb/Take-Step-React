import React from "react";
import "./Portflio.css";

const Portflio = props => {
  return (
    <div className="Portflio-container">
      <div className="Portflio-items">
        <div className="Portflio-item">
          <div>
            <img
              className="Portflio-item-img"
              top
              width="100%"
              src="./img/watch.jpg"
              alt="Card image cap"
            />
          </div>
          <div className="Portflio-item-title">Card title</div>
        </div>

        <div className="Portflio-item">
          <img
            className="Portflio-item-img"
            style={{
              borderRadius: " 50% 0"
            }}
            top
            width="100%"
            src="./img/watch.jpg"
            alt="Card image cap"
          />

          <div className="Portflio-item-title">Card title</div>
        </div>
      </div>
      <div className="Portflio-title">
        {" "}
        See More
        <i class="fas fa-chevron-right mt-1" style={{ paddingLeft: "5px" }}></i>
      </div>
    </div>
  );
};

export default Portflio;
