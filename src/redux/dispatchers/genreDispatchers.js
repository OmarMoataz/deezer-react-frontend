import axios from "axios";

import {
  getGenresRequest,
  getGenresSuccess,
  getGenresFailure,
} from "../actions/genreActions";

export function getGenresDispatcher(dispatch) {
  return function () {
    dispatch(getGenresRequest());
    axios
      .get(process.env.REACT_APP_GENRES_API)
      .then((response) => {
        dispatch(getGenresSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getGenresFailure(error.message));
      });
  };
}
