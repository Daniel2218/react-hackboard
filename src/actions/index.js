import { CHANGE_PAGE, TOGGLE_MODAL, ADD_ROW, REQUEST_ROWS, RECIEVE_ROWS } from "./actionTypes.js";

export const sideBarClicked = (page) => {
  return dispatch => {
    dispatch(fetchRows(page));

    return dispatch({
      type: CHANGE_PAGE,
      page: page
    });
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

export const requestRows = (table) => {
  return {
    type: REQUEST_ROWS,
    table: table
  }
}

export const recieveRows = (table, json) => {
  return {
    type: RECIEVE_ROWS,
    table: table,
    rows: json,
    recievedAt: Date.now()
  }
}

export function fetchRows(table) {
  return dispatch => {
    dispatch(requestRows(table));
    var json = [];

    switch (table) {
      case "Applications":
        json.push({
          applicantID:"1",
          firstName: "Daniel",
          lastName: "Lucia",
          hacks: "14",
          status: "0"
        });
        break;
      case "Sponsors":
        json.push({
          name: "Daniel Lucia",
          email: "14dvl@queensu.ca",
          phone: "4166166498",
          donationAmout: "100",
          donationRecieved: "Yes"
        });
        break;
      case "Prizes":
        json.push({
          name: "Daniel Lucia",
          description: "Cool Prize",
          obtainedBy: "Winning",
          donatedBy: "14dvl@queensu.ca"
        });
        break;
      case "Users":
        json.push({
          name: "Daniel Lucia",
          email: "14dv;@queensu.ca",
          phone: "4166166498",
          position: "Computer Science"
        });
        break;
      default:
        break;
    }

    return dispatch(recieveRows(table, json));
  }
}
