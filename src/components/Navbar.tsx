import { AppBar, Toolbar, Typography, Box } from '@mui/material';
function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          zIndex: 100,
          background: '#fff',
          height: '60px',
          edge: 'end',
          boxShadow: 'inset 0 -1px 0 0 #dadce0',
          color: 'black',
        }}
      >
        <Toolbar style={{ backgroundColor: 'black' }}>
          <img src="/note.svg" style={{ width: '40px' }} alt="logo" />
          <Typography
            component="div"
            sx={{
              flexGrow: 1,
              marginRight: '0',
              color: 'white',
              fontSize: '24px',
            }}
          >
            Notekeeper
          </Typography>
          {/* <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <FormControlLabel
          labelPlacement="end"
          control={<DarkModeSwitch sx={{ m: 1 }} />}
        /> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
