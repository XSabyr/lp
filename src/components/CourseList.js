import { Link, useLocation, useParams } from 'react-router-dom';
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
  let { type, search } = useParams();

  let courses;

  if (type === 'started') {
    courses = GetStartedCoursesByUserId(userId);
  } else if (type === 'creator') {
    courses = GetCoursesByCreator(userId);
  } else {
    courses = search ? GetCoursesWithSearch(search) : GetAllCourses();
  }

  if (!courses) {
    return <NotFoundPage text={'There is no courses'} />;
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
