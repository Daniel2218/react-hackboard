import { connect } from "react-redux";
import { toggleModal } from "../actions";
import Table from "../components/Table.js";

const TableContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);

function mapStateToProps(state) {
  return state.pageReducer;
}

function mapDispatchToProps(dispatch){
  return {
    toggleModal: show => {
      dispatch(toggleModal(show));
    }
  }
}

export default TableContainer;
