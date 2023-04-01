import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { WaitView } from "../components/WaitView";
import { DetailCard } from "../components/DetailCard";
import { Link } from "react-router-dom";

export const EachVehicles = () => {
  const { id } = useParams();
  const [data, setData] = useState();

  const vehicles = `https://www.swapi.tech/api/vehicles/${id}`;

  const fetchAPI = async () => {
    try {
      const response = await fetch(vehicles);
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
        <WaitView type={"VEHICLE"} />
      ) : (
        <DetailCard
          img={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`}
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
