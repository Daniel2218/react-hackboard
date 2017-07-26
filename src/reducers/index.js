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

// Case Reducers: Handlers for specfic cases
function setPage(pageState, action) {
  return action.page;
}

function setModalState(modalState, action) {
  return !modalState;
}

function setIsFetching(tableState, action) {
  return Object.assign({}, tableState, { isFetching: true });
}

function setRows(tableState, action) {
  return Object.assign({}, tableState, {
    isFetching: false,
    rows: action.rows,
    lastUpdated: action.recievedAt
   });
}

// Slice Reducers: Handles for an entire slice of state
const pageReducer  = createReducer("Applications", { CHANGE_PAGE: setPage });
const modalReducer = createReducer(false, { TOGGLE_MODAL: setModalState });
const tableReducer = createReducer(
  {
    isFetching: false,
    rows:[]
  },
  {
    REQUEST_ROWS: setIsFetching,
    RECIEVE_ROWS: setRows
  }
);

// Root Reducer
const rootReducer = combineReducers({
  page: pageReducer,
  modalShow: modalReducer,
  table: tableReducer
});

export default rootReducer;
