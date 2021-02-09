import React from "react";
import { useDispatch, connect } from "react-redux";
import { testAction } from "../../../redux/reducers/bootCampReducer";

const Notification = ({ test }) => {
  const dispatch = useDispatch();
  const onHandleClick = () => {
    dispatch(testAction());
  };
  return (
    <>
      {test && <h2>Hello</h2>}
      <button onClick={onHandleClick}>Click</button>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    test: state.bootCamps.test,
  };
};

export default connect(mapStateToProps)(Notification);
