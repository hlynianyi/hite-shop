import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const categoriesAdapter = createEntityAdapter();

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: categoriesAdapter.getInitialState(),
  reducers: {
    addCategory: categoriesAdapter.addOne,
    addCategories: categoriesAdapter.addMany,
  }
});

export const selectors = categoriesAdapter.getSelectors((state) => state.categories);
export const { actions } = categoriesSlice;
export default categoriesSlice.reducer;