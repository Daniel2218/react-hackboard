import { CHANGE_PAGE, TOGGLE_MODAL, ADD_ROW, REQUEST_ROWS, RECIEVE_ROWS } from "./actionTypes.js";

export const pageChange = (page) => {
  return {
    type: CHANGE_PAGE,
    page: page
  }
}

export const toggleModal = (show) => {
  return {
    type: TOGGLE_MODAL
  }
}

export const addRow = (row) => {
  return {
    type: ADD_ROW,
    row: row
  }
}

export const requestRows = () => {
  return {
    type: REQUEST_ROWS
  }
}

export const recieveRows = () => {
  return {
    type: RECIEVE_ROWS
  }
}
