import { PRODUCT_LIMIT_DEFUALT, PRODUCT_PAGE_DEFUALT } from '../../utils/api';
import type { PayloadAction } from '@reduxjs/toolkit';
import { AnyType } from '../../utils/types';

import * as rtk from '@reduxjs/toolkit';
const { createSlice } = ((rtk as AnyType).default ?? rtk) as typeof rtk;

export type PaginationSliceState = {
  currentPage: number;
  limit: number;
};

const initialPaginationState: PaginationSliceState = {
  currentPage: PRODUCT_PAGE_DEFUALT,
  limit: PRODUCT_LIMIT_DEFUALT,
};

const paginationSlice = createSlice({
  name: '@@pagination',
  initialState: initialPaginationState,
  reducers: {
    setCurrentPage: (state: PaginationSliceState, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setCurrentPage } = paginationSlice.actions;
export const paginationReducer = paginationSlice.reducer;
