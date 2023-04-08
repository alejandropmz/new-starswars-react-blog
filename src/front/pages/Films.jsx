import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { GeneralCard } from "../components/GeneralCard";

export const Films = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getFilms();
  }, []);

  return (
    <div className="container-fluid d-flex flex-column justify-content-center">
      <div className="type">
        <h1 className="type-title">films</h1>
      </div>
      <div id="" className="row justify-content-center">
        {store.films.map((film, index) => (
          <div
            key={index}
            className="col-sm-12 col-md-3 d-flex justify-content-center"
          >
            <GeneralCard
              img={`https://starwars-visualguide.com/assets/img/films/${film.uid}.jpg`}
              title={film.properties.title}
              link={film.uid}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
