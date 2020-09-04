import {
  GET_GENRES_SUCCESS,
  GET_GENRES_REQUEST,
  GET_GENRES_FAILURE,
} from "../actions/genres";

const defaultState = {
  loading: false,
  error: "",
  genres: { data: [] },
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case GET_GENRES_REQUEST:
      return { ...state, loading: true };
    case GET_GENRES_SUCCESS:
      return { ...state, loading: false, genres: action.payload };
    case GET_GENRES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default reducer;
