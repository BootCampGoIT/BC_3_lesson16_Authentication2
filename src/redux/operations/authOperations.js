import axios from "axios";
import { setError, setLoading, signIn, signUp } from "../actions/authActions";

const signUpOperation = (user) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await axios.post(process.env.REACT_APP_SIGNUP_URL, {
      ...user,
      returnSecureToken: true,
    });
    dispatch(signUp(response.data));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading());
  }
};

const signInOperation = (user) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await axios.post(process.env.REACT_APP_SIGNIN_URL, {
      ...user,
      returnSecureToken: true,
    });
    dispatch(signIn(response.data));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading());
  }
};

export { signUpOperation, signInOperation };
