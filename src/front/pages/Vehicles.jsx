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
      <h1>Vehicles</h1>
      <div className="row justify-content-center">
        {store.vehicles.map((vehicle, index) => (
          <div className="col-sm-12 col-md-3 d-flex justify-content-center">
            <GeneralCard
              key={index}
              img={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`}
              title={vehicle.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
