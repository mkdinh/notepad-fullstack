import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import noteReducer from "./noteReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  notes: noteReducer,
});

export default rootReducer;
