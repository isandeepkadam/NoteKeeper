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

let tagsTuple: [string, Label[]];

export const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state: Notes, action: PayloadAction<Note>) => {
      state.push(action.payload);
    },
    archiveNote: (state: Notes, action: PayloadAction<string>) => {
      return state.map((note) =>
        note.id === action.payload
          ? { ...note, archieved: true, trash: false }
          : note
      );
    },
    deleteNote: (state: Notes, action: PayloadAction<string>) => {
      return state.map((note) =>
        note.id === action.payload
          ? { ...note, trash: true, archieved: false }
          : note
      );
    },
    unarchiveNote: (state: Notes, action: PayloadAction<string>) => {
      return state.map((note) =>
        note.id === action.payload
          ? { ...note, archieved: false, trash: false }
          : note
      );
    },
    restoreNote: (state: Notes, action: PayloadAction<string>) => {
      return state.map((note) =>
        note.id === action.payload
          ? { ...note, trash: false, archieved: false }
          : note
      );
    },
    deleteForever: (state: Notes, action: PayloadAction<string>) => {
      return state.filter((item) => {
        return item.id !== action.payload;
      });
    },
    updateNote: (state: Notes, action: PayloadAction<Note>) => {
      return state.map((note) =>
        note.id === action.payload.id
          ? {
              ...note,
              heading: action.payload.heading,
              text: action.payload.text,
            }
          : note
      );
    },
    updateTags: (state: Notes, action: PayloadAction<typeof tagsTuple>) => {
      return state.map((note) =>
        note.id === action.payload[0]
          ? {
              ...note,
              labels: action.payload[1],
            }
          : note
      );
    },
  },
});

export const {
  addNote,
  archiveNote,
  deleteNote,
  unarchiveNote,
  restoreNote,
  deleteForever,
  updateNote,
  updateTags,
} = noteSlice.actions;
