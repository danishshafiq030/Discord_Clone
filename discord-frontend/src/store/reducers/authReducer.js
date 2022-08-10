const initialState = {
  userDetails: null,
};

const reducer = (state = initialState, action) => {
  switch (state.type) {
    case "DUMMY_TYPE":
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
