import React from 'react';
import { useSelector } from 'react-redux';
import { selectors } from '../../slices/productsSlice';
import { Link } from 'react-router-dom';

const Popular = () => {
  const allProducts = useSelector(selectors.selectAll);
  const sortedByCount = allProducts.sort((a, b) => b.rating.count - a.rating.count);
  const getPopularProducts = () => sortedByCount.slice(0,4);

  return (
    <div className='flex flex-col'>
      <p className='pt-20 pr-16 pb-12 font-poiret text-4xl text-right'>
        POPULAR PRODUCTS
      </p>
      <div className='flex justify-between flex-row px-20'>
        {getPopularProducts().map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div className='flex flex-col w-72'>
              <div className='flex flex-grow'>
                <img className='w-full max-h-80 object-contain' src={product.image} alt={product.title} />

              </div>
              <p className='pt-4 font-poiret truncate'>{product.title}</p>
              <p className='pt-2 pb-20 font-opensans'>{product.price}$</p>
            </div>
          </Link>
        ))
        }
      </div>
    </div>
  );
};

export default Popular;