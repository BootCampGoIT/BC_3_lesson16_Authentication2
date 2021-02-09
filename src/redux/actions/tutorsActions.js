import {
  ADDNEWTUTOR,
  DELETETUTOR,
  GETTUTORS,
  SETERROR,
  SETLOADING,
} from "../constants/tutorConstants";

const addNewTutor = (tutor) => {
  return {
    type: ADDNEWTUTOR,
    payload: tutor,
  };
};
const deleteTutor = (id) => {
  return {
    type: DELETETUTOR,
    payload: id,
  };
};

const getTutors = (tutors) => ({
  type: GETTUTORS,
  payload: tutors,
});

const setLoading = () => {
  return {
    type: SETLOADING,
  };
};
const setError = (error) => {
  return {
    type: SETERROR,
    payload: error,
  };
};

export { addNewTutor, getTutors, setLoading, setError, deleteTutor };

// ================ example =============================
// const addNewTutor = (tutor, tutors) => {
//   return {
//     type: ADDNEWTUTOR,
//     payload: { ...tutor },
//     needId: true
//   };
// };

// const getTutors = (tutors) => ({
//   type: GETTUTORS,
//   payload: tutors,
//   needId: false
// });

// export { addNewTutor, getTutors };
