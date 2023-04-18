import React from "react";

export const YearCard = ({ title }) => {
  return (
    <div className="year-card-container">
      <div id="general-card" className="card simple-card-container">
        <div className="card-body year-card-body">
          <div className="d-flex justify-content-center">
            <hr id="line" />
          </div>
          <h5 className="card-title">{title}</h5>
        </div>
      </div>
    </div>
  );
};
