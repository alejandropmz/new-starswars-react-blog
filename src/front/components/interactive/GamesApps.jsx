import React from "react";

export const GamesApps = ({title, img, text}) => {
  return (
    <div className="container games-app-container">
      <img
        src={img}
        alt=""
      />
      <div className="text-button">
        <h1>{title}</h1>
        <h2>
          {text}
        </h2>
        <button>
          <strong>EXPLORE</strong>
        </button>
      </div>
    </div>
  );
};
