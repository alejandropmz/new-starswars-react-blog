import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const Planets = () => {
  const { store, actions } = useContext(Context);
  const [show, setshow] = useState(false);

  const showContent = () => {
    actions.getPlanets();
    setshow(!show);
  };

  return (
    <div>
      <h1>Planets</h1>
      <button onClick={showContent} className="btn btn-warning">
        {show ? "Disapear planets" : "Show planets"}
      </button>
      {show
        ? store.planets.map((planet, index) => (
            <li key={index}> Name: {planet.name} </li>
          ))
        : ""}
    </div>
  );
};
