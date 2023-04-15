import React from "react";

export const SimpleCard = ({ img, title }) => {
  return (
    <div id="general-card" className="card simple-card-container">
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <hr id="line" />
        <hr id="line" />
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  );
};
