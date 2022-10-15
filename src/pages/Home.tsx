import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { Note } from '../components';
import CreateNote from '../components/CreateNote';
import NoteCard from '../components/NoteCard';

function Home({
  notes,
  archiveNote,
  deleteNote,
  setNotes,
}: {
  notes: Note[];
  deleteNote: (id: string) => void;
  archiveNote: (id: string) => void;
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}) {
  return (
    <>
      <CreateNote setNotes={setNotes} />
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
    </>
  );
}

export default Home;
