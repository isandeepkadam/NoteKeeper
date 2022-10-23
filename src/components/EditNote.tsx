import React, { useState } from 'react';
import {
  Backdrop,
  Box,
  Modal,
  Fade,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import { ModeEditOutlined } from '@mui/icons-material';

// Store
import { useAppDispatch } from '../store';
import { updateNote, Note } from '../store/noteSlice';
import Tags from './Tags';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'white',
  borderRadius: '5px',
  boxShadow: 24,
  border: '2px solid gray',
  p: 5,
};

const EditNote: React.FunctionComponent<{ note: Note }> = ({ note }) => {
  //  to handle open and close for edit option
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const dispatch = useAppDispatch();

  const onTextChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    dispatch(updateNote({ ...note, [name]: value }));
  };

  const handleUpdateNote = () => {
    setOpen(false);
  };

  return (
    <div>
      <ModeEditOutlined
        fontSize="small"
        sx={{ margin: 'auto' }}
        onClick={() => handleOpen()}
      ></ModeEditOutlined>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography>Edit Note</Typography>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Title"
              type="text"
              fullWidth
              variant="standard"
              value={note.heading}
              name="heading"
              onChange={onTextChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Text"
              type="text"
              fullWidth
              variant="standard"
              value={note.text}
              name="text"
              onChange={onTextChange}
            />
            <Tags noteID={note.id} />
            <Button onClick={handleUpdateNote} variant="outlined">
              Save
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default EditNote;
