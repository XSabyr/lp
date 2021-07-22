import React from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';

import { Route, Switch } from 'react-router-dom';
import CourseIntroPage from './CourseIntroPage';

import CourseList from './CourseList';
import CourseSections from './CourseSections';
import CreateCourse from './CreateCourse';

import NotFoundPage from './NotFoundPage';
import Settings from './Settings';
import WelcomePage from './WelcomePage';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Main({ userEmail }) {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Switch>
        {userEmail
          ? [
              <Route key={0} path="/course/:courseId/:sectionId" component={CourseSections} />,
              <Route key={2} path="/account/settings" component={Settings} />,
              <Route key={3} path="/account/createcourse" component={CreateCourse} />,
            ]
          : null}
        <Route exact path="/" component={userEmail ? CourseList : WelcomePage} />
        <Route path="/courses/:type?" component={CourseList} />
        <Route path="/course/:courseId" component={CourseIntroPage} />

        <Route component={NotFoundPage} />
      </Switch>
    </main>
  );
}

function mapStateToProps(state) {
  return {
    userEmail: state.user.email,
  };
}
export default connect(mapStateToProps)(Main);
