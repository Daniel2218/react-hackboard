import { connect } from "react-redux";
import { pageChange } from "../actions";
import App from "../components/App.js";

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch){
  return {
    onPageChange: page => {
      dispatch(pageChange(page));
    }
  }
}

export default AppContainer;
