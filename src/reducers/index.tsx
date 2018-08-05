import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import homeReducer from "../container/HomeContainer/reducer";
import searchReducer from "../container/SearchPageContainer/reducer";
export default combineReducers({
	form: formReducer,
	homeReducer,
	searchReducer,
});
