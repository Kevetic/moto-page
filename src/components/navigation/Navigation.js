import React from "react";

export default function Navigation() {
  const navChoices = ["Home", "Contact", "About", "Products"];

  return (
    <div className="flex justify-evenly w-2/5 m-auto">
      {navChoices.map((navItem) => {
        const id = Math.floor(Math.random() * 1000);
        return (
          <button
            className="mt-10 text-lg cursor-pointer antimate-pulse"
            key={id}
          >
            {navItem.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
