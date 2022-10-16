import { Container, Grid } from '@mui/material';
import { NoteCard } from '../components';
//store
import { RootState, useAppSelector } from '../store';

function Archives() {
  const notes = useAppSelector((state: RootState) => state.note);

  const archivedNotes = notes.filter((note) => note.archieved && !note.trash);

  return (
    <Container>
      <Grid container spacing={4}>
        {archivedNotes.map((item) => {
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

export default Archives;
