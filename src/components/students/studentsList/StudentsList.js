import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getStudents } from "../../../redux/selectors/studentsSelectors";
import StudentForm from "../studentForm/StudentForm";
import { StudentListContainer } from "./StudentsListStyled";

const StudentsList = () => {
  const [isEditFormOpen, setEditFormOpen] = useState(false);
  const [data, setData] = useState({});

  const students = useSelector(getStudents);

  const onEdit = (e) => {
    setEditFormOpen(true);
    const id = e.target.id;
    setData({ ...students.find((student) => student.id === id) });
  };
  
  return (
    <StudentListContainer>
      <ul className='studentsList'>
        {students.map((student) => (
          <li key={student.id} className='studentsListItem'>
            {isEditFormOpen && (data.id === student.id) ? (
              <StudentForm
                data={data}
                isEdit={true}
                setEditFormOpen={setEditFormOpen}
              />
            ) : (
              <>
                <p>
                  First name:<span> </span>
                  {student.firstName}
                </p>
                <p>Last name: {student.lastName}</p>
                <button id={student.id} onClick={onEdit}>
                  Edit
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </StudentListContainer>
  );
};

export default StudentsList;
