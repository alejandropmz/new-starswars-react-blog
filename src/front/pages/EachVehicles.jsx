import React from "react";
import { useParams } from "react-router-dom";

export const EachVehicles = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>EachVehicles id:{id}</h1>
    </div>
  );
};
