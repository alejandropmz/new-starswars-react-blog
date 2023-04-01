import React from "react";
import { useParams } from "react-router-dom";

export const EachSpecies = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>EachSpecies id:{id}</h1>
    </div>
  );
};
