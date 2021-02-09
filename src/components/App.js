import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getStudentsOperation } from "../redux/operations/studentsOperations";
import { getTutorsOperation } from "../redux/operations/tutorOperations";
import Navigation from "./navigation/Navigation";
import { useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);

  useEffect(() => {
    if (isAuth) {
      dispatch(getTutorsOperation());
      dispatch(getStudentsOperation());
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className='app'>
      <Navigation />
    </div>
  );
};

export default App;

// const getSomething = () => {
//   const arg = 5;
//   return () => {
//     console.log(arg);
//   };
// };

// const newFunc = getSomething();

// newFunc()
// newFunc()

// =======================================
// let i = 10;
// let q = 0;

// const reqursion = () => {
//   if (i !== q) {
//     q += 1;
//     console.log(q);
//     reqursion();
//   }
// };

// reqursion();
