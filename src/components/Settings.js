import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Settings({ userEmail, firstName, lastName }) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Account Settings
        </Typography>
        <TextField
          color="primary"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          value={userEmail}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="FirstName"
          type="string"
          value={firstName}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="LastName"
          type="string"
          value={lastName}
          InputProps={{
            readOnly: true,
          }}
        />
        <Button fullWidth variant="contained" color="primary" className={classes.submit}>
          Edit
        </Button>
      </div>
    </Container>
  );
}

function mapStateToProps(state) {
  return {
    userEmail: state.user.email,
    firstName: state.user.firstName,
    lastName: state.user.lastName,
  };
}

export default connect(mapStateToProps)(Settings);
