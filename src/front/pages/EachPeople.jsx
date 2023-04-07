import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { WaitView } from "../components/WaitView";
import { DetailCard } from "../components/DetailCard";
import { Link } from "react-router-dom";

export const EachPeople = () => {
  const { id } = useParams();
  const [data, setData] = useState();

  const people = `https://www.swapi.tech/api/people/${id}`;

  const fetchAPI = async () => {
    try {
      const response = await fetch(people);
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
        <WaitView type={"CHARACTER"} />
      ) : (
        <DetailCard
          img={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          body={
            <div
              id="card-info"
              className="col-sm-12 col-md-8 card-body d-flex flex-column justify-content-around"
            >
              <ul>
                <li>
                  <strong>Birth year: </strong>
                  {data.birth_year}
                </li>
                <li>
                  <strong>Eye color: </strong>
                  {data.eye_color}
                </li>
                <li>
                  <strong>Hair color: </strong>
                  {data.hair_color}
                </li>
                <li>
                  <strong>Skin color: </strong>
                  {data.skin_color}
                </li>
                <li>
                  <strong>Gender: </strong>
                  {data.gender}
                </li>
                <li>
                  <strong>Mass: </strong>
                  {data.mass}
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
      )}
    </div>
  );
};

/* "height": "172",
            "mass": "77",
            "hair_color": "blond",
            "skin_color": "fair",
            "eye_color": "blue",
            "birth_year": "19BBY",
            "gender": "male",
            "created": "2023-04-01T03:48:43.652Z",
            "edited": "2023-04-01T03:48:43.652Z",
            "name": "Luke Skywalker", */