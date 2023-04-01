import React from "react";
import { useParams } from "react-router-dom";

export const EachPeople = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>EachPeople id:{id}</h1>
    </div>
  );
};
