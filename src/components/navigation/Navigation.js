import React, { useEffect } from "react";
import { BrowserRouter, Link, useLocation } from "react-router-dom";
import KAWI from "../../assets/KAWI.png";

const links = [
  {
    id: 1,
    text: "HOME",
    url: "#home",
  },
  {
    id: 2,
    text: "PRODUCTS",
    url: "#products",
  },
];

export default function Navigation() {
  const location = useLocation();
  const path = location.pathname === "/";

  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const location = document.querySelector(target)?.offsetTop;
    window.scrollTo({
      left: 0,
      top: location - 64,
    });
  };

  return (
    <>
      {path ? (
        <div
          className="absolute bottom-44 flex md:flex-row 
        justify-evenly w-full m-auto items-center flex-col sm:text-lg 
        text-3xl transition transition-all ease-in-out duration-1000"
        >
          <Link to="/Home">START HERE</Link>
        </div>
      ) : (
        <div className="sticky top-0 flex flex-col md:flex-row items-center w-full justify-evenly w-4/5 mt-10 m-auto transition-all ease-in-out duration-1000 p-5">
          <a href="/">
            {!path && <img className="w-12 text-kawi" src={KAWI} />}
          </a>
          {links.map((link, idx) => {
            return (
              <a key={idx} onClick={handleClick} href={link.url} key={link.id}>
                {link.text}
              </a>
            );
          })}
        </div>
      )}
    </>
  );
}
