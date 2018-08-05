import { actionTypes } from "./actions";

const initialState = {
	list: [],
	isListLoading: true,
	searchKey: "",
};

export default function(state = initialState, action) {
	switch (action.type) {
		case actionTypes.LIST_IS_LOADING:
			return{
				...state,
				isLoading: action.isLoading,
			};
		case actionTypes.FETCH_LIST_SUCCESS:
			return{
				...state,
				list: action.list,
				isListLoading: false,
			};
		case actionTypes.UPDATE_SEARCH_KEY:
			return{
				...state,
				searchKey: action.payload,
			};
		default:
		return{
			...state,
		};
	}
}
