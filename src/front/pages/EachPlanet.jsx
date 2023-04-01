import React from "react";
import { useParams } from "react-router-dom";

export const EachPlanet = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Each Planets id:{id}</h1>
    </div>
  );
};
