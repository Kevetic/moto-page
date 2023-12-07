import React, { useState, useEffect } from "react";

export default function Products() {
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState([]);

  useEffect(() => {
    async function fetchExercises() {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/motorcycles?make=kawasaki&model=ninja`,
        {
          headers: {
            "X-Api-Key": "zZYorbN6k1AZ8AsiLHEkqA==WwBF1T9Vnno6gRGG",
          },
        }
      );
      const data = await response.json();
      setData(data);
    }

    fetchExercises();
  }, []);

  const handleClick = (e) => {
    const dupeCheck = data.filter((selected) => e.target.id === selected.model);
    const firstItem = dupeCheck.length > 0 ? dupeCheck[0] : null;
    setCurrent([firstItem]);
    console.log(firstItem);
  };

  return (
    <div className="flex mt-10">
      <div className="w-1/5">
        {data.map((x, i) => {
          return (
            <button
              onClick={handleClick}
              id={x.model}
              key={i}
              className="list-none flex p-1.5"
            >
              {x.model}
            </button>
          );
        })}
      </div>
      <div className="w-4/5 text-center">
        <div>Product Information</div>
        <div>
          {current.map((x) => {
            return (
              <>
                <div>Model:{x.model}</div>
                <div>Make: {x.make}</div>
                <div>Engine: {x.engine}</div>
                <div>Horsepower:{x.power}</div>
                <div>Seat Heigt:{x.seat_height}</div>
                <div>Torque:{x.torque}</div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
