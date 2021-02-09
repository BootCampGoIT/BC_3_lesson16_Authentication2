import { v4 as uuidv4 } from "uuid";

// ================================= redux============================================

import {
  ADDNEWCAMP,
  DELETECAMP,
  SETALERT,
  SETFILTER,
} from "../constants/bootCampConstants";

export const addNewCamp = (data) => ({
  type: ADDNEWCAMP,
  payload: { ...data, id: uuidv4() },
});

export const deleteCamp = (id) => ({
  type: DELETECAMP,
  payload: id,
});

export const setFilter = (value) => ({
  type: SETFILTER,
  payload: value,
});
export const setAlert = () => ({
  type: SETALERT,
});

// ================================= redux toolkit ============================================
// import { createAction } from "@reduxjs/toolkit";

// const addNewCamp = createAction("@bootCamps/addNewCamp", (data) => ({
//   payload: {
//     ...data,
//     id: uuidv4(),
//   },
// }));

// const deleteCamp = createAction("@bootCamps/deleteCamp");
// const setFilter = createAction("@bootCamps/setFilter");
// const setAlert = createAction("@bootCamps/setALERT");

// export { addNewCamp, deleteCamp, setFilter, setAlert };
