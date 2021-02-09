// import { createSelector } from "reselect";
import { createSelector } from "@reduxjs/toolkit";

const getFilter = (state) => state.bootCamps.filter;

const getBootCampsItems = (state) => state.bootCamps.items;

const getBootCamps = (state) =>
  state.bootCamps.items.filter((item) =>
    item.campName.toLowerCase().includes(state.bootCamps.filter.toLowerCase())
  );

const getAlert = (state) => state.alert;

const selectedCamps = createSelector(
  [getFilter, getBootCampsItems],
  (filter, bootCamps) =>
    bootCamps.filter((camp) =>
      camp.campName.toLowerCase().includes(filter.toLowerCase())
    )
);

export { getFilter, getBootCamps, getAlert, selectedCamps };



// function getResult(filter, arr) {
//   const newFilter = filter;
//   const newArr = arr;
//   return function () {
//     return newArr.find((item) => item === newFilter);
//   };
// }
// const newGetResult = getResult("1", [2, 3, 4, 5, 6, 7, 8, 9, 0, 1]);
// const newGetResult1 = getResult("2", [2, 324, 4, 5, 6, 7, 234234, 9, 0, 1]);

// const reselect = {
//   results: [{["1", [2, 3, 4, 5, 6, 7, 8, 9, 0, 1]]: 15}, {["2", [1,2,3,4,5,5]]: 20 }]
// }

// const getItems = () => {
//   state.bootCamps.items.filter((item) =>
//     item.campName.toLowerCase().includes(state.bootCamps.filter.toLowerCase())
//   );
// }

// [{}, {}, {}]
