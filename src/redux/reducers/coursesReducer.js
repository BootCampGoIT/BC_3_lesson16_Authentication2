import { ADDNEWCOURSE, GETCOURSES } from "../constants/coursesConstants";

const initialState = {
  items: [],
};

const coursesReducer = (
  state = { ...initialState },
  { type, payload = {} }
) => {
  switch (type) {
    case ADDNEWCOURSE:
      return {
        ...state,
        items: [...state.items, payload],
      };

    case GETCOURSES:
      return {
        ...state,
        items: payload,
      };

    default:
      return state;
  }
};

export default coursesReducer;
