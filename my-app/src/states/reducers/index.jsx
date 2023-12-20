import { combineReducers } from "redux";
import accountReducer from './acountReducer'
const reducers = combineReducers({
  acount: accountReducer,
});

export default reducers;
