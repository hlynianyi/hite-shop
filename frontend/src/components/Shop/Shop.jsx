import React from "react";
import { useSelector } from "react-redux";
import ProductContainer from "./ProductsContainer";
import Filters from "./Filters";
import { selectors as productsSelectors } from "../../slices/productsSlice";
import { selectors as categoriesSelectors } from "../../slices/categoriesSlice";

const Loading = () => <div className="loading-animation"></div>;

const Shop = () => {
  const allProducts = useSelector(productsSelectors.selectAll);
  const categories = useSelector(categoriesSelectors.selectAll);

  return (
    <div className="shop-container">
      <Filters categories={categories} />
      {allProducts.length ? <ProductContainer /> : <Loading />}
    </div>
  );
};

export default Shop;
