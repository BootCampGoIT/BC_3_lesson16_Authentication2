import {
  SIGNIN,
  SIGNOUT,
  SIGNUP,
  SETERROR,
  SETLOADING,
} from "../constants/authConstants";

const initialState = {
  email: "",
  idToken: "",
  refreshToken: "",
  isAuth: false,
  isLoading: false,
  localId: "",
  error: "",
};

const authReducer = (state = { ...initialState }, { type, payload }) => {
  switch (type) {
    case SIGNUP:
      return {
        ...state,
        email: payload.email,
        idToken: payload.idToken,
        refreshToken: payload.refreshToken,
        isAuth: true,
        localId: payload.localId,
      };
    case SIGNIN:
      return {
        ...state,
        email: payload.email,
        idToken: payload.idToken,
        refreshToken: payload.refreshToken,
        isAuth: true,
        localId: payload.localId,
      };
    case SIGNOUT:
      return { ...initialState };
    case SETLOADING:
      return { ...state, isLoading: !state.isLoading };
    case SETERROR:
      return { ...state, error: payload };

    default:
      return state;
  }
};

export default authReducer;
