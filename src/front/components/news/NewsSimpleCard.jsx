import React from "react";

export const NewsSimpleCard = ({ img, title, date }) => {
  return (
    <div id="general-card" className="card simple-card-container">
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <hr id="line" />
        <hr id="line" />
        <div className="title d-flex justify-content-start">
          <h5 id="news-card-title" className="card-title">
            {title}
          </h5>
        </div>
        <div className="date d-flex justify-content-start">
          <small>{date}</small>
        </div>
      </div>
    </div>
  );
};
