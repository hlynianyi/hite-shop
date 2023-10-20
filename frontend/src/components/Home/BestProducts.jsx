import React from "react";
import { useSelector } from "react-redux";
import { selectors } from "../../slices/productsSlice";
import { Link } from "react-router-dom";

const BestProducts = () => {
  const allProducts = useSelector(selectors.selectAll);
  const sortedByCount = allProducts.sort(
    (a, b) => b.rating.rate - a.rating.rate
  );
  const getPopularProducts = () => sortedByCount.slice(0, 4);

  return (
    <div className="collection">
      <p className="title font-poiret">BEST PRODUCTS</p>
      <div className="section">
        {getPopularProducts().map((product) => (
          <Link className="item" to={`/product/${product.id}`} key={product.id}>
            <div className="image hover:scale-105 transition-transform duration-300 ease-in-out">
              <img src={product.image} alt={product.title} />
            </div>
            <p className="pt-4 font-poiret truncate">{product.title}</p>
            <p className="pt-2 pb-20 font-opensans">{product.price}$</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BestProducts;
