import {
  ADDNEWTUTOR,
  DELETETUTOR,
  GETTUTORS,
  SETERROR,
  SETLOADING,
} from "../constants/tutorConstants";

const initialState = {
  items: [],
  isLoading: false,
  error: "",
};
const tutorReducer = (state = { ...initialState }, { type, payload }) => {
  switch (type) {
    case ADDNEWTUTOR:
      return { ...state, items: [...state.items, payload] };
    case GETTUTORS:
      return { ...state, items: [...payload] };
    case SETLOADING:
      return { ...state, isLoading: !state.isLoading };
    case SETERROR:
      return { ...state, error: payload };
    case DELETETUTOR:
      return {
        ...state,
        items: [
          ...state.items.filter((tutor) => tutor.id !== payload),
        ],
      };

    default:
      return state;
  }
};

export default tutorReducer;
