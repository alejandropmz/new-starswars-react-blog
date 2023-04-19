import React from "react";

// paso 1 getstate

const getState = ({ getStore, getActions, setStore }) => {
  // paso 2 en el getstate hacer el llamado a la api creando el dinamismo para pasar parametros

  const elementsFetch = async (url, element) => {
    try {
      const response = await fetch(url);
      const responseJSON = await response.json();
      setStore({
        ...getStore(),
        [element]: responseJSON.results || responseJSON.result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // paso 3 return con el store de los arreglos vacios para llenar la información

  return {
    store: {
      people: [],
      films: [],
      starships: [],
      vehicles: [],
      species: [],
      planets: [],
    },

    // paso 4 actions que el que va a desarrollar la lógica para el consumo de la api para cada componente

    actions: {
      getPeople: async () => {
        elementsFetch("https://swapi.tech/api/people", "people");
      },
      getFilms: async () => {
        elementsFetch("https://swapi.tech/api/films", "films");
      },
      getStarships: async () => {
        elementsFetch("https://swapi.tech/api/starships", "starships");
      },
      getVehicles: async () => {
        elementsFetch("https://swapi.tech/api/vehicles", "vehicles");
      },
      getSpecies: async () => {
        elementsFetch("https://swapi.tech/api/species", "species");
      },
      getPlanets: async () => {
        elementsFetch("https://swapi.tech/api/planets", "planets");
      },
    },
  };
};

export default getState;

// primera versión de consumo de api 

/* const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],
      vehicles: [],
      films: [],
      starships: [],
      species: [],
      planets: [],
    },
    actions: {
      getPeople: async () => {
        try {
          const response = await fetch("https://swapi.tech/api/people");
          const responseJSON = await response.json();
          setStore({ ...getStore(), people: responseJSON.results });
        } catch (error) {
          console.error(error);
        }
      },
      getVehicles: async () => {
        try {
          const response = await fetch("https://swapi.tech/api/vehicles");
          const responseJSON = await response.json();
          setStore({ ...getStore(), vehicles: responseJSON.results });
        } catch (error) {
          console.error(error);
        }
      },
      getFilms: async () => {
        try {
          const response = await fetch("https://swapi.tech/api/films");
          const responseJSON = await response.json();
          setStore({ ...getStore(), films: responseJSON.result });
        } catch (error) {
          console.error(error);
        }
      },
      getStarships: async () => {
        try {
          const response = await fetch("https://swapi.tech/api/starships");
          const responseJSON = await response.json();
          setStore({ ...getStore(), starships: responseJSON.results });
        } catch (error) {
          console.error(error);
        }
      },
      getSpecies: async () => {
        try {
          const response = await fetch("https://swapi.tech/api/species");
          const responseJSON = await response.json();
          setStore({ ...getStore(), species: responseJSON.results });
        } catch (error) {
          console.error(error);
        }
      },
      getPlanets: async (url) => {
        try {
          const response = await fetch(url);
          const responseJSON = await response.json();
          setStore({ ...getStore(), planets: responseJSON });
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
};

export default getState;

/* https://swapi.tech/api/planets */
