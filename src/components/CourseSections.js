import { Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { getCourseById } from '../data';
import { deleteSections, setSections } from '../store/actionCreators/SectionActions';
import NotFoundPage from './NotFoundPage';

const createSections = (courseId, sectionsList) => {
  const sections = [];
  sectionsList.map((section) => {
    return sections.push({
      to: `/course/${courseId}/${section.number}`,
      text: `${section.title}`,
      index: `${section.id}`,
    });
  });
  return sections;
};

const CourseSection = ({ setSections, deleteSections }) => {
  let drawerSections = null;

  useEffect(() => {
    setSections(drawerSections);

    return () => {
      deleteSections();
    };
  }, [drawerSections, setSections, deleteSections]);

  const { courseId, sectionId } = useParams();

  const course = getCourseById(courseId);
  if (course === null) {
    return <NotFoundPage />;
  }

  let sections = course.sections;
  drawerSections = createSections(courseId, sections);

  const result = sections.filter((section) => section.number === +sectionId);
  const section = result.length === 1 ? result[0] : null;

  if (section === null) {
    return <NotFoundPage />;
  }

  return (
    <div>
      {' '}
      <Typography variant="h3">
        Hello im the section {sectionId} of the course {courseId}{' '}
      </Typography>
      <Typography variant="h5">My content is: </Typography>
      <Typography variant="h6">{section.content}</Typography>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    setSections: (sections) => dispatch(setSections(sections)),
    deleteSections: () => dispatch(deleteSections()),
  };
}

export default connect(null, mapDispatchToProps)(CourseSection);
