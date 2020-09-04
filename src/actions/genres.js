export const GET_GENRES_REQUEST = "GET_GENRES_REQUEST";
export const GET_GENRES_SUCCESS = "GET_GENRES_SUCCESS";
export const GET_GENRES_FAILURE = "GET_GENRES_FAILURE";

export function getGenresRequest() {
  return {
    type: GET_GENRES_REQUEST
  };
}

export function getGenresSuccess(genres) {
  return {
    type: GET_GENRES_SUCCESS,
    payload: genres
  }
}

export function getGenresFailure(error) {
  return {
    type: GET_GENRES_FAILURE,
    payload: error
  }
}
