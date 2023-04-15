import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { GeneralCard } from "../components/GeneralCard";

export const Planets = () => {
  const { store, actions } = useContext(Context);
  const [next, setNext] = useState("https://swapi.tech/api/planets");

  useEffect(() => {
    actions.getPlanets(next);
    console.log(actions.getPlanets(next));
  }, [next]);

  return (
    <div className="container-fluid">
      <div className="type">
        <h1 className="type-title">Planets</h1>
      </div>
      <div className="row d-flex justify-content-center">
        {store.planets.results?.map((planet, index) => (
          <div
            key={index}
            className="col-sm-12 col-md-3 d-flex justify-content-center"
          >
            <GeneralCard
              img={`https://starwars-visualguide.com/assets/img/planets/${planet?.uid}.jpg`}
              title={planet?.name}
              link={planet?.uid}
            />
          </div>
        ))}
      </div>

      {/* pagination */}
      <div className="d-flex justify-content-center">
        <nav id="pagination-nav" aria-label="...">
          <ul className="pagination">
            <li className="page-item disabled">
              <span className="page-link">Previous</span>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item" aria-current="page">
              <span className="page-link">2</span>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li role="button" className="page-item">
              <span
                className="page-link"
                onClick={() => setNext(store?.planets?.next)}
              >
                Next
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
