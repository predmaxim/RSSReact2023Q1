import { createSlice } from '@reduxjs/toolkit';

export type SearchState = { value: string };

const searchSlice = createSlice({
  name: '@@search',
  initialState: {
    value: '',
  },
  reducers: {
    addQuery: (state, action) => void (state.value = action.payload),
    clearQuery: (state) => void (state.value = ''),
  },
});

export const { addQuery, clearQuery } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
