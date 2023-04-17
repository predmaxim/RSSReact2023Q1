import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { searchProductsApi } from './utils/api/api';
import { searchReducer, sortReducer, paginationReducer, formsReducer } from './components';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    sort: sortReducer,
    pagination: paginationReducer,
    forms: formsReducer,
    [searchProductsApi.reducerPath]: searchProductsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(searchProductsApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;
