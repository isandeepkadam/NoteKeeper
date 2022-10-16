import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import { CreateNote, NoteCard } from '../components';
//Store
import { RootState, useAppSelector } from '../store';

function Home() {
  const notes = useAppSelector((state: RootState) => state.note);
  const displayNotes = notes.filter((note) => !note.archieved && !note.trash);

  return (
    <>
      <CreateNote />
      <Container>
        <Grid container spacing={4}>
          {displayNotes.map((item) => {
            return (
              <Grid item xs={4} sx={{ marginBottom: '10px' }} key={item.id}>
                <NoteCard note={item} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}

export default Home;
