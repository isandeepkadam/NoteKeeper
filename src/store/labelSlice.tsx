import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Label } from './noteSlice';

const initialState: Label[] = [];

export const labelSlice = createSlice({
  name: 'label',
  initialState,
  reducers: {
    addLabelToList: (state: Label[], action: PayloadAction<Label>) => {
      state.push(action.payload);
    },
    deleteLabel: (state: Label[], action: PayloadAction<string>) => {
      return state.filter((item) => item.title !== action.payload);
    },
  },
});

export const { addLabelToList, deleteLabel } = labelSlice.actions;
