import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import CourseIntroPage from './components/CourseIntroPage';

import CourseList from './components/CourseList';
import CourseSections from './components/CourseSections';
import CreateCourse from './components/CreateCourse';

import Menu from './components/Menu';
import NotFoundPage from './components/NotFoundPage';
import Settings from './components/Settings';
import SignIn from './components/SignIn';
import WelcomePage from './components/WelcomePage';

const App = ({ userEmail }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signin">{userEmail ? <Redirect to="/courses" /> : <SignIn />}</Route>

        <Menu>
          <Switch>
            <Route exact path="/" component={userEmail ? CourseList : WelcomePage} />
            <Route path="/courses" component={CourseList} />
            <Route path="/course/:courseId/:sectionId">
              {userEmail ? <CourseSections /> : <Redirect to="/courses" />}
            </Route>
            <Route path="/course/:courseId" component={CourseIntroPage} />
            <Route path="/courses/started">
              {userEmail ? <CourseList /> : <Redirect to="/courses" />}
            </Route>
            <Route path="/courses/creator">
              {userEmail ? <CourseList /> : <Redirect to="/courses" />}
            </Route>
            <Route path="/account/settings">
              {userEmail ? <Settings /> : <Redirect to="/courses" />}
            </Route>
            <Route path="/account/createcourse">
              {userEmail ? <CreateCourse /> : <Redirect to="/courses" />}
            </Route>
            <Route component={NotFoundPage} />
          </Switch>
        </Menu>
      </Switch>
    </BrowserRouter>
  );
};

function mapStateToProps(state) {
  return {
    userEmail: state.user.email,
  };
}

export default connect(mapStateToProps)(App);
