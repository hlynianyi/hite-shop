import React from 'react';
import { useSelector } from 'react-redux';
import { selectors } from '../../slices/productsSlice';
import { Link } from 'react-router-dom';

const BestProducts = () => {
  const allProducts = useSelector(selectors.selectAll);
  const sortedByCount = allProducts.sort((a, b) => b.rating.rate - a.rating.rate);
  const getPopularProducts = () => sortedByCount.slice(0,4);

  return (
    <div className='flex flex-col pb-20 px-90'>
      <p className='pt-10 pb-12 font-poiret text-4xl text-right'>
        BEST PRODUCTS
      </p>
      <div className='flex justify-between flex-row'>
        {getPopularProducts().map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div className='flex flex-col w-72'>
              <div className='flex flex-grow h-80'>
                <img className='w-full h-full object-contain' src={product.image} alt={product.title} />
              </div>
              <div className=''>
                <p className='pt-4 font-poiret truncate'>{product.title}</p>
                <p className='pt-2 font-opensans'>{product.price}$</p>
              </div>
            </div>    
          </Link>
        ))
        }
      </div>
    </div>
  );
};

export default BestProducts;