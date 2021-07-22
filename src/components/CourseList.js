import { Link, useParams } from 'react-router-dom';
import React from 'react';
import {
  getCourses,
  GetCoursesByCreator,
  GetCoursesWithSearch,
  GetStartedCoursesByUserId,
} from '../data';
import CourseListItem from './CourseListItem';
import NotFoundPage from './NotFoundPage';
import { connect } from 'react-redux';

const CourseList = ({ userId }) => {
  let { type, search } = useParams();
  let courses;
  if (type === 'started') {
    courses = GetStartedCoursesByUserId(userId);
  } else if (type === 'creator') {
    courses = GetCoursesByCreator(userId);
  } else if (type === 'top') {
    courses = getCourses(['top']);
  } else if (type === 'editors') {
    courses = getCourses(['editor']);
  } else {
    courses = search ? GetCoursesWithSearch(search) : getCourses();
  }

  if (!courses) {
    return <NotFoundPage text={'There is no courses'} />;
  }

  return (
    <div>
      <ul style={{ listStyleType: 'none' }}>
        {courses.map((course) => {
          return (
            <Link key={course.id} to={`/course/${course.id}`} style={{ textDecoration: 'none' }}>
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
