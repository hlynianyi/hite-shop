import React from 'react';
import { useSelector } from 'react-redux';
import ProductContainer from './ProductsContainer';
import Filters from './Filters';
import { selectors as productsSelectors } from '../../slices/productsSlice';
import { selectors as categoriesSelectors } from '../../slices/categoriesSlice';

const Shop = () => {
  const allProducts = useSelector(productsSelectors.selectAll);
  const categories = useSelector(categoriesSelectors.selectAll);

  if (allProducts.length === 0) {
    return (
      <div className='flex justify-center font-poiret text-4xl'>
        Loading...
      </div>
    );
  };

  return (
    <div>
      <div className='shop-container'>
        <Filters categories={categories}/>
        <ProductContainer  />
      </div>
    </div>
  );
};

export default Shop;
