export const GET_ARTISTS_REQUEST = "GET_ARTISTS_REQUEST";
export const GET_ARTISTS_SUCCESS = "GET_ARTISTS_SUCCESS";
export const GET_ARTISTS_FAILURE = "GET_ARTISTS_FAILURE";

export function getArtistsRequest() {
  return {
    type: GET_ARTISTS_REQUEST
  };
}

export function getArtistsSuccess(artists) {
  return {
    type: GET_ARTISTS_SUCCESS,
    payload: artists
  }
}

export function getArtistsFailure(error) {
  return {
    type: GET_ARTISTS_FAILURE,
    payload: error
  }
}
