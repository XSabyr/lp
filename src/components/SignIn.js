import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { tryToLogIn } from '../data';
import { useHistory } from 'react-router-dom';
import { logIn } from '../store/actionCreators/UserActions';
import { connect } from 'react-redux';

function Copyright({ classes }) {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link to="/" className={classes.link}>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
}));

function SignIn({ logIn, userEmail }) {
  const classes = useStyles();

  let history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loginError, setLoginError] = useState(false);

  // eslint-disable-next-line
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleSubmit = (event) => {
    event.preventDefault();

    setEmailError(false);
    setPasswordError(false);
    if (!re.test(String(email).toLowerCase())) {
      return setEmailError(true);
    }

    if (!password) {
      return setPasswordError(true);
    }

    // dispatch(tryToLogIn(email, password));

    const user = tryToLogIn(email, password);
    if (user === null) {
      return setLoginError(true);
    }

    logIn(user.id, user.email, user.firstName, user.lastName);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoFocus
          />
          {emailError && <Typography color="error">Should be an email</Typography>}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {passwordError && <Typography color="error">Shouldn't be blank</Typography>}
          {loginError && <Typography color="error">Wrong email or password</Typography>}
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}>
            Sign In
          </Button>
          <Button
            onClick={() => history.goBack()}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}>
            Go Back
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright classes={classes} />
      </Box>
    </Container>
  );
}

function mapStateToProps(state) {
  return {
    userEmail: state.user.email,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (id, email, firstName, lastName) => dispatch(logIn(id, email, firstName, lastName)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
