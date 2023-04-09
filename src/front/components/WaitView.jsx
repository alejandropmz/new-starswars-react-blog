import React from "react";

export const WaitView = ({ type }) => {
  return (
    <div id="load-container" className="d-flex justify-content-center align-items-center">
      <img
        src="https://media1.giphy.com/media/k57vTvlTaN1SLDu1vO/giphy.gif?cid=ecf05e47yrgmy3jc9vqxge8r0j50gx82o69sj1bqx53dchaz&rid=giphy.gif&ct=g"
        alt=""
      />
      <h1>STARSWARS {type} IS LOADING...</h1>
    </div>
  );
};

