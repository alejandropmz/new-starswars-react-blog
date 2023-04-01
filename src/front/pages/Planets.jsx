import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { GeneralCard } from "../components/GeneralCard";

export const Planets = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getPlanets();
  }, []);

  return (
    <div>
      <h1>Planets</h1>
      <div className="row d-flex justify-content-center">
        {store.planets.map((planet, index) => (
          <div className="col-sm-12 col-md-3 d-flex justify-content-center">
            <GeneralCard
              key={index}
              img={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
              title={planet.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
