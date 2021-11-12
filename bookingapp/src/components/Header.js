import React from 'react'
import { AppBar,Grid,Typography,Button,Toolbar,IconButton } from '@material-ui/core'
import {MenuIcon} from '@material-ui/icons/Menu';


export const Header = () => {

    return (
        <AppBar position="static">
          <Toolbar> 
          <Grid container direction={'row'} spacing={3}>
          <Grid item>
            <IconButton edge="start" color="inherit" aria-label="menu" size="large">
                <MenuIcon />
            </IconButton>
            </Grid>
            <Grid item>
            <Typography variant="h4" align="center" m="auto">
              'O'ppointment
            </Typography>
            </Grid>
            </Grid>
            <Button color="inherit" href="/signin" variant="outlined">Login</Button>
        </Toolbar>
    </AppBar>
    )
} 