export const pageChange = (page) => {
  return {
    type: "CHANGE_PAGE",
    page: page
  }
}

export const toggleModal = () => {
  return {
    type: "TOGGLE_MODAL"
  }
}
