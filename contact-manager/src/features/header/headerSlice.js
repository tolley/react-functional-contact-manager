import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  displayMode: 'card'
};

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setDisplayMode: (state, action) => {
      state.displayMode = action.payload;
    },
  }
});

export const { setDisplayMode } = headerSlice.actions;

export const selectDisplayMode = (state) => state.header.value;

export default headerSlice.reducer;
