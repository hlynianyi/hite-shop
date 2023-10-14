import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const cartAdapter = createEntityAdapter();

const initialState = cartAdapter.getInitialState([]);
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: cartAdapter.addOne,
    removeFromCart: cartAdapter.removeOne,
    incrementQuantity: (state, action) => {
      const { id } = action.payload;
      if (state.entities[id]) {
        state.entities[id].quantity += 1;
      } else {
        throw new Error(`Item with id ${id} not found in state.entities`);
      }
    },
    decrementQuantity: (state, action) => {
      const { id } = action.payload;
      if (state.entities[id] && state.entities[id].quantity > 1) {
        state.entities[id].quantity -= 1;
      }
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    removeAll: cartAdapter.removeAll,
  }
});

export const selectors = cartAdapter.getSelectors((state) => state.cart);
export const { actions } = cartSlice;
export default cartSlice.reducer;
