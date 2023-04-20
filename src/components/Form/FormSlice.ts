import { FormCardProps } from '../../components/FormCard/FormCard';

import type { PayloadAction } from '@reduxjs/toolkit';
import { AnyType } from '../../utils/types';

import * as rtk from '@reduxjs/toolkit';
const { createSlice } = ((rtk as AnyType).default ?? rtk) as typeof rtk;

export type FormSliceState = FormCardProps[];
const initialFormSliceState: FormSliceState = [];

const FormSlice = createSlice({
  name: '@@forms',
  initialState: initialFormSliceState,
  reducers: {
    setForms: (state: FormSliceState, action: PayloadAction<FormCardProps>) => {
      state.push(action.payload);
    },
  },
});

export const { setForms } = FormSlice.actions;
export const formsReducer = FormSlice.reducer;
