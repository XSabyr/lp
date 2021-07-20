import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
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
});

const CourseListItem = ({ course }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="inherit" gutterBottom>
          {course.title}
        </Typography>
        <Typography variant="body2" component="p">
          {course.introduction}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Get Started</Button>
      </CardActions>
    </Card>
  );
};

export default CourseListItem;
