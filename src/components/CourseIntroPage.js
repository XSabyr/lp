import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getCourseById, GetUserFirstLastNamesById } from '../data';
import NotFoundPage from './NotFoundPage';

const CourseIntroPage = ({ userEmail }) => {
  let { courseId } = useParams();
  const course = getCourseById(courseId);
  if (!course) {
    return <NotFoundPage />;
  }
  return (
    <div>
      <Typography variant="h3">{course.title}</Typography>
      <Typography variant="h6">created by: {GetUserFirstLastNamesById(course.creator)}</Typography>
      <Typography variant="h4">{course.introduction}</Typography>

      {userEmail ? (
        <Link to={`/course/${courseId}/1`}>
          <Button variant="contained" color="primary">
            Get Started
          </Button>
        </Link>
      ) : (
        <Link to="/signin">
          <Button variant="contained" color="primary">
            Sign In to get started
          </Button>
        </Link>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    userEmail: state.user.email,
  };
}

export default connect(mapStateToProps)(CourseIntroPage);
