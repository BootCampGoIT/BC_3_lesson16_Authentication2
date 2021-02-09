import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  signInOperation,
  signUpOperation,
} from "../../redux/operations/authOperations";

const initialState = {
  email: "",
  password: "",
};

const AuthForm = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const [state, setState] = useState({ ...initialState });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (location.pathname === "/signup") {
      dispatch(signUpOperation(state));
    } else dispatch(signInOperation(state));
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <label>
        Email
        <input
          type='text'
          value={state.email}
          name='email'
          onChange={onHandleChange}
        />
      </label>
      <label>
        Password
        <input
          type='text'
          value={state.password}
          name='password'
          onChange={onHandleChange}
        />
      </label>
      <button type='submit'>
        {location.pathname === "/signup" ? "SignUp" : "SignIn"}
      </button>
    </form>
  );
};

export default AuthForm;
