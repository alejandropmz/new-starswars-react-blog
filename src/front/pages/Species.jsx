import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { GeneralCard } from "../components/GeneralCard";
import { Pagination } from "../components/Pagination";

export const Species = () => {
  const { store, actions } = useContext(Context);
  const [totalPages, setTotalPages] = useState();

  const speciesfetch = async () => {
    try {
      const response = await fetch("https://www.swapi.tech/api/species/");
      const responseJSON = await response.json();
      setTotalPages(responseJSON.total_pages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    speciesfetch();
    actions.getSpecies();
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
      {!totalPages ? (
        ""
      ) : (
        <Pagination type={"species"} numberPages={totalPages} currentPage={2} />
      )}
    </div>
  );
};
