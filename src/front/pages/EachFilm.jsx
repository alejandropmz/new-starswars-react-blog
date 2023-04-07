import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { WaitView } from "../components/WaitView";
import { DetailCard } from "../components/DetailCard";
import { Link } from "react-router-dom";

export const EachFilm = () => {
  const { id } = useParams();
  const [data, setData] = useState();

  const films = `https://www.swapi.tech/api/films/${id}`;

  const fetchAPI = async () => {
    try {
      const response = await fetch(films);
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
      <h1 className="card-title">{data ? data.title : ""}</h1>
      {!data ? (
        <WaitView type={"FILM"} />
      ) : (
        <DetailCard
          img={`https://starwars-visualguide.com/assets/img/films/${id}.jpg`}
          body={
            <div
              id="card-info"
              className="col-sm-12 col-md-8 card-body d-flex flex-column justify-content-around"
            >
              <ul>
                <li>
                  <strong>Producer: </strong>
                  {data.producer}
                </li>
                <li>
                  <strong>Director: </strong>
                  {data.director}
                </li>
                <li>
                  <strong>Episode id: </strong>
                  {data.episode_id}
                </li>
                <li>
                  <strong>Release date: </strong>
                  {data.release_date}
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

/* 

"created": "2023-04-01T03:48:43.642Z",
"edited": "2023-04-01T03:48:43.642Z",
"producer": "Gary Kurtz, Rick McCallum",
"title": "The Empire Strikes Back",
"episode_id": 5,
"director": "Irvin Kershner",
"release_date": "1980-05-17",
*/
