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
      <div className="type">
        <h1 className="type-title">Starships</h1>
      </div>
      <div className="row d-flex justify-content-center">
        {store.starships.map((starship, index) => (
          <div
            key={index}
            className="col-sm-12 col-md-3 d-flex justify-content-center"
          >
            <GeneralCard
              img={`https://starwars-visualguide.com/assets/img/starships/${starship.uid}.jpg`}
              title={starship.name}
              link={starship.uid}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
