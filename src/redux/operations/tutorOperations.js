import axios from "axios";
import { signOut } from "../actions/authActions";
import {
  addNewTutor,
  deleteTutor,
  getTutors,
  setError,
  setLoading,
} from "../actions/tutorsActions";

const addNewTutorOperation = (tutor) => async (dispatch, getState) => {
  // const idToken = getState().auth.idToken;
  axios.defaults.headers.common["Authorization"] = getState().auth.idToken;
  dispatch(setLoading());
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/tutors.json`,
      // `${process.env.REACT_APP_BASE_URL}/tutors.json`,
      tutor
    );
    dispatch(addNewTutor({ ...tutor, id: response.data.name }));
  } catch (error) {
    dispatch(setError(error));
    // dispatch(signOut())
  } finally {
    dispatch(setLoading());
  }
};

const getTutorsOperation = () => async (dispatch, getState) => {
  // const idToken = getState().auth.idToken;
  axios.defaults.headers.common["Authorization"] = getState().auth.idToken;
  dispatch(setLoading());
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/tutors.json`
    );
    const tutors = Object.keys(response.data).map((key) => ({
      ...response.data[key],
      id: key,
    }));
    dispatch(getTutors(tutors));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading());
  }
};

const deleteTutorOperation = (id) => (dispatch) => {
  dispatch(setLoading());
  try {
    axios
      .delete(`${process.env.REACT_APP_BASE_URL}/tutors/${id}.json`)
      .then(() => dispatch(deleteTutor(id)));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading());
  }
};

export { addNewTutorOperation, getTutorsOperation, deleteTutorOperation };
