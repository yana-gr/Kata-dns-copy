import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchedShops: [],
  filteredShops: [],
  focusShop: null,
  isLoading: false,
  isError: false,
};

export const shopSlice = createSlice({
  name: 'shopsReducer',
  initialState,
  reducers: {
    setSearchedShops(state, action) {
      state.filteredShops = action.payload.data;
      state.searchedShops = action.payload.data;
      state.isError = action.payload.isError;
      state.isLoading = action.payload.isLoading;
    },
    setFilteredShops: (state, action) => ({ ...state, filteredShops: action.payload.filteredShops }),
    setFocusShop(state, action) {
      state.focusShop = action.payload;
    },

    deleteFocusShop(state) {
      state.focusShop = null;
    },
  },
});

export const { setSearchedShops, setFilteredShops, setFocusShop, deleteFocusShop } = shopSlice.actions;

export default shopSlice.reducer;
