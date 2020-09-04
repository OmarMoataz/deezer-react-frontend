import axios from "axios";

import {
  getGenresRequest,
  getGenresSuccess,
  getGenresFailure,
} from "../actions/genres";

export function getGenresDispatcher(dispatch) {
  return function () {
    dispatch(getGenresRequest());
    axios
      .get("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre")
      .then((response) => {
        dispatch(getGenresSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getGenresFailure(error.message));
      });
  };
}
