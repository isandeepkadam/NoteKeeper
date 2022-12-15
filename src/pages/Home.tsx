import React from 'react';
import { Alert, Grid, Snackbar } from '@mui/material';
import { Container } from '@mui/system';
import { CreateNote, NoteCard } from '../components';
//Store
import { RootState, useAppDispatch, useAppSelector } from '../store';
import { handleClose } from '../store/snackBarSlice';

function Home() {
  const dispatch = useAppDispatch();
  const notes = useAppSelector((state: RootState) => state.note);
  const displayNotes = notes.filter((note) => !note.archieved && !note.trash);
  //snackbar
  const openSnack = useAppSelector((state: RootState) => state.snackBar);

  return (
    <Container>
      <CreateNote />

      <Container>
        <Grid container spacing={4}>
          {displayNotes.map((item) => {
            return (
              <Grid
                item
                xs={12}
                sm={6}
                lg={4}
                sx={{ marginBottom: '10px' }}
                key={item.id}
              >
                <NoteCard note={item} />
              </Grid>
            );
          })}
        </Grid>
      </Container>

      <Snackbar
        open={openSnack.snackBarOpen}
        autoHideDuration={3000}
        onClose={() => dispatch(handleClose(false))}
      >
        <Alert
          onClose={() => dispatch(handleClose(false))}
          severity="success"
          sx={{ width: '100%' }}
        >
          {openSnack.snackBarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default Home;
