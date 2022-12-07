import {
  Card,
  CardActions,
  CardContent,
  Chip,
  ListItem,
  Tooltip,
  Typography,
} from '@mui/material';

import {
  ArchiveOutlined as Archive,
  DeleteOutlineOutlined as Delete,
  DeleteForever,
  Unarchive,
  RestoreFromTrash,
  ColorLensOutlined,
} from '@mui/icons-material';

import { useAppDispatch } from '../store';
import { Note } from '../store/noteSlice';
import { handleOpen } from '../store/snackBarSlice';
// store
import {
  archiveNote,
  deleteNote,
  unarchiveNote,
  restoreNote,
  deleteForever,
  updateTags,
} from '../store/noteSlice';
import { EditNote, Label } from '.';

const NoteCard: React.FunctionComponent<{
  note: Note;
}> = ({ note }) => {
  const dispatch = useAppDispatch();

  const deleteTag = (noteID: string, item: Label) => {
    const removedTag = note.labels.filter((n) => n.title !== item.title);
    dispatch(updateTags([noteID, removedTag]));
  };

  return (
    <Card
      sx={{
        width: '300px',
        minHeight: '200px',
        maxHeight: 'max-content',
        boxShadow: 'none',
        borderRadius: '8px',
        backgroundColor: '',
      }}
    >
      <CardContent>
        <Typography variant="h6">{note.heading}</Typography>
        <Typography>{note.text}</Typography>
        {note.labels.map((item) => {
          return (
            <ListItem>
              <Chip
                label={item.title}
                variant="outlined"
                size="small"
                onDelete={() => deleteTag(note.id, item)}
              />
            </ListItem>
          );
        })}
      </CardContent>
      <CardActions
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        {!note.archieved && !note.trash ? (
          <>
            <Tooltip title="color">
              <ColorLensOutlined />
            </Tooltip>
            <Tooltip title="Archive">
              <Archive
                fontSize="small"
                onClick={() => {
                  dispatch(archiveNote(note.id));
                  dispatch(
                    handleOpen({
                      snackBarMessage: 'archived',
                      snackBarOpen: true,
                      snackBarType: 'success',
                    })
                  );
                }}
              />
            </Tooltip>
            <Tooltip title="Delete">
              <Delete
                fontSize="small"
                onClick={() => {
                  dispatch(deleteNote(note.id));
                  dispatch(
                    handleOpen({
                      snackBarMessage: 'Moved to trash',
                      snackBarOpen: true,
                      snackBarType: 'success',
                    })
                  );
                }}
              />
            </Tooltip>
            <EditNote note={note} />
          </>
        ) : note.archieved ? (
          <>
            <Tooltip title="Unarchive">
              <Unarchive
                fontSize="small"
                onClick={() => {
                  dispatch(unarchiveNote(note.id));
                  dispatch(
                    handleOpen({
                      snackBarMessage: 'Note Unarchived',
                      snackBarOpen: true,
                      snackBarType: 'success',
                    })
                  );
                }}
              />
            </Tooltip>
            <Tooltip title="Delete">
              <Delete
                fontSize="small"
                onClick={() => {
                  dispatch(deleteNote(note.id));
                  dispatch(
                    handleOpen({
                      snackBarMessage: 'Moved to Trash',
                      snackBarOpen: true,
                      snackBarType: 'success',
                    })
                  );
                }}
              />
            </Tooltip>
          </>
        ) : note.trash ? (
          <>
            <Tooltip title="Restore">
              <RestoreFromTrash
                fontSize="small"
                onClick={() => {
                  dispatch(restoreNote(note.id));
                  dispatch(
                    handleOpen({
                      snackBarMessage: 'Note Restored',
                      snackBarOpen: true,
                      snackBarType: 'success',
                    })
                  );
                }}
              />
            </Tooltip>
            <Tooltip title="Delete">
              <DeleteForever
                fontSize="small"
                onClick={() => {
                  dispatch(deleteForever(note.id));
                  dispatch(
                    handleOpen({
                      snackBarMessage: 'Deleted Permanently',
                      snackBarOpen: true,
                      snackBarType: 'success',
                    })
                  );
                }}
              />
            </Tooltip>
          </>
        ) : null}
      </CardActions>
    </Card>
  );
};

export default NoteCard;
