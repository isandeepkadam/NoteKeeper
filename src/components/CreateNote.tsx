import { ClickAwayListener, TextField, Container } from '@mui/material';
import { nanoid } from 'nanoid';
import { useState, useRef } from 'react';
// store
import { useAppDispatch } from '../store';
import { addNote } from '../store/noteSlice';

const CreateNote = () => {
  const [showTextField, setShowtextField] = useState(false);
  const [note, setNote] = useState({
    heading: '',
    text: '',
    id: nanoid(),
    archieved: false,
    trash: false,
    completed: false,
    labels: [{ title: 'hello' }, { title: 'label2' }],
  });

  const dispatch = useAppDispatch();

  const containerRef = useRef<HTMLDivElement | null>(null);

  const onTextAreaClick = () => {
    setShowtextField(true);
    containerRef.current!.style.minHeight = '70px';
  };

  const handleClickAway = () => {
    setShowtextField(false);
    containerRef.current!.style.minHeight = '30px';
    setNote({
      heading: '',
      text: '',
      id: nanoid(),
      archieved: false,
      trash: false,
      completed: false,
      labels: [{ title: 'hello' }, { title: 'label2' }],
    });

    if (note.heading || note.text) {
      dispatch(addNote(note));
    }
  };

  const onTextChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    let changedNote = { ...note, [name]: value };
    setNote(changedNote);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Container
        ref={containerRef}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '600px',
          boxShadow:
            '0 1px 2px 0px rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 67/ 15%)',
          padding: '10px 15px',
          borderRadius: '8px',
          borderColor: '#e0e0e0',
          margin: '50px auto',
          minHeight: '30px',
        }}
      >
        {showTextField && (
          <TextField
            placeholder="Title"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            style={{ marginBottom: '10px' }}
            onChange={onTextChange}
            name="heading"
            value={note.heading}
          ></TextField>
        )}

        <TextField
          placeholder="Take a Note..."
          variant="standard"
          InputProps={{ disableUnderline: true }}
          multiline
          maxRows={Infinity}
          onClick={onTextAreaClick}
          onChange={onTextChange}
          name="text"
          value={note.text}
        ></TextField>
      </Container>
    </ClickAwayListener>
  );
};

export default CreateNote;
