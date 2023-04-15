import { configureStore } from '@reduxjs/toolkit';
import { searchReducer } from './components';

export const store = configureStore({
  reducer: {
    search: searchReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export type RootState = ReturnType<typeof store.getState>;
