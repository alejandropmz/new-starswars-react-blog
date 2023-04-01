import React from "react";

export const DetailCard = ({ img, body }) => {
  return (
    <div
      id="detail-card-container"
      className="container-fluid d-flex justify-content-between"
    >
      <div id="detail-card-img" className="card d-flex align-items-center justify-content-center">
        <img src={img} className="card-img-top" alt="..." />
      </div>
      {body}
    </div>
  );
};
