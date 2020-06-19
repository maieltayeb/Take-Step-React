import React, { useState } from "react";
// import React, from "react";
import "./Portflio.css";

import { FaStar } from "react-icons/fa";

const Portflio = (props) => {
  const [rating, setRating] = useState(null);

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrow: true,
    slidesToScroll: 1,
    className: "slides",
  };
  const data = [
    { title: "bla bla", rateValue: 3, img: "/img/watch.jpg" },
    { title: "TAsssk", rateValue: 4, img: "/img/watch.jpg" },
  ];
  return (
    <div className="Portflio-container">
      <div className="Portflio-items">
        <slider {...settings} />
        {data.map((d) => {
          return (
            <div className="Portflio-item">
              <div>
                <img
                  className="Portflio-item-img"
                  top
                  width="100%"
                  src={d.img}
                  alt="Card image cap"
                />
              </div>
              <div className="Portflio-item-title">{d.title}</div>
              <div style={{ marginLeft: "80px" }}>
                {[...Array(5)].map((star, i) => {
                  const ratingValue = i + 1;
                  // const val = ;
                  return (
                    <label>
                      <input
                        type="radio"
                        name="rating"
                        value={d.rateValue}
                        onClick={() => setRating(ratingValue)}
                      />
                      <FaStar
                        className="star"
                        size={20}
                        color={
                          ratingValue <= d.rateValue ? "#ebc010" : "#888888"
                        }
                      />
                    </label>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* <div className="Portflio-item">
          <img
            className="Portflio-item-img"
            style={{
              borderRadius: " 50% 0",
            }}
            top
            width="100%"
            src="/img/watch.jpg"
            alt="Card image cap"
          />

          <div className="Portflio-item-title">Card title</div>
          <div style={{ marginLeft: "80px" }}>
            {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1;
              const val = 4;
              return (
                <label>
                  <input
                    type="radio"
                    name="rating"
                    value={val}
                    onClick={() => setRating(ratingValue)}
                  />
                  <FaStar
                    className="star"
                    size={20}
                    color={ratingValue <= val ? "#ebc010" : "#888888"}
                  />
                </label>
              );
            })}
          </div>
        </div> */}
        <slider />
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
