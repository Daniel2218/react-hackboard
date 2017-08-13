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
      dispatch(deleteRow(table, id));
    },
    onClearEmptyInputs: () => {
      dispatch(validRow({}));
    },
    onFetchRows: (table) => {
      dispatch(fetchRows(table));
    }
  }
}

export default TableContainer;
