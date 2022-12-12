import { useState } from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import {
  Box,
  Drawer,
  AppBar,
  AppBarProps as MuiAppBarProps,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';

import { Menu, Inbox, Mail } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const StyledDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <StyledAppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(!open)}
            edge="start"
            // sx={{
            //   marginRight: 5,
            //   ...(open && { display: 'none' }),
            // }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Notekeeper
          </Typography>
        </Toolbar>
      </StyledAppBar>
      {/* <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
      </DrawerHeader> */}
      <StyledDrawer variant="permanent" open={open}>
        <Divider />
        <List
          onMouseOver={() => setOpen(true)}
          onMouseOut={() => setOpen(false)}
        >
          <ListItem disablePadding sx={{ display: 'block' }}>
            <NavLink
              to="/home"
              style={{
                color: 'inherit',
                textDecoration: 'none',
              }}
              className={({ isActive }) =>
                isActive ? 'activeClassName' : undefined
              }
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  borderRadius: open ? '0px 25px 25px 0px' : '100%',
                }}
              >
                <ListItem
                  sx={{
                    minWidth: 0,
                    maxWidth: 2,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <Mail />
                </ListItem>
                <ListItemText primary={'what'} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </NavLink>
          </ListItem>

          {['Notes', 'Reminders', 'Edit Labels', 'Archives', 'Trash'].map(
            (text, index) => (
              <ListItem
                key={text}
                disablePadding
                sx={{ display: 'block', borderRadius: '0px 25px 25px 0px' }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    borderRadius: open ? '0px 25px 25px 0px' : '100%',
                  }}
                >
                  <ListItem
                    sx={{
                      minWidth: 0,
                      maxWidth: 2,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {index % 2 === 0 ? <Inbox /> : <Mail />}
                  </ListItem>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
      </StyledDrawer>
      <DrawerHeader />
    </Box>
  );
}
