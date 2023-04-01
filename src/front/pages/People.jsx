import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { GeneralCard } from "../components/GeneralCard";

export const People = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getPeople();
  }, []);

  return (
    <div className="container-fluid">
      <h1>People</h1>
      <div className="row d-flex justify-content-center">
        {store.people.map((people, index) => (
          <div
            key={index}
            className="col-sm-12 col-md-3 d-flex justify-content-center"
          >
            <GeneralCard
              img={`https://starwars-visualguide.com/assets/img/characters/${people.uid}.jpg`}
              title={people.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

{
  /*       <button className="btn btn-primary" onClick={showContent}>
        {!show ? "Load people" : "Disapear people"}
      </button>
      <ul>
        {show
          ? store.people.map((people, index) => (
              <li key={index}>
                Name: {people.name}
                <br />
                Birth year: {people.birth_year}
              </li>
            ))
          : ""}
      </ul> */
}
