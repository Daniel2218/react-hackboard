import { connect } from "react-redux";
import { pageChange } from "../actions";
import App from "../components/App.js";

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

function mapStateToProps(state) {
  return {page: state.pageReducer.page};
}

function mapDispatchToProps(dispatch){
  return {
    onPageChange: page => {
      dispatch(pageChange(page));
    }
  }
}

export default AppContainer;
