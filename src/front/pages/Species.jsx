import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { GeneralCard } from "../components/GeneralCard";

export const Species = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getSpecies();
  });

  return (
    <div className="container-fluid">
      <h1>Species</h1>
      <div className="row justify-content-center">
        {store.species.map((specie, index) => (
          <div className="col-sm-12 col-md-3 d-flex justify-content-center">
            <GeneralCard
              key={index}
              img={`https://starwars-visualguide.com/assets/img/species/${specie.uid}.jpg`}
              title={specie.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
