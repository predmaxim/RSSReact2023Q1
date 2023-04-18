import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product } from '../../utils/api';

export type ProductListSliceState = {
  products?: Product[];
  total: number;
  isFetching: boolean;
};

const initialProductsState: ProductListSliceState = {
  products: [],
  total: 0,
  isFetching: true,
};

const productListSlice = createSlice({
  name: '@@products',
  initialState: initialProductsState,
  reducers: {
    setProducts: (state: ProductListSliceState, action: PayloadAction<ProductListSliceState>) => {
      state.products = action.payload.products;
      state.total = action.payload.total;
      state.isFetching = action.payload.isFetching;
    },
  },
});

export const { setProducts } = productListSlice.actions;
export const productListReducer = productListSlice.reducer;
