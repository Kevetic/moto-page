import React from "react";

export default function HomePage() {
  return (
    <div className=" text-5xl mt-36 text-center">
      <span>
        <span className="text-kawi">Kawasaki</span> Racing
      </span>
      <div className="flex-col flex md:flex-row bg-gray-400 mt-10 w-4/5 m-auto rounded-lg">
        <img className="w-2/5 m-auto rounded-lg p-5" src="/assets/track.png" />
        <p className="text-sm w-2/5 m-auto p-5  rounded-lg">
          <span className="text-kawi">Kawasaki</span> Motorsports embodies a
          legacy of adrenaline-fueled excellence in the world of competitive
          racing and motorsports. Renowned for its high-performance motorcycles
          and off-road vehicles, <span className="text-kawi">Kawasaki</span> has
          left an indelible mark on the racing circuit, dominating championships
          across various disciplines. From the iconic Ninja series on the
          asphalt to the dominating KX lineup in motocross and off-road events,
          <span className="text-kawi"> Kawasaki's</span> motorsports division
          showcases a commitment to precision engineering, cutting-edge
          technology, and a relentless pursuit of victory. The brand's success
          on the track not only solidifies its standing as a powerhouse in
          motorsports but also translates into the development of production
          models that embody the same spirit of speed, agility, and innovation,
          creating an exhilarating connection between the thrill of racing and
          the everyday rider.
        </p>
      </div>
      <div className="flex-col flex md:flex-row bg-gray-400 mt-10 w-4/5 m-auto rounded-lg">
        <p className="text-sm w-2/5 m-auto p-5  rounded-lg">
          <span className="text-kawi">Kawasaki</span> motorcycles are revered
          for their outstanding qualities, seamlessly blending cutting-edge
          technology with a commitment to performance and reliability. Renowned
          for their powerful engines, the bikes exhibit an exhilarating
          combination of speed and agility. The iconic Ninja series, in
          particular, exemplifies <span className="text-kawi">Kawasaki's</span>{" "}
          dedication to pushing the boundaries of motorcycle design and speed
          capabilities. Whether on the track or the open road,{" "}
          <span className="text-kawi">Kawasaki</span> bikes deliver an
          adrenaline-pumping experience, showcasing precision handling and
          aerodynamic prowess. From the nimble and sporty models tailored for
          city streets to the high-performance beasts designed for the
          racetrack, <span className="text-kawi">Kawasaki</span> consistently
          sets industry standards for speed enthusiasts. Riders worldwide
          appreciate the brand for its ability to seamlessly merge innovation
          with the thrill of the ride, making
          <span className="text-kawi"> Kawasaki</span> motorcycles synonymous
          with speed, power, and an unmatched riding experience.
        </p>
        <img className="w-2/5 m-auto rounded-lg p-5" src="/assets/zx10r.jpg" />
      </div>
    </div>
  );
}
