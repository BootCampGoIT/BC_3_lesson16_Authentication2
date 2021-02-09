import { getCourses } from "./coursesSelectors";
import { getStudents } from "./studentsSelectors";
import { getTutors } from "./tutorsSelectors";

const getStudentsTutorsCourses = (state) => ({
  students: getStudents(state),
  tutors: getTutors(state),
  courses: getCourses(state),
});

export { getStudentsTutorsCourses };
