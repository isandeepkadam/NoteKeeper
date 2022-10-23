import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface snackBar {
  snackBarOpen: boolean;
  snackBarType: string;
  snackBarMessage: string;
}

const initialState: snackBar = {
  snackBarOpen: false,
  snackBarType: 'success',
  snackBarMessage: '',
};

export const snackBarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    handleOpen: (state: snackBar, action: PayloadAction<snackBar>) => {
      return {
        ...state,
        snackBarOpen: action.payload.snackBarOpen,
        snackBarMessage: action.payload.snackBarMessage,
      };
    },
    handleClose: (state: snackBar, action: PayloadAction<boolean>) => {
      return { ...state, snackBarOpen: !state.snackBarOpen };
    },
  },
});

export const { handleOpen, handleClose } = snackBarSlice.actions;
