import apiConfigurations from "../../constants/apiConfigurations";
export const actionTypes = {
    LIST_IS_LOADING: "LIST_IS_LOADING",
    FETCH_LIST_SUCCESS: "FETCH_LIST_SUCCESS",
    FETCH_LIST_ERROR: "FETCH_LIST_ERROR",
    UPDATE_SEARCH_KEY: "UPDATE_SEARCH_KEY",
};
export function listIsLoading(bool) {
    return {
        type: actionTypes.LIST_IS_LOADING,
        isListLoading: bool,
    };
}
export function fetchListSuccess(list) {
    return {
        type: actionTypes.FETCH_LIST_SUCCESS,
        list,
        isListLoading: false,
    };
}
export function fetchListError(error) {
    return {
        type: actionTypes.FETCH_LIST_ERROR,
        payload: error,
    };
}
export function updateSearchKey(searchText) {
    return dispatch => {
        dispatch(fetchList(searchText));
    };
}
export function fetchList(searchKey) {
    return dispatch => {
        dispatch(listIsLoading(true));
        fetch(`${apiConfigurations.baseUrl}/${apiConfigurations.apiPath}/account/GetTrustees/1?trusteeid=ALL&search=${searchKey}`)
            .then((response) => response.json())
            .then((responseJson) => {
            dispatch(fetchListSuccess(responseJson));
        })
            .catch(() => {
            dispatch(fetchListError("Error, Please try again"));
        });
    };
}
//# sourceMappingURL=actions.js.map