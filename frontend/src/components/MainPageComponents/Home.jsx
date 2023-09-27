import React from "react";
import Carrousel from "./Carrousel";
import Categories from "./Categories";
import Popular from "./Popular";
import SubOffer from "./SubOffer";
import BestProducts from "./BestProducts";
import Discount from "./Discount";

const Home = () => {
  return (
    <div className="flex flex-col justify-center">
      {/* Carrousel */}
      <Carrousel />
      {/* Categories */}
      <Categories />
      {/* Popular Products */}
      <Popular />
      {/* Discount price */}
      {<Discount />}
      {/* Best Products */}
      <BestProducts />
      {/* Subscribe offer */}
      <SubOffer />
    </div>
  );
};

export default Home;
