import React from "react";

const Ads = () => {
  return (
    <div
      className="ads-container"
      style={{ marginTop: "50px", marginLeft: "50px" }}
    >
      <div className="image-socialmedia" style={{ marginBottom: "60px" }}>
        <img
          src="./img/social-media.png"
          style={{ width: "9rem", height: "9rem", marginLeft: "50px" }}
        />
        <p
          style={{ color: "#ebc010", textAlign: "center", paddingTop: "22px" }}
        >
          Read More >>
        </p>
      </div>
      <div className="image-web-image" style={{ marginBottom: "60px" }}>
        <img
          src="./img/web.png"
          style={{ width: "9rem", height: "9rem", marginLeft: "50px" }}
        />
        <p
          style={{ color: "#ebc010", textAlign: "center", paddingTop: "22px" }}
        >
          Read More >>
        </p>
      </div>
    </div>
  );
};

export default Ads;
