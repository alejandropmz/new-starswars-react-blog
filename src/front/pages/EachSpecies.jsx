import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { WaitView } from "../components/WaitView";
import { DetailCard } from "../components/DetailCard";
import { Link } from "react-router-dom";

export const EachSpecies = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [click, setClick] = useState(true);

  const species = `https://www.swapi.tech/api/species/${id}`;

  const fetchAPI = async () => {
    try {
      const response = await fetch(species);
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
      {!data ? (
        <WaitView type={"SPECIE"} />
      ) : (
        <DetailCard
          img={`https://starwars-visualguide.com/assets/img/species/${id}.jpg`}
          body={
            <div
              id="card-info"
              className="col-sm-12 col-md-8 card-body d-flex flex-column justify-content-around"
            >
              <ul>
                <li>
                  <strong>classification: </strong>
                  {data.classification}
                </li>
                <li>
                  <strong>Designation: </strong>
                  {data.designation}
                </li>
                <li>
                  <strong>Average height: </strong>
                  {data.average_height}
                </li>
                <li>
                  <strong>Average lifespan: </strong>
                  {data.average_lifespan}
                </li>
                <li>
                  <strong>Hair color: </strong>
                  {data.hair_colors}
                </li>
                <li>
                  <strong>Eye color: </strong>
                  {data.eye_colors}
                </li>
                <li>
                  <strong>Skin color: </strong>
                  {data.skin_colors}
                </li>
                <li>
                  <strong>Language: </strong>
                  {data.language}
                </li>
              </ul>
              <div className="button d-flex justify-content-end">
                <Link to={-1} className="btn btn-warning ">
                  back
                </Link>
              </div>
            </div>
          }
        />
      )}
    </div>
  );
};

/* 
 "classification": "mammal",
  "designation": "sentient",
  "average_height": "180",
  "average_lifespan": "120",
  "hair_colors": "blonde, brown, black, red",
  "skin_colors": "caucasian, black, asian, hispanic",
  "eye_colors": "brown, blue, green, hazel, grey, amber",
  "homeworld": "https://www.swapi.tech/api/planets/1",
  "language": "Galactic Basic",
*/
