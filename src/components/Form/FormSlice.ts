import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FormCardProps } from '../../components/FormCard/FormCard';

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
