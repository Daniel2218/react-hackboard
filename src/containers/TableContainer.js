import { connect } from "react-redux";
import { toggleModal, addRowIfValid, validRow, fetchRows, editRowIfValid, deleteRow } from "../actions";
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
      dispatch(addRowIfValid(table, row));
    },
    onEditRow: (table, row) => {
      dispatch(editRowIfValid(table, row))
    },
    onDeleteRow: (table, id) => {
      console.log("IN table container");
      dispatch(deleteRow(table, id));
    },
    onFetchRows: (table) => {
      dispatch(fetchRows(table));
    }
  }
}

export default TableContainer;
