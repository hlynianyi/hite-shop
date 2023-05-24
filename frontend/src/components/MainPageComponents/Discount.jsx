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
    <div className="pt-20 flex flex-row h-570 bg-customgray w-full m-0 p-0">
      <div className='w-2/5 relative'>
        <img className='pl-32 mix-blend-multiply' src={product.image} alt={product.title} />
        <div className="absolute top-0 right-0 p-1 rounded-full bg-gray-500 text-white text-xl font-opensans">
          -17%
        </div>
      </div>
      <div className='w-3/5 pl-20 pr-20'>
        <h2 className="pb-8 font-poiret text-4xl">
          {product.title}
        </h2>
        <p className="pb-16 font-opensans text-lg">
          {product.description}
        </p>
        <Link className="button rounded font-opensans text-white text-lg bg-customblue h-11 py-2 px-10 text-3xl leading-11" to={`/product/${product.id}`}>
          More info
        </Link>
      </div>
    </div>
  );
};

export default Discount;
