/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = (theme) => ({
  ...theme.spreadthis,
  wrapper: {
    width: '1200px',
    margin: '0 auto'
  }
});
class SignIn extends Component {
  render() {
    return (
      <Grid container justify="center" direction="row" alignitem="center">
        <Grid item xs>
          <TextField id="standard-password-input" label="email" type="text" />
          <TextField id="standard-password-input" label="Password" type="password" />
          <Button variant="contained" color="primary">
            Sign Up
            <CircularProgress size={20} />
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(SignIn);
