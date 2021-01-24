import { combineReducers } from "redux";
import bitcoinReducer from "./bitcoinReducer";

export const rootReducer = combineReducers({
  bitcoin: bitcoinReducer,
});
