import React from "react";

export const WaitView = ({ type }) => {
  return (
    <div id="load-container" className="d-flex justify-content-center align-items-center">
      <img
        src="https://wallup.net/wp-content/uploads/2015/12/274119-Star_Wars-stormtrooper-Darth_Vader-mask-splitting-minimalism.jpg"
        alt=""
      />
      <h1>STARSWARS {type} IS LOADING...</h1>
    </div>
  );
};
