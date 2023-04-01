import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { FilmsCard, GeneralCard } from "../components/GeneralCard";

export const Films = () => {
  const { store, actions } = useContext(Context);
  const [show, setShow] = useState(false);

  /*   const showContent = () => {
    actions.getFilms();
    setShow(!show);
  }; */

  useEffect(() => {
    actions.getFilms();
  }, []);

  return (
    <div className="container-fluid">
      <h1>films</h1>
      <div id="" className="row d-flex justify-content-center">
        {store.films.map((film, index) => (
          <div className="col-sm-12 col-md-3 d-flex justify-content-center">
            <GeneralCard
              key={index}
              img={`https://starwars-visualguide.com/assets/img/films/${film.uid}.jpg`}
              title={film.properties.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
