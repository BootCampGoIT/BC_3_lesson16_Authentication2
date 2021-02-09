import axios from "axios";
import {
  addNewStudent,
  editStudent,
  getStudents,
  setError,
  setLoading,
} from "../actions/studentsActions";

const addNewStudentOperation = (student) => async (dispatch, getState) => {
  const idToken = getState().auth.idToken;
  dispatch(setLoading());
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/students.json?auth=${idToken}`,
      student
    );
    dispatch(addNewStudent({ ...student, id: response.data.name }));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading());
  }
};

const editStudentOperation = (newStudent) => async (dispatch, getState) => {
  const idToken = getState().auth.idToken;
  dispatch(setLoading());
  try {
    await axios.put(
      `${process.env.REACT_APP_BASE_URL}/students/${newStudent.id}.json`,
      newStudent
    );
    dispatch(editStudent(newStudent));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading());
  }
};

const getStudentsOperation = () => async (dispatch, getState) => {
  const idToken = getState().auth.idToken;
  dispatch(setLoading());
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/students.json`
    );
    const students = Object.keys(response.data).map((key) => ({
      ...response.data[key],
      id: key,
    }));

    dispatch(getStudents(students));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading());
  }
};

export { addNewStudentOperation, getStudentsOperation, editStudentOperation };
