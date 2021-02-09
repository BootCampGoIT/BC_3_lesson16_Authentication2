import { createSlice } from "@reduxjs/toolkit";

const bootCampSlice = createSlice({
  name: "@bootCamps",
  initialState: {
    bootCamps: [],
    filter: "",
    alert: false,
  },
  reducers: {
    addNewCamp: (state, action) => {
      if (
        state.bootCamps.some(
          (item) => item.campName === action.payload.campName
        )
      ) {
        return { ...state, alert: !state.alert };
      } else
        return { ...state, bootCamps: [...state.bootCamps, action.payload] };
    },
    deleteCamp: (state, action) => ({
      ...state,
      bootCamps: [
        ...state.bootCamps.filter((item) => item.id !== action.payload),
      ],
    }),
    setFilter: (state, action) => ({
      ...state,
      filter: action.payload,
    }),
    setAlert: (state) => ({
      ...state,
      alert: !state.alert,
    }),
  },
});

export const {
  addNewCamp,
  deleteCamp,
  setFilter,
  setAlert,
} = bootCampSlice.actions;

export default bootCampSlice;
