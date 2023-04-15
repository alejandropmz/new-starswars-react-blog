const getState = ({ getStore, getActions, setStore }) => {
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
