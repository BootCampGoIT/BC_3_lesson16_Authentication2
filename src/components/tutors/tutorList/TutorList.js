import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTutorOperation } from "../../../redux/operations/tutorOperations";
import { getTutors } from "../../../redux/selectors/tutorsSelectors";
import { TutorListContainer } from "./TutorListStyled";

const TutorList = () => {
  const tutor = useSelector(getTutors);
  const dispatch = useDispatch();
  const onDelete = (e) => {
    const id = e.target.id;
    dispatch(deleteTutorOperation(id));
  };
  return (
    <TutorListContainer>
      <ul className='studentsList'>
        {tutor.map((item) => (
          <li key={item.id} className='studentsListItem'>
            <p>
              First name:<span> </span>
              {item.firstName}
            </p>
            <p>Last name: {item.lastName}</p>
            <p>Stack: {item.stack}</p>
            <p>Position: {item.position}</p>
            <button id={item.id} onClick={onDelete}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </TutorListContainer>
  );
};
export default TutorList;
