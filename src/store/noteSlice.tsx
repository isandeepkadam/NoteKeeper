import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Label {
  title: string;
}

export interface Note {
  heading: string;
  text: string;
  id: string;
  archieved: boolean;
  trash: boolean;
  completed: boolean;
  labels: Label[];
}

export type Notes = Note[];

const initialState: Notes = [];

export const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state: Notes, action: PayloadAction<Note>) => {
      state.push(action.payload);
    },
  },
});

export const { addNote } = noteSlice.actions;
