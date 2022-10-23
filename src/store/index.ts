import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import { noteSlice } from './noteSlice';
import { labelSlice } from './labelSlice';
import { snackBarSlice } from './snackBarSlice';

export const store = configureStore({
  reducer: {
    note: noteSlice.reducer,
    label: labelSlice.reducer,
    snackBar: snackBarSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
