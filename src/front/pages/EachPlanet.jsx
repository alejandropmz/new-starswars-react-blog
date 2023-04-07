import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DetailCard } from "../components/DetailCard";
import { Link } from "react-router-dom";
import { WaitView } from "../components/WaitView";

export const EachPlanet = () => {
  const { id } = useParams();
  const [data, setData] = useState();

  const planet = `https://www.swapi.tech/api/planets/${id}`;

  const fetchAPI = async () => {
    try {
      const response = await fetch(planet);
      const responseJSON = await response.json();
      setData(responseJSON.result.properties);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div>
      <h1 className="card-title">{data ? data.name : ""}</h1>
      {data ? (
        <DetailCard
          img={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          body={
            <div
              id="card-info"
              className="col-sm-12 col-md-8 card-body d-flex flex-column justify-content-around"
            >
              <ul>
                <li>
                  <strong>Diameter: </strong>
                  {data.diameter}
                </li>
                <li>
                  <strong>Rotation: </strong>
                  {data.rotation_period}
                </li>
                <li>
                  <strong>Gravity: </strong>
                  {data.gravity}
                </li>
                <li>
                  <strong>Poplation: </strong>
                  {data.population}
                </li>
                <li>
                  <strong>Climate: </strong>
                  {data.climate}
                </li>
                <li>
                  <strong>Terrain: </strong>
                  {data.terrain}
                </li>
              </ul>
              <div className="button d-flex justify-content-end">
                <Link to={-1} className="btn btn-primary ">
                  back
                </Link>
              </div>
            </div>
          }
        />
      ) : (
        <WaitView type={"PLANET"} />
      )}
    </div>
  );
};
