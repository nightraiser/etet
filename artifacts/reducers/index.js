import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import homeReducer from "../container/HomeContainer/reducer";
import searchReducer from "../container/SearchPageContainer/reducer";
import trusteesListReducer from "../container/TrusteesListPageContainer/reducer";
export default combineReducers({
    form: formReducer,
    homeReducer,
    searchReducer,
    trusteesListReducer,
});
//# sourceMappingURL=index.js.map