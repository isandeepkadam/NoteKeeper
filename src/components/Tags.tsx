import { Autocomplete, TextField, Stack } from '@mui/material';
import React from 'react';
import { Label } from '.';

const Tags: React.FunctionComponent<{ labels: Label[] }> = ({ labels }) => {
  return (
    <Stack
      spacing={1}
      sx={{ width: '100%', height: 'max-content', marginTop: '20px' }}
    >
      {labels.length > 0 && (
        <Autocomplete
          multiple
          id="size-small-standard-multi"
          size="small"
          options={labels}
          getOptionLabel={(option) => option.title}
          defaultValue={[labels[0]]}
          filterSelectedOptions
          forcePopupIcon={false}
          disablePortal={true}
          renderInput={(params) => <TextField {...params} />}
          sx={{ border: 'none' }}
        />
      )}
    </Stack>
  );
};

export default Tags;
