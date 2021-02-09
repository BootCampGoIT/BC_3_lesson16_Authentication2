import { ADDNEWCOURSE, GETCOURSES } from "../constants/coursesConstants";
import { v4 as uuidv4 } from "uuid";

export const addNewCourse = (course, courses) => {

  const id = uuidv4();
  localStorage.setItem('courses', JSON.stringify([...courses, {...course, id}])) 
  return {
    type: ADDNEWCOURSE,
    payload: {
      ...course,
      id,
    },
  };
};

export const getCourses = (courses) => {
  return {
    type: GETCOURSES,
    payload: courses,
  };
};
