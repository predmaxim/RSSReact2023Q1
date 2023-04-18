import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { sortProps, sortTypeProps } from '../../utils/api/api.props';

export type SortSliceState = { sort: sortProps; sortType: sortTypeProps };
const initialSortState: SortSliceState = {
  sort: 'asc',
  sortType: 'rating',
};

const sortSlice = createSlice({
  name: '@@sort',
  initialState: initialSortState,
  reducers: {
    setSort: (state: SortSliceState, action: PayloadAction<sortProps>) => {
      state.sort = action.payload;
    },
    setSortType: (state: SortSliceState, action: PayloadAction<sortTypeProps>) => {
      state.sortType = action.payload;
    },
  },
});

export const { setSort, setSortType } = sortSlice.actions;
export const sortReducer = sortSlice.reducer;
