import { connect } from "react-redux";
import { toggleModal, addRow } from "../actions";
import Table from "../components/Table.js";

const TableContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);

function mapStateToProps(state) {
  console.log("Hello");
  console.dir(state);
  return state;
}

function mapDispatchToProps(dispatch){
  return {
    onToggleModal: () => {
      dispatch(toggleModal());
    },
    addRow: row => {
      dispatch(addRow(row));
    }
  }
}

function fetchRows() {
  const page = "";
  var obj = [];

  switch (page) {
    case "Applications":
      obj.push({
        applicantID:"1",
        firstName: "Daniel",
        lastName: "Lucia",
        hacks: "14",
        status: "0"
      });
      break;
    case "Sponsors":
      obj.push({
        name: "Daniel Lucia",
        email: "Lucia",
        phone: "4166166498",
        donationRecieved: "Yes"
      });
      break;
    case "Prizes":
      obj.push({
        name: "Daniel Lucia",
        description: "Lucia",
        obtainedBy: "Winning",
        donatedBy: "14dvl@queensu.ca"
      });
      break;
    case "Schedule":
      break;
    case "Users":
      obj.push({
        name: "Daniel Lucia",
        email: "14dv;@queensu.ca",
        phone: "4166166498",
        position: "Computer Science"
      });
      break;
    default:
      break;
  }
}

export default TableContainer;
