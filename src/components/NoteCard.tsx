import { Card, CardActions, CardContent, Typography } from '@mui/material';

import {
  ArchiveOutlined as Archive,
  DeleteOutlineOutlined as Delete,
  DeleteForever,
  Unarchive,
  RestoreFromTrash,
} from '@mui/icons-material';
import { Note } from '../store/noteSlice';
import Tags from './Tags';

// store
import { useAppDispatch } from '../store';
import {
  archiveNote,
  deleteNote,
  unarchiveNote,
  restoreNote,
  deleteForever,
} from '../store/noteSlice';
//

const NoteCard: React.FunctionComponent<{
  note: Note;
}> = ({ note }) => {
  const dispatch = useAppDispatch();

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
      <CardActions sx={{ marginRight: '10px' }}>
        {!note.archieved && !note.trash ? (
          <>
            <Archive
              fontSize="small"
              // style={{ marginLeft: 'auto' }}
              onClick={() => dispatch(archiveNote(note.id))}
            />
            <Delete
              fontSize="small"
              // style={{ marginLeft: 'auto' }}
              onClick={() => dispatch(deleteNote(note.id))}
            ></Delete>
          </>
        ) : note.archieved ? (
          <>
            <Unarchive
              fontSize="small"
              // style={{ marginLeft: 'auto' }}
              onClick={() => dispatch(unarchiveNote(note.id))}
            ></Unarchive>
            <Delete
              fontSize="small"
              // style={{ marginLeft: 'auto' }}
              onClick={() => dispatch(deleteNote(note.id))}
            />
          </>
        ) : note.trash ? (
          <>
            <RestoreFromTrash
              fontSize="small"
              // style={{ marginLeft: 'auto' }}
              onClick={() => dispatch(restoreNote(note.id))}
            ></RestoreFromTrash>
            <DeleteForever
              fontSize="small"
              // style={{ marginLeft: 'auto' }}
              onClick={() => dispatch(deleteForever(note.id))}
            ></DeleteForever>
          </>
        ) : null}
      </CardActions>
    </Card>
  );
};

export default NoteCard;
