import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNewStudent } from "../../../redux/actions/studentsActions";
import {
  addNewStudentOperation,
  editStudentOperation,
} from "../../../redux/operations/studentsOperations";
import { StudentFormContainer } from "./StudentFormStyled";

const initialState = {
  firstName: "",
  lastName: "",
};

const StudentForm = ({
  data = { ...initialState },
  isEdit = false,
  setEditFormOpen,
}) => {
  // const students = useSelector((state) => state.students.items);
  const [state, setState] = useState({ ...data });
  const dispatch = useDispatch();

  const onHandleChange = (evt) => {
    const { name, value } = evt.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      setEditFormOpen(false);
      dispatch(editStudentOperation(state));
    } else dispatch(addNewStudentOperation(state));

    setState({ ...initialState });
  };
  const onClose = () => {
    setEditFormOpen(false);
  };

  return (
    <StudentFormContainer>
      <form onSubmit={onHandleSubmit}>
        <label>
          First name
          <input
            type='text'
            value={state.firstName}
            onChange={onHandleChange}
            name='firstName'
          />
        </label>
        <label>
          Last name
          <input
            type='text'
            value={state.lastName}
            onChange={onHandleChange}
            name='lastName'
          />
        </label>
        <button type='submit'>{isEdit ? "Edit student" : "Add Student"}</button>
        {isEdit && (
          <button type='button' onClick={onClose}>
            Close
          </button>
        )}
      </form>
    </StudentFormContainer>
  );
};

export default StudentForm;
