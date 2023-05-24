import { createSlice, createEntityAdapter, createSelector } from '@reduxjs/toolkit';

const productsAdapter = createEntityAdapter();

const initialState = productsAdapter.getInitialState({
  filter: {
    price: { min: null, max: null },
    category: null,
  }
});

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: productsAdapter.addOne,
    addProducts: productsAdapter.addMany,
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    sortFilteredProducts: (state, action) => {
      if (action.payload === 'popularity') {
        state.ids.sort((a, b) => state.entities[b].rating.count - state.entities[a].rating.count);
      } else {
        state.ids.sort((a, b) => state.entities[b].rating.rate - state.entities[a].rating.rate);
      }
    },
  }
});


const productSelectors = productsAdapter.getSelectors((state) => state.products);
export const selectors = {
  ...productSelectors,
  selectFilter: (state) => state.products.filter,
  selectFilteredProducts: createSelector(
    productSelectors.selectAll,
    (state) => state.products.filter,
    (products, filter) => products.filter(product =>
      (
        (filter.price.min === null || product.price >= filter.price.min) &&
        (filter.price.max === null || product.price <= filter.price.max)
      ) &&
      (filter.category === null || product.category === filter.category)
    )
  ),
};
export const { actions } = productsSlice;
export default productsSlice.reducer;