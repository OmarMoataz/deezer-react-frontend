import {
  GET_ARTISTS_SUCCESS,
  GET_ARTISTS_REQUEST,
  GET_ARTISTS_FAILURE,
  CLEAR_ARTISTS
} from "../actions/artistActions";

const defaultState = {
  loading: false,
  error: "",
  data: [],
};

function artistReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_ARTISTS_REQUEST:
      return { ...state, loading: true };
    case GET_ARTISTS_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    case GET_ARTISTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case CLEAR_ARTISTS:
      return { ...state, data: [] }
    default:
      return state;
  }
}

export default artistReducer;
