import { Container, Grid, Typography } from '@mui/material';
import { NoteCard } from '../components';
// Store
import { RootState, useAppSelector } from '../store';

function Trash() {
  const notes = useAppSelector((state: RootState) => state.note);
  const deletedNotes = notes.filter((note) => note.trash);

  return (
    <Container>
      <Typography>Trash</Typography>
      <Grid container spacing={4}>
        {deletedNotes.map((item) => {
          return (
            <Grid item xs={4} sx={{ marginBottom: '10px' }} key={item.id}>
              <NoteCard note={item} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default Trash;
