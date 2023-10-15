import React from "react";
import Carrousel from "./Carrousel";
import Categories from "./Categories";
import PopularProducts from "./PopularProducts";
import Subscription from "./Subscription";
import BestProducts from "./BestProducts";
import Discount from "./Discount";

const Home = () => {
  return (
    <div className="flex flex-col justify-center">
      <Carrousel />
      <Categories />
      <PopularProducts />
      <Discount />
      <BestProducts />
      <Subscription />
    </div>
  );
};

export default Home;
