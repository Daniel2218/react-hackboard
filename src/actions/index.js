import {
    CHANGE_PAGE, TOGGLE_MODAL, ADD_ROW, REQUEST_ROWS, RECIEVE_ROWS,
    RECIEVE_ALL_ROWS, REQUEST_ALL_ROWS, VALIDATE_ROW, EDIT_ROW
} from "./actionTypes.js";

const isRowValid = validRowAction => {
  return validRowAction.emptyInputs.length === 0;
}

export const sideBarClicked = (page) => {
  return {
    type: CHANGE_PAGE,
    page: page
  }
}

export const toggleModal = () => {
  return { type: TOGGLE_MODAL };
}

export const validRow = (row) => {
  var emptyInputs = Object.keys(row).filter((key, index) => {
    if(row.hasOwnProperty(key) && row[key] === "") {
        return key;
    }
  });

  return {
    type: VALIDATE_ROW,
    emptyInputs: emptyInputs
  };
}

const addRow = (table, row) => {
  return dispatch => {
    dispatch(toggleModal());

    return dispatch({
      type: ADD_ROW,
      table: table,
      row: row,
      recievedAt: Date.now()
    });
  }
}

const editRow = (table, row) => {
  return dispatch => {
    dispatch(toggleModal());

    return dispatch({
      type: EDIT_ROW,
      table: table,
      row: row,
      updatedAt: Date.now()
    });
  }
}

export const addRowIfValid = (table, row) => {
  return (dispatch) => {
    var rowValid = validRow(row);

    if (isRowValid(rowValid)) {
      dispatch(rowValid);
      return dispatch(addRow(table, row));
    } else {
      return dispatch(rowValid);
    }
  }
}

export const editRowIfValid = (table, row) => {
  return (dispatch) => {
    var rowValid = validRow(row);

    if (isRowValid(rowValid)) {
      dispatch(rowValid);
      return dispatch(editRow(table, row));
    } else {
      return dispatch(rowValid);
    }
  }
}

export const requestRows = (table) => {
  return {
    type: REQUEST_ROWS,
    table: table
  };
}

export const recieveRows = (table, json) => {
  return {
    type: RECIEVE_ROWS,
    table: table,
    rows: json,
    recievedAt: Date.now()
  };
}

export const recieveAllRows = (json) => {
  return {
    type: RECIEVE_ALL_ROWS,
    tableRows: json
  };
}

export function fetchRows(table) {
  var json = [];

  return dispatch => {
    dispatch(requestRows(table));

    switch (table) {
      case "Applications":
        json.push({
          id:"1",
          firstName: "Daniel",
          lastName: "Lucia",
          hacks: "14",
          status: "0"
        });
        break;
      case "Sponsors":
        json.push({
          id: "1",
          name: "Daniel Lucia",
          email: "14dvl@queensu.ca",
          phone: "4166166498",
          donationAmout: "100",
          donationRecieved: "Yes"
        });
        break;
      case "Prizes":
        json.push({
          id: "1",
          name: "Daniel Lucia",
          description: "Cool Prize",
          obtainedBy: "Winning",
          donatedBy: "14dvl@queensu.ca"
        });
        break;
      case "Users":
        json.push({
          id: "1",
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

export default function fetchAllTableRows() {
  var json = {};

  return dispatch => {
    dispatch({ type: REQUEST_ALL_ROWS });

    json["Applications"] = {
      rows: [{
        id:"1",
        firstName: "Daniel",
        lastName: "Lucia",
        hacks: "14",
        status: "0"
      }]
    }

    json["Sponsors"] = {
      rows: [{
        id: "1",
        name: "Daniel Lucia",
        email: "14dvl@queensu.ca",
        phone: "4166166498",
        donationAmout: "100",
        donationRecieved: "Yes"
      }]
    }

    json["Prizes"] = {
      rows: [{
        id: "1",
        name: "Daniel Lucia",
        description: "Cool Prize",
        obtainedBy: "Winning",
        donatedBy: "14dvl@queensu.ca"
      }]
    }

    json["Users"] = {
      rows:[{
        id: "1",
        name: "Daniel Lucia",
        email: "14dv@queensu.ca",
        phone: "4166166498",
        position: "Computer Science"
      }]
    }

    return dispatch(recieveAllRows(json));
  }
}
