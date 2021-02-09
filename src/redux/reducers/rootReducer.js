import { combineReducers } from "redux";
import authReducer from "./authReducer";
// import bootCampSlice from "../slices/bootCampSlice";
import bootCampReducer from "./bootCampReducer";
import coursesReducer from "./coursesReducer";
import { studentsReducer } from "./studentsReducer";
import tutorReducer from "./tutorReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";



const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["email", "idToken", "refreshToken", "isAuth", "localId"],
  // blacklist: ["isLoading", "error"],
};

// ============== redux ===============================
const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  bootCamps: bootCampReducer,
  students: studentsReducer,
  courses: coursesReducer,
  tutors: tutorReducer,
});

// ====================== redux slice ===========================
// const rootReducer = combineReducers({
//   bootCamps: bootCampSlice.reducer,
//   students: studentsReducer,
// });

export default rootReducer;
