import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Card, CardActions, CardContent } from '@material-ui/core';

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
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 25,
  },
  pos: {
    marginBottom: 12,
  },
  textField: {
    marginBottom: '15px',
  },
}));

function CreateCourse() {
  const classes = useStyles();

  const [title, setTitle] = useState('');
  const [introduction, setIntorduction] = useState();

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Course Settings
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              label="Title"
              fullWidth
              className={classes.textField}
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <TextField
              label="Introduction"
              multiline
              fullWidth
              rowsMax={4}
              className={classes.textField}
              value={introduction}
              onChange={(event) => setIntorduction(event.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}>
              Create
            </Button>
          </form>
        </div>
      </Container>
      <Typography variant="h4">Preview:</Typography>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="inherit" gutterBottom>
            {title ? title : 'Course Title'}
          </Typography>
          <Typography variant="body2" component="p">
            {introduction ? introduction : 'Course Introduction'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Get Started</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default CreateCourse;
