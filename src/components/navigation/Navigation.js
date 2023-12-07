import React, { useEffect } from "react";
import { BrowserRouter, Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();
  const path = location.pathname === "/";

  const replaceBtn = () => {};

  return (
    <>
      {path ? (
        <div
          className="absolute bottom-44 flex md:flex-row 
        justify-evenly w-full m-auto items-center flex-col sm:text-lg text-3xl"
        >
          <Link to="/Home">Home</Link>
          <Link to="/Products">Products</Link>
          <Link to="/Locations">Locations</Link>
        </div>
      ) : (
        <div className="flex justify-evenly w-4/5 mt-10 m-auto">
          <Link to="/">
            {!path && (
              <img className="w-12 text-kawi" src="/assets/kawilogo.png" />
            )}
          </Link>
          <Link to="/Home">Home</Link>
          <Link to="/Products">Products</Link>
          <Link to="/Locations">Locations</Link>
        </div>
      )}
    </>
  );
}
