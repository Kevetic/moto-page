import React from "react";
import Home from "../views/home/Home";
import Products from "../views/products/Products";

export default function HomePage() {
  return (
    <>
      <section>
        <h1 id="home">
          <Home />
        </h1>
      </section>
      <section>
        <h1 id="products">
          <Products />
        </h1>
      </section>
      <section>
        <h1 id="locations">LOCATIONS</h1>
      </section>
    </>
  );
}
