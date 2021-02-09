import {
  ADDNEWSTUDENT,
  EDITSTUDENT,
  GETSTUDENTS,
  SETERROR,
  SETLOADING,
} from "../constants/studentsConstants";

const initialState = {
  items: [],
  isLoading: false,
  error: "",
};

export const studentsReducer = (
  state = { ...initialState },
  { type, payload }
) => {
  switch (type) {
    case ADDNEWSTUDENT:
      return {
        ...state,
        items: [...state.items, payload],
      };
    case EDITSTUDENT:
      return {
        ...state,
        items: [
          ...state.items.map((student) =>
            student.id === payload.id ? { ...payload } : student
          ),
        ],
      };
    case GETSTUDENTS:
      return {
        ...state,
        items: [...payload],
      };
    case SETLOADING:
      return { ...state, isLoading: !state.isLoading };
    case SETERROR:
      return { ...state, error: payload };

    default:
      return state;
  }
};
