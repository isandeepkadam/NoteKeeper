import { Card, CardActions, CardContent, Typography } from '@mui/material';

import {
  ArchiveOutlined as Archive,
  DeleteOutlineOutlined as Delete,
  DeleteForever,
} from '@mui/icons-material';

import { Note } from '.';
import Tags from './Tags';

const NoteCard: React.FunctionComponent<{
  notes: Note[];
  note: Note;
  deleteNote: (id: string) => void;
  archiveNote: (id: string) => void;
}> = ({ notes, note, deleteNote, archiveNote }) => {
  return (
    <Card
      sx={{
        width: '300px',
        minHeight: '200px',
        maxHeight: 'max-content',
        margin: '8px',
        boxShadow: 'none',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
      }}
    >
      <CardContent>
        <Typography>{note.heading}</Typography>
        <Typography>{note.text}</Typography>
        <Tags labels={note.labels} />
      </CardContent>
      <CardActions sx={{ margin: '10px' }}>
        <Archive
          fontSize="small"
          style={{ marginLeft: 'auto' }}
          onClick={() => archiveNote(note.id)}
        />
        <Delete
          fontSize="small"
          style={{ marginRight: '0' }}
          onClick={() => deleteNote(note.id)}
        />
        <DeleteForever
          fontSize="small"
          style={{ marginRight: '0' }}
        ></DeleteForever>
      </CardActions>
    </Card>
  );
};

export default NoteCard;
