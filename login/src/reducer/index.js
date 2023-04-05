import { combineReducers } from "redux";
import { userReducer } from "../reducer/userReducer";
import { countryReducer } from "../reducer/countryReducer";

const reducers = combineReducers({
   countryReducer,
   userReducer
});
export default reducers;