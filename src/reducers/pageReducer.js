const initialState = {
  page: "Applications",
  show: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_PAGE":
      return {
        page: action.page,
        show: state.show
      };
    case "TOGGLE_MODAL":
      return {
        page: state.page,
        show: !state.show
      };
    default:
      return state;
  }
}
