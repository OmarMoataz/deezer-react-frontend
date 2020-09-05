import axios from "axios";

import {
  getArtistsRequest,
  getArtistsSuccess,
  getArtistsFailure,
  clearArtists
} from "../actions/artistActions";

export function getArtistsDispatcher(dispatch, genreId) {
  return function () {
    dispatch(getArtistsRequest());
    axios
      .get(`${process.env.REACT_APP_GENRES_API}/${genreId}/artists`)
      .then((response) => {
        dispatch(getArtistsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getArtistsFailure(error.message));
      });
  };
}

export function clearArtistsDispatcher(dispatch) {
  return function() {
    dispatch(clearArtists());
  }
}
