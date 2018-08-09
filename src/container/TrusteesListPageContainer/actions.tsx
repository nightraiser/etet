export const actionTypes = {
	LIST_IS_LOADING: "LIST_IS_LOADING",
	FETCH_LIST_SUCCESS: "FETCH_LIST_SUCCESS",
	FETCH_LIST_ERROR: "FETCH_LIST_ERROR",
	UPDATE_SEARCH_KEY: "UPDATE_SEARCH_KEY",
};

export function listIsLoading(bool: boolean) {
	return {
		type: actionTypes.LIST_IS_LOADING,
		isListLoading: bool,
	};
}
export function fetchListSuccess(list: any) {
	return {
		type: actionTypes.FETCH_LIST_SUCCESS,
		list,
		isListLoading: false,
	};
}
export function fetchListError(error: string) {
	return{
		type: actionTypes.FETCH_LIST_ERROR,
		payload: error,
	};
}
export function updateSearchKey(searchText) {
	return dispatch => {
		dispatch(fetchList(searchText));
	};
}
export function fetchList(searchKey:string) {
	return dispatch => {
		dispatch(listIsLoading(true));
		fetch("http://ec2-34-209-104-196.us-west-2.compute.amazonaws.com:9090/api/account/GetTrustees/1?trusteeid=ALL" + searchKey)
			.then((response) => response.json())
			.then((responseJson) => {
				dispatch(fetchListSuccess(responseJson));
			})
		.catch(() => {
			dispatch(fetchListError("Error, Please try again"));
		});
	};
}
