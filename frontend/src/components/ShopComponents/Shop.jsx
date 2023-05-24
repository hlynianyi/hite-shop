import React from 'react';
import { useSelector } from 'react-redux';
import { selectors as productsSelectors } from '../../slices/productsSlice';
import ProductContainer from './ProductsContainer';
import Filters from './Filters';
import Header from './Header';

const Shop = () => {
  const allProducts = useSelector(productsSelectors.selectAll);

  if (allProducts.length === 0) {
    return <div className='flex justify-center font-poiret text-4xl'>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <div className='flex flex-row pt-4 px-90 items-start'>
        <Filters />
        <ProductContainer  />
      </div>
    </div>
  );
};

export default Shop;
