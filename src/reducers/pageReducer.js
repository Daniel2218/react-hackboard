const initialState = {
  page: "Applications"
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_PAGE":
      return { page: action.page };
    default:
      return state;
  }
}
