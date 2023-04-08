import React from "react";
import { Link } from "react-router-dom";

export const GeneralCard = ({ img, title, link }) => {
  return (
    <div id="general-card" className="card" >
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <hr id="line" />
        <hr id="line" />
        <h5 className="card-title">{title}</h5>
        <Link to={link} className="btn btn-primary">
          More details
        </Link>
      </div>
    </div>
  );
};
