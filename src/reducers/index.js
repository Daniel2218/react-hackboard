import { combineReducers } from "redux";

// reduces boilerplate
function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}

// Utility fucntions
function setIsFetchingHelper(partialState, table) {
  var obj = {};
  obj[table] = Object.assign({}, partialState, { isFetching: true });
  return obj;
}
// End of Utility functions

// Case Reducers: Handlers for specfic cases
function setPage(pageState, action) {
  return action.page;
}

function setModalState(modalState, action) {
  return !modalState;
}

function setIsFetching(tableState, action) {
  var table = action.table;
  var newState = Object.assign({}, tableState, setIsFetchingHelper(tableState[table],table));
  return newState;
}

function setIsFetchingAll(tableState, action) {
  return Object.assign({}, tableState, { isFetchingAll: true });
}

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
// End of Case Reducers

// Slice Reducers: Handles for an entire slice of state
const pageReducer  = createReducer("Applications", { CHANGE_PAGE: setPage });
const modalReducer = createReducer(false, { TOGGLE_MODAL: setModalState });
const tableTreeReducer = createReducer({},
  {
    REQUEST_ROWS: setIsFetching,
    RECIEVE_ROWS: setRows,
    REQUEST_ALL_ROWS: setIsFetchingAll,
    RECIEVE_ALL_ROWS: setAllTableRows
  }
);
// End of Slice Reducers

// Root Reducer
const rootReducer = combineReducers({
  page: pageReducer,
  modalShow: modalReducer,
  table: tableTreeReducer
});
// End of Root Reducer

export default rootReducer;
