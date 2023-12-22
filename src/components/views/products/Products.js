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
  };

  return (
    <div className="flex">
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
      <div className="w-4/5 text-center bg-gray-400 rounded-2lg productPage text-white">
        {current.length == 0 ? (
          <h1 className="text-4xl relative top-40">Select a Model</h1>
        ) : (
          <div>
            {current.map((x) => {
              return (
                <div className="grid grid-rows-4 grid-flow-col gap-2 mt-60 text-lg">
                  <div className="flex-col flex">
                    Model:<span>{x.model}</span>
                  </div>
                  <div className="flex-col flex">
                    Make: <span>{x.make}</span>
                  </div>
                  <div className="flex-col flex">
                    Engine: <span>{x.engine}</span>
                  </div>
                  <div className="flex-col flex">
                    Horsepower:<span>{x.power}</span>
                  </div>
                  <div className="flex-col flex">
                    Seat Heigt:<span>{x.seat_height}</span>
                  </div>
                  <div className="flex-col flex">
                    Torque:<span>{x.torque}</span>
                  </div>
                  <div className="flex-col flex">
                    Type:<span>{x.type}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
