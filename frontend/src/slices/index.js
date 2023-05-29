import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './productsSlice';
import categoriesReducer from './categoriesSlice';
import cartReducer from './cartSlice';

export default configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    cart: cartReducer,
  },
})