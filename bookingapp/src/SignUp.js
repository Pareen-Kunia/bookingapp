import { Grid,Box,InputAdornment, Typography, AppBar, Toolbar, IconButton, Button, withStyles, TextField, FormControlLabel, Checkbox, Menu } from '@material-ui/core';
import { PropTypes } from 'prop-types'
import VisibilityIcon from '@material-ui/icons/Visibility';
import FacebookIcon from '@material-ui/icons/Facebook';
import MenuIcon from '@material-ui/icons/Menu';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import {createTheme } from '@material-ui/core/styles';
const styles = {
    root: {
      flexGrow: 1,
    },
    forms: {
        display: "flex",
        justifyContent: "left",
        alignItems: "left",
        flexDirection: "column",
    },
    box: {
        width: 500,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
        borderColor: 'red',
        border: '1',
    },
    txt: {
        margin: '5',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    trial: {
        flexGrow: 1 
    },
  };
   
function TermsAndCond() {
    return (
        <FormControlLabel
        control={<Checkbox
        inputProps={{
            'aria-label': 'secondary checkbox'
        }}
        /> }
        label="Terms and Conditions"
        />
    )
}


function SignUp(props) {
    const { classes } = props;
    return (
        <div>
        <AppBar position="static">
          <Toolbar>
          <Grid container direction={'row'} className={classes.trial} spacing={3}>
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
            <Button color="inherit" variant="outlined">Login</Button>
        </Toolbar>
    </AppBar><br />
    <Box className={classes.box} m="auto" p={3} sx={{ boxShadow: 5}}>
    <Typography variant="h4" align = "center">
        Sign Up
    </Typography> <br />
    <form className={classes.forms}>

    <Grid container direction={'row'}>
    <Grid item xl={6} md={6} sm={12} xs={12}>
    <TextField id="standard-basic" label="First Name" variant="outlined"/> 
    </Grid>
    <Grid item xl={6} md={6} sm={12} xs={12}>
    <TextField id="standard-basic" label="Last Name" variant="outlined"/> 
    </Grid>
    </Grid>
    <br />
    <TextField label="Email Id" type="email" variant="outlined" fullWidth/> <br />
    <TextField
          id="standard-adornment-password"
          label="Password"
          type="password"
          variant="outlined"
          InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                <VisibilityIcon />
              </InputAdornment>
              ),
          }}
        /> <br />
        <TextField
        variant='outlined'
          id="standard-adornment-password"
          label="Confirm Password"
          type="password"
          InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                <VisibilityIcon />
              </InputAdornment>
              ),
          }}
        /> <br />
        <Grid container direction = {'row'} spacing={4}>
        <Grid item>
        <TextField label="Contact Number" variant='outlined' inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
        </Grid>
        <Grid item>
        <TextField id="standard-basic" label="Business Name" variant="outlined" required/>
        </Grid>
        </Grid>
        <br />
        <TermsAndCond />
        <div align="center">
            <Button type="submit" variant="contained" color="primary">
                Sign Up
            </Button>
        </div>
        
        </form>
        </Box>
    <Typography variant="h5" align="center">
        Or <br />
        Sign Up Using... <br />
    </Typography> <br /> <br />
    <Grid container direction={'row'} spacing={3} alignItems='center' justifyContent='center'>
    <Grid item>
        <Button variant="contained"
        className = {classes.button}
        startIcon={<FacebookIcon />}
        >
            Facebook
        </Button>
        </Grid>
        <Grid item>
        <Button variant="contained"
        className = {classes.button}
        size="large"
        color="primary"
        startIcon={<LinkedInIcon />}
        >
            LinkedIn
        </Button>
        </Grid>
        <Grid item>
        <Button variant="contained"
        className = {classes.button}
        startIcon={<FacebookIcon />}
        >
            Facebook
        </Button>
        </Grid>
    </Grid>
    </div>
    )
}
SignUp.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignUp);