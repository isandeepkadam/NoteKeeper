import React, { useState } from 'react';
import {
  Backdrop,
  Box,
  Modal,
  Fade,
  Typography,
  TextField,
  Button,
  Paper,
  ListItem,
  Chip,
} from '@mui/material';
import { ModeEditOutlined } from '@mui/icons-material';

// Store
import { RootState, useAppDispatch, useAppSelector } from '../store';
import { Label } from '.';
import { addLabelToList, deleteLabel } from '../store/labelSlice';

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

const Labels = () => {
  //  to handle open and close for add labels
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  //
  //  to add Label value in note
  const [label, setLabel] = useState<Label>({ title: '' });
  const labels = useAppSelector((state: RootState) => state.label);

  const dispatch = useAppDispatch();

  const onTextChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setLabel((prev) => ({ ...prev, [name]: value }));
  };

  const addLabel = (label: Label) => {
    setLabel({ title: '' });
    dispatch(addLabelToList(label));
  };

  const handleDelete = (item: string) => {
    dispatch(deleteLabel(item));
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
            <TextField
              autoFocus
              margin="dense"
              id="name"
              type="text"
              fullWidth
              variant="standard"
              name="title"
              placeholder="Add Tags"
              value={label.title}
              onChange={onTextChange}
            />

            <Button variant="outlined" onClick={() => addLabel(label)}>
              Add Label
            </Button>
            <Paper
              sx={{
                display: 'flex',
                // justifyContent: 'center',
                flexWrap: 'wrap',
                listStyle: 'none',
                p: 0.5,
                m: 0,
              }}
              component="ul"
            >
              {labels.length === 0 ? (
                <Typography>There are currently no Tags added</Typography>
              ) : (
                labels.map((item) => {
                  return (
                    <ListItem>
                      <Chip
                        label={item.title}
                        variant="outlined"
                        onDelete={() => handleDelete(item.title)}
                      />
                    </ListItem>
                  );
                })
              )}
            </Paper>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Labels;
