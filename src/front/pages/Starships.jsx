import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { GeneralCard } from "../components/GeneralCard";

export const Starships = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getStarships();
  }, []);

  return (
    <div className="container-fluid">
      <h1>Starships</h1>
      <div className="row justify-content-center">
        {store.starships.map((starship, index) => (
          <div key={index} className="col-sm-12 col-md-3">
            <GeneralCard
              img={`https://starwars-visualguide.com/assets/img/starships/${starship.uid}.jpg`}
              title={starship.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
