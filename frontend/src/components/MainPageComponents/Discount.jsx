import React from 'react';
import { useSelector } from 'react-redux';
import { selectors } from '../../slices/productsSlice';
import { Link } from 'react-router-dom';

const Discount = () => {
  const allProducts = useSelector(selectors.selectAll);

  const getDiscountProduct = (products => {
    return products.sort((a, b) => b.price - a.price).slice(0,1);
  })

  const product = Object.assign({}, ...getDiscountProduct(allProducts));

  return (
    <div className="discount bg-customgray m-0 p-0">
      <div className='image-container'>
        <img src={product.image} alt={product.title} />
        <div>
          -17%
        </div>
      </div>
      <div className='information-container'>
        <h2 className="product-title font-poiret">
          {product.title}
        </h2>
        <p className="product-description font-opensans">
          {product.description}
        </p>
        <Link className="button rounded font-opensans text-white text-lg bg-customblue hover:bg-gray-400 h-11 py-2 px-10 text-3xl leading-11" to={`/product/${product.id}`}>
          More info
        </Link>
      </div>
    </div>
  );
};

export default Discount;
