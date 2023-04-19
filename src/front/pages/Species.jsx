import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { GeneralCard } from "../components/GeneralCard";
import { Pagination } from "../components/Pagination";

export const Species = () => {
  const { store, actions } = useContext(Context);
  const [pagination, setPagination] = useState();
  const [nextPage, setNextPage] = useState();

  const api = async () => {
    try {
      const response = await fetch("https://swapi.tech/api/species");
      const responseJSON = await response.json();
      setPagination(responseJSON.total_pages);
      setNextPage(responseJSON.next);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    actions.getSpecies();
    api();
  });

  return (
    <div className="container-fluid">
      <div className="type">
        <h1 className="type-title">Species</h1>
      </div>
      <div className="row justify-content-center">
        {store.species.map((specie, index) => (
          <div
            key={index}
            className="col-sm-12 col-md-3 d-flex justify-content-center"
          >
            <GeneralCard
              img={`https://starwars-visualguide.com/assets/img/species/${specie.uid}.jpg`}
              title={specie.name}
              link={specie.uid}
            />
          </div>
        ))}
      </div>

      {/* pagination */}
      <Pagination numberPages={pagination} nextPage={nextPage} />
    </div>
  );
};
