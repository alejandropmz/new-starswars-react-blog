import React from "react";

export const MediumCard = ({ img, text }) => {
  return (
    <div className="container d-flex flex-column justify-content-center medium-card-conteiner">
      <img src={img} alt="" />
      <div className="text-card">
        <strong>
          <p>{text}</p>
        </strong>
      </div>
    </div>
  );
};
