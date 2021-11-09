import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';
import LockIcon from '@mui/icons-material/Lock';
import Map from "./Map"
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import './style.css';
import { Button, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import CardC from './CardC';
import CardEmp from './CardEmp';
import CardS from './CardS';
import CardData from './CardData';



const drawerWidth = 300;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'center',
}));

function Pannel() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar className="nav-bg">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <nav className="nav">
            <div className="left">
              <h4 id="title-admin">MeetInc</h4>
            </div>


            <div className="items">
              <h3 className="nav-company" > 'O'ppointment</h3>
              <input className="search" type="text" placeholder="Search.."></input>

              <Button variant="contained" size='small' style={{ borderRadius: "10rem" }}> <SearchIcon color="white" fontSize="medium" /></Button>

            </div>


          </nav>
        </Toolbar>

      </AppBar>



      <Drawer

        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}

      >
        <DrawerHeader className="draw-bg">
          <Typography variant="h4" onClick={handleDrawerClose} > ADMIN PANEL </Typography>
          <IconButton onClick={handleDrawerClose} >
            {theme.direction === 'ltr' ? <ChevronLeftIcon className="draw-bg" /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Stack direction="row" className="profile">

          <Avatar
            alt="Siddhesh Kamath"
            src="./images/sid.jfif"

            sx={{ width: 126, height: 126 }}
          />
        </Stack>

        <Typography className="draw-ig" variant="h4" align="center"> Siddhesh Kamath </Typography>
        <Typography className="para"> Junior Web Developer At Kusol Labs </Typography>


        <List className="draw-ig">
          {['Support', 'Settings'].map((text, index) => (
            <ListItem className="draw-ig" button key={text}>
              <ListItemIcon >
                {index % 3 === 1 ? < FavoriteIcon className="draw-ig" /> : <SettingsIcon className="draw-ig" />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>

        <card className="draw-ig">
          <Map className="map" />
        </card>
      </Drawer>


      <Main className="main" open={open}>
        <div className="card-holder">
          <CardC />

          <CardEmp />

          <CardS />

        </div>
        <CardData />

      </Main>
    </Box>
  );
}
export default Pannel;