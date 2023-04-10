import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { GeneralCard } from "../components/GeneralCard";
import { Pagination } from "../components/Pagination";

export const Planets = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getPlanets();
  }, []);

  return (
    <div className="container-fluid">
      <div className="type">
        <h1 className="type-title">Planets</h1>
      </div>
      <div className="row d-flex justify-content-center">
        {store.planets.map((planet, index) => (
          <div
            key={index}
            className="col-sm-12 col-md-3 d-flex justify-content-center"
          >
            <GeneralCard
              img={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
              title={planet.name}
              link={planet.uid}
            />
          </div>
        ))}
      </div>
      <Pagination />
    </div>
  );
};
