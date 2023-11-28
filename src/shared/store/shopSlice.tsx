import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const shopSlice = createSlice({
  name: 'shops',
  initialState,
  reducers: {
    increment: (state) => {
      state;
    },
  },
});

export const { increment } = shopSlice.actions;

export default shopSlice.reducer;
