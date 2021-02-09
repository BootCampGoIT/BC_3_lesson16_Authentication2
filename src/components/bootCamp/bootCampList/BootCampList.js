import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { deleteCamp, setFilter } from "../../../redux/actions/bootCampActions";
import { BootCampFormContainer } from "./BootCampListStyled";

import {
  getBootCamps,
  getFilter,
  selectedCamps,
} from "../../../redux/selectors/bootCampSelectors";
import Notification from "./Notification";

const BootCampList = ({ filter, bootCamps, deleteCamp, setFilter }) => {
  console.log("re-Render");
  // const dispatch = useDispatch();
  // const filter = useSelector(getFilter);
  // const bootCamps = useSelector(getBootCamps);

  const onHandleDelete = (e) => {
    const { id } = e.target;
    deleteCamp(id);
  };
  const onHandleChange = (e) => {
    const { value } = e.target;
    setFilter(value);
  };

  return (
    <BootCampFormContainer>
      <h2>TEST</h2>
      <Notification />

      <div className='options'>
        <h2>Bootcamps count: {bootCamps.length}</h2>

        <label>
          Filter
          <input type='text' onChange={onHandleChange} value={filter} />
        </label>
      </div>

      <ul className='campList'>
        {bootCamps.map((camp) => (
          <li key={camp.id} className='campListItem'>
            <p>Name: {camp.campName}</p>
            <p>Number: {camp.campNumber}</p>
            <p>Students count: {camp.students.length}</p>
            <button id={camp.id} onClick={onHandleDelete}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </BootCampFormContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    bootCamps: selectedCamps(state),
    filter: state.bootCamps.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCamp: (id) => {
      dispatch(deleteCamp(id));
    },
    setFilter: (id) => {
      dispatch(setFilter(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BootCampList);
// export default BootCampList;
