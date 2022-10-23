import { Autocomplete, TextField, Stack } from '@mui/material';
import { Label } from '.';
import { RootState, useAppSelector, useAppDispatch } from '../store';

import { updateTags } from '../store/noteSlice';

const Tags: React.FunctionComponent<{ noteID: string }> = ({ noteID }) => {
  const labels = useAppSelector((state: RootState) => state.label);
  const dispatch = useAppDispatch();
  const notes = useAppSelector((state: RootState) => state.note);

  const handleChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: Label[]
  ) => {
    dispatch(updateTags([noteID, value]));
  };

  return (
    <Stack
      spacing={1}
      sx={{
        width: '100%',
        height: 'max-content',
        marginTop: '20px',
      }}
    >
      <Autocomplete
        multiple
        id="size-small-standard-multi"
        size="small"
        options={labels}
        getOptionLabel={(option) => option.title}
        filterSelectedOptions
        forcePopupIcon={false}
        onChange={(event, value) => handleChange(event, value)}
        renderInput={(params) => (
          <TextField
            {...params}
            size="small"
            variant="standard"
            value={notes[0].labels}
          />
        )}
      />
    </Stack>
  );
};

export default Tags;
