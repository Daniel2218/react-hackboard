import { combineReducers } from "redux";
import createReducer from 'redux-createreducer';
import tableReducer from "./tableReducer.js";

// Case Reducers: Handlers for specfic cases
function setPage(pageState, action) {
  return action.page;
}

function setModalState(modalState, action) {
  return Object.assign({}, modalState, { show: !modalState.show });
}

function validateRow(modalState, action) {
  return Object.assign({}, modalState, { emptyInputs: action.emptyInputs });
}
// End of Case Reducers

// Slice Reducers: Handles for an entire slice of state
const pageReducer  = createReducer("Applications", { CHANGE_PAGE: setPage });
const modalReducer = createReducer(
  {
    show: false,
    emptyInputs: []
  },
  {
    TOGGLE_MODAL: setModalState,
    VALIDATE_ROW: validateRow
  }
);
// End of Slice Reducers

// Root Reducer
const rootReducer = combineReducers({
  page: pageReducer,
  modal: modalReducer,
  table: tableReducer
});
// End of Root Reducer

export default rootReducer;
