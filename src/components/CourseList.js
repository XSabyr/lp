import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import {
  GetAllCourses,
  GetCoursesByCreator,
  GetCoursesWithSearch,
  GetStartedCoursesByUserId,
} from '../data';
import CourseListItem from './CourseListItem';
import { Typography } from '@material-ui/core';
// import { useSelector } from 'react-redux';
import NotFoundPage from './NotFoundPage';
import { connect } from 'react-redux';

const CourseList = ({ userId }) => {
  const query = new URLSearchParams(useLocation().search);
  let location = useLocation();

  let courses;

  if (location.pathname === '/courses/started') {
    courses = GetStartedCoursesByUserId(userId);
    if (courses.length === 0) {
      return <NotFoundPage text="You didnt start any course" />;
    }
  } else if (location.pathname === '/courses/creator') {
    courses = GetCoursesByCreator(userId);
    if (courses.length === 0) {
      return <NotFoundPage text="You didnt create any course" />;
    }
  } else {
    const search = query.get('search');

    courses = search === null ? GetAllCourses() : GetCoursesWithSearch(search);

    if (courses === null) {
      return <Typography variant="h5">No courses Found</Typography>;
    }
  }

  return (
    <div>
      <ul style={{ listStyleType: 'none' }}>
        {courses.map((course) => {
          return (
            <Link key={course.id} to={`course/${course.id}`} style={{ textDecoration: 'none' }}>
              <li style={{ marginBottom: '15px' }}>
                <CourseListItem course={course} />
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    userId: state.user.id,
  };
}

export default connect(mapStateToProps)(CourseList);
