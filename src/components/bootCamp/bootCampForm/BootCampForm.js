import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import List from "./list/List";
//actions
import { addNewCamp, setAlert } from "../../../redux/actions/bootCampActions";
//selectors
import { getStudentsTutorsCourses } from "../../../redux/selectors/rootSelectors";
import { getAlert } from "../../../redux/selectors/bootCampSelectors";
//styles
import { BootCampFormContainer } from "./BootCampFormStyled";

const initialCamp = {
  campName: "",
  campNumber: "",
  students: [],
  tutors: [],
  courses: [],
};

const BootCampForm = () => {
  const [camp, setCamp] = useState({ ...initialCamp });

  const alert = useSelector(getAlert);
  const data = useSelector(getStudentsTutorsCourses);
  // const students = useSelector((state) => state.students.items);
  // const tutors = useSelector((state) => state.tutors.tutorItems);
  // const courses = useSelector((state) => state.courses.coursesItems);
  const dispatch = useDispatch();

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewCamp(camp));
    setCamp({ ...initialCamp });
  };

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    alert && dispatch(setAlert());
    setCamp((prev) => ({ ...prev, [name]: value }));
  };

  const onHandleClick = (e) => {
    const { id } = e.target;
    const { category } = e.target.dataset;
    const result = data[category].find((item) => item.id === id);
    setCamp((prev) => ({
      ...prev,
      [category]: [...prev[category], result.id],
    }));
  };

  const onRemove = (e) => {
    const { id } = e.target;
    const { category } = e.target.dataset;

    setCamp((prev) => ({
      ...prev,
      [category]: [...prev[category].filter((item) => item !== id)],
    }));
  };

  return (
    <BootCampFormContainer>
      {alert && <h2>Something went wrong</h2>}
      <form onSubmit={onHandleSubmit}>
        <label>
          Camp name
          <input
            type='text'
            name='campName'
            onChange={onHandleChange}
            value={camp.campName}
          />
        </label>
        <label>
          Camp number
          <input
            type='text'
            name='campNumber'
            onChange={onHandleChange}
            value={camp.campNumber}
          />
        </label>
        <button type='submit'>Save</button>
      </form>

      <List
        list={data.students}
        onHandleClick={onHandleClick}
        existedList={camp.students}
        onRemove={onRemove}
        category='students'
      />

      <List
        list={data.tutors}
        onHandleClick={onHandleClick}
        existedList={camp.tutors}
        onRemove={onRemove}
        category='tutors'
      />

      <List
        list={data.courses}
        onHandleClick={onHandleClick}
        existedList={camp.courses}
        onRemove={onRemove}
        category='courses'
      />
    </BootCampFormContainer>
  );
};

export default BootCampForm;

// const mapStateToProps = (state) => {
//   return {
//     alert: state.alert,
//     students: state.students.items,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addNewCamp: (camp) => {
//       dispatch(addNewCamp(camp));
//     },
//     setAlert: () => {
//       dispatch(setAlert());
//     },
//   };
// };

// =============================================

// const BootCampForm = ({ addNewCamp }) => {
//   const [camp, setCamp] = useState({ ...initialCamp });

//   const onHandleSubmit = (e) => {
//     e.preventDefault();
//     addNewCamp(camp);
//     setCamp({ ...initialCamp });
//   };

//   const onHandleChange = (e) => {
//     const { name, value } = e.target;
//     setCamp((prev) => ({ ...prev, [name]: value }));
//   };

//   return (
// <form onSubmit={onHandleSubmit}>
//   <label>
//     Camp name
//     <input
//       type='text'
//       name='campName'
//       onChange={onHandleChange}
//       value={camp.campName}
//     />
//   </label>
//   <label>
//     Camp number
//     <input
//       type='text'
//       name='campNumber'
//       onChange={onHandleChange}
//       value={camp.campNumber}
//     />
//   </label>
//   <button type='submit'>Save</button>
// </form>
//   );
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addItem: (data) => {
//       dispatch(addNewCamp(data));
//     },
//     deleteItem: (data) => {
//       dispatch(deleteCamp(data));
//     },
//   };
// };

// export default connect(null, mapDispatchToProps)(BootCampForm);
// export default connect(null, { addNewCamp })(BootCampForm);

// const mapStateToProps = (state) => {
//   return {
//     bootCamps: state.bootCamps,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addCamp: (camp) => {
//       dispatch(addNewCamp(camp));
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(BootCampForm);
