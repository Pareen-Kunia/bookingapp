import { Grid,Box,InputAdornment, Typography, AppBar, Toolbar, IconButton, Button, withStyles, TextField, FormControlLabel, Checkbox } from '@material-ui/core';
import { PropTypes } from 'prop-types'
import VisibilityIcon from '@material-ui/icons/Visibility';
import GoogleIcon from '@material-ui/icons';
import boxShadow from '@material-ui/system'
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
const styles = {
    root: {
      flexGrow: 1,
    },
    appbar: {
      alignItems: 'center',
    },
    login : {
        justify : 'right',
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

const theme = createTheme({
    typography: {
        h4: {
        fontWeight: 500,
    },
    subtitle1: {
        fontWeight: 300,
        fontSize: 30,
    },
},
});

function SignUp(props) {
    const { classes } = props;
    return (
        <div>
        <Grid container direction={'row'}>
        </Grid>
        
        <form>
        <div className={classes.root}>
        <AppBar position="static" className={classes.appbar}>
        <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" />
            <Typography variant="h6" align="center">
                Booking App
            </Typography>
            <Button color="inherit" variant="outlined" className={classes.login} align="right">Login</Button>
        </Toolbar>
    </AppBar>
    </div>
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
    </form>
    <Typography variant="subtitle1" align="center">
        Or
    </Typography>
    </div>
    )
}
SignUp.propTypes = {
    classes: PropTypes.object.isRequired
  };
  
  export default withStyles(styles)(SignUp);