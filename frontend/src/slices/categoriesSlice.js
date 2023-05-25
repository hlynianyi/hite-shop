import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const categoriesAdapter = createEntityAdapter();

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: categoriesAdapter.getInitialState({ selectedCategory: '' }), // добавлено начальное состояние для selectedCategory
  reducers: {
    addCategory: categoriesAdapter.addOne,
    addCategories: categoriesAdapter.addMany,
    setSelectedCategory: (state, action) => { // добавлен новый редьюсер
      state.selectedCategory = action.payload;
    }
  }
});

export const selectors = categoriesAdapter.getSelectors((state) => state.categories);
export const { actions } = categoriesSlice;
export default categoriesSlice.reducer;
