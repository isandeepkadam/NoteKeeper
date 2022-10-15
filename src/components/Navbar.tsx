import { AppBar, Toolbar, Typography } from '@mui/material';
function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        zIndex: 1,
        background: '#fff',
        height: '70px',
        boxShadow: 'inset 0 -1px 0 0 #dadce0',
        color: 'black',
      }}
    >
      <Toolbar>
        <img src="/Collab-bro.svg" style={{ width: '40px' }} alt="logo" />
        <Typography
          sx={{
            margin: 'auto',
            color: '#5f6368',
            fontSize: '24px',
            marginLeft: '300px',
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
  );
}

export default Navbar;
