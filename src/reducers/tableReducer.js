import { combineReducers } from "redux";
import createReducer from 'redux-createreducer';

// Utility fucntions
function setIsFetchingHelper(partialState, table) {
  var obj = {};
  obj[table] = Object.assign({}, partialState, { isFetching: true });
  return obj;
}
// End of Utility functions

// Case Reducers: Handlers for specfic cases
function setRows(tableState, action) {
  var obj = {};
  obj[action.table] = {
    isFetching: false,
    rows: action.rows,
    lastUpdated: action.recievedAt
  };

  return Object.assign({}, tableState, obj);
}

function setAllTableRows(tableState, action) {
  return Object.assign({}, tableState, action.tableRows, { isFetchingAll: false });
}

function addRow(tableState, action) {
  var obj = {};
  var rows = [...tableState[action.table].rows];

  rows.push(action.row);
  obj[action.table] = {
    isFetching: false,
    rows: rows,
    lastUpdated: action.recievedAt
  };

  var newState = Object.assign({}, tableState[action.table], obj);
  return Object.assign({}, tableState, newState);
}

function setIsFetching(tableState, action) {
  var table = action.table;
  var newState = Object.assign({}, tableState, setIsFetchingHelper(tableState[table],table));
  return newState;
}

function setIsFetchingAll(tableState, action) {
  return Object.assign({}, tableState, { isFetchingAll: true });
}
// End of Case Reducers

// Slice Reducer: Handles for an entire slice of state
const tableReducer = createReducer({},
  {
    REQUEST_ROWS: setIsFetching,
    RECIEVE_ROWS: setRows,
    REQUEST_ALL_ROWS: setIsFetchingAll,
    RECIEVE_ALL_ROWS: setAllTableRows,
    ADD_ROW: addRow
  }
);
// End of Slice Reducers

export default tableReducer;
