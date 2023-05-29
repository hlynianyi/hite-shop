import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const cartAdapter = createEntityAdapter();

const initialState = cartAdapter.getInitialState([]);

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: cartAdapter.addOne,
    removeFromCart: cartAdapter.removeOne,
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    }
  }
});

export const selectors = cartAdapter.getSelectors((state) => state.cart);
export const { actions } = cartSlice;
export default cartSlice.reducer;
