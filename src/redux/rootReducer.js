import { combineReducers } from "redux";

import artistReducer from "./artist/reducer";

const rootReducer = combineReducers({
  artistReducer
});

export default rootReducer;