import React from "react";
import { useParams } from "react-router-dom";

export const EachStarship = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>EachStarship id:{id}</h1>
    </div>
  );
};
