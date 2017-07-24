import { combineReducers } from "redux";
import { CHANGE_PAGE, TOGGLE_MODAL, ADD_ROW, REQUEST_ROWS, RECIEVE_ROWS} from "../actions/actionTypes.js";

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

// Slice Reducers: Handles for an entire slice of state
const pageReducer = createReducer("Applications", { CHANGE_PAGE: setPage });
const modalReducer = createReducer(false, { TOGGLE_MODAL: setModalState });
const tableReducer = createReducer([], { });

// Root Reducer
const appReducer = combineReducers({
  page: pageReducer,
  modalShow: modalReducer
});

export default appReducer;
