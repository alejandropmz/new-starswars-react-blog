import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { GeneralCard } from "../components/GeneralCard";

export const Vehicles = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getVehicles();
  }, []);

  return (
    <div className="container-fluid">
      <h1 className="type-title">Vehicles</h1>
      <div className="row justify-content-center">
        {store.vehicles.map((vehicle, index) => (
          <div
            key={index}
            className="col-sm-12 col-md-3 d-flex justify-content-center"
          >
            <GeneralCard
              img={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`}
              title={vehicle.name}
              link={vehicle.uid}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
