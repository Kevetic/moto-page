import React from "react";
import KAWI from "../../assets/KAWI.png";

export default function LandingPage() {
  return (
    <div className="items-center flex flex-col">
      <div className="flex justify-center m-10">
        <img className="animate-pulse md:w-3/5 w-full" src={KAWI} />
      </div>
    </div>
  );
}
