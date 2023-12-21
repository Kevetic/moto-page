import React from "react";
import TRACK from "../../../assets/TRACK.png";

export default function Home() {
  return (
    <div className=" text-5xl text-center flex flex-col items-center ">
      <div className="md:flex mt-5">
        <h1 className="text-kawi">Kawasaki</h1> Racing
      </div>
      <div className="flex-col flex md:flex-row bg-gray-400 mt-10 w-4/5 m-auto rounded-lg p-5">
        <img className="w-2/5 m-auto rounded-2xl shadow-2xl p-2" src={TRACK} />
        <div className="flex">
          <p className="text-xs w-4/5 m-auto p-2 sm:text-lg rounded-2xl shadow-2xl">
            <span className="text-kawi">Kawasaki</span> Motorsports embodies a
            legacy of adrenaline-fueled excellence in the world of competitive
            racing and motorsports. Renowned for its high-performance
            motorcycles and off-road vehicles,{" "}
            <span className="text-kawi">Kawasaki</span> has left an indelible
            mark on the racing circuit, dominating championships across various
            disciplines. From the iconic Ninja series on the asphalt to the
            dominating KX lineup in motocross and off-road events,
            <span className="text-kawi"> Kawasaki's</span> motorsports division
            showcases a commitment to precision engineering, cutting-edge
            technology, and a relentless pursuit of victory. The brand's success
            on the track not only solidifies its standing as a powerhouse in
            motorsports but also translates into the development of production
            models that embody the same spirit of speed, agility, and
            innovation, creating an exhilarating connection between the thrill
            of racing and the everyday rider.
          </p>
        </div>
      </div>
    </div>
  );
}
