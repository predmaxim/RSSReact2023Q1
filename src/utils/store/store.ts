import type { PreloadedState } from '@reduxjs/toolkit';
import { searchProductsApi } from '../api/api';
import { searchReducer, sortReducer, paginationReducer, formsReducer } from '../../components';
import { AnyType } from '../types';

import * as rtk from '@reduxjs/toolkit';
const { combineReducers, configureStore } = ((rtk as AnyType).default ?? rtk) as typeof rtk;

const rootReducer = combineReducers({
  search: searchReducer,
  sort: sortReducer,
  pagination: paginationReducer,
  forms: formsReducer,
  [searchProductsApi.reducerPath]: searchProductsApi.reducer,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(searchProductsApi.middleware),
    devTools: process.env.NODE_ENV !== 'production',
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
