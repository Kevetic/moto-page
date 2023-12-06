import React from "react";
import Navigation from "../navigation/Navigation";

export default function LandingPage() {
  return (
    <div className="items-center flex flex-col">
      <div className="flex justify-center m-10">
        <img className="animate-pulse w-2/5" src="/assets/kawiLogo.png" />;
      </div>
      <Navigation />
    </div>
  );
}
