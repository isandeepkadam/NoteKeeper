import { Container, Grid } from '@mui/material';
import React from 'react';
import { Note } from '../components';
import NoteCard from '../components/NoteCard';

function Trash({
  notes,
  archiveNote,
  deleteNote,
}: {
  notes: Note[];
  archiveNote: (id: string) => void;
  deleteNote: (id: string) => void;
}) {
  return (
    <Container>
      <Grid container spacing={4}>
        {notes.map((item) => {
          return (
            <Grid item xs={4} sx={{ marginBottom: '10px' }}>
              <NoteCard
                notes={notes}
                note={item}
                archiveNote={archiveNote}
                deleteNote={deleteNote}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default Trash;
