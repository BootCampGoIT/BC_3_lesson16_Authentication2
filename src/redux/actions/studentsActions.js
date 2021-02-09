import { v4 as uuidv4 } from "uuid";
import {
  ADDNEWSTUDENT,
  EDITSTUDENT,
  GETSTUDENTS,
  SETERROR,
  SETLOADING,
} from "../constants/studentsConstants";

const addNewStudent = (payload) => ({ type: ADDNEWSTUDENT, payload });
const getStudents = (payload) => ({ type: GETSTUDENTS, payload });
const setLoading = () => ({ type: SETLOADING });
const setError = (payload) => ({ type: SETERROR, payload });
const editStudent = (payload) => ({ type: EDITSTUDENT, payload });

export { addNewStudent, getStudents, setLoading, setError, editStudent };
