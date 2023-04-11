import React from "react";

export const DetailCard = ({ img, body }) => {
  const takeLoadError = (e) => {
    e.target.src = "https://i.pinimg.com/originals/e8/63/92/e863927635dc1c5aba5663e8dd33efa0.jpg";
  };

  return (
    <div
      id="detail-card-container"
      className="row container-fluid d-flex justify-content-between"
    >
      <div
        id="detail-card-img"
        className="col-sm-12 col-md-4 card d-flex align-items-center justify-content-center"
      >
        <img onError={takeLoadError} src={img} className="card-img-top" alt="..." />
      </div>
      {body}
    </div>
  );
};
