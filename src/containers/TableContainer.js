import { connect } from "react-redux";
import { toggleModal, addRowIfValid, validRow, fetchRows, editRowIfValid } from "../actions";
import Table from "../components/Table.js";

const TableContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch){
  return {
    onToggleModal: () => {
      dispatch(toggleModal());
    },
    onAddRow: (table, row) => {
      console.log("WRONG!");
      dispatch(addRowIfValid(table, row));
    },
    onEditRow: (table, row) => {
      console.log("go to TableContainer");
      dispatch(editRowIfValid(table, row))
    },
    onFetchRows: (table) => {
      dispatch(fetchRows(table));
    }
  }
}

export default TableContainer;
