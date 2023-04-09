import React from "react";

export const SmallCard = ({ img, text }) => {
  return (
    <div className="d-flex small-card-container">
      <div className="img">
        <img src={img} alt="" />
      </div>
      <div className="text">
        <p>
          <strong>{text}</strong>
        </p>
      </div>
    </div>
  );
};
