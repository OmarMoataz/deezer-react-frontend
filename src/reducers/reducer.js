const defaultState = {
  genres: [
    {
      id: 1,
      name: "Pop",
    },
    {
      id: 2,
      name: "Classic"
    }
  ],
  artists: [],
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default reducer;
