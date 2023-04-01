import React from "react";
import { Link } from "react-router-dom";

export const GeneralCard = ({ img, title, link }) => {
  return (
    <div id="general-card" className="card" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <Link to={link} className="btn btn-primary">
          Go somewhere
        </Link>
      </div>
    </div>
  );
};
