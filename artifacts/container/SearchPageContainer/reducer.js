import { actionTypes } from "./actions";
const initialState = {
    list: [],
    isListLoading: true,
    searchKey: "",
};
export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.LIST_IS_LOADING:
            return Object.assign({}, state, { isListLoading: action.isListLoading });
        case actionTypes.FETCH_LIST_SUCCESS:
            return Object.assign({}, state, { list: action.list, isListLoading: false });
        case actionTypes.UPDATE_SEARCH_KEY:
            return Object.assign({}, state, { searchKey: action.payload });
        default:
            return Object.assign({}, state);
    }
}
//# sourceMappingURL=reducer.js.map