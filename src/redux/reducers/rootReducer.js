import { combineReducers } from "redux";

import artistReducer from "./artistReducer";
import genreReducer from "./genreReducer";

const rootReducer = combineReducers({
  genres: genreReducer,
  artists: artistReducer,
});

export default rootReducer;
