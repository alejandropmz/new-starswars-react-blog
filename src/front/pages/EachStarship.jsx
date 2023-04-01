import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { WaitView } from "../components/WaitView";
import { DetailCard } from "../components/DetailCard";
import { Link } from "react-router-dom";

export const EachStarship = () => {
  const { id } = useParams();
  const [data, setData] = useState();

  const starships = `https://www.swapi.tech/api/starships/${id}`;

  const fetchAPI = async () => {
    try {
      const response = await fetch(starships);
      const responseJSON = await response.json();
      setData(responseJSON.result.properties);
      console.log(data);
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
        <WaitView type={"STARSHIP"} />
      ) : (
        <DetailCard
          img={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
          body={
            <div
              id="card-info"
              className="col-sm-12 col-md-8 card-body d-flex flex-column justify-content-around"
            >
              <ul>
                <li>
                  <strong>Model: </strong>
                  {data.model}
                </li>
                <li>
                  <strong>Manufacturer: </strong>
                  {data.manufacturer}
                </li>
                <li>
                  <strong>Cargo capacity: </strong>
                  {data.cargo_capacity}
                </li>
                <li>
                  <strong>Consumables: </strong>
                  {data.consumables}
                </li>
                <li>
                  <strong>Length: </strong>
                  {data.length}
                </li>
                <li>
                  <strong>Cost in credits: </strong>
                  {data.cost_in_credits}
                </li>
                <li>
                  <strong>Max atmosphering speed: </strong>
                  {data.max_atmosphering_speed}
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
"model": "CR90 corvette",
"starship_class": "corvette",
"manufacturer": "Corellian Engineering Corporation",
"cost_in_credits": "3500000",
"length": "150",
"crew": "30-165",
"passengers": "600",
"max_atmosphering_speed": "950",
"hyperdrive_rating": "2.0",
"MGLT": "60",
"cargo_capacity": "3000000",
"consumables": "1 year",
"pilots": [],
"created": "2020-09-17T17:55:06.604Z",
"edited": "2020-09-17T17:55:06.604Z",
"name": "CR90 corvette",
*/
