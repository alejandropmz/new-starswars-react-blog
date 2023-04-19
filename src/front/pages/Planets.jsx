import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { GeneralCard } from "../components/GeneralCard";
import { Pagination } from "../components/Pagination";

export const Planets = () => {
  const { store, actions } = useContext(Context);
  /* const [next, setNext] = useState("https://swapi.tech/api/planets"); */

  const [pagination, setPagination] = useState();
  const [nextPage, setNextPage] = useState();

  const api = async () => {
    try {
      const response = await fetch("https://swapi.tech/api/planets");
      const responseJSON = await response.json();
      setPagination(responseJSON.total_pages);
      setNextPage(responseJSON.next);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    actions.getPlanets();
    api();
  }, []);

  /*   useEffect(() => {
    actions.getPlanets(next);
    console.log(actions.getPlanets(next));
  }, [next]);
 */
  return (
    <div className="container-fluid">
      <div className="type">
        <h1 className="type-title">Planets</h1>
      </div>
      <div className="row d-flex justify-content-center">
        {store.planets?.map((planet, index) => (
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
      <Pagination numberPages={pagination} nextPage={nextPage} />
    </div>
  );
};
