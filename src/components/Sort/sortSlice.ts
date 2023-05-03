import { sortProps, sortTypeProps } from '../../utils/api/api.props';

import type { PayloadAction } from '@reduxjs/toolkit';
import { AnyType } from '../../utils/types';

import * as rtk from '@reduxjs/toolkit';
const { createSlice } = ((rtk as AnyType).default ?? rtk) as typeof rtk;

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
