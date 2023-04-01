import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const Species = () => {
  const { store, actions } = useContext(Context);
  const [show, setShow] = useState(false);

  const showContent = () => {
    actions.getSpecies();
    setShow(!show);
  };

  return (
    <div>
      <h1>Species</h1>
      <button onClick={showContent} className="btn btn-warning">
        {!show ? "Load species" : "Disapear species"}
      </button>
      <ul>
        {show
          ? store.species.map((specie, index) => (
              <li key={index}>Name: {specie.name}</li>
            ))
          : ""}
      </ul>
    </div>
  );
};
