import { InputAdornment, Container, Typography, AppBar, Toolbar, IconButton, Button, withStyles, TextField } from '@material-ui/core';
import { PropTypes } from 'prop-types'
const styles = {
  root: {
    flexGrow: 1,
  },
  appbar: {
    alignItems: 'center',
  },
  login: {
    justify: 'right',
  }
};


function SignUp(props) {
  const { classes } = props;
  return (
    <form>
      <div className={classes.root}>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" />
            <Typography variant="h6" align="center">
              Booking App
            </Typography>
            <Button color="inherit" variant="outlined" className={classes.login}>Login</Button>
          </Toolbar>
        </AppBar>
      </div>
      <Typography variant="h4" align="center">
        Sign Up
      </Typography>
      <Container fixed align='center' color="red">
        <TextField id="standard-basic" label="First Name" /><br />
        <TextField id="standard-basic" label="Last Name" /> <br />
        <TextField
          id="standard-adornment-password"
          label="Password"
          type="password"
          autoComplete="current-password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
              >
              </IconButton>
            </InputAdornment>
          }
        />

      </Container>
    </form>
  )
}
SignUp.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignUp);